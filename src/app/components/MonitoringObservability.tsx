import { Activity, AlertTriangle, CheckCircle, Clock, DollarSign, Gauge, TrendingUp, Server } from 'lucide-react';
import { useState } from 'react';

export function MonitoringObservability() {
  const [activeTab, setActiveTab] = useState<'stack' | 'scenarios'>('stack');

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
            Real-Time System Health & Performance Tracking
          </h2>
          <p className="text-xl text-gray-600">
            Building trust through transparency—automated alerts ensure librarians always know the system is working
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
                With Monitoring
              </div>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-green-200 font-bold flex-shrink-0">✅</span>
                  <span>Alert fires when vector DB latency exceeds 500ms threshold</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-200 font-bold flex-shrink-0">✅</span>
                  <span>Graceful fallback to keyword search, alert sent to team Slack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-200 font-bold flex-shrink-0">✅</span>
                  <span>Disk usage warning at 70%, auto-cleanup triggered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-200 font-bold flex-shrink-0">✅</span>
                  <span>Dashboard shows all kiosk statuses in real-time</span>
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
            Real-World Scenarios
          </button>
        </div>

        {/* Monitoring Stack Tab */}
        {activeTab === 'stack' && (
          <div className="space-y-6">
            {/* 5 Layers of Monitoring */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Server className="w-8 h-8 text-indigo-600" />
                5-Layer Monitoring Stack
              </h3>
              
              <div className="space-y-4">
                {/* Layer 1: Application Logging */}
                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-xl text-blue-900">Layer 1: Structured JSON Logging</div>
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">✅ LIVE</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-semibold text-blue-800 mb-2">What We're Logging:</div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Every API request (method, endpoint, status, latency)</li>
                        <li>• Every LLM call (model, tokens, cost, latency)</li>
                        <li>• Every database query (type, rows, latency)</li>
                        <li>• All errors with full stack traces</li>
                        <li>• User actions (searches, checkouts)</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-800 mb-2">Implementation:</div>
                      <div className="bg-slate-900 rounded p-3 font-mono text-xs text-green-400">
                        <div className="text-gray-400"># Every log becomes queryable JSON</div>
                        <div className="mt-1">{`{"timestamp": "2026-02-06T14:30:45Z",`}</div>
                        <div>{` "method": "POST",`}</div>
                        <div>{` "path": "/recommendations/chat",`}</div>
                        <div>{` "status": 200,`}</div>
                        <div>{` "latency_ms": 3245,`}</div>
                        <div>{` "user_id": "anon-123"}`}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 2: Error Tracking */}
                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-xl text-red-900">Layer 2: Error Tracking & Alerting (Sentry)</div>
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">🔄 PLANNED</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-semibold text-red-800 mb-2">What Sentry Catches:</div>
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
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-red-800 mb-2">Example Alert:</div>
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
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">🔄 PLANNED</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="text-xs text-gray-600 mb-1">Request Latency (p95)</div>
                      <div className="text-2xl font-bold text-green-700">&lt;2s</div>
                      <div className="text-xs text-gray-500 mt-1">Alert if &gt;3s</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="text-xs text-gray-600 mb-1">Error Rate</div>
                      <div className="text-2xl font-bold text-green-700">&lt;0.5%</div>
                      <div className="text-xs text-gray-500 mt-1">Alert if &gt;1%</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="text-xs text-gray-600 mb-1">Vector Search</div>
                      <div className="text-2xl font-bold text-green-700">&lt;200ms</div>
                      <div className="text-xs text-gray-500 mt-1">Alert if &gt;500ms</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="text-xs text-gray-600 mb-1">System Uptime</div>
                      <div className="text-2xl font-bold text-green-700">&gt;99.5%</div>
                      <div className="text-xs text-gray-500 mt-1">Alert if &lt;99%</div>
                    </div>
                  </div>
                </div>

                {/* Layer 4: LLM Tracing */}
                <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-xl text-purple-900">Layer 4: LLM Call Tracing (Cost & Quality)</div>
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">🔄 PLANNED</span>
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
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-purple-800 mb-2">What We Track:</div>
                      <div className="space-y-2">
                        <div className="bg-white rounded p-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Daily LLM Queries</span>
                            <span className="font-bold text-purple-700">1,247</span>
                          </div>
                        </div>
                        <div className="bg-white rounded p-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Daily Cost</span>
                            <span className="font-bold text-purple-700">$2.34</span>
                          </div>
                        </div>
                        <div className="bg-white rounded p-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Avg Parse Confidence</span>
                            <span className="font-bold text-purple-700">0.87</span>
                          </div>
                        </div>
                        <div className="bg-white rounded p-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Fallback Rate</span>
                            <span className="font-bold text-purple-700">12%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 5: Health Checks */}
                <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-xl text-cyan-900">Layer 5: Health Check Endpoint (Multi-Layer Validation)</div>
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">✅ LIVE</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-semibold text-cyan-800 mb-2">Validates Critical Dependencies:</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-gray-700">Database connectivity</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-gray-700">pgvector extension</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-gray-700">OpenAI embeddings API</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-gray-700">DeepSeek LLM API</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-cyan-800 mb-2">Usage:</div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Kubernetes liveness probe (every 30s)</li>
                        <li>• Librarian dashboard status indicator</li>
                        <li>• Automated alerts if health returns 503</li>
                        <li>• Pre-deployment validation checks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Librarian Dashboard Preview */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Gauge className="w-8 h-8 text-indigo-600" />
                Librarian Real-Time Dashboard
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
                  <div className="font-bold text-lg text-indigo-900 mb-4">System Status</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-gray-700">API Status</span>
                      <span className="flex items-center gap-2 text-green-700 font-semibold">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        Healthy
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-gray-700">Database</span>
                      <span className="flex items-center gap-2 text-green-700 font-semibold">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        Responsive
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-gray-700">AI Services</span>
                      <span className="flex items-center gap-2 text-green-700 font-semibold">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        Connected
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700">All 5 Kiosks</span>
                      <span className="flex items-center gap-2 text-green-700 font-semibold">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        Online
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
                  <div className="font-bold text-lg text-indigo-900 mb-4">Today's Activity</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Searches performed</span>
                      <span className="text-2xl font-bold text-indigo-700">847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Recommendations served</span>
                      <span className="text-2xl font-bold text-indigo-700">312</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Books checked out</span>
                      <span className="text-2xl font-bold text-indigo-700">67</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">User feedback submitted</span>
                      <span className="text-2xl font-bold text-indigo-700">43</span>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-orange-600 font-semibold text-sm">Books flagged by users</span>
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded font-bold">2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600 bg-white rounded p-4 border border-indigo-200">
                <strong>What Librarians Can Do:</strong> Check if all kiosks are online before opening • See if system is under heavy load • Review flagged books in real-time • Understand what users are searching for
              </div>
            </div>

            {/* Implementation Timeline */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8" />
                Monitoring Implementation Timeline (5 Weeks)
              </h3>
              <div className="grid grid-cols-5 gap-4">
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2 text-lg">Week 1</div>
                  <div className="text-sm opacity-90">Foundation</div>
                  <ul className="mt-3 space-y-1 text-xs">
                    <li>✓ JSON structured logging</li>
                    <li>✓ Basic health checks</li>
                    <li>✓ Sentry integration</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2 text-lg">Weeks 2-3</div>
                  <div className="text-sm opacity-90">Metrics & Dashboards</div>
                  <ul className="mt-3 space-y-1 text-xs">
                    <li>✓ Prometheus setup</li>
                    <li>✓ Grafana dashboards</li>
                    <li>✓ Critical alerts defined</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2 text-lg">Week 4</div>
                  <div className="text-sm opacity-90">LLM Observability</div>
                  <ul className="mt-3 space-y-1 text-xs">
                    <li>✓ DeepSeek tracing</li>
                    <li>✓ Cost tracking</li>
                    <li>✓ Quality metrics</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2 text-lg">Week 5</div>
                  <div className="text-sm opacity-90">Production Hardening</div>
                  <ul className="mt-3 space-y-1 text-xs">
                    <li>✓ Alert fine-tuning</li>
                    <li>✓ Runbooks written</li>
                    <li>✓ Load testing</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2 text-lg">Ready</div>
                  <div className="text-sm opacity-90">Deployment</div>
                  <ul className="mt-3 space-y-1 text-xs">
                    <li>✓ Full visibility</li>
                    <li>✓ Automated alerts</li>
                    <li>✓ Confident rollout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Real-World Scenarios Tab */}
        {activeTab === 'scenarios' && (
          <div className="space-y-6">
            {/* Scenario 1: LLM API Goes Down */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                Scenario 1: LLM API Goes Down
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
                  <div className="font-bold text-xl text-red-900 mb-4">❌ Without Monitoring</div>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">1.</span>
                      <span>Users see error messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">2.</span>
                      <span>No one knows for 30+ minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">3.</span>
                      <span>Support tickets pile up</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">4.</span>
                      <span>Students give up and leave</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
                  <div className="font-bold text-xl text-green-900 mb-4">✅ With Monitoring</div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="font-bold text-green-800">08:15 AM - Alert Fires</div>
                      <div className="text-gray-600 text-xs mt-1">Sentry: "DeepSeek API timeout rate &gt; 50%"</div>
                      <div className="text-gray-600 text-xs">→ Slack #incidents notification sent</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="font-bold text-green-800">08:15 AM - Auto-Fallback</div>
                      <div className="text-gray-600 text-xs mt-1">System detects timeout, switches to keyword search</div>
                      <div className="text-gray-600 text-xs">→ Users still get results (slightly less personalized)</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-400">
                      <div className="font-bold text-green-800">08:20 AM - Dashboard Updated</div>
                      <div className="text-gray-600 text-xs mt-1">Librarian sees: "⚠️ Advanced search using keywords"</div>
                      <div className="text-gray-600 text-xs">→ No user-facing errors, seamless experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario 2: Vector DB Slowdown */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-orange-600" />
                Scenario 2: Vector Database Getting Slow
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-lg text-orange-900 mb-4">Symptom in Metrics</div>
                  <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
                    <div className="font-mono text-sm text-orange-800">
                      <div className="mb-2">⚠️ Prometheus Alert Fired:</div>
                      <div className="bg-white rounded p-2 text-xs">
                        <div>"pgvector_query_duration &gt; 500ms"</div>
                        <div className="text-gray-600 mt-1">Normal: 156ms</div>
                        <div className="text-red-600">Current: 823ms ↑</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-700">
                    <strong>Detected:</strong> Vector search queries taking 5x longer than normal baseline
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg text-green-900 mb-4">Automated Response</div>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded p-4 border border-green-300 text-sm">
                      <div className="font-semibold text-green-800 mb-2">Step 1: Extend Cache TTL</div>
                      <div className="text-gray-600 text-xs">Cache popular queries for 2 hours instead of 1 hour</div>
                    </div>
                    <div className="bg-green-50 rounded p-4 border border-green-300 text-sm">
                      <div className="font-semibold text-green-800 mb-2">Step 2: Alert Team</div>
                      <div className="text-gray-600 text-xs">Slack notification: "Vector DB performance degraded"</div>
                    </div>
                    <div className="bg-green-50 rounded p-4 border border-green-300 text-sm">
                      <div className="font-semibold text-green-800 mb-2">Step 3: Users Barely Notice</div>
                      <div className="text-gray-600 text-xs">Cached results served while DB recovers • Graceful degradation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario 3: Recommendation Quality Drops */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Activity className="w-8 h-8 text-purple-600" />
                Scenario 3: Detect Recommendation Quality Degradation
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-lg text-purple-900 mb-4">What We Monitor</div>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3 border border-purple-300">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Recommendations Served</span>
                        <span className="font-bold text-purple-700">1,247</span>
                      </div>
                      <div className="h-2 bg-purple-100 rounded-full">
                        <div className="h-2 bg-purple-500 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-300">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Clicked "Details"</span>
                        <span className="font-bold text-purple-700">987 (79%)</span>
                      </div>
                      <div className="h-2 bg-purple-100 rounded-full">
                        <div className="h-2 bg-purple-500 rounded-full" style={{ width: '79%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-300">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Checked Out Book</span>
                        <span className="font-bold text-green-700">234 (24%)</span>
                      </div>
                      <div className="h-2 bg-green-100 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: '24%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-300">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">Negative Feedback</span>
                        <span className="font-bold text-orange-700">18 (7.7%)</span>
                      </div>
                      <div className="h-2 bg-orange-100 rounded-full">
                        <div className="h-2 bg-orange-500 rounded-full" style={{ width: '7.7%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg text-purple-900 mb-4">Alert Threshold Logic</div>
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
                  <div className="mt-4 bg-green-50 rounded p-3 border border-green-300">
                    <div className="text-sm text-green-800 font-semibold">✓ Current Status: Healthy</div>
                    <div className="text-xs text-gray-600 mt-1">24% checkout rate (target: 20-30%)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8" />
                Success: What "Good" Monitoring Looks Like
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-xl mb-4">Before Monitoring</div>
                  <ul className="space-y-3 text-sm opacity-90">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">❌</span>
                      <span>"System went down at 2 PM, we didn't know until a parent called"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">❌</span>
                      <span>"LLM bill was $300 last month, we have no idea why"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">❌</span>
                      <span>"Recommendations seem worse lately but we don't know why"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">❌</span>
                      <span>"Is the system even running right now?"</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-xl mb-4">After Monitoring</div>
                  <ul className="space-y-3 text-sm opacity-90">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">✅</span>
                      <span>"Error rate spiked, we caught it at 2:01 PM and had fallback active by 2:02 PM"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">✅</span>
                      <span>"We see daily spend is $18, trending within budget, broken down by query type"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">✅</span>
                      <span>"Checkout rate dropped from 24% to 18%, we have access logs to diagnose"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0">✅</span>
                      <span>"Dashboard shows all 5 kiosks online, response time 1.8s, zero errors in last hour"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Slack Alert Examples */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-gray-700" />
                Sample Slack Alerts (Team Notifications)
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-400">
                  <div className="font-bold text-red-800 mb-2 text-sm">🚨 CRITICAL</div>
                  <div className="bg-white rounded p-3 text-xs">
                    <div className="font-bold text-red-700 mb-1">ERROR SPIKE</div>
                    <div className="text-gray-700">Endpoint error rate: 12.3%</div>
                    <div className="text-gray-600 mt-1">Last 5 min: 67 errors / 545 requests</div>
                    <div className="text-blue-600 mt-2">Likely: DB connection pool exhausted</div>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-400">
                  <div className="font-bold text-yellow-800 mb-2 text-sm">⚠️ WARNING</div>
                  <div className="bg-white rounded p-3 text-xs">
                    <div className="font-bold text-yellow-700 mb-1">PERFORMANCE DEGRADATION</div>
                    <div className="text-gray-700">Request latency p95: 4.2s</div>
                    <div className="text-gray-600 mt-1">Normal: 1.8s • Trending worse</div>
                    <div className="text-blue-600 mt-2">Possible: New bulk import job running</div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-400">
                  <div className="font-bold text-blue-800 mb-2 text-sm">ℹ️ DAILY DIGEST</div>
                  <div className="bg-white rounded p-3 text-xs">
                    <div className="font-bold text-blue-700 mb-1">METRICS SUMMARY</div>
                    <div className="text-gray-700">Uptime: 99.87% ✅</div>
                    <div className="text-gray-700">Recommendations: 4,521</div>
                    <div className="text-gray-700">Conversion: 22.3% ✅</div>
                    <div className="text-gray-700">LLM cost: $19.34</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
