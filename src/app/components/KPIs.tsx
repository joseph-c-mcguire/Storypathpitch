import { TrendingUp, Users, ThumbsUp, BookOpen, Target, BarChart3 } from 'lucide-react';

export function KPIs() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-green-600 font-semibold uppercase text-sm tracking-wider">
          Slide 11
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          Success Metrics & KPIs
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded" />
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <Target className="w-8 h-8" />
          Primary Goal: Increase Student Reading
        </h3>
        <p className="text-xl">
          Our north star metric is <strong>number of books checked out by students per month</strong>.
          Success means a 30-50% increase within 6 months of deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Primary KPIs</h3>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Books Checked Out</h4>
                <span className="text-sm text-blue-600 font-semibold">Monthly</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Total number of physical book checkouts attributed to StoryPath recommendations
              </p>
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">Target:</div>
                <div className="text-lg font-bold text-blue-600">+30-50% increase</div>
                <div className="text-xs text-gray-600">vs. 6-month pre-deployment baseline</div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Student Engagement Rate</h4>
                <span className="text-sm text-purple-600 font-semibold">Weekly</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Percentage of enrolled students who use StoryPath at least once per week
              </p>
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">Target:</div>
                <div className="text-lg font-bold text-purple-600">40-60% of students</div>
                <div className="text-xs text-gray-600">within first 3 months</div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Recommendation Click-Through</h4>
                <span className="text-sm text-green-600 font-semibold">Per Session</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Percentage of recommendations that students actually check out
              </p>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">Target:</div>
                <div className="text-lg font-bold text-green-600">15-25% conversion</div>
                <div className="text-xs text-gray-600">from recommendation to checkout</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold">Secondary KPIs</h3>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">System Usage Metrics</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Daily Active Users:</strong> Students using system daily (target: 20-30%)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Average Session Duration:</strong> Time spent browsing (target: 3-5 min)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Queries Per Session:</strong> Number of searches per visit (target: 2-4)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Quality Metrics</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <ThumbsUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Recommendation Satisfaction:</strong> Thumbs up ratio (target: {'>'}70%)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ThumbsUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Age-Appropriateness:</strong> "Too mature/easy" flags (target: {'<'}5%)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ThumbsUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Librarian NPS:</strong> Net Promoter Score from staff (target: {'>'} 8/10)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Technical Metrics</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Response Time:</strong> Query to results (target: {'<'}2 seconds)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Uptime:</strong> System availability (target: 99.5%)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Error Rate:</strong> Failed queries (target: {'<'}1%)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-purple-600" />
          <h3 className="text-2xl font-bold">Measurement & Reporting</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-bold mb-3">Weekly Reports</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• System usage stats</li>
              <li>• Error/downtime incidents</li>
              <li>• User feedback highlights</li>
              <li>• New books added</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">
              Delivered via: Email digest to librarians
            </div>
          </div>

          <div className="border-l-4 border-purple-600 pl-4">
            <h4 className="font-bold mb-3">Monthly Reports</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Checkout volume trends</li>
              <li>• Engagement rate analysis</li>
              <li>• Popular book categories</li>
              <li>• Recommendation performance</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">
              Delivered via: PDF/CSV export + dashboard
            </div>
          </div>

          <div className="border-l-4 border-green-600 pl-4">
            <h4 className="font-bold mb-3">Quarterly Reviews</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Goal progress assessment</li>
              <li>• ROI calculation</li>
              <li>• Librarian satisfaction survey</li>
              <li>• Model retraining evaluation</li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">
              Delivered via: In-person meeting + report
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
        <h3 className="text-2xl font-bold mb-6">Data Collection Methods</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-blue-300">Automated Tracking</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Query logs (anonymized) in Supabase</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Recommendation impression/click events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Session duration and interaction counts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>System performance metrics (Prometheus)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-purple-300">Manual Collection</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Checkout attribution (librarian scan tags recommendations)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>User feedback (thumbs up/down, optional comments)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Librarian surveys (monthly satisfaction)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Student focus groups (quarterly qualitative data)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Target className="w-8 h-8" />
          Success Criteria for Pro-Bono Project Approval
        </h3>
        <p className="text-lg mb-6">
          We will measure success at 6 months post-launch based on these criteria:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-6">
            <h4 className="font-bold text-xl mb-4">Must-Have (Green Light)</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-2xl">✓</span>
                <span><strong>+30% checkout increase</strong> compared to baseline</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">✓</span>
                <span><strong>40%+ student weekly usage</strong> rate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">✓</span>
                <span><strong>70%+ recommendation satisfaction</strong> (thumbs up)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">✓</span>
                <span><strong>99%+ uptime</strong> with {'<'}2s response times</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <h4 className="font-bold text-xl mb-4">Stretch Goals (Outstanding)</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-2xl">★</span>
                <span><strong>+50% checkout increase</strong> exceeding expectations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">★</span>
                <span><strong>60%+ student engagement</strong> showing viral adoption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">★</span>
                <span><strong>District interest</strong> in expanding to other schools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">★</span>
                <span><strong>Published case study</strong> for education tech community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600">
        <h3 className="text-xl font-bold mb-4">Why This Matters for Qvest US</h3>
        <p className="text-gray-700 leading-relaxed">
          As a pro-bono project, StoryPath demonstrates Qvest's commitment to educational equity
          while showcasing our expertise in applied AI. Success here establishes a proven model
          that can be replicated across Rhode Island school districts and beyond, positioning
          Qvest as a leader in AI-powered education technology. The measurable impact on student
          reading—a fundamental skill for lifelong success—creates meaningful community value
          while building Qvest's brand in the public sector.
        </p>
      </div>
    </div>
  );
}