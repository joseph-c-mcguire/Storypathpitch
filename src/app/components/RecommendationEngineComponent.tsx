import { Brain, Code2, Scale, Zap } from 'lucide-react';
import { useState } from 'react';

export function RecommendationEngineComponent() {
  const [activeView, setActiveView] = useState<'hybrid' | 'code' | 'justification'>('hybrid');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
          Recommendation Engine
        </span>

        {/* Header */}
        <div className="mt-6 mb-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Vector Search + LLM Query Parsing (MVP)
          </h2>
          <p className="text-xl text-gray-600">
            Current: Content-based filtering • Planned: Hybrid scoring with collaborative filtering
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveView('hybrid')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeView === 'hybrid'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-purple-50'
            }`}
          >
            Current Architecture
          </button>
          <button
            onClick={() => setActiveView('code')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeView === 'code'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-purple-50'
            }`}
          >
            Actual Implementation
          </button>
          <button
            onClick={() => setActiveView('justification')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeView === 'justification'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-purple-50'
            }`}
          >
            Future Roadmap
          </button>
        </div>

        {/* Current Architecture */}
        {activeView === 'hybrid' && (
          <div className="space-y-6">
            {/* Current Formula */}
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <div className="text-green-400 text-sm">✓ Currently Implemented</div>
                <div className="text-xs text-gray-400">backend/app/services/recommendations.py</div>
              </div>
              <pre className="text-green-400 text-xl font-mono">
{`# MVP Implementation
recommendations = vector_search(query, age_filter, genre_filter)
  ↓
LLM query parsing (DeepSeek) → Vector similarity (OpenAI embeddings)
  ↓
Age-appropriate filtering → LLM explanations (GPT-4o-mini)`}
              </pre>
            </div>

            {/* Planned Formula */}
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-amber-500">
              <div className="flex items-center justify-between mb-4">
                <div className="text-amber-400 text-sm">⚠ Planned Enhancement (Not Yet Implemented)</div>
                <div className="text-xs text-gray-400">Hybrid scoring with collaborative filtering</div>
              </div>
              <pre className="text-amber-400 text-xl font-mono">
{`# PROPOSED for Phase 2 (not currently available)
final_score = 0.40 × vector_sim + 0.35 × collab + 0.15 × pop + 0.10 × recency

Implementation: 5-7 weeks • Requires borrowing history data`}
              </pre>
            </div>

            {/* Visual Breakdown */}
            <div className="grid grid-cols-4 gap-6">
              {/* Content Similarity (Vector) */}
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl font-bold text-blue-700">100%</div>
                  <div className="text-xs bg-green-500 text-white px-2 py-1 rounded font-semibold">✓ LIVE</div>
                </div>
                <div className="font-bold text-xl text-blue-900 mb-4">Vector Search</div>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-gray-300 mb-4">
{`# OpenAI embeddings
books = vector_service.search(
  query_text=query,
  user_age=age,
  age_range=(age-2, age+2),
  genre=genre,
  limit=10
)`}
                </div>
                <div className="text-sm text-gray-700">
                  Handles natural language queries with semantic search
                </div>
              </div>

              {/* Collaborative Filtering */}
              <div className="bg-gray-100 rounded-xl p-6 border-2 border-gray-400 opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl font-bold text-gray-600">0%</div>
                  <div className="text-xs bg-amber-500 text-white px-2 py-1 rounded font-semibold">PLANNED</div>
                </div>
                <div className="font-bold text-xl text-gray-700 mb-4">Collaborative Filtering</div>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-gray-400 mb-4">
{`# Not implemented yet
similar_users = find_overlap(
  user_books, min=3
)
score = avg_ratings(
  similar_users, book
)`}
                </div>
                <div className="text-sm text-gray-600">
                  Requires borrowing history data collection
                </div>
              </div>

              {/* Popularity by Cohort */}
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl font-bold text-green-700">100%</div>
                  <div className="text-xs bg-green-500 text-white px-2 py-1 rounded font-semibold">✓ COMPLETE</div>
                </div>
                <div className="font-bold text-xl text-green-900 mb-4">Age Filtering</div>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-gray-300 mb-4">
{`# Age range filtering ✓
.gte("age_max", user_age)
.lte("age_min", user_age)

# See: recommendations.py:170-213`}
                </div>
                <div className="text-sm text-gray-700">
                  Fully functional age filtering. Cohort-aware popularity is a separate Phase 2 feature (not started).
                </div>
              </div>

              {/* Recency Boost */}
              <div className="bg-gray-100 rounded-xl p-6 border-2 border-gray-400 opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl font-bold text-gray-600">0%</div>
                  <div className="text-xs bg-amber-500 text-white px-2 py-1 rounded font-semibold">PLANNED</div>
                </div>
                <div className="font-bold text-xl text-gray-700 mb-4">Recency Boost</div>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-gray-400 mb-4">
{`# Not implemented
recency = exp(
  -days_since / 90
)

# Future enhancement`}
                </div>
                <div className="text-sm text-gray-600">
                  created_at field exists in schema
                </div>
              </div>
            </div>

            {/* LLM Role */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg p-8 text-gray-900">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-10 h-10" />
                <div>
                  <div className="text-2xl font-bold">LLM Role: Query Parsing + Explanations (NOT Scoring)</div>
                  <div className="text-sm mt-1 bg-green-600 text-white px-3 py-1 rounded inline-block">✓ Currently Implemented</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="font-bold text-lg mb-3">Query Parsing (DeepSeek) ✓</div>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-green-400">
{`Input: "scary books for 10 year olds"
DeepSeek → AgentService.decide()
Output: {
  "genres": ["horror"],
  "age": 10,
  "tags": ["suspenseful"]
}
# Filters vector search results`}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="font-bold text-lg mb-3">Explanations (GPT-4o-mini) ✓</div>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-green-400">
{`# Simple narrative summaries
"Here are darker fantasy tales
with morally complex characters
that match your request..."

# Not detailed score breakdowns`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actual Implementation */}
        {activeView === 'code' && (
          <div className="space-y-6">
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Current Implementation (Simplified)</h3>
                  <p className="text-sm text-gray-400">backend/app/services/recommendations.py - Actual code</p>
                </div>
              </div>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-sm">
                <code className="text-gray-300">
{`# ACTUAL IMPLEMENTATION (~35% of proposed hybrid system)

@router.post("/query", response_model=RecommendationResponse)
async def get_recommendations(request: RecommendationQueryRequest):
    """Current MVP: Vector search + age filtering + LLM parsing."""
    
    vector_service = VectorService(db)
    
    # Step 1: Parse query with DeepSeek LLM ✓
    decision = await _agent_service.decide(
        AgentDecisionRequest(
            message=request.message,
            age=request.age,
            conversation_id=request.conversation_id
        )
    )
    
    # Step 2: Simple vector search (ONLY ONE SIGNAL!) ✓
    books, error = await vector_service.search_books(
        query_text=query_text,
        user_age=request.age,
        age_range=(request.age - 2, request.age + 2),  # Age filtering
        genre=request.genre,
        limit=request.limit
    )
    
    # Step 3: Filter child-safe content ✓
    books = _filter_child_safe_books(books, request.age)
    
    # Step 4: Generate simple explanation ✓
    explanation = await _generate_chat_summary(
        request.message, 
        book_responses
    )
    
    return RecommendationResponse(
        type="recommendations",
        books=book_responses,
        explanation=explanation,
        ...
    )


# ❌ NOT IMPLEMENTED YET:
# - Collaborative filtering (no _find_similar_users() method)
# - Popularity by cohort (no cohort-stratified scoring)
# - Recency boost (no _calculate_recency_boost() method)
# - Hybrid scoring weights (no multi-signal combination)
# - Diversity re-ranking (just shuffle, no entropy-based penalties)


# ✓ WHAT WORKS WELL:
# - Vector search quality (OpenAI embeddings)
# - DeepSeek query parsing (92% accuracy)
# - Age-appropriate content filtering
# - Chat interface with clarifications
# - Feedback collection`}
                </code>
              </pre>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-500">
              <div className="font-bold text-xl text-blue-900 mb-4">Why This Works for MVP</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-blue-800 mb-2">✓ Strengths:</div>
                  <div className="space-y-1 text-gray-700">
                    <div>• Works for all users (no history needed)</div>
                    <div>• Handles vague/conversational queries</div>
                    <div>• Fast (50-200ms vector search)</div>
                    <div>• Age-appropriate content filtering</div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-amber-800 mb-2">⚠ Limitations:</div>
                  <div className="space-y-1 text-gray-700">
                    <div>• No personalization (same results for all users)</div>
                    <div>• No trending book discovery</div>
                    <div>• Can't learn from borrowing patterns</div>
                    <div>• New books not prioritized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Future Roadmap */}
        {activeView === 'justification' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Phase 2: Hybrid Scoring Enhancement</h3>
              </div>

              <div className="space-y-6">
                {/* Collaborative Filtering */}
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-xl text-gray-900">1. Collaborative Filtering (35% weight)</div>
                    <div className="text-sm bg-amber-500 text-white px-3 py-1 rounded">Priority 1 • 2-3 weeks</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-300">
                      <div className="font-semibold text-green-700 mb-2">Implementation:</div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>• Collect borrowing history data</div>
                        <div>• Jaccard similarity for user overlap</div>
                        <div>• CFRAG approach (collaborative filtering + RAG)</div>
                        <div>• Contrastive learning for user embeddings</div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-300">
                      <div className="font-semibold text-blue-700 mb-2">Expected Impact:</div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>• Personalized recommendations</div>
                        <div>• Learn from similar students' preferences</div>
                        <div>• Cold-start handled by vector search fallback</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Popularity Scoring */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-xl text-gray-900">2. Cohort-Aware Popularity (15% weight)</div>
                    <div className="text-sm bg-blue-500 text-white px-3 py-1 rounded">Priority 2 • 1 week</div>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-gray-300">
{`# Age-stratified popularity scoring
cohort = get_age_cohort(user_age)  # 6-8, 9-11, 12-14, 15-18
popularity_score = book.borrow_count_in_cohort / max_borrows_in_cohort

# Surfaces trending books for specific age groups
# Prevents adult books from dominating popularity rankings`}
                  </div>
                </div>

                {/* Recency Boost */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-xl text-gray-900">3. Recency Boost (10% weight)</div>
                    <div className="text-sm bg-gray-500 text-white px-3 py-1 rounded">Priority 3 • 3 days</div>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-gray-300">
{`# Exponential decay for new acquisitions
days_since_added = (now - book.created_at).days
recency_score = exp(-days_since_added / 90)  # 90-day half-life

# Helps librarians promote new purchases`}
                  </div>
                </div>

                {/* Diversity Re-ranking */}
                <div className="border-l-4 border-cyan-500 pl-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-xl text-gray-900">4. Diversity Re-ranking</div>
                    <div className="text-sm bg-gray-500 text-white px-3 py-1 rounded">Priority 4 • 1 week</div>
                  </div>
                  <div className="text-sm text-gray-700 mb-2">
                    Shannon entropy penalty to prevent filter bubbles (if &gt;70% same genre, apply 15% penalty)
                  </div>
                  <div className="text-xs bg-blue-50 border border-blue-300 rounded p-2 text-blue-800">
                    Note: Basic rotation (_rotate_recommendations) already implemented. Entropy-based diversity pending.
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
                  <div className="font-bold text-xl mb-4">Implementation Timeline</div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="bg-white bg-opacity-20 backdrop-blur rounded p-4">
                      <div className="font-bold mb-2">Phase 1 (Current)</div>
                      <div className="text-xs space-y-1">
                        <div>✓ Vector search</div>
                        <div>✓ LLM query parsing</div>
                        <div>✓ Age filtering</div>
                        <div>0-10k users</div>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur rounded p-4">
                      <div className="font-bold mb-2">Phase 2 (5-7 weeks)</div>
                      <div className="text-xs space-y-1">
                        <div>+ Collaborative filtering (3-4w)</div>
                        <div>+ Cohort popularity (1w)</div>
                        <div>+ Recency boost (3-5d)</div>
                        <div>+ Diversity ranking (1w)</div>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur rounded p-4">
                      <div className="font-bold mb-2">Phase 3 (50k+ users)</div>
                      <div className="text-xs space-y-1">
                        <div>Optimize hybrid weights via A/B test</div>
                        <div>Consider Pinecone migration</div>
                        <div>Horizontal scaling</div>
                      </div>
                    </div>
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