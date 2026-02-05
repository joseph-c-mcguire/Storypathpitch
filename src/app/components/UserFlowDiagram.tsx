import { User, BookOpen, Shield, ArrowRight, CheckCircle, XCircle, ArrowDown } from 'lucide-react';
import { LiveDemoPrompt } from './LiveDemoPrompt';

export function UserFlowDiagram() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="mb-12">
        <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
          Slide 4
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          User Flow Diagram
        </h2>
        <p className="text-xl text-gray-600">
          Three access modes, one seamless experience
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded mt-4" />
      </div>

      {/* Three User Types Header */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-400 to-green-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <User className="w-6 h-6" />
            <h3 className="text-xl font-bold">Anonymous User</h3>
          </div>
          <p className="text-sm opacity-90">Kiosk Mode</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>• No library card</li>
            <li>• Age-based filtering</li>
            <li>• 24-hour session</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-6 h-6" />
            <h3 className="text-xl font-bold">Patron</h3>
          </div>
          <p className="text-sm opacity-90">Library Card Login</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>• Library card + age</li>
            <li>• Borrowing history</li>
            <li>• 24-hour session</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-6 h-6" />
            <h3 className="text-xl font-bold">Librarian</h3>
          </div>
          <p className="text-sm opacity-90">Staff Mode</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>• Card + password</li>
            <li>• Admin dashboard</li>
            <li>• 8-hour session</li>
          </ul>
        </div>
      </div>

      {/* Flow Diagram */}
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-6">Complete User Journey</h3>
        
        {/* Entry Point */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg">
            User Opens StoryPath App
          </div>
          <ArrowDown className="w-6 h-6 text-gray-600 my-3" />
          <div className="bg-gray-100 px-6 py-3 rounded-lg border-2 border-gray-300">
            Check localStorage for existing token
          </div>
        </div>

        {/* Decision Point */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 border-2 border-yellow-400 px-6 py-3 rounded-lg">
              Token exists?
            </div>
          </div>
        </div>

        {/* Two Paths */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* YES - Go to main app */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-700">YES - Valid Token</span>
            </div>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 px-4 py-2 rounded">
                Verify token validity
              </div>
              <ArrowDown className="w-4 h-4 text-gray-400 mx-auto" />
              <div className="bg-green-50 border border-green-200 px-4 py-2 rounded">
                Load user data
              </div>
              <ArrowDown className="w-4 h-4 text-gray-400 mx-auto" />
              <div className="bg-green-500 text-white px-4 py-3 rounded font-semibold">
                → Main App Interface
              </div>
            </div>
          </div>

          {/* NO - Show login */}
          <div className="border-l-4 border-red-500 pl-6">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-red-700">NO - No Token</span>
            </div>
            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 px-4 py-2 rounded">
                Display LoginPage
              </div>
              <ArrowDown className="w-4 h-4 text-gray-400 mx-auto" />
              <div className="bg-red-50 border border-red-200 px-4 py-2 rounded">
                Show 3 tabs: Browse | Library Card | Staff
              </div>
              <ArrowDown className="w-4 h-4 text-gray-400 mx-auto" />
              <div className="bg-gray-200 px-4 py-2 rounded text-sm">
                User selects login method ↓
              </div>
            </div>
          </div>
        </div>

        {/* Three Login Flows */}
        <div className="border-t-2 border-gray-300 pt-8">
          <h4 className="text-xl font-bold mb-6 text-center">Login Flow (3 Paths)</h4>
          
          <div className="grid grid-cols-3 gap-4">
            {/* Anonymous Flow */}
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-400">
              <h5 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <User className="w-4 h-4" />
                Anonymous Login
              </h5>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded border border-green-200">
                  1. Select age group
                </div>
                <div className="bg-white p-2 rounded border border-green-200">
                  2. Enter exact age
                </div>
                <div className="bg-white p-2 rounded border border-green-200">
                  3. Toggle family-safe mode
                </div>
                <div className="bg-green-600 text-white p-2 rounded font-semibold text-xs">
                  POST /api/v1/auth/anonymous
                </div>
                <div className="bg-white p-2 rounded border border-green-200">
                  → Receive JWT tokens
                </div>
                <div className="bg-white p-2 rounded border border-green-200">
                  → Save to localStorage
                </div>
                <div className="bg-green-700 text-white p-2 rounded font-semibold">
                  ✓ Main App
                </div>
              </div>
            </div>

            {/* Patron Flow */}
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-400">
              <h5 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Patron Login
              </h5>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded border border-blue-200">
                  1. Enter library card
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  2. Enter age (verify)
                </div>
                <div className="bg-blue-600 text-white p-2 rounded font-semibold text-xs">
                  POST /api/v1/auth/login
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  → Verify card exists
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  → Validate age match
                </div>
                <div className="bg-white p-2 rounded border border-blue-200">
                  → Receive JWT tokens
                </div>
                <div className="bg-blue-700 text-white p-2 rounded font-semibold">
                  ✓ Main App + History
                </div>
              </div>
            </div>

            {/* Librarian Flow */}
            <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-400">
              <h5 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Librarian Login
              </h5>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded border border-purple-200">
                  1. Enter library card
                </div>
                <div className="bg-white p-2 rounded border border-purple-200">
                  2. Enter password
                </div>
                <div className="bg-purple-600 text-white p-2 rounded font-semibold text-xs">
                  POST /api/v1/auth/librarian/login
                </div>
                <div className="bg-white p-2 rounded border border-purple-200">
                  → Verify password hash
                </div>
                <div className="bg-white p-2 rounded border border-purple-200">
                  → Check librarian role
                </div>
                <div className="bg-white p-2 rounded border border-purple-200">
                  → JWT (8hr expiry)
                </div>
                <div className="bg-purple-700 text-white p-2 rounded font-semibold">
                  ✓ Admin Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main App Flow */}
        <div className="border-t-2 border-gray-300 pt-8 mt-8">
          <h4 className="text-xl font-bold mb-6 text-center">Main App - Book Discovery Flow</h4>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold w-full max-w-2xl text-center">
              User enters chat interface
            </div>
            
            <ArrowDown className="w-6 h-6 text-gray-600" />
            
            <div className="bg-gray-100 px-6 py-3 rounded-lg border-2 border-gray-300 w-full max-w-2xl">
              User types: "I like fantasy"
            </div>
            
            <ArrowDown className="w-6 h-6 text-gray-600" />
            
            <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-400">
                <div className="font-semibold text-blue-700 mb-2">Step 1: Intent Analysis</div>
                <div className="text-sm space-y-1">
                  <div className="bg-white p-2 rounded">POST /api/v1/agent/decide</div>
                  <div className="bg-white p-2 rounded">→ DeepSeek LLM parses query</div>
                  <div className="bg-white p-2 rounded">→ Extract filters: genre="fantasy"</div>
                  <div className="bg-blue-600 text-white p-2 rounded font-semibold">
                    action: RECOMMENDATION_SEARCH
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
                <div className="font-semibold text-green-700 mb-2">Step 2: Get Recommendations</div>
                <div className="text-sm space-y-1">
                  <div className="bg-white p-2 rounded">POST /api/v1/recommendations/chat</div>
                  <div className="bg-white p-2 rounded">→ Vector semantic search</div>
                  <div className="bg-white p-2 rounded">→ Filter by age + family-safe</div>
                  <div className="bg-green-600 text-white p-2 rounded font-semibold">
                    Return top 10 books
                  </div>
                </div>
              </div>
            </div>
            
            <ArrowDown className="w-6 h-6 text-gray-600" />
            
            <div className="bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold w-full max-w-2xl text-center">
              Display Results: Book cards with cover, title, age range, rating buttons
            </div>
            
            <ArrowDown className="w-6 h-6 text-gray-600" />
            
            <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
              <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400 text-center">
                <div className="font-semibold text-yellow-700 mb-2">User Action: 👍</div>
                <div className="text-sm">Add to reading list</div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-400 text-center">
                <div className="font-semibold text-orange-700 mb-2">User Action: 👎</div>
                <div className="text-sm">Submit feedback</div>
                <div className="text-xs mt-1">POST /api/v1/feedback</div>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg border-2 border-teal-400 text-center">
                <div className="font-semibold text-teal-700 mb-2">User Action: Checkout</div>
                <div className="text-sm">Borrow book</div>
                <div className="text-xs mt-1">POST /api/v1/borrow/checkout</div>
              </div>
            </div>
          </div>
        </div>

        {/* Librarian Admin Flow */}
        <div className="border-t-2 border-gray-300 pt-8 mt-8">
          <h4 className="text-xl font-bold mb-6 text-center">Librarian Admin Flow</h4>
          
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-400">
              <div className="font-bold text-purple-700 mb-2 text-sm">User Management</div>
              <ul className="text-xs space-y-1">
                <li>• Search patrons</li>
                <li>• View profiles</li>
                <li>• Check history</li>
                <li>• Track engagement</li>
              </ul>
            </div>
            
            <div className="bg-indigo-100 p-4 rounded-lg border-2 border-indigo-400">
              <div className="font-bold text-indigo-700 mb-2 text-sm">Book Management</div>
              <ul className="text-xs space-y-1">
                <li>• Add by ISBN</li>
                <li>• Bulk CSV import</li>
                <li>• Edit metadata</li>
                <li>• Archive books</li>
              </ul>
            </div>
            
            <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-400">
              <div className="font-bold text-blue-700 mb-2 text-sm">Background Jobs</div>
              <ul className="text-xs space-y-1">
                <li>• Process embeddings</li>
                <li>• Generate recs</li>
                <li>• Cleanup tokens</li>
                <li>• View job status</li>
              </ul>
            </div>
            
            <div className="bg-cyan-100 p-4 rounded-lg border-2 border-cyan-400">
              <div className="font-bold text-cyan-700 mb-2 text-sm">Analytics</div>
              <ul className="text-xs space-y-1">
                <li>• User statistics</li>
                <li>• Popular books</li>
                <li>• Circulation data</li>
                <li>• Feedback trends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
        <h3 className="font-bold text-lg mb-4">Flow Highlights</h3>
        <div className="grid grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Session Management:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Anonymous: 24-hour JWT token</li>
              <li>• Patron: 24-hour with refresh (7 days)</li>
              <li>• Librarian: 8-hour (security)</li>
              <li>• Auto-refresh on expiry</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Recommendation Engine:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• DeepSeek LLM intent parsing</li>
              <li>• OpenAI vector embeddings</li>
              <li>• Age + preference filtering</li>
              <li>• Real-time explanations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Data Flow:</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• localStorage for tokens</li>
              <li>• Supabase for persistence</li>
              <li>• Real-time analytics updates</li>
              <li>• Accessibility settings persist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Live Demo Prompt */}
      <LiveDemoPrompt 
        title="User Authentication & Flow"
        description="See the complete user journey from login to book discovery in action"
        demoPoints={[
          "Anonymous login with age selection",
          "Patron login with library card",
          "Main app interface & navigation",
          "Token management & session handling"
        ]}
        variant="primary"
      />
    </div>
  );
}