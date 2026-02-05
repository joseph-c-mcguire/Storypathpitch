import { Shield, TrendingUp, Eye, UserX, FileText, TestTube } from 'lucide-react';

export function GovernanceIteration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider">
          Governance & Iteration
        </span>

        {/* Header */}
        <div className="mt-6 mb-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Safety + Long-Term Ownership
          </h2>
          <p className="text-xl text-gray-600">
            Goals 5 & 6: Trustworthiness in education + System improves over time
          </p>
        </div>

        {/* Goal 5: Governance & Safety */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-red-600" />
            <h3 className="text-2xl font-bold text-gray-900">Goal 5: Governance & Safety (Critical for Education)</h3>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* No Profiling */}
            <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
              <div className="flex items-center gap-2 mb-4">
                <UserX className="w-6 h-6 text-red-700" />
                <div className="font-bold text-lg text-red-900">No Profiling</div>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-gray-300 mb-3">
{`# FERPA/COPPA compliance
user_data = {
  "id": hash(library_card),  # One-way
  "age": 10,  # Age only, no DOB
  "borrowed": [book_ids]  # No names/PII
}

# Forbidden:
# - Racial/ethnic inference
# - Economic profiling
# - Reading level labeling`}
              </div>
              <div className="text-sm text-gray-700">
                <strong>Enforcement:</strong> Automated PII scanner blocks storage of name/DOB/SSN
              </div>
            </div>

            {/* Human Override */}
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-6 h-6 text-blue-700" />
                <div className="font-bold text-lg text-blue-900">Human Override</div>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-gray-300 mb-3">
{`# Librarian dashboard controls
/admin/override:
  - Block specific recommendations
  - Boost underrepresented books
  - Set age-appropriateness rules
  - Review flagged content

# Example: Manual age restriction
PUT /books/{id}/age_override
{
  "min_age": 16,
  "reason": "Mature themes",
  "librarian_id": "..."
}`}
              </div>
              <div className="text-sm text-gray-700">
                <strong>Enforcement:</strong> All AI recs can be overridden - librarian has final say
              </div>
            </div>

            {/* Audit Logs */}
            <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-purple-700" />
                <div className="font-bold text-lg text-purple-900">Audit Logs</div>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-gray-300 mb-3">
{`# Every recommendation logged
{
  "timestamp": "2026-02-05T14:23:11Z",
  "query": "scary books",
  "user_id_hash": "7f3a8...",
  "recommendations": [book_ids],
  "scores": {"vector": 0.87, ...},
  "checkout": true,  # Did they borrow?
  "feedback": "thumbs_up"
}

# Retention: 90 days (FERPA minimum)
# Anonymized after 90 days`}
              </div>
              <div className="text-sm text-gray-700">
                <strong>Enforcement:</strong> Quarterly audits review for bias/errors
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-6">
            <div className="font-bold text-xl text-gray-900 mb-3">Content Moderation</div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-2">Age-Appropriateness Filters</div>
                <div className="text-sm text-gray-700 mb-3">No recommendations outside user's age_range ±2 years (unless explicit search)</div>
                <div className="bg-slate-900 rounded-lg p-3 font-mono text-xs text-green-400">
{`if book.age_range.upper > user.age + 2:
    penalty_multiplier = 0.0  # Exclude
elif book.age_range.lower < user.age - 2:
    penalty_multiplier = 0.3  # Heavy penalty`}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-2">Banned Books Review</div>
                <div className="text-sm text-gray-700 mb-3">Librarian can flag books for district review (doesn't auto-remove)</div>
                <div className="bg-slate-900 rounded-lg p-3 font-mono text-xs text-green-400">
{`POST /admin/flag_for_review
{
  "book_id": "...",
  "reason": "Challenged content",
  "status": "under_review"
}
# Book still searchable until board decision`}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goal 6: Iteration Thinking */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-indigo-600" />
            <h3 className="text-2xl font-bold text-gray-900">Goal 6: System Improves Over Time</h3>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* A/B Testing */}
            <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
              <div className="flex items-center gap-2 mb-4">
                <TestTube className="w-6 h-6 text-indigo-700" />
                <div className="font-bold text-lg text-indigo-900">A/B Testing Framework</div>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-gray-300 mb-3">
{`# Example: Test new weight distribution
variants = {
  "control": {
    "vector": 0.40, "collab": 0.35,
    "pop": 0.15, "recency": 0.10
  },
  "treatment": {
    "vector": 0.35, "collab": 0.40,
    "pop": 0.15, "recency": 0.10
  }
}

# Split traffic 50/50
user_variant = hash(user_id) % 2
weights = variants["treatment" if user_variant else "control"]

# Measure after 2 weeks:
# - Checkout rate
# - Return borrower rate
# - Diversity score`}
              </div>
              <div className="text-sm text-gray-700">
                <strong>Current plan:</strong> Run 3 A/B tests in first 6 months to tune weights
              </div>
            </div>

            {/* Feedback Loops */}
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
              <div className="font-bold text-lg text-green-900 mb-4">Feedback Loops</div>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded-lg p-3 border border-green-300">
                  <div className="font-semibold text-green-700 mb-1">Implicit Feedback</div>
                  <div className="text-gray-700">Did user check out recommended book? (binary signal)</div>
                  <div className="text-xs text-gray-600 mt-1 font-mono">checkout_rate = sum(borrowed) / sum(recommended)</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-300">
                  <div className="font-semibold text-green-700 mb-1">Explicit Feedback</div>
                  <div className="text-gray-700">Thumbs up/down on recommendation (ternary: +1/0/-1)</div>
                  <div className="text-xs text-gray-600 mt-1 font-mono">rating = (thumbs_up - thumbs_down) / total_ratings</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-300">
                  <div className="font-semibold text-green-700 mb-1">Return Signal</div>
                  <div className="text-gray-700">Did user borrow another book within 30 days? (retention)</div>
                  <div className="text-xs text-gray-600 mt-1 font-mono">return_rate = users_borrowed_again / total_users</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Model Retraining */}
            <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
              <div className="font-bold text-lg text-purple-900 mb-4">Model Retraining Cadence</div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-purple-300">
                  <div className="font-semibold text-purple-700 mb-1">Embeddings (Batch)</div>
                  <div className="text-sm text-gray-700">Nightly: New books added to catalog</div>
                  <div className="text-xs text-gray-600 font-mono mt-1">cron: 0 2 * * * python embed_new_books.py</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-300">
                  <div className="font-semibold text-purple-700 mb-1">Collaborative Filtering</div>
                  <div className="text-sm text-gray-700">Weekly: Rebuild user-user similarity matrix</div>
                  <div className="text-xs text-gray-600 font-mono mt-1">cron: 0 3 * * 0 python retrain_collab.py</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-300">
                  <div className="font-semibold text-purple-700 mb-1">Hybrid Weights</div>
                  <div className="text-sm text-gray-700">Quarterly: A/B test results inform weight updates</div>
                  <div className="text-xs text-gray-600 font-mono mt-1">Manual update after statistical significance</div>
                </div>
              </div>
            </div>

            {/* Prompt Tuning */}
            <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300">
              <div className="font-bold text-lg text-cyan-900 mb-4">Prompt Tuning (LLM Query Parser)</div>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-gray-300 mb-3">
{`# Version control for prompts
prompts/
├── v1_baseline.txt  # 89% accuracy
├── v2_with_examples.txt  # 92% accuracy ✓
└── v3_chain_of_thought.txt  # Testing...

# A/B test new prompts:
GET /recommendations?prompt_version=v3

# Metrics:
# - Parse accuracy (manual eval on 100 samples)
# - Latency (p95)
# - User satisfaction (checkout rate)`}
              </div>
              <div className="text-sm text-gray-700">
                <strong>Current:</strong> v2 with examples (92% accuracy). Testing v3 with chain-of-thought reasoning.
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-8 text-white mt-8">
          <div className="text-2xl font-bold mb-4">Why This Matters: Long-Term Ownership Signals</div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
              <div className="font-bold text-lg mb-2">Trustworthy</div>
              <div className="text-sm opacity-90">No profiling, human override, audit logs, content moderation</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
              <div className="font-bold text-lg mb-2">Self-Improving</div>
              <div className="text-sm opacity-90">A/B tests, feedback loops, retraining cadence, prompt tuning</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
              <div className="font-bold text-lg mb-2">Production-Ready</div>
              <div className="text-sm opacity-90">Not a prototype - designed for continuous improvement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}