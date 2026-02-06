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
            Trustworthiness in education + System improves over time
          </p>
        </div>

        {/* Governance & Safety */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-red-600" />
            <h3 className="text-2xl font-bold text-gray-900">Governance & Safety (Critical for Education)</h3>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* No Profiling */}
            <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <UserX className="w-6 h-6 text-red-600" />
                  <div className="font-bold text-lg text-gray-900">No Profiling</div>
                </div>
                <div className="text-xs bg-red-600 text-white px-2 py-1 rounded font-semibold">P1 CRITICAL</div>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                • Hash library cards (one-way)<br/>
                • Store age only, no DOB/name<br/>
                • Automated PII scanner<br/>
                • FERPA/COPPA compliance
              </div>
              <div className="text-sm text-blue-600 mt-3 font-semibold">
                Planned for implementation
              </div>
            </div>

            {/* Human Override */}
            <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Eye className="w-6 h-6 text-amber-600" />
                  <div className="font-bold text-lg text-gray-900">Human Override</div>
                </div>
                <div className="text-xs bg-red-600 text-white px-2 py-1 rounded font-semibold">P1 CRITICAL</div>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                • Block/boost recommendations<br/>
                • Set age restrictions<br/>
                • Review flagged content<br/>
                • Librarian has final say
              </div>
              <div className="text-sm text-blue-600 mt-3 font-semibold">
                Planned for implementation
              </div>
            </div>

            {/* Audit Logs */}
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <div className="font-bold text-lg text-gray-900">Audit Logs</div>
                </div>
                <div className="text-xs bg-red-600 text-white px-2 py-1 rounded font-semibold">P1 CRITICAL</div>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                • Log all recommendations<br/>
                • Track checkout/feedback<br/>
                • 90-day retention (FERPA)<br/>
                • Quarterly bias audits
              </div>
              <div className="text-sm text-blue-600 mt-3 font-semibold">
                Planned for implementation
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-gray-900">Age Filtering</div>
                <div className="text-xs bg-green-600 text-white px-2 py-1 rounded font-semibold">PARTIAL</div>
              </div>
              <div className="text-sm text-gray-700">
                ✓ Hard filter by age_min/age_max<br/>
                • Soft penalty logic (±2 years) planned
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-gray-900">Content Review</div>
                <div className="text-xs bg-purple-600 text-white px-2 py-1 rounded font-semibold">P2 PLANNED</div>
              </div>
              <div className="text-sm text-gray-700">
                • Flag books for district review<br/>
                • Workflow with approval process
              </div>
            </div>
          </div>
        </div>

        {/* Iteration */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-indigo-600" />
            <h3 className="text-2xl font-bold text-gray-900">System Improves Over Time</h3>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Feedback */}
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold text-lg text-gray-900">Feedback Loops</div>
                <div className="text-xs bg-green-600 text-white px-2 py-1 rounded font-semibold">PARTIAL</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Explicit (thumbs up/down)</span>
                  <span className="text-xs text-green-600">✓ Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Implicit (checkout tracking)</span>
                  <span className="text-xs text-blue-600">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Return signal (30-day)</span>
                  <span className="text-xs text-blue-600">Planned</span>
                </div>
              </div>
            </div>

            {/* Retraining */}
            <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold text-lg text-gray-900">Retraining</div>
                <div className="text-xs bg-purple-600 text-white px-2 py-1 rounded font-semibold">PARTIAL</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Embeddings (nightly)</span>
                  <span className="text-xs text-green-600">✓ Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Collab filtering (weekly)</span>
                  <span className="text-xs text-blue-600">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Weight tuning (quarterly)</span>
                  <span className="text-xs text-blue-600">Planned</span>
                </div>
              </div>
            </div>

            {/* A/B Testing */}
            <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TestTube className="w-6 h-6 text-cyan-600" />
                  <div className="font-bold text-lg text-gray-900">Optimization</div>
                </div>
                <div className="text-xs bg-cyan-600 text-white px-2 py-1 rounded font-semibold">P2 PLANNED</div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                • A/B testing framework<br/>
                • Prompt versioning<br/>
                • Weight experiments<br/>
                • Performance optimization
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white mt-8">
          <div className="text-2xl font-bold mb-4">Implementation Roadmap: MVP Foundation + Production Features</div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
              <div className="font-bold text-lg mb-2">✓ Core MVP (Complete)</div>
              <div className="text-sm opacity-90">
                • Three auth modes<br/>
                • Explicit feedback<br/>
                • Embedding jobs<br/>
                • Age filtering (hard)
              </div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
              <div className="font-bold text-lg mb-2">🎯 P1 Production Ready</div>
              <div className="text-sm opacity-90">
                • FERPA/COPPA compliance<br/>
                • Audit logging<br/>
                • Human override system<br/>
                • Content review flagging
              </div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
              <div className="font-bold text-lg mb-2">🚀 P2 Enhancement</div>
              <div className="text-sm opacity-90">
                • A/B testing framework<br/>
                • Implicit feedback tracking<br/>
                • Weight tuning pipeline<br/>
                • Prompt versioning
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white border-opacity-30 text-sm">
            <strong>Timeline:</strong> P1 features targeted for 6-8 week implementation before school deployment
          </div>
        </div>
      </div>
    </div>
  );
}