import { GitBranch, TrendingUp, Zap, MessageCircle } from 'lucide-react';

export function CombinedRecommendationLogic() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="mb-12">
        <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
          Slide 5
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          How Recommendations Work
        </h2>
        <p className="text-xl text-gray-600">
          Hybrid retrieval + smart ranking + RAG explanations
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded mt-4" />
      </div>

      {/* Two-Stage Process */}
      <div className="bg-white rounded-2xl p-10 shadow-xl mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Two-Stage Hybrid Approach</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stage 1: Retrieval */}
          <div className="border-4 border-blue-600 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Stage 1: Retrieval</h4>
                <p className="text-xs text-gray-600">Fast Candidate Generation</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="font-semibold text-blue-900 text-sm mb-1">1. Semantic Search</p>
                <p className="text-xs text-gray-700">
                  Vector matching on themes, reading level, genre → Top 100-150 candidates (~20-50ms)
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-3">
                <p className="font-semibold text-green-900 text-sm mb-1">2. Collaborative Filtering</p>
                <p className="text-xs text-gray-700">
                  "Students who borrowed X also borrowed Y" → Top 50-80 candidates (~10-20ms)
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-3">
                <p className="font-semibold text-purple-900 text-sm mb-1">3. Cohort Popularity</p>
                <p className="text-xs text-gray-700">
                  Most popular in student's grade band → Top 20-30 candidates (instant)
                </p>
              </div>
            </div>

            <div className="mt-4 text-center bg-gray-100 rounded-lg py-2">
              <p className="text-xs font-semibold text-gray-700">
                Combined: ~200 candidates in &lt;100ms
              </p>
            </div>
          </div>

          {/* Stage 2: Ranking */}
          <div className="border-4 border-purple-600 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Stage 2: Ranking</h4>
                <p className="text-xs text-gray-600">Interpretable Scoring</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-xs overflow-x-auto">
              <div className="text-green-400 whitespace-pre">
{`score = 
  w₁ × semantic_similarity
+ w₂ × co_borrow_score
+ w₃ × cohort_popularity
+ w₄ × freshness
- w₅ × repetition_penalty
- w₆ × policy_penalties`}
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-blue-500 rounded flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">w₁</div>
                <p className="text-gray-700">Thematic match strength</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">w₂</div>
                <p className="text-gray-700">Social proof from peers</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-purple-500 rounded flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">w₃</div>
                <p className="text-gray-700">Grade band trending</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-orange-500 rounded flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">w₄</div>
                <p className="text-gray-700">Boost new acquisitions</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-red-500 rounded flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">w₅</div>
                <p className="text-gray-700">Avoid series repetition</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 bg-red-700 rounded flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">w₆</div>
                <p className="text-gray-700">Age-appropriateness filters</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Hybrid Works */}
      <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-600" />
          Why Hybrid Beats Pure Approaches
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
            <p className="font-bold text-red-900 mb-2 text-sm">✗ Pure Collaborative</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Cold start problem</li>
              <li>• Misses reading levels</li>
              <li>• Echo chambers</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
            <p className="font-bold text-orange-900 mb-2 text-sm">⚠ Pure Content-Based</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Misses hidden gems</li>
              <li>• No personalization</li>
              <li>• Ignores social proof</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
            <p className="font-bold text-green-900 mb-2 text-sm">✓ Hybrid (Our Approach)</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Content ensures accuracy</li>
              <li>• Social adds validation</li>
              <li>• Fully explainable</li>
            </ul>
            <p className="text-xs text-green-700 mt-2 font-semibold">
              15-25% engagement lift (Netflix/Spotify research)
            </p>
          </div>
        </div>
      </div>

      {/* RAG Explanation Layer */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          The RAG Explanation Layer
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-5">
            <h4 className="font-bold mb-3">RAG is NOT the recommender</h4>
            <p className="text-sm opacity-90 mb-3">
              The <strong>hybrid retrieval + ranking</strong> system generates recommendations 
              using data-driven signals (vectors, co-borrows, popularity).
            </p>
            <p className="text-sm opacity-90">
              RAG's role: <strong>Explain why</strong> recommendations were made using retrieved 
              context (book details, librarian notes, similar-reader rationale).
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-5">
            <h4 className="font-bold mb-3">What RAG generates:</h4>
            <div className="space-y-3">
              <div className="bg-white bg-opacity-30 backdrop-blur rounded-lg p-3">
                <p className="font-semibold text-xs mb-1">For Students:</p>
                <p className="text-xs opacity-90">
                  "This book has the same adventurous tone as Percy Jackson, and 6th graders who 
                  liked that series also loved this one!"
                </p>
              </div>

              <div className="bg-white bg-opacity-30 backdrop-blur rounded-lg p-3">
                <p className="font-semibold text-xs mb-1">For Librarians:</p>
                <p className="text-xs opacity-90">
                  "Matched: humor + mystery (0.87 similarity). Popular in grade 6-8 (borrowed 47 
                  times). Available (shelf B-12)."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-4">
          <p className="text-sm">
            <strong>Key benefit:</strong> Explanations are <em>grounded in retrieved facts</em>, 
            not hallucinated. Librarians can audit and override any recommendation.
          </p>
        </div>
      </div>
    </div>
  );
}
