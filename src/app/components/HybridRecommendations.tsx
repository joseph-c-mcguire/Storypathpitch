import { Database, Users, TrendingUp, GitBranch, Rocket, CheckCircle } from 'lucide-react';

export function HybridRecommendations() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-orange-600 font-semibold uppercase text-sm tracking-wider">
          Recommendation Engine
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          Hybrid Intelligence: Content + Collaborative Signals
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded" />
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-4">Two-Tower Architecture</h3>
        <p className="text-lg leading-relaxed mb-4">
          StoryPath combines the best of both worlds: <strong>semantic vector search</strong> to
          understand "what is this book like?" and <strong>collaborative filtering</strong> from
          borrow history to understand "who tends to like this?"
        </p>
        <p className="text-lg leading-relaxed">
          This hybrid approach ensures recommendations are both content-accurate and socially
          relevant, matching books to students based on both <em>what the book contains</em> and{' '}
          <em>how similar readers have responded</em>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Content-Based (Vector) - Working Now */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-600">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Database className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Content-Based (Vector)</h3>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mt-1">
                ✓ Working in PoC
              </span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">
            <strong>What is this book like?</strong>
          </p>
          
          <ul className="space-y-3 text-sm text-gray-700 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Vector embeddings of book descriptions, themes, and metadata</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Semantic similarity search via Supabase pgvector</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Reading level, tone, genre, series detection</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>LLM-extracted themes (librarian-reviewed)</span>
            </li>
          </ul>

          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Example:</strong> Student asks for "funny adventure books with animals" →
              System finds books with similar themes, tone, and subject matter from catalog
            </p>
          </div>
        </div>

        {/* Collaborative Filtering - Roadmap */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-600">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">CFRAG: Collaborative Filtering for RAG</h3>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mt-1">
                ⏳ Planned (P1 Priority - NOT Currently Implemented)
              </span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-2">
            <strong>Who tends to like this?</strong> CFRAG integrates collaborative filtering into the RAG framework, using user interaction history to extract both explicit and implicit preferences that guide text generation.
          </p>

          <p className="text-sm text-gray-600 mb-4 italic">
            📄 <a href="https://arxiv.org/abs/2504.05731" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Paper: "Collaborative Filtering for Retrieval Augmented Generation" (arXiv:2504.05731)</a>
          </p>
          
          <div className="bg-purple-50 rounded-lg p-5 mb-4 border-2 border-purple-200">
            <div className="font-bold text-purple-900 mb-3">🎯 CFRAG Approach:</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">1.</span>
                <span><strong>User Embedding Generation:</strong> Train user embeddings using contrastive learning on borrow history</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">2.</span>
                <span><strong>Preference Extraction:</strong> Extract explicit (ratings) and implicit (borrow patterns) preferences from similar users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">3.</span>
                <span><strong>Personalized Retrieval:</strong> Custom retriever and reranker fetch documents from similar users' histories</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">4.</span>
                <span><strong>RAG Integration:</strong> Feed collaborative signals into LLM generation to personalize explanations</span>
              </li>
            </ul>
          </div>

          <ul className="space-y-3 text-sm text-gray-700 mb-6">
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Co-borrow patterns (students who borrowed X also borrowed Y)</span>
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Cohort popularity (grade-band, school-level trends)</span>
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Similar user embeddings from aggregated borrow history</span>
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Privacy-safe pseudonymous IDs + k-anonymity thresholds (FERPA/COPPA compliant)</span>
            </li>
          </ul>

          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Example:</strong> 6th graders who loved "Percy Jackson" also borrowed
              "Artemis Fowl" and "The Lightning Thief" → CFRAG surfaces these as socially-validated picks and generates personalized explanations like "Students with similar reading tastes loved these adventure-fantasy hybrids."
            </p>
          </div>

          <div className="mt-4 bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
            <div className="font-bold text-orange-900 mb-2">⚠️ Current State:</div>
            <p className="text-sm text-gray-700">
              StoryPath currently uses <strong>pure vector similarity search</strong> with OpenAI embeddings. CFRAG will be implemented in Phase 1 (P1) to add collaborative signals, validated against LaMP benchmark standards.
            </p>
          </div>
        </div>
      </div>

      {/* Hybrid Ranking Formula */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <GitBranch className="w-6 h-6 text-blue-600" />
          Hybrid Ranking Formula (Planned)
        </h3>
        
        <div className="bg-white rounded-lg p-6 mb-6 font-mono text-sm overflow-x-auto">
          <div className="text-gray-800">
            <strong>score(book)</strong> = 
            <div className="ml-6 mt-2 space-y-1">
              <div>w₁ × <span className="text-blue-600">sim(user_embed, book_embed)</span></div>
              <div>+ w₂ × <span className="text-purple-600">sim(query_embed, book_embed)</span></div>
              <div>+ w₃ × <span className="text-green-600">co_borrow_score(seed_books, book)</span></div>
              <div>+ w₄ × <span className="text-orange-600">cohort_popularity(user_grade, book)</span></div>
              <div>− w₅ × <span className="text-red-600">repetition_penalty(book)</span></div>
              <div>− w₆ × <span className="text-red-600">maturity_mismatch_penalty(book)</span></div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-4">
          This scoring function is <strong>interpretable and auditable</strong> — librarians can
          see exactly why each book was recommended and adjust weights based on local priorities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="font-semibold text-blue-900 mb-2">Content Similarity</p>
            <p className="text-sm text-gray-700">Matches themes, reading level, genre, tone</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="font-semibold text-purple-900 mb-2">Social Signals</p>
            <p className="text-sm text-gray-700">What similar readers actually enjoyed</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-2">Diversity Constraints</p>
            <p className="text-sm text-gray-700">Avoid repetitive sequels, promote discovery</p>
          </div>
        </div>
      </div>

      {/* Data Model for Collaborative Filtering */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
        <h3 className="text-2xl font-bold mb-6">Data Model: Borrow Events & Co-Occurrence</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              BorrowEvent (Source of Truth)
            </h4>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-700">
                <div>• <strong>user_id</strong>: pseudonymous patron identifier</div>
                <div>• <strong>book_id</strong>: catalog ISBN/identifier</div>
                <div>• <strong>event_type</strong>: BORROWED | RETURNED | RENEWED | HOLD_PLACED</div>
                <div>• <strong>timestamp</strong>: when event occurred</div>
                <div>• <strong>context</strong>: {'{school_id, grade_band}'}</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              Derived Artifacts (Nightly Batch)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold mb-2">Co-Borrow Graph</p>
                <p className="text-sm text-gray-700 font-mono">
                  (book_a, book_b) → weight
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  "Students who borrowed A also borrowed B"
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold mb-2">Cohort Popularity</p>
                <p className="text-sm text-gray-700 font-mono">
                  (grade_band, book) → score
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  "Most popular books among 6th-8th graders"
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              User Embeddings (Privacy-Safe)
            </h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>user_embed</strong> = aggregated embedding of borrowed books + grade band + reading preferences
              </p>
              <p className="text-xs text-gray-600">
                ✓ No personally identifiable information (PII) stored<br />
                ✓ Coarse cohorts (grade band) instead of exact demographics<br />
                ✓ k-anonymity thresholds for small cohorts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Roadmap */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="w-6 h-6" />
          Implementation Roadmap: P1 Priority
        </h3>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center font-bold">
                1
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-1">BorrowEvent Ingestion (Week 1-2)</h4>
              <p className="text-sm opacity-90">
                Add API endpoints to ingest borrow/return/renew events from circulation system.
                Store pseudonymous user IDs + timestamps.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center font-bold">
                2
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-1">Nightly Feature Pipeline (Week 3-4)</h4>
              <p className="text-sm opacity-90">
                Batch job to compute co-borrow matrix, cohort popularity tables, and user
                embeddings. Store in Supabase for fast retrieval.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center font-bold">
                3
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-1">Hybrid Retriever + Ranker (Week 5-6)</h4>
              <p className="text-sm opacity-90">
                Update recommendation service to merge semantic candidates + collaborative
                candidates, apply hybrid ranking formula.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center font-bold">
                4
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-1">Evaluation & Tuning (Week 7-8)</h4>
              <p className="text-sm opacity-90">
                Offline metrics (precision@K, diversity, novelty) + online A/B test in pilot
                library. Adjust weights based on librarian feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="bg-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">Why Hybrid Beats Pure Vector Search</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-blue-900">Better Cold-Start</h4>
            <p className="text-sm text-gray-700">
              For new students with no history, collaborative signals from their grade-band cohort
              provide socially-validated starting points.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-purple-900">Discover Hidden Gems</h4>
            <p className="text-sm text-gray-700">
              Co-borrow patterns surface books that may not be semantically similar but are loved
              by similar readers (e.g., humor + sci-fi crossover).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-green-900">Measurable Impact</h4>
            <p className="text-sm text-gray-700">
              Industry research shows hybrid recommenders increase engagement by 15-25% over
              content-only approaches (Netflix, Spotify data).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}