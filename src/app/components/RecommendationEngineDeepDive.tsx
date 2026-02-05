import { Brain, Database, Sparkles, Code2 } from 'lucide-react';
import { useState } from 'react';

export function RecommendationEngineDeepDive() {
  const [activeTab, setActiveTab] = useState<'logic' | 'code' | 'vector'>('logic');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
          Slide 5 • Component Deep Dive
        </span>

        {/* Header */}
        <div className="mt-6 mb-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Recommendation Engine
          </h2>
          <p className="text-xl text-gray-600">
            Hybrid AI: Collaborative Filtering + LLM Intent + Vector Similarity
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab('logic')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'logic'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-purple-50'
            }`}
          >
            Recommendation Logic
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'code'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-purple-50'
            }`}
          >
            AI Agent Code
          </button>
          <button
            onClick={() => setActiveTab('vector')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'vector'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-purple-50'
            }`}
          >
            Vector Search
          </button>
        </div>

        {/* Logic Tab */}
        {activeTab === 'logic' && (
          <div className="space-y-6">
            {/* Hybrid Scoring Algorithm */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hybrid Scoring Algorithm</h3>
              <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-300">
                <div className="font-mono text-2xl text-center mb-6 text-purple-700">
                  Final Score = (0.4 × Vector) + (0.35 × Collaborative) + (0.15 × Popularity) + (0.10 × Recency)
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-purple-100 rounded-lg p-4 text-center">
                    <div className="font-bold text-3xl text-purple-900 mb-2">40%</div>
                    <div className="text-sm text-gray-700 font-semibold">Vector Similarity</div>
                    <div className="text-xs text-gray-600 mt-2">OpenAI embeddings cosine similarity</div>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 text-center">
                    <div className="font-bold text-3xl text-blue-900 mb-2">35%</div>
                    <div className="text-sm text-gray-700 font-semibold">Collaborative Filtering</div>
                    <div className="text-xs text-gray-600 mt-2">Users who borrowed this also borrowed...</div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4 text-center">
                    <div className="font-bold text-3xl text-green-900 mb-2">15%</div>
                    <div className="text-sm text-gray-700 font-semibold">Popularity</div>
                    <div className="text-xs text-gray-600 mt-2">Total borrow + recommendation count</div>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-4 text-center">
                    <div className="font-bold text-3xl text-orange-900 mb-2">10%</div>
                    <div className="text-sm text-gray-700 font-semibold">Recency Boost</div>
                    <div className="text-xs text-gray-600 mt-2">Favor recent additions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Flow Diagram */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommendation Data Flow</h3>
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                      <div className="font-bold text-blue-900 mb-1">User Query → DeepSeek LLM</div>
                      <div className="text-sm text-gray-700">"I want a scary book for middle schoolers"</div>
                      <div className="text-xs text-blue-700 mt-2 font-mono">→ Parsed filters: {`{genre: "horror", age: 11-14, mood: "suspenseful"}`}</div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                      <div className="font-bold text-purple-900 mb-1">OpenAI Embedding Generation</div>
                      <div className="text-sm text-gray-700">Query text → text-embedding-3-small model</div>
                      <div className="text-xs text-purple-700 mt-2 font-mono">→ 1536-dimensional vector</div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <div className="bg-cyan-50 rounded-lg p-4 border-2 border-cyan-200">
                      <div className="font-bold text-cyan-900 mb-1">PostgreSQL pgvector Search</div>
                      <div className="text-sm text-gray-700 font-mono">SELECT * FROM books WHERE age_min &lt;= 14 ORDER BY embedding &lt;=&gt; query_vector LIMIT 50</div>
                      <div className="text-xs text-cyan-700 mt-2">Cosine similarity on pre-computed book embeddings</div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div className="flex-1">
                    <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                      <div className="font-bold text-green-900 mb-1">Collaborative Filtering Layer</div>
                      <div className="text-sm text-gray-700">If user logged in: boost books borrowed by similar users</div>
                      <div className="text-xs text-green-700 mt-2 font-mono">Jaccard similarity on borrow sets</div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-center gap-4">
                  <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div className="flex-1">
                    <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                      <div className="font-bold text-orange-900 mb-1">Hybrid Score Calculation & Re-ranking</div>
                      <div className="text-sm text-gray-700">Apply weighted formula, sort, return top 10</div>
                      <div className="text-xs text-orange-700 mt-2">Generate RAG explanation using top result metadata</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Code Tab */}
        {activeTab === 'code' && (
          <div className="space-y-6">
            {/* Agent Query Parsing */}
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-purple-500">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">DeepSeek LLM Query Parser</h3>
                  <p className="text-sm text-gray-400">backend/app/services/agent.py (Lines 58-147)</p>
                </div>
              </div>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-sm">
                <code className="text-gray-300">
{`async def parse_query(
    self, request: QueryParsingRequest
) -> AgentParsingResponse:
    """Convert natural-language query into structured filters."""
    
    try:
        payload = await self._invoke_deepseek(
            prompt=self._build_parse_prompt(request),
            conversation=request.context.get("conversation")
        )
    except Exception as exc:
        logger.error("[AGENT] Failed to parse: %s", exc)
        return self._build_fallback_response(request)
    
    # Guardrails validation
    if not validate_agent_filters(payload):
        logger.warning("[AGENT] Guardrails rejected payload")
        return self._build_fallback_response(request)
    
    try:
        normalized_payload = self._extract_json_payload(payload)
        filters_data = json.loads(normalized_payload)
    except json.JSONDecodeError as exc:
        logger.warning("[AGENT] Unable to decode: %s", exc)
        return self._build_fallback_response(request)
    
    filters = self._normalize_filters(filters_data, request)
    needs_clarification = filters.confidence < 0.7
    
    if needs_clarification:
        clarifying_questions = self._generate_clarifying_questions(
            filters.clarification_needed
        )
    
    return AgentParsingResponse(
        understood=True,
        filters=filters,
        needs_clarification=needs_clarification,
        clarifying_questions=clarifying_questions
    )`}
                </code>
              </pre>
            </div>

            {/* Small Talk Detection */}
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-purple-500">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Small Talk Handler (Cost Optimization)</h3>
                  <p className="text-sm text-gray-400">backend/app/services/agent.py (Lines 35-46)</p>
                </div>
              </div>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-sm">
                <code className="text-gray-300">
{`_SMALL_TALK_RESPONSES = {
    "hello": "Hello! I can help you find books you'll love.",
    "hi": "Hi there! Tell me what you're excited to read.",
    "who are you": "I'm StoryPath, your library assistant!",
    "what can you do": "I recommend books by genre, mood, age...",
}

def _detect_small_talk(self, message: str) -> Optional[str]:
    """Return canned response for common greetings.
    Avoids LLM API calls for simple interactions."""
    normalized = message.lower().strip()
    return _SMALL_TALK_RESPONSES.get(normalized)`}
                </code>
              </pre>
            </div>
          </div>
        )}

        {/* Vector Search Tab */}
        {activeTab === 'vector' && (
          <div className="space-y-6">
            {/* Embedding Generation */}
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-purple-500">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Book Embedding Generation</h3>
                  <p className="text-sm text-gray-400">backend/app/services/vector.py (Lines 162-190)</p>
                </div>
              </div>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-sm">
                <code className="text-gray-300">
{`async def embed_book_for_search(
    self,
    book: Dict[str, Any]
) -> Tuple[Optional[List[float]], Optional[str]]:
    """Create searchable text and embedding for a book."""
    
    try:
        # Concatenate book metadata
        text_parts = [
            book.get("title", ""),
            ", ".join(book.get("authors", [])),
            book.get("description", ""),
            ", ".join(book.get("tags", [])),
            ", ".join(book.get("subjects", []))
        ]
        
        # Create searchable text
        searchable_text = ". ".join([
            part for part in text_parts if part
        ])
        
        # Generate embedding via OpenAI
        embedding = await self.generate_embedding(searchable_text)
        
        return embedding, None
        
    except Exception as e:
        return None, f"Embedding error: {str(e)}"`}
                </code>
              </pre>
            </div>

            {/* Query Caching */}
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-purple-500">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Query Hash Caching (Performance)</h3>
                  <p className="text-sm text-gray-400">backend/app/services/vector.py (Lines 207-225)</p>
                </div>
              </div>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-sm">
                <code className="text-gray-300">
{`def _build_query_hash(
    self, params: Dict[str, Any]
) -> str:
    """Create hash of normalized query parameters."""
    
    # Normalize for consistent hashing
    normalized = {
        "query": self._normalize_text_param(params.get("query")),
        "age": params.get("age"),
        "genre": self._normalize_text_param(params.get("genre")),
        "mood": self._normalize_text_param(params.get("mood")),
    }
    
    hash_str = json.dumps(normalized, sort_keys=True)
    return hashlib.sha256(hash_str.encode()).hexdigest()

# Cache hit example:
# Query: "scary books for teens"
# Hash: 7f3a2b... (consistent across identical queries)
# Cache TTL: 1 hour
# Benefit: Skip OpenAI API call ($$$)`}
                </code>
              </pre>
            </div>

            {/* Database Schema for Vectors */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Database Schema (Vector Storage)</h3>
              <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-300 font-mono text-sm">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-t font-bold -mx-6 -mt-6 mb-4">
                  books (with pgvector extension)
                </div>
                <div className="space-y-1">
                  <div><span className="text-yellow-600">🔑</span> <strong>id</strong>: UUID (PK)</div>
                  <div><span className="text-blue-600">📝</span> title: VARCHAR(500)</div>
                  <div><span className="text-blue-600">📝</span> authors: TEXT[]</div>
                  <div><span className="text-blue-600">📝</span> description: TEXT</div>
                  <div><span className="text-purple-600">🧮</span> <strong>embedding: VECTOR(1536)</strong> ← OpenAI embeddings</div>
                  <div><span className="text-blue-600">📝</span> tags: TEXT[]</div>
                  <div><span className="text-blue-600">📝</span> subjects: TEXT[]</div>
                  <div><span className="text-blue-600">📝</span> age_min: INTEGER</div>
                  <div><span className="text-blue-600">📝</span> age_max: INTEGER</div>
                  <div className="mt-4 pt-4 border-t border-slate-300 text-xs text-gray-600">
                    <strong>Indexes:</strong>
                    <div>• GIN index on tags, subjects (array search)</div>
                    <div>• HNSW index on embedding (cosine similarity)</div>
                    <div>• B-tree on age_min, age_max (range queries)</div>
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
