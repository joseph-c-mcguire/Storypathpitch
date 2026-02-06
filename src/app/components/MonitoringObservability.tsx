import { Activity, AlertTriangle, CheckCircle, Clock, DollarSign, Gauge, TrendingUp, Server, Code2, X } from 'lucide-react';
import { useState } from 'react';

// Code snippets from actual backend
const CODE_SNIPPETS = {
  'request-logging': {
    title: 'Request Logging Middleware',
    file: 'backend/app/main.py',
    lines: '88-120',
    code: `@app.middleware("http")
async def log_requests(request: Request, call_next):
    """Log all HTTP requests and responses."""
    request_id = str(uuid.uuid4())
    request.state.request_id = request_id
    
    start_time = time.time()
    
    try:
        response = await call_next(request)
        process_time = time.time() - start_time
        
        logger.info(
            f"[{request_id}] {request.method} {request.url.path} "
            f"- Status: {response.status_code} - Time: {process_time:.3f}s"
        )
        
        response.headers["X-Process-Time"] = str(process_time)
        response.headers["X-Request-ID"] = request_id
        
        return response
    except Exception as e:
        logger.error(f"[{request_id}] Request failed: {e}")
        raise`,
    highlights: [4, 5, 7, 10, 12, 13, 14, 15, 17, 18]
  },
  'health-basic': {
    title: 'Basic Health Check Endpoint',
    file: 'backend/app/main.py',
    lines: '151-167',
    code: `@app.get("/health")
async def health():
    """Health check endpoint."""
    return {
        "status": "healthy",
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

@app.get("/api/v1/health")
async def api_health():
    """API health endpoint."""
    return {
        "success": True,
        "data": {
            "status": "healthy",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "version": "0.1.0"
        }
    }`,
    highlights: [1, 2, 3, 4, 5, 6, 9, 10, 11]
  },
  'health-admin': {
    title: 'Admin Health Check with Database Stats',
    file: 'backend/app/api/admin.py',
    lines: '190-228',
    code: `@router.get("/health")
async def admin_health_check(
    authorization: Optional[str] = Header(None, alias="Authorization"),
    db: Client = Depends(get_db)
):
    """Health check for admin panel. Admin only."""
    
    token_data = require_admin(authorization)
    
    try:
        # Get stats from database
        books_response = db.table("books").select("count", count="exact").execute()
        users_response = db.table("users").select("count", count="exact").execute()
        
        pending_books = db.table("books").select("count", count="exact").eq(
            "status", "pending_embedding"
        ).execute()
        
        return {
            "success": True,
            "data": {
                "status": "healthy",
                "timestamp": datetime.now(timezone.utc).isoformat(),
                "database": "connected",
                "stats": {
                    "total_books": books_response.count or 0,
                    "total_users": users_response.count or 0,
                    "pending_embeddings": pending_books.count or 0,
                }
            }
        }
        
    except Exception as e:
        return {
            "success": False,
            "data": {
                "status": "unhealthy",
                "error": str(e)
            }
        }`,
    highlights: [11, 12, 13, 15, 16, 17, 19, 20, 21, 22, 23, 24]
  },
  'service-logging': {
    title: 'Service-Level Logging Examples',
    file: 'backend/app/api/recommendations.py',
    lines: '25-27, 623-640',
    code: `# Logger initialization
logger = logging.getLogger(__name__)

# Example usage throughout services:

@router.post("/chat", response_model=RecommendationResponse)
async def chat_recommendations(
    request: ChatRecommendationRequest,
    db: Client = Depends(get_db)
):
    """Get recommendations through natural language chat."""
    logger.info(f"[CHAT] Request received - Age: {request.age}, Message: {request.message}")
    
    # ... processing ...
    
    try:
        # Call services
        decision = await _agent_service.decide(...)
        books, error = await _vector_service.search_books(...)
        
        logger.info(
            "[CHAT] Returning response - Type: %s, Books count: %s",
            response.type,
            len(response.books or []),
        )
        return response
        
    except Exception as exc:
        logger.error("[CHAT] Failed to process request: %s", exc, exc_info=True)
        raise`,
    highlights: [2, 12, 21, 22, 23, 24, 29]
  }
};

interface CodeViewerModalProps {
  snippetKey: string | null;
  onClose: () => void;
}

function CodeViewerModal({ snippetKey, onClose }: CodeViewerModalProps) {
  if (!snippetKey) return null;
  
  const snippet = CODE_SNIPPETS[snippetKey as keyof typeof CODE_SNIPPETS];
  if (!snippet) return null;

  const lines = snippet.code.split('\n');

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6" onClick={onClose}>
      <div className="bg-gray-900 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col border-2 border-orange-500" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
          <div className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-orange-500" />
            <div>
              <h3 className="text-lg font-bold text-white">{snippet.title}</h3>
              <p className="text-xs text-gray-400">{snippet.file} (lines {snippet.lines})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-auto p-6 bg-gray-900">
          <pre className="text-sm font-mono">
            {lines.map((line, index) => {
              const lineNumber = index + 1;
              const isHighlighted = snippet.highlights.includes(lineNumber);
              
              return (
                <div
                  key={index}
                  className={`flex ${isHighlighted ? 'bg-orange-500/20 border-l-4 border-orange-500' : ''}`}
                >
                  <span className={`select-none w-12 text-right pr-4 flex-shrink-0 ${isHighlighted ? 'text-orange-400 font-bold' : 'text-gray-600'}`}>
                    {lineNumber}
                  </span>
                  <code className="text-gray-300 flex-1">{line}</code>
                </div>
              );
            })}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500/20 border-l-2 border-orange-500"></div>
                <span>Highlighted lines show key implementation details</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors text-sm font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MonitoringObservability() {
  const [activeTab, setActiveTab] = useState<'stack' | 'scenarios'>('stack');
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  const openCodeViewer = (key: string) => {
    setSelectedCode(key);
  };

  const closeCodeViewer = () => {
    setSelectedCode(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-orange-600 font-semibold uppercase text-sm tracking-wider">
          Monitoring & Observability
        </span>

        {/* Header */}
        <div className="mt-6 mb-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Monitoring & Observability Roadmap
          </h2>
          <p className="text-xl text-gray-600">
            Current foundation + planned enhancements for production-grade system health tracking
          </p>
        </div>

        {/* The Challenge Section */}
        <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-xl shadow-lg p-8 text-white mb-6">
          <h3 className="text-3xl font-bold mb-6">The Challenge: Invisible Systems Fail Silently</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-bold text-xl mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Without Monitoring
              </div>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-red-200 font-bold flex-shrink-0">❌</span>
                  <span>Recommendations return stale results—nobody notices until users complain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-200 font-bold flex-shrink-0">❌</span>
                  <span>LLM API dies, users get generic error messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-200 font-bold flex-shrink-0">❌</span>
                  <span>Database fills up, system crashes unexpectedly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-200 font-bold flex-shrink-0">❌</span>
                  <span>Librarian doesn't know if kiosk is down</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-xl mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                With Full Monitoring (Planned)
              </div>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-green-200 font-bold flex-shrink-0">🔄</span>
                  <span>Alert fires when vector DB latency exceeds 500ms threshold</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-200 font-bold flex-shrink-0">🔄</span>
                  <span>Graceful fallback to keyword search, alert sent to team Slack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-200 font-bold flex-shrink-0">🔄</span>
                  <span>Disk usage warning at 70%, auto-cleanup triggered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-200 font-bold flex-shrink-0">⚠️</span>
                  <span>Dashboard shows all kiosk statuses in real-time (basic version live)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white border-opacity-30">
            <p className="text-xl text-center opacity-95">
              <strong>For education systems, invisible failures = students without access</strong>
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'stack'
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-orange-50'
            }`}
          >
            Monitoring Stack
          </button>
          <button
            onClick={() => setActiveTab('scenarios')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'scenarios'
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-orange-50'
            }`}
          >
            Roadmap & Scenarios
          </button>
        </div>

        {/* Monitoring Stack Tab */}
        {activeTab === 'stack' && (
          <div className="space-y-6">
            {/* 5 Layers of Monitoring */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Server className="w-8 h-8 text-indigo-600" />
                5-Layer Monitoring Stack (Current + Planned)
              </h3>
              
              <div className="space-y-4">
                {/* Layer 1: Application Logging */}
                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-xl text-blue-900">Layer 1: Application Logging</div>
                    <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">⚠️ PARTIAL</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-semibold text-blue-800 mb-2">✅ Currently Logging:</div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Every API request (method, endpoint, status, latency)</li>
                        <li>• Service operations (agent, vector search, recommendations)</li>
                        <li>• All errors with stack traces</li>
                        <li>• Request IDs for tracing</li>
                      </ul>
                      <div className="mt-3 text-sm font-semibold text-amber-700 mb-1">❌ Not Yet Implemented:</div>
                      <ul className="space-y-1 text-sm text-amber-700">
                        <li>• JSON structured format (currently string logs)</li>
                        <li>• LLM token/cost tracking</li>
                        <li>• Database query metrics</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-800 mb-2">Current Implementation:</div>
                      <div className="bg-slate-900 rounded p-3 font-mono text-xs text-green-400">
                        <div className="text-gray-400"># String format logging</div>
                        <div className="mt-1">{`logger.info(`}</div>
                        <div>{`  f"[{request_id}] {method} {path}"`}</div>
                        <div>{`  f"- Status: {status}"`}</div>
                        <div>{`  f"- Time: {latency:.3f}s"`}</div>
                        <div>{`)`}</div>
                      </div>
                      <div className="mt-2 flex gap-2">
                        <button 
                          onClick={() => openCodeViewer('request-logging')}
                          className="text-xs text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1"
                        >
                          <Code2 className="w-3 h-3" />
                          Request Middleware (main.py:88-120)
                        </button>
                        <button 
                          onClick={() => openCodeViewer('service-logging')}
                          className="text-xs text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1"
                        >
                          <Code2 className="w-3 h-3" />
                          Service Logging
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 2: Error Tracking */}
                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-xl text-red-900">Layer 2: Error Tracking & Alerting (Sentry)</div>
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">🔄 NOT STARTED</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-semibold text-red-800 mb-2">Planned: What Sentry Will Catch:</div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-red-600 mt-0.5" />
                          <span>All exceptions with stack traces</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-red-600 mt-0.5" />
                          <span>Database connection failures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-red-600 mt-0.5" />
                          <span>LLM API timeouts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-red-600 mt-0.5" />
                          <span>Rate limiting exceeded</span>
                        </li>
                      </ul>
                      <div className="mt-3 text-xs text-gray-600 bg-white rounded p-2 border border-red-300">
                        <strong>Current Reality:</strong> No Sentry dependency installed. Errors logged to stdout only.
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-red-800 mb-2">Example Alert (Planned):</div>
                      <div className="bg-white rounded p-3 border-2 border-red-400 text-sm">
                        <div className="font-bold text-red-700 mb-1">🚨 ERROR SPIKE</div>
                        <div className="text-gray-700">Recommendation engine error rate: 15%</div>
                        <div className="text-gray-600 text-xs mt-1">↳ Likely cause: DeepSeek API responding slowly</div>
                        <div className="text-gray-600 text-xs">↳ Last 30 seconds: 45 errors</div>
                        <div className="text-blue-600 text-xs mt-2">Action: Triggered fallback to keyword search</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 3: Performance Metrics */}
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-xl text-green-900">Layer 3: Performance Metrics (Prometheus + Grafana)</div>
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">🔄 NOT STARTED</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="text-xs text-gray-600 mb-1">Request Latency (p95)</div>
                      <div className="text-2xl font-bold text-green-700">&lt;2s</div>
                      <div className="text-xs text-gray-500 mt-1">Target: Alert if &gt;3s</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="text-xs text-gray-600 mb-1">Error Rate</div>
                      <div className="text-2xl font-bold text-green-700">&lt;0.5%</div>
                      <div className="text-xs text-gray-500 mt-1">Target: Alert if &gt;1%</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="text-xs text-gray-600 mb-1">Vector Search</div>
                      <div className="text-2xl font-bold text-green-700">&lt;200ms</div>
                      <div className="text-xs text-gray-500 mt-1">Target: Alert if &gt;500ms</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="text-xs text-gray-600 mb-1">System Uptime</div>
                      <div className="text-2xl font-bold text-green-700">&gt;99.5%</div>
                      <div className="text-xs text-gray-500 mt-1">Target: Alert if &lt;99%</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-gray-600 bg-white rounded p-2 border border-green-300">
                    <strong>Current Reality:</strong> Latency measured in middleware but not exported to metrics. No Prometheus/Grafana installed.
                  </div>
                </div>

                {/* Layer 4: LLM Tracing */}
                <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-xl text-purple-900">Layer 4: LLM Call Tracing (Cost & Quality)</div>
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">🔄 NOT STARTED</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-semibold text-purple-800 mb-2">Why This Matters:</div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• DeepSeek + OpenAI costs can spiral ($5-15/day → $300+/month)</li>
                        <li>• Need to catch hallucinations before users see them</li>
                        <li>• Validate recommendation quality over time</li>
                        <li>• Track token usage and optimize prompts</li>
                      </ul>
                      <div className="mt-3 text-xs text-gray-600 bg-white rounded p-2 border border-purple-300">
                        <strong>Current Reality:</strong> Confidence scores tracked in code but not aggregated. No cost/token tracking implemented.
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-purple-800 mb-2">Planned Metrics:</div>
                      <div className="space-y-2">
                        <div className="bg-white rounded p-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Daily LLM Queries</span>
                            <span className="font-bold text-purple-700">Target: Track</span>
                          </div>
                        </div>
                        <div className="bg-white rounded p-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Daily Cost</span>
                            <span className="font-bold text-purple-700">Target: $2-5</span>
                          </div>
                        </div>
                        <div className="bg-white rounded p-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Avg Parse Confidence</span>
                            <span className="font-bold text-purple-700">Target: &gt;0.8</span>
                          </div>
                        </div>
                        <div className="bg-white rounded p-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Fallback Rate</span>
                            <span className="font-bold text-purple-700">Target: &lt;15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 5: Health Checks */}
                <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-xl text-cyan-900">Layer 5: Health Check Endpoints</div>
                    <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">⚠️ PARTIAL</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-semibold text-cyan-800 mb-2">✅ Currently Implemented:</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-gray-700">Basic health endpoints (/health, /api/v1/health)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-gray-700">Database connectivity check (admin endpoint)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-gray-700">Database stats (book/user counts)</span>
                        </div>
                      </div>
                      <div className="mt-3 text-sm font-semibold text-amber-700 mb-1">❌ Not Yet Validated:</div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-amber-700">
                          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                          <span>OpenAI embeddings API</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-amber-700">
                          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                          <span>DeepSeek LLM API</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-amber-700">
                          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                          <span>pgvector extension check</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-cyan-800 mb-2">Current Usage:</div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Container health probes</li>
                        <li>• Manual status verification</li>
                        <li>• Basic uptime monitoring</li>
                      </ul>
                      <div className="mt-3 text-sm font-semibold text-cyan-800 mb-2">View Code:</div>
                      <div className="flex flex-col gap-2">
                        <button 
                          onClick={() => openCodeViewer('health-basic')}
                          className="text-xs text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1"
                        >
                          <Code2 className="w-3 h-3" />
                          Basic Health Check (main.py:151-167)
                        </button>
                        <button 
                          onClick={() => openCodeViewer('health-admin')}
                          className="text-xs text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1"
                        >
                          <Code2 className="w-3 h-3" />
                          Admin Health Check (admin.py:190-228)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Reality Summary */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-lg p-8 border-2 border-gray-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Activity className="w-8 h-8 text-gray-700" />
                Implementation Status Summary
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                  <div className="text-sm font-bold text-green-900 mb-2">✅ What's Working</div>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• Request tracking with IDs</li>
                    <li>• Response time logging</li>
                    <li>• Error stack traces</li>
                    <li>• Basic health endpoints</li>
                    <li>• Database stats (admin)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-amber-300">
                  <div className="text-sm font-bold text-amber-900 mb-2">⚠️ Partially Complete</div>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• Logging (string format only)</li>
                    <li>• Health checks (DB only)</li>
                    <li>• Request latency (measured but not exported)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                  <div className="text-sm font-bold text-red-900 mb-2">❌ Not Implemented</div>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• Sentry error tracking</li>
                    <li>• Prometheus metrics</li>
                    <li>• Grafana dashboards</li>
                    <li>• LLM cost tracking</li>
                    <li>• Slack alerting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Click instruction */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                <Code2 className="w-4 h-4 text-blue-600" />
                <span>Click blue code references to view actual implementation</span>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap & Scenarios Tab */}
        {activeTab === 'scenarios' && (
          <div className="space-y-6">
            {/* Implementation Timeline */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8" />
                Realistic Implementation Timeline (10-14 Weeks)
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2 text-lg">Weeks 1-2</div>
                  <div className="text-sm opacity-90">Complete Foundation</div>
                  <ul className="mt-3 space-y-1 text-xs">
                    <li>○ Convert to JSON logging</li>
                    <li>○ Add token counting</li>
                    <li>○ Cost calculation utils</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2 text-lg">Weeks 3-4</div>
                  <div className="text-sm opacity-90">Error Tracking</div>
                  <ul className="mt-3 space-y-1 text-xs">
                    <li>○ Sentry setup</li>
                    <li>○ Alert rules config</li>
                    <li>○ Slack integration</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2 text-lg">Weeks 5-8</div>
                  <div className="text-sm opacity-90">Metrics & Dashboards</div>
                  <ul className="mt-3 space-y-1 text-xs">
                    <li>○ Prometheus setup</li>
                    <li>○ Metric exporters</li>
                    <li>○ Grafana dashboards</li>
                    <li>○ Alert thresholds</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2 text-lg">Weeks 9-14</div>
                  <div className="text-sm opacity-90">LLM Observability</div>
                  <ul className="mt-3 space-y-1 text-xs">
                    <li>○ Cost tracking</li>
                    <li>○ Quality metrics</li>
                    <li>○ Runbooks</li>
                    <li>○ Load testing</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white border-opacity-30 text-sm opacity-90">
                <strong>Note:</strong> Current 35% completion provides basic visibility. Full monitoring suite will take 10-14 weeks of focused effort.
              </div>
            </div>

            {/* Scenario 1: LLM API Goes Down */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                Scenario 1: LLM API Goes Down (FUTURE STATE)
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
                  <div className="font-bold text-xl text-red-900 mb-4">❌ Current Reality</div>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">1.</span>
                      <span>Users see error messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">2.</span>
                      <span>Error logged to stdout, but no alert</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">3.</span>
                      <span>Team doesn't know until someone checks logs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">4.</span>
                      <span>Students give up and leave</span>
                    </li>
                  </ul>
                  <div className="mt-3 text-xs text-gray-600 bg-white rounded p-2 border border-red-300">
                    <strong>Why:</strong> No Sentry alerting, no Slack integration, no automated fallback
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
                  <div className="font-bold text-xl text-green-900 mb-4">✅ With Full Monitoring (Planned)</div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="font-bold text-green-800">08:15 AM - Alert Fires</div>
                      <div className="text-gray-600 text-xs mt-1">Sentry: "DeepSeek API timeout rate &gt; 50%"</div>
                      <div className="text-gray-600 text-xs">→ Slack #incidents notification sent</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="font-bold text-green-800">08:15 AM - Auto-Fallback</div>
                      <div className="text-gray-600 text-xs mt-1">System detects timeout, switches to simpler search</div>
                      <div className="text-gray-600 text-xs">→ Users still get results</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="font-bold text-green-800">08:20 AM - Dashboard Updated</div>
                      <div className="text-gray-600 text-xs mt-1">Librarian sees: "⚠️ Simplified search mode"</div>
                      <div className="text-gray-600 text-xs">→ No user-facing errors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario 2: Vector DB Slowdown */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-orange-600" />
                Scenario 2: Vector Database Getting Slow (FUTURE STATE)
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-lg text-orange-900 mb-4">Current: Manual Detection Only</div>
                  <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
                    <div className="text-sm text-orange-800">
                      <div className="mb-2">Currently, we would:</div>
                      <ul className="space-y-1 text-xs">
                        <li>• Notice users complaining about slowness</li>
                        <li>• Manually check logs for latency spikes</li>
                        <li>• No automatic alerts or thresholds</li>
                        <li>• No baseline metrics to compare against</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg text-green-900 mb-4">With Prometheus (Planned)</div>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded p-4 border border-green-300 text-sm">
                      <div className="font-semibold text-green-800 mb-2">Step 1: Alert Fires</div>
                      <div className="text-gray-600 text-xs">Prometheus: "pgvector_query_duration &gt; 500ms"</div>
                      <div className="text-gray-600 text-xs">Normal: 156ms → Current: 823ms</div>
                    </div>
                    <div className="bg-green-50 rounded p-4 border border-green-300 text-sm">
                      <div className="font-semibold text-green-800 mb-2">Step 2: Auto-Response</div>
                      <div className="text-gray-600 text-xs">Extend cache TTL, alert team via Slack</div>
                    </div>
                    <div className="bg-green-50 rounded p-4 border border-green-300 text-sm">
                      <div className="font-semibold text-green-800 mb-2">Step 3: Graceful Degradation</div>
                      <div className="text-gray-600 text-xs">Cached results served while DB recovers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario 3: Recommendation Quality Drops */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Activity className="w-8 h-8 text-purple-600" />
                Scenario 3: Detect Recommendation Quality Degradation (FUTURE STATE)
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-lg text-purple-900 mb-4">Planned Quality Metrics</div>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3 border border-purple-300">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Recommendations Served</span>
                        <span className="font-bold text-purple-700">Target: Track daily</span>
                      </div>
                      <div className="h-2 bg-purple-100 rounded-full">
                        <div className="h-2 bg-purple-500 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-300">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Clicked "Details"</span>
                        <span className="font-bold text-purple-700">Target: &gt;75%</span>
                      </div>
                      <div className="h-2 bg-purple-100 rounded-full">
                        <div className="h-2 bg-purple-500 rounded-full" style={{ width: '79%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-300">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Checked Out Book</span>
                        <span className="font-bold text-green-700">Target: 20-30%</span>
                      </div>
                      <div className="h-2 bg-green-100 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: '24%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-300">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Negative Feedback</span>
                        <span className="font-bold text-orange-700">Target: &lt;10%</span>
                      </div>
                      <div className="h-2 bg-orange-100 rounded-full">
                        <div className="h-2 bg-orange-500 rounded-full" style={{ width: '7.7%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg text-purple-900 mb-4">Alert Logic (Planned)</div>
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
                    <div className="font-mono text-sm">
                      <div className="text-purple-800 mb-2">IF checkout_rate &lt; 15% for 24 hours</div>
                      <div className="text-purple-800 mb-2">THEN alert("Quality degrading")</div>
                      <div className="text-gray-600 text-xs mt-4">↳ Investigate checklist:</div>
                      <ul className="mt-2 space-y-1 text-xs text-gray-600">
                        <li>• Did we deploy a new prompt?</li>
                        <li>• Did embedding model change?</li>
                        <li>• Did book metadata get corrupted?</li>
                        <li>• Are we showing wrong age ranges?</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-amber-50 rounded p-3 border border-amber-300">
                    <div className="text-sm text-amber-800 font-semibold">⚠️ Current Status</div>
                    <div className="text-xs text-gray-600 mt-1">No quality metrics tracked yet. Would need to implement analytics first.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Needed */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8" />
                Path to Full Monitoring Coverage
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="font-bold text-xl mb-4">Phase 1: Foundation (Weeks 1-4)</div>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>✓ Convert logs to JSON format</li>
                    <li>✓ Add token/cost tracking to LLM calls</li>
                    <li>✓ Install & configure Sentry</li>
                    <li>✓ Set up basic Slack alerts</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-xl mb-4">Phase 2: Metrics (Weeks 5-8)</div>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>✓ Deploy Prometheus</li>
                    <li>✓ Export metrics from services</li>
                    <li>✓ Build Grafana dashboards</li>
                    <li>✓ Configure alert thresholds</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-xl mb-4">Phase 3: Production (Weeks 9-14)</div>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>✓ LLM quality metrics</li>
                    <li>✓ User behavior analytics</li>
                    <li>✓ Create runbooks</li>
                    <li>✓ Load test & tune</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Code Viewer Modal */}
      <CodeViewerModal snippetKey={selectedCode} onClose={closeCodeViewer} />
    </div>
  );
}
