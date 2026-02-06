import { ArrowRight, Database, Cloud, Cpu, Lock, Search, BookOpen, RefreshCw } from 'lucide-react';

export function DataFlowDiagram() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="mb-12">
        <span className="text-orange-600 font-semibold uppercase text-sm tracking-wider">
          Slide 5
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          Data Flow Architecture
        </h2>
        <p className="text-xl text-gray-600">
          Request lifecycle from user to response
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded mt-4" />
      </div>

      {/* System Architecture Overview */}
      <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
        <h3 className="text-2xl font-bold mb-6">System Architecture Overview</h3>
        
        <div className="flex flex-col items-center space-y-6">
          {/* User Layer */}
          <div className="w-full max-w-3xl">
            <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-8 py-4 rounded-lg text-center font-semibold text-lg shadow-lg">
              USER (Browser/Device)
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-gray-600 text-sm">HTTP/HTTPS</div>
          </div>

          {/* Frontend Layer */}
          <div className="w-full max-w-3xl">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg p-6 shadow-lg">
              <div className="font-bold text-xl mb-3">FRONTEND (React + TypeScript)</div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white bg-opacity-20 rounded p-2">• Login/Auth UI</div>
                <div className="bg-white bg-opacity-20 rounded p-2">• Chat Interface</div>
                <div className="bg-white bg-opacity-20 rounded p-2">• Search Filters</div>
                <div className="bg-white bg-opacity-20 rounded p-2">• Book Display</div>
                <div className="bg-white bg-opacity-20 rounded p-2">• Admin Dashboard</div>
                <div className="bg-white bg-opacity-20 rounded p-2">• localStorage Cache</div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-gray-600 text-sm">REST API (POST /api/v1/*)</div>
          </div>

          {/* Backend Layer */}
          <div className="w-full max-w-3xl">
            <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-lg p-6 shadow-lg">
              <div className="font-bold text-xl mb-3">BACKEND (FastAPI + Python)</div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-white bg-opacity-20 rounded p-2">
                  <div className="font-semibold mb-1">Routers:</div>
                  <div>• /auth</div>
                  <div>• /books</div>
                  <div>• /recommendations</div>
                  <div>• /feedback</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded p-2">
                  <div className="font-semibold mb-1">Services:</div>
                  <div>• AuthService</div>
                  <div>• BookService</div>
                  <div>• VectorService</div>
                  <div>• AgentService</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded p-2">
                  <div className="font-semibold mb-1">Core:</div>
                  <div>• Security (JWT)</div>
                  <div>• Config</div>
                  <div>• Monitoring</div>
                  <div>• Guardrails</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-gray-600 text-sm">Persistence & External APIs</div>
          </div>

          {/* Data & External Layer */}
          <div className="w-full max-w-4xl grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-indigo-400 to-indigo-500 text-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5" />
                <div className="font-bold">Supabase PostgreSQL</div>
              </div>
              <div className="text-xs space-y-1">
                <div>• users</div>
                <div>• books (+ vectors)</div>
                <div>• borrow_history</div>
                <div>• feedback</div>
                <div>• sessions</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 text-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Cloud className="w-5 h-5" />
                <div className="font-bold">External APIs</div>
              </div>
              <div className="text-xs space-y-1">
                <div>• OpenLibrary</div>
                <div>• Google Books</div>
                <div>• Redis Cache</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-5 h-5" />
                <div className="font-bold">LLM APIs</div>
              </div>
              <div className="text-xs space-y-1">
                <div>• OpenAI (embeddings)</div>
                <div>• DeepSeek (parsing)</div>
                <div>• Metadata enrichment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Data Flows */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Authentication Flow */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-bold">1. Authentication Flow</h3>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 rounded px-3 py-1.5 flex-1 border-l-4 border-green-500">
                User enters credentials
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-blue-50 rounded px-3 py-2 border-l-4 border-blue-500">
              <div className="font-semibold text-blue-700">POST /api/v1/auth/login</div>
              <div className="text-xs text-gray-600 mt-1">
                {`{library_card, age} or {card, password}`}
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-purple-50 rounded px-3 py-2 border-l-4 border-purple-500">
              <div className="font-semibold text-purple-700">AuthService validates</div>
              <div className="text-xs text-gray-600 mt-1">
                • Query user from DB<br/>
                • Verify credentials<br/>
                • Generate JWT tokens
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-green-50 rounded px-3 py-2 border-l-4 border-green-500">
              <div className="font-semibold text-green-700">Return tokens + user</div>
              <div className="text-xs text-gray-600 mt-1">
                access_token (24h), refresh_token (7d)
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-gray-100 rounded px-3 py-2 border-l-4 border-gray-500">
              <div className="font-semibold">localStorage: Save tokens</div>
              <div className="text-xs text-gray-600 mt-1">Redirect to main app</div>
            </div>
          </div>
        </div>

        {/* Recommendation Flow */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold">2. Recommendation Flow</h3>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 rounded px-3 py-1.5 flex-1 border-l-4 border-blue-500">
                User types: "I like fantasy"
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-indigo-50 rounded px-3 py-2 border-l-4 border-indigo-500">
              <div className="font-semibold text-indigo-700">POST /api/v1/agent/decide</div>
              <div className="text-xs text-gray-600 mt-1">
                DeepSeek LLM parses intent
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-pink-50 rounded px-3 py-2 border-l-4 border-pink-500">
              <div className="font-semibold text-pink-700">Extract filters</div>
              <div className="text-xs text-gray-600 mt-1">
                {`{genre: "fantasy", confidence: 0.95}`}
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-purple-50 rounded px-3 py-2 border-l-4 border-purple-500">
              <div className="font-semibold text-purple-700">POST /recommendations/chat</div>
              <div className="text-xs text-gray-600 mt-1">
                • OpenAI: Generate embedding<br/>
                • Supabase: Vector search<br/>
                • Filter by age + preferences
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-green-50 rounded px-3 py-2 border-l-4 border-green-500">
              <div className="font-semibold text-green-700">Return top 10 books</div>
              <div className="text-xs text-gray-600 mt-1">
                + LLM-generated explanation
              </div>
            </div>
          </div>
        </div>

        {/* Book Management Flow */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-bold">3. Book Management Flow</h3>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 rounded px-3 py-1.5 flex-1 border-l-4 border-purple-500">
                Librarian enters ISBN
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-indigo-50 rounded px-3 py-2 border-l-4 border-indigo-500">
              <div className="font-semibold text-indigo-700">POST /api/v1/books</div>
              <div className="text-xs text-gray-600 mt-1">
                Require librarian role
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-cyan-50 rounded px-3 py-2 border-l-4 border-cyan-500">
              <div className="font-semibold text-cyan-700">BookService.lookup_isbn()</div>
              <div className="text-xs text-gray-600 mt-1">
                • Try OpenLibrary API<br/>
                • Fallback to Google Books<br/>
                • Extract metadata
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-indigo-50 rounded px-3 py-2 border-l-4 border-indigo-500">
              <div className="font-semibold text-indigo-700">INSERT INTO books</div>
              <div className="text-xs text-gray-600 mt-1">
                status = "pending_embedding"
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-green-50 rounded px-3 py-2 border-l-4 border-green-500">
              <div className="font-semibold text-green-700">Return book record</div>
              <div className="text-xs text-gray-600 mt-1">
                "Book added! Processing..."
              </div>
            </div>
          </div>
        </div>

        {/* Background Job Flow */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <RefreshCw className="w-6 h-6 text-orange-600" />
            <h3 className="text-xl font-bold">4. Background Job Flow</h3>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-orange-100 rounded px-3 py-1.5 flex-1 border-l-4 border-orange-500">
                Scheduler: Daily at 2:00 AM
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-purple-50 rounded px-3 py-2 border-l-4 border-purple-500">
              <div className="font-semibold text-purple-700">Query pending books</div>
              <div className="text-xs text-gray-600 mt-1">
                {`WHERE status='pending_embedding'`}
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-pink-50 rounded px-3 py-2 border-l-4 border-pink-500">
              <div className="font-semibold text-pink-700">For each book:</div>
              <div className="text-xs text-gray-600 mt-1">
                1. DeepSeek: Extract age/tags<br/>
                2. OpenAI: Generate embedding<br/>
                3. Update book record
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-indigo-50 rounded px-3 py-2 border-l-4 border-indigo-500">
              <div className="font-semibold text-indigo-700">UPDATE books SET</div>
              <div className="text-xs text-gray-600 mt-1">
                embedding=[...], status='active'
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
            
            <div className="bg-green-50 rounded px-3 py-2 border-l-4 border-green-500">
              <div className="font-semibold text-green-700">Books now searchable</div>
              <div className="text-xs text-gray-600 mt-1">
                Vector search enabled
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Validation & Security */}
      <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Security & Validation Pipeline</h3>
        
        <div className="grid grid-cols-5 gap-3">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 border-2 border-red-300">
            <div className="font-semibold text-red-700 text-sm mb-2">1. HTTP Headers</div>
            <div className="text-xs text-gray-600">
              • Content-Type<br/>
              • Authorization<br/>
              • Extract token
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border-2 border-orange-300">
            <div className="font-semibold text-orange-700 text-sm mb-2">2. JWT Verify</div>
            <div className="text-xs text-gray-600">
              • Signature check<br/>
              • Expiration<br/>
              • Extract claims
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4 border-2 border-yellow-300">
            <div className="font-semibold text-yellow-700 text-sm mb-2">3. Pydantic</div>
            <div className="text-xs text-gray-600">
              • Type checking<br/>
              • Range validation<br/>
              • String limits
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-2 border-green-300">
            <div className="font-semibold text-green-700 text-sm mb-2">4. Business Logic</div>
            <div className="text-xs text-gray-600">
              • Role checks<br/>
              • Age filtering<br/>
              • Ownership
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300">
            <div className="font-semibold text-blue-700 text-sm mb-2">5. Guardrails</div>
            <div className="text-xs text-gray-600">
              • LLM output<br/>
              • Content filtering<br/>
              • Reject unsafe
            </div>
          </div>
        </div>
      </div>

      {/* Performance & Caching */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Performance Optimizations</h3>
        
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Frontend Caching:</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="bg-blue-50 rounded px-3 py-2">
                <div className="font-medium">localStorage</div>
                <div className="text-xs">• JWT tokens (~4KB)<br/>• User data (~1KB)<br/>• Settings (~1KB)</div>
              </div>
              <div className="bg-green-50 rounded px-3 py-2">
                <div className="font-medium">In-memory</div>
                <div className="text-xs">• Recent searches<br/>• Book metadata<br/>• 24-hour TTL</div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Backend Caching:</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="bg-purple-50 rounded px-3 py-2">
                <div className="font-medium">Redis Cache</div>
                <div className="text-xs">• OpenAI embeddings<br/>• 1-hour TTL<br/>• 60% hit rate target</div>
              </div>
              <div className="bg-pink-50 rounded px-3 py-2">
                <div className="font-medium">Search Results</div>
                <div className="text-xs">• Filter combinations<br/>• User-specific<br/>• 1-hour TTL</div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Database Optimizations:</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="bg-indigo-50 rounded px-3 py-2">
                <div className="font-medium">Indexes</div>
                <div className="text-xs">• library_card (UNIQUE)<br/>• isbn (UNIQUE)<br/>• status (BTREE)</div>
              </div>
              <div className="bg-cyan-50 rounded px-3 py-2">
                <div className="font-medium">Vector Search</div>
                <div className="text-xs">• IVFFLAT index<br/>• Cosine similarity<br/>• ~100 lists</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}