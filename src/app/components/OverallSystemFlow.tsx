import { Database, Cpu, Users, Shield, Sparkles, ArrowRight } from 'lucide-react';

export function OverallSystemFlow() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          System Architecture
        </span>

        {/* Header */}
        <div className="mt-4 mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Overall System Flow
          </h2>
          <p className="text-base text-gray-600">
            Monolithic FastAPI backend with service layer pattern • PostgreSQL + pgvector for semantic search
          </p>
        </div>

        {/* Main Architecture Diagram */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-blue-200">
          <div className="grid grid-cols-4 gap-6 relative">
            {/* User Layer */}
            <div className="flex flex-col">
              <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-400">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Authentication</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded p-3 border border-blue-200">
                    <div className="font-semibold text-gray-800 mb-2">3 Access Modes:</div>
                    <div className="text-gray-600">• Anonymous (iPad kiosk)</div>
                    <div className="text-gray-600">• Patron (library card)</div>
                    <div className="text-gray-600">• Librarian (admin)</div>
                  </div>
                  <div className="bg-white rounded p-3 border border-blue-200">
                    <div className="font-semibold text-gray-800 mb-2">Storage:</div>
                    <div className="font-mono text-gray-600 text-xs">localStorage</div>
                    <div className="text-gray-600">• JWT tokens</div>
                    <div className="text-gray-600">• Preferences</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Layer */}
            <div className="flex flex-col">
              <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-400">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Frontend</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded p-3 border border-purple-200">
                    <div className="font-semibold text-gray-800 mb-2">React 18.3 + TypeScript 5.6</div>
                    <div className="text-gray-600">• Vite 6.4 (build tool)</div>
                    <div className="text-gray-600">• TailwindCSS (styling)</div>
                    <div className="text-gray-600">• Radix UI (a11y)</div>
                    <div className="text-gray-600">• Axios (HTTP client)</div>
                  </div>
                  <div className="bg-white rounded p-3 border border-purple-200">
                    <div className="font-semibold text-gray-800 mb-2">State:</div>
                    <div className="font-mono text-gray-600 text-xs">AuthContext</div>
                    <div className="font-mono text-gray-600 text-xs">AccessibilityContext</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Layer */}
            <div className="flex flex-col">
              <div className="bg-green-50 rounded-lg p-5 border-2 border-green-400">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Backend</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded p-3 border border-green-200">
                    <div className="font-semibold text-gray-800 mb-2">FastAPI + Python 3.11</div>
                    <div className="text-gray-600">• SQLAlchemy 2.0</div>
                    <div className="text-gray-600">• Pydantic v2</div>
                    <div className="text-gray-600">• APScheduler</div>
                    <div className="text-gray-600">• Uvicorn (ASGI)</div>
                  </div>
                  <div className="bg-white rounded p-3 border border-green-200">
                    <div className="font-semibold text-gray-800 mb-2">API Routes:</div>
                    <div className="font-mono text-gray-600 text-xs">/auth, /books</div>
                    <div className="font-mono text-gray-600 text-xs">/recommendations</div>
                    <div className="font-mono text-gray-600 text-xs">/admin, /feedback</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Layer */}
            <div className="flex flex-col">
              <div className="bg-cyan-50 rounded-lg p-5 border-2 border-cyan-400">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-8 h-8 text-cyan-600" />
                  <h3 className="text-xl font-bold text-gray-900">Data</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded p-3 border border-cyan-200">
                    <div className="font-semibold text-gray-800 mb-2">Supabase PostgreSQL</div>
                    <div className="text-gray-600">• pgvector extension</div>
                    <div className="text-gray-600">• IVFFLAT indexing</div>
                    <div className="text-gray-600">• 1536-dim vectors</div>
                  </div>
                  <div className="bg-white rounded p-3 border border-cyan-200">
                    <div className="font-semibold text-gray-800 mb-2">External APIs:</div>
                    <div className="font-mono text-gray-600 text-xs">OpenAI (embed)</div>
                    <div className="font-mono text-gray-600 text-xs">DeepSeek (parse)</div>
                    <div className="font-mono text-gray-600 text-xs">OpenLibrary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Arrows */}
          <div className="flex items-center justify-center gap-8 mt-6 text-xs text-gray-700">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600" />
              <span>JWT Auth</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-purple-600" />
              <span>REST API</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-green-600" />
              <span>SQL + Vector</span>
            </div>
          </div>
        </div>

        {/* Service Relationships & Data Flow */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-green-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Backend Service Architecture & Data Flow</h3>
          
          {/* Services Grid */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Core Services */}
            <div className="bg-green-50 rounded-lg p-5 border-2 border-green-400">
              <h4 className="text-base font-bold text-green-900 mb-3">Core Services</h4>
              <div className="space-y-3 text-xs">
                <div className="bg-white rounded p-3 border border-green-300">
                  <div className="font-bold text-gray-900 mb-1">AuthService</div>
                  <div className="text-gray-600 space-y-0.5">
                    <div>• JWT token generation</div>
                    <div>• Password hashing (bcrypt)</div>
                    <div>• Token refresh (7-day TTL)</div>
                    <div>• Role validation</div>
                  </div>
                </div>
                
                <div className="bg-white rounded p-3 border border-green-300">
                  <div className="font-bold text-gray-900 mb-1">VectorService</div>
                  <div className="text-gray-600 space-y-0.5">
                    <div>• Embedding generation</div>
                    <div>• Semantic similarity search</div>
                    <div>• Redis caching (1h TTL)</div>
                    <div>• Metadata enrichment</div>
                  </div>
                </div>
                
                <div className="bg-white rounded p-3 border border-green-300">
                  <div className="font-bold text-gray-900 mb-1">AgentService</div>
                  <div className="text-gray-600 space-y-0.5">
                    <div>• Query intent parsing</div>
                    <div>• Filter extraction</div>
                    <div>• Small talk detection</div>
                    <div>• Clarification generation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* External APIs */}
            <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-400">
              <h4 className="text-base font-bold text-blue-900 mb-3">External APIs</h4>
              <div className="space-y-3 text-xs">
                <div className="bg-white rounded p-3 border border-blue-300">
                  <div className="font-bold text-gray-900 mb-1">OpenAI API</div>
                  <div className="text-gray-600 space-y-0.5">
                    <div>• <span className="font-mono text-[10px]">text-embedding-3-small</span></div>
                    <div>• 1536-dim vectors</div>
                    <div>• ~200-400ms latency</div>
                    <div>• Chat completions (GPT-4o)</div>
                  </div>
                </div>
                
                <div className="bg-white rounded p-3 border border-blue-300">
                  <div className="font-bold text-gray-900 mb-1">DeepSeek API</div>
                  <div className="text-gray-600 space-y-0.5">
                    <div>• <span className="font-mono text-[10px]">deepseek-chat</span></div>
                    <div>• Query parsing</div>
                    <div>• ~2-3s latency</div>
                    <div>• Metadata enrichment</div>
                  </div>
                </div>
                
                <div className="bg-white rounded p-3 border border-blue-300">
                  <div className="font-bold text-gray-900 mb-1">OpenLibrary API</div>
                  <div className="text-gray-600 space-y-0.5">
                    <div>• ISBN metadata lookup</div>
                    <div>• Cover image URLs</div>
                    <div>• Book descriptions</div>
                    <div>• Author information</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guardrails Validation */}
            <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-400">
              <h4 className="text-base font-bold text-orange-900 mb-3">Guardrails Layer</h4>
              <div className="space-y-3 text-xs">
                <div className="bg-white rounded p-3 border border-orange-300">
                  <div className="font-bold text-gray-900 mb-1">validate_chat_summary()</div>
                  <div className="text-gray-600 space-y-0.5">
                    <div>✓ Length: 8-320 chars</div>
                    <div>✓ No URLs/emails</div>
                    <div>✓ XSS prevention</div>
                    <div>✓ Safe for display</div>
                  </div>
                </div>
                
                <div className="bg-white rounded p-3 border border-orange-300">
                  <div className="font-bold text-gray-900 mb-1">validate_metadata_payload()</div>
                  <div className="text-gray-600 space-y-0.5">
                    <div>✓ Has age_range (COPPA)</div>
                    <div>✓ Has tags array</div>
                    <div>✓ Valid JSON structure</div>
                    <div>✓ Length: 20-1500 chars</div>
                  </div>
                </div>
                
                <div className="bg-white rounded p-3 border border-orange-300">
                  <div className="font-bold text-gray-900 mb-1">validate_agent_filters()</div>
                  <div className="text-gray-600 space-y-0.5">
                    <div>✓ Has genres array</div>
                    <div>✓ Confidence 0.0-1.0</div>
                    <div>✓ No SQL injection</div>
                    <div>✓ Safe filter values</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Flow Diagram */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Request Flow: Chat Recommendation Example</h4>
            <div className="space-y-5">
              {/* Step 1 */}
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-base font-bold flex-shrink-0">1</div>
                <div className="flex-1 bg-white rounded-lg p-4 border-2 border-gray-300 shadow-sm">
                  <div className="font-mono text-sm font-bold text-gray-900">POST /api/v1/recommendations/chat</div>
                  <div className="text-xs text-gray-600 mt-2">User query → API Router</div>
                </div>
                <ArrowRight className="w-6 h-6 text-purple-600 flex-shrink-0" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-base font-bold flex-shrink-0">2</div>
                <div className="flex-1 bg-green-50 rounded-lg p-4 border-2 border-green-400 shadow-sm">
                  <div className="font-bold text-sm text-green-900">AgentService.parse_query()</div>
                  <div className="text-xs text-gray-700 mt-2">→ DeepSeek API → Guardrails validation → Extract filters</div>
                </div>
                <ArrowRight className="w-6 h-6 text-green-600 flex-shrink-0" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-base font-bold flex-shrink-0">3</div>
                <div className="flex-1 bg-green-50 rounded-lg p-4 border-2 border-green-400 shadow-sm">
                  <div className="font-bold text-sm text-green-900">VectorService.semantic_search()</div>
                  <div className="text-xs text-gray-700 mt-2">→ OpenAI embeddings → pgvector query → Return top 10 books</div>
                </div>
                <ArrowRight className="w-6 h-6 text-green-600 flex-shrink-0" />
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-base font-bold flex-shrink-0">4</div>
                <div className="flex-1 bg-blue-50 rounded-lg p-4 border-2 border-blue-400 shadow-sm">
                  <div className="font-bold text-sm text-blue-900">Generate Explanation</div>
                  <div className="text-xs text-gray-700 mt-2">→ OpenAI Chat API → Guardrails → Return friendly summary</div>
                </div>
                <ArrowRight className="w-6 h-6 text-blue-600 flex-shrink-0" />
              </div>

              {/* Step 5 */}
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-base font-bold flex-shrink-0">5</div>
                <div className="flex-1 bg-white rounded-lg p-4 border-2 border-gray-300 shadow-sm">
                  <div className="font-mono text-sm font-bold text-gray-900">Response: {`{books: [...], explanation: "..."}`}</div>
                  <div className="text-xs text-gray-600 mt-2">JSON response → Frontend renders results</div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
              <div className="text-sm text-orange-900 font-bold mb-2">🛡️ Guardrails Protection Points:</div>
              <div className="text-xs text-gray-700 space-y-1">
                <div>• <strong>Step 2:</strong> validate_agent_filters() prevents malformed LLM output</div>
                <div>• <strong>Step 4:</strong> validate_chat_summary() prevents XSS in explanations</div>
                <div>• All external API responses validated before database insertion</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-5 text-white">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6" />
              <h3 className="text-lg font-bold">Privacy-First</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div>• No PII in anonymous mode</div>
              <div>• Age-based content filtering</div>
              <div>• FERPA/COPPA compliant</div>
              <div>• JWT-secured endpoints</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-5 text-white">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-lg font-bold">Hybrid AI</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div>• Collaborative filtering</div>
              <div>• LLM metadata enrichment</div>
              <div>• Vector semantic search</div>
              <div>• RAG-powered explanations</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-5 text-white">
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-6 h-6" />
              <h3 className="text-lg font-bold">Scalable Design</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div>• Service layer pattern</div>
              <div>• Connection pooling</div>
              <div>• Background job scheduler</div>
              <div>• Microservice migration ready</div>
            </div>
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-xl p-5 text-white mb-6">
          <div className="grid grid-cols-4 gap-6 text-xs">
            <div>
              <div className="font-bold mb-2 text-blue-300 text-sm">Frontend</div>
              <div className="space-y-1 font-mono opacity-90">
                <div>React 18.3</div>
                <div>TypeScript 5.6</div>
                <div>Vite 6.4</div>
                <div>TailwindCSS</div>
                <div>Radix UI</div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-2 text-purple-300 text-sm">Backend</div>
              <div className="space-y-1 font-mono opacity-90">
                <div>FastAPI 0.109+</div>
                <div>Python 3.11</div>
                <div>SQLAlchemy 2.0</div>
                <div>Pydantic v2</div>
                <div>APScheduler</div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-2 text-cyan-300 text-sm">Database</div>
              <div className="space-y-1 font-mono opacity-90">
                <div>PostgreSQL 15+</div>
                <div>pgvector 0.5+</div>
                <div>Supabase</div>
                <div>IVFFLAT index</div>
                <div>Connection pool</div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-2 text-green-300 text-sm">AI Services</div>
              <div className="space-y-1 font-mono opacity-90">
                <div>OpenAI API</div>
                <div>DeepSeek API</div>
                <div>OpenLibrary</div>
                <div>LangSmith</div>
                <div>Guardrails AI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Up Preview */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-5 border-2 border-indigo-300">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-indigo-600 font-semibold text-sm mb-1">NEXT UP</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">User Workflow Example</h3>
              <p className="text-sm text-gray-600">Detailed flow: "I want fantasy books" → recommendations in &lt;2s with latency breakdowns</p>
            </div>
            <ArrowRight className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
      </div>
    </div>
  );
}