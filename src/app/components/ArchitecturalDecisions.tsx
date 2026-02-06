import {
  Scale,
  TrendingUp,
  DollarSign,
  Zap,
  Shield,
  Database,
} from "lucide-react";

export function ArchitecturalDecisions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-orange-600 font-semibold uppercase text-sm tracking-wider">
          Technical Leadership
        </span>

        {/* Header */}
        <div className="mt-4 mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Architectural Decisions & Tradeoffs
          </h2>
          <p className="text-base text-gray-600">
            Making concrete, defensible technical choices •
            Every decision has explicit tradeoffs
          </p>
        </div>

        {/* Decision Cards */}
        <div className="space-y-5">
          {/* Decision 1: Monolithic vs Microservices */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-orange-300 overflow-hidden">
            <div className="bg-orange-50 px-6 py-4 border-b border-orange-200">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Decision #1: Monolithic vs Microservices
                  Architecture
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Chosen Approach */}
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
                    <div className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">✓</span>
                      <span>
                        Chose: Single FastAPI Monolith
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          Single Docker container, unified
                          codebase and logs
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          $25-50/month vs $200+ for
                          microservices
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          Service layer pattern enables future
                          migration
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trade-offs */}
                <div className="space-y-3">
                  <div className="bg-gray-50 border-l-4 border-gray-400 rounded p-4">
                    <div className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">⚖️</span>
                      <span>Trade-offs:</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">
                          •
                        </span>
                        <span>
                          Harder horizontal scaling (not needed
                          until 50k+ users)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">
                          •
                        </span>
                        <span>
                          Single point of failure until
                          replication added
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 2: Vector Database */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-blue-300 overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Decision #2: pgvector (PostgreSQL) vs Pinecone
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Chosen Approach */}
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
                    <div className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">✓</span>
                      <span>
                        Chose: pgvector (PostgreSQL Extension)
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          Zero additional cost or services
                          (included with Supabase)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          Transactional consistency with book
                          metadata
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          50-200ms search time sufficient for
                          10k books
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trade-offs */}
                <div className="space-y-3">
                  <div className="bg-gray-50 border-l-4 border-gray-400 rounded p-4">
                    <div className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">⚖️</span>
                      <span>Trade-offs vs Pinecone:</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">
                          •
                        </span>
                        <span>
                          Slower at 1M+ vectors (&lt;10ms vs
                          50-200ms)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">
                          •
                        </span>
                        <span>
                          Missing advanced filtering and hybrid
                          search features
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">
                          •
                        </span>
                        <span>
                          Migration path: Switch to Pinecone if
                          &gt;500ms or &gt;100k books
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 3: Hybrid AI */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-purple-300 overflow-hidden">
            <div className="bg-purple-50 px-6 py-4 border-b border-purple-200">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Decision #3: LLM-Enhanced Vector Search
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Chosen Approach */}
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
                    <div className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">✓</span>
                      <span>
                        Chose: DeepSeek Parsing + OpenAI
                        Embeddings + GPT-4o-mini Explanations
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          DeepSeek query parsing (99% cheaper
                          than GPT-4) converts natural language
                          to structured filters
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          Vector search (1536-dim embeddings)
                          enables semantic book discovery
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          GPT-4o-mini generates friendly
                          explanations with guardrails
                          validation
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full mr-2">
                          •
                        </span>
                        <span>
                          Monthly AI cost: ~$100-120 for 30k queries
                          (OpenAI embeddings $90, DeepSeek $8,
                          GPT-4o-mini $18)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trade-offs */}
                <div className="space-y-3">
                  <div className="bg-gray-50 border-l-4 border-gray-400 rounded p-4">
                    <div className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">⚖️</span>
                      <span>Trade-offs:</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">
                          •
                        </span>
                        <span>
                          1.5-3.2s total latency (DeepSeek 1-2s
                          + vector 50-200ms + GPT-4o 0.5-1s)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">
                          •
                        </span>
                        <span>
                          Dependency on external APIs
                          (OpenAI/DeepSeek availability)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">
                          •
                        </span>
                        <span>
                          No personalization yet (same results
                          for all users with identical queries)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 4: Privacy Architecture */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-green-300 overflow-hidden">
            <div className="bg-green-50 px-6 py-4 border-b border-green-200">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Decision #4: Privacy-First Architecture
                  (FERPA/COPPA Compliance)
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Chosen Approach */}
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
                    <div className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">✓</span>
                      <span>
                        Chose: Built-In Privacy by Design
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          Anonymous mode: no PII, only age band
                          stored
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          Library card isolated from student IDs
                          (FERPA compliance)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          Age-based filtering with content
                          warnings (COPPA compliance)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">
                          •
                        </span>
                        <span>
                          Full ADA accessibility: screen reader,
                          keyboard nav, high contrast
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trade-offs */}
                <div className="space-y-3">
                  <div className="bg-gray-50 border-l-4 border-gray-400 rounded p-4">
                    <div className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">⚖️</span>
                      <span>Trade-offs:</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">
                          •
                        </span>
                        <span>
                          Anonymous mode can't track long-term
                          reading history
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">
                          •
                        </span>
                        <span>
                          Three login modes increase auth
                          complexity
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">
                          •
                        </span>
                        <span>
                          Content filtering and guardrails
                          validation add dev overhead
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 bg-gradient-to-r from-gray-800 to-slate-900 rounded-xl p-6 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Decision-Making Framework
          </h3>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div className="bg-white bg-opacity-10 backdrop-blur rounded p-4">
              <div className="font-bold mb-3 text-green-300">
                ✓ Optimize For:
              </div>
              <div className="text-gray-200">
                MVP speed with strong privacy controls. Build
                for today's 0-10k users while maintaining clear
                paths to enterprise scale.
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded p-4">
              <div className="font-bold mb-3 text-yellow-300">
                ⚖️ Accept Trade-offs:
              </div>
              <div className="text-gray-200">
                Prioritize recommendation quality over
                sub-second latency. Accept 3-5s response times
                for better semantic understanding.
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded p-4">
              <div className="font-bold mb-3 text-blue-300">
                📈 Migration Ready:
              </div>
              <div className="text-gray-200">
                Service layer abstractions enable future
                microservices split. Clear upgrade path from
                pgvector to Pinecone at 50k+ users.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}