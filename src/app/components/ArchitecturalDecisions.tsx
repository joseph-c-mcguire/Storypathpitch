import { Scale, TrendingUp, DollarSign, Zap, Shield, Database } from 'lucide-react';

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
            Making concrete, defensible technical choices • Every decision has explicit tradeoffs
          </p>
        </div>

        {/* Decision Cards */}
        <div className="space-y-5">
          {/* Decision 1: Monolithic vs Microservices */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-orange-300 overflow-hidden">
            <div className="bg-orange-50 px-6 py-4 border-b border-orange-200">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">Decision #1: Monolithic vs Microservices Architecture</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Chosen Approach */}
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
                    <div className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">✓</span>
                      <span>Chose: Single FastAPI Monolith</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Simpler deployment:</strong> One Docker container, one codebase to manage</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Faster development:</strong> No inter-service communication overhead</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Lower cost:</strong> $25-50/month (single server + Supabase) vs $200+ for microservices</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Easier debugging:</strong> Single process, unified logs</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Service layer pattern:</strong> Prepares for future microservice migration</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trade-offs */}
                <div className="space-y-3">
                  <div className="bg-gray-50 border-l-4 border-gray-400 rounded p-4">
                    <div className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">⚖️</span>
                      <span>Trade-offs Accepted:</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>Scaling limit:</strong> Horizontal scaling harder (but not needed until 50k+ users)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>Single point of failure:</strong> Entire app goes down if process crashes</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>Technology coupling:</strong> Can't use different languages for different services</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4">
                    <div className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Migration Path:</span>
                    </div>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div><strong>Phase 1 (Now):</strong> Single monolith, 0-10k users</div>
                      <div><strong>Phase 2 (50k users):</strong> Replicate container 3x + load balancer</div>
                      <div><strong>Phase 3 (500k users):</strong> Split into microservices:
                        <div className="ml-4 text-xs text-gray-600 mt-1">
                          • API tier (public endpoints)<br/>
                          • Jobs tier (background processing)<br/>
                          • Vector search tier (dedicated service)
                        </div>
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
                <h3 className="text-xl font-bold text-gray-900">Decision #2: pgvector (PostgreSQL) vs Pinecone</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Chosen Approach */}
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
                    <div className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">✓</span>
                      <span>Chose: pgvector (PostgreSQL Extension)</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Zero additional service:</strong> Runs inside existing PostgreSQL database</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Transactional consistency:</strong> Book metadata + vector in same transaction</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>No extra cost:</strong> Included with Supabase PostgreSQL plan ($0 additional)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>SQL queries:</strong> Combine vector similarity with standard filters in one query</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Good enough performance:</strong> 50-200ms for 10k books with IVFFLAT index</span>
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
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>Performance ceiling:</strong> Pinecone faster at 1M+ vectors (&lt;10ms vs 50-200ms)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>Scaling limitations:</strong> pgvector not optimized for massive-scale vector search</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>Feature set:</strong> Pinecone has advanced filtering, metadata search, sparse-dense hybrid</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4">
                    <div className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span>Performance Benchmark:</span>
                    </div>
                    <div className="text-xs text-gray-700 space-y-1">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white rounded p-2">
                          <div className="font-semibold text-gray-800">pgvector (current)</div>
                          <div className="text-gray-600">10k books: 50-200ms</div>
                          <div className="text-gray-600">100k books: 200-500ms</div>
                          <div className="text-gray-600">Cost: $0 (included)</div>
                        </div>
                        <div className="bg-white rounded p-2">
                          <div className="font-semibold text-gray-800">Pinecone (alternative)</div>
                          <div className="text-gray-600">10k books: &lt;10ms</div>
                          <div className="text-gray-600">100k books: &lt;20ms</div>
                          <div className="text-gray-600">Cost: $70-100/month</div>
                        </div>
                      </div>
                      <div className="mt-2 pt-2 border-t border-blue-200 text-gray-600">
                        <strong>Decision:</strong> pgvector sufficient for MVP. Switch to Pinecone if response time &gt;500ms or catalog &gt;100k books.
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
                <h3 className="text-xl font-bold text-gray-900">Decision #3: Hybrid AI Recommendation Approach</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Chosen Approach */}
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
                    <div className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">✓</span>
                      <span>Chose: Collaborative Filtering + LLM + Vector Search</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Borrow history patterns:</strong> Cheap, fast, high-quality recommendations from real usage data</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>LLM metadata enrichment:</strong> DeepSeek extracts age range, tags, content warnings (nightly batch)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Vector semantic search:</strong> OpenAI embeddings enable "books like this" discovery</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Natural language queries:</strong> Users can ask "funny adventure for 13-year-old"</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Cost efficiency:</strong> DeepSeek 99% cheaper than GPT-4 ($0.14 vs $15 per 1M tokens)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trade-offs */}
                <div className="space-y-3">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-4">
                    <div className="font-bold text-yellow-700 mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>LLM Cost Analysis:</span>
                    </div>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span><strong>DeepSeek query parsing:</strong> ~200 tokens/query × 1000 queries/day = $0.03/day</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span><strong>Nightly enrichment:</strong> ~500 tokens/book × 50 books/night = $0.01/night</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span><strong>OpenAI embeddings:</strong> $0.02 per 1k texts (amortized across queries)</span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-yellow-300 font-semibold text-yellow-800">
                        Total monthly AI cost: ~$5-15 for 30k queries
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border-l-4 border-gray-400 rounded p-4">
                    <div className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">⚖️</span>
                      <span>Trade-offs vs Pure Collaborative Filtering:</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>Cold start problem:</strong> LLM helps new books without borrowing history</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>Latency trade-off:</strong> 2-3s for LLM parsing vs instant collaborative filtering</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>Dependency on external APIs:</strong> OpenAI/DeepSeek outages impact service</span>
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
                <h3 className="text-xl font-bold text-gray-900">Decision #4: Privacy-First Architecture (FERPA/COPPA Compliance)</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Chosen Approach */}
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
                    <div className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">✓</span>
                      <span>Chose: Built-In Privacy by Design</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Anonymous mode:</strong> No PII collected. Only age band (child/teen/adult) stored.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Library card ≠ Student ID:</strong> Distinct namespace prevents data linkage to school records</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>JWT security:</strong> bcrypt password hashing + RS256 token signing</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Age-based filtering:</strong> Content automatically filtered by age metadata</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Family-safe mode:</strong> Optional strict content filtering</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Defense in depth:</strong> Guardrails validation → Regex fallback → Manual librarian review</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Implementation Details */}
                <div className="space-y-3">
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4">
                    <div className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Compliance Implementation:</span>
                    </div>
                    <div className="text-xs text-gray-700 space-y-2">
                      <div>
                        <div className="font-semibold text-gray-800 mb-1">FERPA (Student Privacy):</div>
                        <div className="text-gray-600">• No student names, addresses, or SSN collected</div>
                        <div className="text-gray-600">• Library card numbers isolated from educational records</div>
                        <div className="text-gray-600">• Borrowing history only visible to user + librarian</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 mb-1">COPPA (Children Online):</div>
                        <div className="text-gray-600">• No email/phone collection for users &lt;13</div>
                        <div className="text-gray-600">• Parental consent workflow for accounts &lt;13</div>
                        <div className="text-gray-600">• Age verification at login</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 mb-1">ADA Accessibility:</div>
                        <div className="text-gray-600">• Full screen reader support (ARIA labels)</div>
                        <div className="text-gray-600">• Keyboard navigation</div>
                        <div className="text-gray-600">• High contrast mode + font scaling</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border-l-4 border-gray-400 rounded p-4">
                    <div className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">⚖️</span>
                      <span>Trade-offs:</span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>Less personalization:</strong> Anonymous mode can't track long-term reading history</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>More complex auth:</strong> 3 login modes to maintain</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 font-bold">•</span>
                        <span><strong>Development overhead:</strong> Content filtering + guardrails validation adds complexity</span>
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
          <h3 className="text-2xl font-bold mb-4">Decision-Making Framework</h3>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div className="bg-white bg-opacity-10 backdrop-blur rounded p-4">
              <div className="font-bold mb-2 text-green-300">✓ Optimize For:</div>
              <div className="space-y-1 text-gray-200 text-xs">
                <div>• MVP speed &amp; cost efficiency</div>
                <div>• User privacy &amp; safety</div>
                <div>• Future scalability path</div>
                <div>• Librarian empowerment</div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded p-4">
              <div className="font-bold mb-2 text-yellow-300">⚖️ Accept Trade-offs:</div>
              <div className="space-y-1 text-gray-200 text-xs">
                <div>• Latency for better recommendations</div>
                <div>• Scaling limits for simpler ops</div>
                <div>• LLM costs for quality</div>
                <div>• Auth complexity for compliance</div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded p-4">
              <div className="font-bold mb-2 text-blue-300">📈 Migration Ready:</div>
              <div className="space-y-1 text-gray-200 text-xs">
                <div>• Service layer enables microservices</div>
                <div>• pgvector → Pinecone path clear</div>
                <div>• Horizontal scaling via replication</div>
                <div>• Zero-downtime deployments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
