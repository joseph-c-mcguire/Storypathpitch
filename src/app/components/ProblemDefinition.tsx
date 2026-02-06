import { Target, AlertTriangle, CheckCircle, Database, TrendingUp } from 'lucide-react';

export function ProblemDefinition() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Success Metrics & Data Reality
        </span>

        {/* Header */}
        <div className="mt-4 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Before Building: Define Success
          </h2>
          <p className="text-lg text-gray-600">
            Supporting Providence's 24%→50% goal with measurable leading indicators
          </p>
        </div>

        {/* District/State/National Context */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="text-xl font-bold text-gray-900 mb-4">Published Literacy Goals We're Supporting</div>
          <div className="grid grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="text-sm font-semibold text-blue-600 uppercase mb-1">Providence District</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">24% → 50%</div>
              <div className="text-sm text-gray-600">3rd graders reading on grade level by 2030</div>
              <div className="text-xs text-gray-500 mt-2">
                <a href="https://www.providenceschools.org/about-us/school-board/community-listening-sessions" className="underline" target="_blank" rel="noopener noreferrer">
                  PPSD 2025-2030 Goals
                </a>
              </div>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <div className="text-sm font-semibold text-purple-600 uppercase mb-1">Rhode Island State</div>
              <div className="text-lg font-bold text-gray-900 mb-1">Personal Literacy Plans</div>
              <div className="text-sm text-gray-600">Required intervention planning to accelerate students to grade-level proficiency</div>
              <div className="text-xs text-gray-500 mt-2">
                <a href="https://ride.ri.gov/instruction-assessment/literacy/personal-literacy-plans" className="underline" target="_blank" rel="noopener noreferrer">
                  RI Dept of Education
                </a>
              </div>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <div className="text-sm font-semibold text-green-600 uppercase mb-1">National Benchmark</div>
              <div className="text-lg font-bold text-gray-900 mb-1">3rd Grade Proficiency</div>
              <div className="text-sm text-gray-600">Campaign for Grade-Level Reading: 100%+ increase in low-income students reading proficiently</div>
              <div className="text-xs text-gray-500 mt-2">
                <a href="https://www.imls.gov/our-work/partnerships/campaign-grade-level-reading" className="underline" target="_blank" rel="noopener noreferrer">
                  IMLS Partnership
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics Defined First */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white mb-8">
          <div className="text-xl font-bold mb-1">Success Metrics (Defined Before Building)</div>
          <div className="text-sm opacity-90 mb-4">
            <strong>The Strategy:</strong> Grade-level proficiency is a <em>lagging indicator</em>. We measure <em>leading indicators</em> that drive reading volume and engagement.
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="text-sm font-semibold mb-3">How Leading Indicators Drive the Lagging Goal:</div>
            <div className="flex items-center justify-center gap-2">
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-3 flex-1 text-center">
                <div className="text-base font-bold mb-1">Recommendation Click-Through</div>
                <div className="text-xs opacity-90">Students see relevant books</div>
              </div>
              <div className="text-xl font-bold opacity-75">→</div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-3 flex-1 text-center">
                <div className="text-base font-bold mb-1">Checkout Conversion</div>
                <div className="text-xs opacity-90">They borrow what interests them</div>
              </div>
              <div className="text-xl font-bold opacity-75">→</div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-3 flex-1 text-center">
                <div className="text-base font-bold mb-1">Repeat Borrowing</div>
                <div className="text-xs opacity-90">Reading becomes a habit</div>
              </div>
              <div className="text-xl font-bold opacity-75">→</div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-3 flex-1 text-center">
                <div className="text-base font-bold mb-1">Reading Volume ↑</div>
                <div className="text-xs opacity-90">Correlates with proficiency gains</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transition/Segue */}
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
          <div className="text-base font-semibold text-gray-900 mb-1">
            Now that success is defined, the question becomes:
          </div>
          <div className="text-sm text-gray-700">
            How do we architect a system that respects student privacy, works with messy real-world data, and delivers personalized recommendations that drive these metrics? Let's turn ambiguity into concrete technical decisions.
          </div>
        </div>


      </div>
    </div>
  );
}