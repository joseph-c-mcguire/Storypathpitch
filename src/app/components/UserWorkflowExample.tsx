import { ArrowRight } from 'lucide-react';

export function UserWorkflowExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-orange-500 font-semibold uppercase text-sm tracking-wider">
          Request Flow Example
        </span>

        {/* Header */}
        <div className="mt-4 mb-6">
          <h2 className="text-4xl font-bold text-white mb-2">
            Request Flow: Chat Recommendation
          </h2>
          <p className="text-base text-gray-300">
            End-to-end flow from query to recommendation • Real latency metrics included
          </p>
        </div>

        {/* Request Flow Diagram */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border-2 border-gray-300">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Request Flow: Chat Recommendation Example</h4>
          
          <div className="space-y-4">
            {/* Step 1: Initial Request */}
            <div className="bg-white rounded-lg p-5 border-2 border-purple-400 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                <div className="font-bold text-lg text-gray-900">User Request</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Endpoint:</div>
                  <div className="font-mono text-xs bg-purple-50 p-2 rounded border border-purple-200">POST /recommendations/chat</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Service Used:</div>
                  <div className="text-sm text-gray-600">API Router → JWT Middleware</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Request Body:</div>
                  <div className="font-mono text-xs bg-gray-50 p-2 rounded border border-gray-200">
                    {`{ query: "darker fantasy",`}<br/>
                    {`  conversation_id: "abc123" }`}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Context + LLM Parsing */}
            <div className="bg-green-50 rounded-lg p-5 border-2 border-green-400 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                <div className="font-bold text-lg text-gray-900">Query Parsing</div>
                <div className="flex items-center gap-2 ml-auto">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Parsing ✓</span>
                  <div className="w-2 h-2 bg-amber-500 rounded-full ml-2"></div>
                  <span className="text-xs text-gray-600">Context merging (planned)</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Services Used:</div>
                  <div className="text-sm text-gray-600">✅ AgentService (decide)</div>
                  <div className="text-sm text-gray-600">✅ DeepSeek API</div>
                  <div className="text-sm text-amber-600">ChatContextManager (planned)</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Current Behavior:</div>
                  <div className="text-sm text-gray-600">• Parse current query only</div>
                  <div className="text-sm text-gray-600">• No DB conversation load</div>
                  <div className="text-sm text-gray-600">• Validate with Guardrails AI</div>
                  <div className="text-sm text-amber-600 mt-1">Filter merging across turns (planned)</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Output:</div>
                  <div className="font-mono text-xs bg-gray-50 p-2 rounded border border-gray-200">
                    {`{ genres: ["fantasy"],`}<br/>
                    {`  themes: ["dark"],`}<br/>
                    {`  confidence: 0.87 }`}
                  </div>
                  <div className="text-xs text-amber-600 mt-1">Previous "dragons" filter persistence (planned)</div>
                </div>
              </div>
            </div>

            {/* Step 3: Vector Search */}
            <div className="bg-cyan-50 rounded-lg p-5 border-2 border-cyan-400 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                <div className="font-bold text-lg text-gray-900">Semantic Search</div>
                <div className="flex items-center gap-2 ml-auto">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Search ✓</span>
                  <div className="w-2 h-2 bg-amber-500 rounded-full ml-2"></div>
                  <span className="text-xs text-gray-600">Deduplication (planned)</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Services Used:</div>
                  <div className="text-sm text-gray-600">✅ VectorService</div>
                  <div className="text-sm text-gray-600">✅ OpenAI Embeddings API</div>
                  <div className="text-sm text-gray-600">✅ pgvector (PostgreSQL)</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Current Behavior:</div>
                  <div className="text-sm text-gray-600">• Generate 1536-dim embedding</div>
                  <div className="text-sm text-gray-600">• Query: cosine similarity</div>
                  <div className="text-sm text-gray-600">• Return: top 10 books</div>
                  <div className="text-sm text-amber-600 mt-1">shown_book_ids exclusion (planned)</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Actual SQL Query:</div>
                  <div className="font-mono text-xs bg-gray-50 p-2 rounded border border-gray-200">
                    {`SELECT * FROM books`}<br/>
                    {`-- exclude_ids filter (planned)`}<br/>
                    {`ORDER BY embedding <=> $1`}<br/>
                    {`LIMIT 10`}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Explanation Generation */}
            <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-400 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                <div className="font-bold text-lg text-gray-900">Generate Explanation</div>
                <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Services Used:</div>
                  <div className="text-sm text-gray-600">✅ OpenAI Chat API (GPT-4o-mini)</div>
                  <div className="text-sm text-gray-600">✅ Guardrails AI</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Processing:</div>
                  <div className="text-sm text-gray-600">• RAG: inject book titles</div>
                  <div className="text-sm text-gray-600">• Generate friendly summary</div>
                  <div className="text-sm text-gray-600">• Validate (no XSS/hallucinations)</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Example Output:</div>
                  <div className="text-xs bg-gray-50 p-2 rounded border border-gray-200 text-gray-700">
                    "Here are darker fantasy tales with morally complex characters..."
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Response */}
            <div className="bg-white rounded-lg p-5 border-2 border-purple-400 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                <div className="font-bold text-lg text-gray-900">Return to Frontend</div>
                <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Response Format:</div>
                  <div className="font-mono text-xs bg-purple-50 p-2 rounded border border-purple-200">
                    {`{ books: [{ id, title, author,`}<br/>
                    {`    similarity_score: 0.87 }],`}<br/>
                    {`  explanation: "...",`}<br/>
                    {`  conversation_id: null }`}
                  </div>
                  <div className="text-xs text-amber-600 mt-1">conversation_id persistence (planned)</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Frontend Rendering:</div>
                  <div className="text-sm text-gray-600">✅ BookCard components display</div>
                  <div className="text-sm text-gray-600">✅ Explanation shows above grid</div>
                  <div className="text-sm text-amber-600">Conversation ID persistence (planned)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Considerations */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
              <div className="text-sm font-bold text-orange-900 mb-2">🛡️ Security & Validation (Implemented):</div>
              <div className="text-sm text-gray-700 space-y-1">
                <div>✅ <strong>Step 2:</strong> validate_agent_filters() prevents LLM injection</div>
                <div>✅ <strong>Step 4:</strong> validate_chat_summary() prevents XSS</div>
                <div>✅ <strong>All steps:</strong> JWT verified, RLS enforced at DB</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
              <div className="text-sm font-bold text-blue-900 mb-2">⚡ Performance & Latency (Measured):</div>
              <div className="text-sm text-gray-700 space-y-1">
                <div>✅ <strong>Step 2:</strong> DeepSeek ~2-3s (serial execution)</div>
                <div>✅ <strong>Step 3:</strong> OpenAI embed ~200-400ms, pgvector &lt;50ms</div>
                <div>✅ <strong>Step 4:</strong> GPT-4o-mini ~1-2s (serial)</div>
                <div><strong>Total:</strong> ~3.2-5.2s (matches estimates)</div>
                <div className="text-amber-600"><strong>Optimization (planned P2):</strong> Parallel steps 2 & 4 → ~2.5-3s</div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Up Card */}
        <div className="mt-8 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-6 border-2 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-orange-200 font-semibold uppercase text-xs tracking-wider mb-2">
                Next Up
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Implementation Roadmap & Timeline
              </h3>
              <p className="text-orange-100 text-sm">
                Phased approach with MVP deliverables and success metrics
              </p>
            </div>
            <ArrowRight className="w-8 h-8 text-white flex-shrink-0 ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
}