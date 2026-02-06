import { TrendingUp, Users, BookOpen, Clock, Target, CheckCircle } from 'lucide-react';

export function SuccessMetricsConclusion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-blue-200 font-semibold uppercase text-sm tracking-wider">
          Conclusion
        </span>

        {/* Header */}
        <div className="mt-6 mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Success Metrics & Expected Impact
          </h2>
          <p className="text-2xl text-gray-600">
            Leading indicators that support Providence's goal: 24% → 50% of 3rd graders reading on grade level by 2030
          </p>
        </div>

        {/* KPI Grid */}
        <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-8 border-2 border-white border-opacity-20 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Target KPIs (6 Months Post-Launch)</h3>
            <div className="text-sm bg-yellow-400 bg-opacity-20 border border-yellow-300 px-4 py-2 rounded-lg font-semibold">
              🎯 Proposed Goals (Not Yet Measured)
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-10 h-10 text-yellow-300" />
                <div className="text-4xl font-bold">+30%</div>
              </div>
              <div className="text-lg font-semibold mb-2">Checkout Rate (Goal)</div>
              <div className="text-sm opacity-90">Target: 2.5 → 3.25 books/month per patron</div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-10 h-10 text-green-300" />
                <div className="text-4xl font-bold">+35%</div>
              </div>
              <div className="text-lg font-semibold mb-2">Repeat Patrons (Goal)</div>
              <div className="text-sm opacity-90">Target: 60% → 81% return within 1 month</div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-10 h-10 text-cyan-300" />
                <div className="text-4xl font-bold">24/7</div>
              </div>
              <div className="text-lg font-semibold mb-2">Access Availability (Goal)</div>
              <div className="text-sm opacity-90">Target: Extend beyond librarian hours</div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-10 h-10 text-purple-300" />
                <div className="text-4xl font-bold">80%</div>
              </div>
              <div className="text-lg font-semibold mb-2">User Satisfaction (Goal)</div>
              <div className="text-sm opacity-90">Target: Positive feedback on recommendations</div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-10 h-10 text-orange-300" />
                <div className="text-4xl font-bold">&lt;2s</div>
              </div>
              <div className="text-lg font-semibold mb-2">Response Time (Goal)</div>
              <div className="text-sm opacity-90">Target: Query to recommendation display</div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-10 h-10 text-pink-300" />
                <div className="text-4xl font-bold">95%</div>
              </div>
              <div className="text-lg font-semibold mb-2">System Uptime (Goal)</div>
              <div className="text-sm opacity-90">Target: Kiosk availability</div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Aligned with District & State Goals</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <strong>Providence Goal: 24% → 50%</strong> of 3rd graders reading on grade level by 2030
                  <div className="text-sm opacity-90 mt-1">Our metrics (volume, engagement, access) are leading indicators for this lagging indicator</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <strong>RI Personal Literacy Plans (PLPs):</strong> Support intervention planning
                  <div className="text-sm opacity-90 mt-1">Librarian dashboard identifies struggling readers for PLP referral</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <strong>Campaign for Grade-Level Reading:</strong> 100% increase in low-income children reading proficiently
                  <div className="text-sm opacity-90 mt-1">24/7 access + anonymous mode removes economic barriers</div>
                </div>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white border-opacity-30 text-xs opacity-80">
              <strong>Sources:</strong>
              <a href="https://www.providenceschools.org/about-us/school-board/community-listening-sessions" className="underline ml-1 hover:text-yellow-300" target="_blank" rel="noopener noreferrer">
                Providence Schools
              </a> •
              <a href="https://ride.ri.gov/instruction-assessment/literacy/personal-literacy-plans" className="underline ml-1 hover:text-yellow-300" target="_blank" rel="noopener noreferrer">
                RI Dept of Ed
              </a> •
              <a href="https://www.imls.gov/our-work/partnerships/campaign-grade-level-reading" className="underline ml-1 hover:text-yellow-300" target="_blank" rel="noopener noreferrer">
                IMLS.gov
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Technical Highlights</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <span><strong>Hybrid AI:</strong> LLM + Vector + Collaborative filtering for superior recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <span><strong>Privacy-first:</strong> FERPA + COPPA compliant with anonymous browsing mode</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <span><strong>Production-ready:</strong> Live PoC with 2,847 books from Providence library catalog</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <span><strong>Librarian-centered:</strong> Dashboard empowers staff, doesn't replace their expertise</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Roll Out Plan Summary */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-lg mb-8">
          <h3 className="text-3xl font-bold mb-8">Roll Out Plan Summary</h3>
          <div className="grid grid-cols-4 gap-4 relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-white bg-opacity-30" style={{ marginLeft: '12.5%', marginRight: '12.5%' }}></div>
            
            {/* Phase 1 */}
            <div className="text-center relative z-10">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg ring-4 ring-white ring-opacity-20">
                1
              </div>
              <div className="font-bold text-xl mb-2">Weeks 1-2</div>
              <div className="text-base opacity-90 leading-relaxed">Requirements gathering + Design</div>
            </div>

            {/* Phase 2 */}
            <div className="text-center relative z-10">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg ring-4 ring-white ring-opacity-20">
                2
              </div>
              <div className="font-bold text-xl mb-2">Weeks 3-10</div>
              <div className="text-base opacity-90 leading-relaxed">Development + Testing</div>
            </div>

            {/* Phase 3 */}
            <div className="text-center relative z-10">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg ring-4 ring-white ring-opacity-20">
                3
              </div>
              <div className="font-bold text-xl mb-2">Weeks 11-12</div>
              <div className="text-base opacity-90 leading-relaxed">Pilot deployment (1 library branch)</div>
            </div>

            {/* Phase 4 */}
            <div className="text-center relative z-10">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg ring-4 ring-white ring-opacity-20">
                4
              </div>
              <div className="font-bold text-xl mb-2">Weeks 13-15</div>
              <div className="text-base opacity-90 leading-relaxed">Library system-wide rollout</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl p-12 text-center shadow-2xl">
          <h3 className="text-4xl font-bold mb-4">Ready to Transform Student Reading</h3>
          <p className="text-xl mb-6">
            Let's partner with Providence Public Schools to deliver this system
          </p>
          <div className="flex items-center justify-center gap-8 text-lg">
            <div>
              <div className="font-bold text-2xl">Q1 2026</div>
              <div className="text-sm">Project Kickoff</div>
            </div>
            <div className="text-4xl">→</div>
            <div>
              <div className="font-bold text-2xl">Q4 2026</div>
              <div className="text-sm">District Rollout</div>
            </div>
            <div className="text-4xl">→</div>
            <div>
              <div className="font-bold text-2xl">Q2 2027</div>
              <div className="text-sm">Measurable Impact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}