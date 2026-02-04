import {
  MessageSquare,
  Filter,
  ThumbsUp,
  Repeat,
  FileDown,
  Sparkles,
  Users,
  TrendingUp
} from 'lucide-react';

export function KeyFeatures() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Key Features
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          What Makes StoryPath Effective
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Natural Language Chat</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Students describe what they want in plain English. The system handles vague requests
            like "something magical" or specific ones like "Victorian mystery novels."
          </p>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-sm font-semibold mb-2">Example Queries:</div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>"I want books like Percy Jackson"</li>
              <li>"Show me sad books about the ocean"</li>
              <li>"Fantasy for 13-year-olds"</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-purple-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Filter className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Smart Filtering System</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Multi-layer filtering ensures age-appropriate, available, and relevant results. Filters
            apply automatically based on user context.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <span className="text-gray-700">Age-range matching (e.g., 10-13, 14-17, 18+)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <span className="text-gray-700">Content rating filters (family-safe toggle)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <span className="text-gray-700">Reading level alignment (RI grade bands)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-purple-600 rounded-full" />
              <span className="text-gray-700">Availability check (in library holdings)</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <ThumbsUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Feedback Loop System</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Users provide thumbs up/down on recommendations. Optional flags for "too mature" or
            "too easy" help refine age-range accuracy.
          </p>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-sm font-semibold mb-2">Stored Feedback:</div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• User ID + Timestamp + Response</li>
              <li>• Optional comment for context</li>
              <li>• Flags for content/level issues</li>
              <li>• Used for future model refinement</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Repeat className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold">Hybrid Recommendation</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Combines multiple signals for better accuracy than single-approach systems.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-600 text-white rounded flex items-center justify-center text-xs font-bold flex-shrink-0">
                1
              </div>
              <div className="text-sm text-gray-700">
                <strong>Collaborative:</strong> "Students who read X also read Y"
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-600 text-white rounded flex items-center justify-center text-xs font-bold flex-shrink-0">
                2
              </div>
              <div className="text-sm text-gray-700">
                <strong>Content-based:</strong> Similar themes, mood, genre via vector search
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-600 text-white rounded flex items-center justify-center text-xs font-bold flex-shrink-0">
                3
              </div>
              <div className="text-sm text-gray-700">
                <strong>Diversity ranking:</strong> Avoid showing only popular or same-author books
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-red-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <FileDown className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold">Export & Reporting</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Librarians can export recommendation lists and user analytics in multiple formats for
            reporting and planning.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-gray-700">CSV/PDF/DOCX export formats</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-gray-700">User borrow history summaries</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-gray-700">Popular recommendations report</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-gray-700">Email delivery for scheduled reports</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-indigo-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold">Borrow History Integration</h3>
          </div>
          <p className="text-gray-700 mb-4">
            For logged-in users, the system analyzes their reading patterns to suggest books that
            match their proven interests.
          </p>
          <div className="bg-indigo-50 rounded-lg p-4">
            <div className="text-sm font-semibold mb-2">Personalization Features:</div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Genre preference detection</li>
              <li>• Reading pace matching</li>
              <li>• Author discovery suggestions</li>
              <li>• Series completion tracking</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-teal-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold">Multi-Role Dashboard</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Different interfaces for different users—students get simple search, librarians get
            admin tools, developers get evaluation dashboards.
          </p>
          <div className="space-y-3">
            <div className="text-sm">
              <strong className="text-teal-600">Students:</strong>
              <span className="text-gray-600"> Chat interface, browse recommendations</span>
            </div>
            <div className="text-sm">
              <strong className="text-teal-600">Librarians:</strong>
              <span className="text-gray-600">
                {' '}
                Add books, manage users, view analytics
              </span>
            </div>
            <div className="text-sm">
              <strong className="text-teal-600">Admins:</strong>
              <span className="text-gray-600"> System config, role management, logs</span>
            </div>
            <div className="text-sm">
              <strong className="text-teal-600">Developers:</strong>
              <span className="text-gray-600"> Run evals, monitor services, debug</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-pink-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold">Continuous Improvement</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Built-in evaluation framework and monitoring ensure the system gets better over time.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="text-gray-700">LangSmith integration for LLM eval</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="text-gray-700">Grafana/Prometheus health monitoring</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="text-gray-700">A/B testing framework for ranking changes</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="text-gray-700">Feedback-driven model refinement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}