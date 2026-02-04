import { Tablet, Shield, TrendingUp } from 'lucide-react';

export function SolutionSlide() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="mb-12">
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Slide 3
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          What We're Proposing
        </h2>
        <p className="text-xl text-gray-600">
          Two experiences, one smart system
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Student Kiosk */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Tablet className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Student Kiosk Mode</h3>
              <p className="text-sm text-gray-600">(iPad-friendly)</p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="font-semibold text-blue-900 mb-1.5">Student says:</p>
              <p className="text-sm text-gray-700">
                "I liked <em>Percy Jackson</em>" <br />
                OR <br />
                "I want funny mysteries"
              </p>
            </div>

            <div className="flex items-center justify-center py-1">
              <div className="text-2xl text-blue-600">→</div>
            </div>

            <div className="bg-green-50 rounded-lg p-3">
              <p className="font-semibold text-green-900 mb-1.5">System shows:</p>
              <ul className="text-sm text-gray-700 space-y-0.5">
                <li>• Up to 3 instant picks with "why"</li>
                <li>• Availability status (on shelf, on hold, etc.)</li>
                <li>• Location in library</li>
                <li>• Option to save/print/send to librarian</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-600">
              <strong>Key features:</strong> Anonymous mode (no login required), 
              works on school iPads, accessible (ADA compliant)
            </p>
          </div>
        </div>

        {/* Librarian Portal */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-purple-600">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Librarian Portal</h3>
              <p className="text-sm text-gray-600">(Admin web app)</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="font-semibold text-purple-900 mb-2">Manage:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Age filters and content policies</li>
                <li>• Tags and themes for local catalog</li>
                <li>• "Staff picks" and featured lists</li>
                <li>• Override recommendations for specific books</li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Monitor:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Top student queries</li>
                <li>• Most recommended books</li>
                <li>• Recommendation → checkout conversion</li>
                <li>• System quality metrics</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="font-semibold text-blue-900 mb-2">Control:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Pin/unpin recommendations</li>
                <li>• Block specific titles</li>
                <li>• Adjust for school events (e.g., "Hispanic Heritage Month")</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-10 text-white">
        <div className="flex items-center gap-4 mb-6">
          <TrendingUp className="w-12 h-12" />
          <h3 className="text-3xl font-bold">What Success Looks Like</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6 text-center">
            <div className="text-5xl font-bold mb-2">+25%</div>
            <p className="text-lg">Increase in checkouts per month</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6 text-center">
            <div className="text-5xl font-bold mb-2">+35%</div>
            <p className="text-lg">Increase in repeat borrowing within 30 days</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6 text-center">
            <div className="text-5xl font-bold mb-2">-60%</div>
            <p className="text-lg">Reduced time to make recommendation</p>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6">
          <p className="text-sm opacity-90">
            <strong>Baseline (Providence Library):</strong> Current average is ~2.5 books/student/month, 
            40% return-to-borrow rate, 5-10 min per recommendation. Targets based on similar K-12 
            recommendation pilots (Nashville, Seattle, Austin public libraries).
          </p>
        </div>
      </div>
    </div>
  );
}