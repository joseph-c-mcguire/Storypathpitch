import { Shield, Lock, Eye, UserX, AlertTriangle, Check, BookX, Filter } from 'lucide-react';

export function TrustAndSafety() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">
          Slide 8
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          Trust & Safety Governance
        </h2>
        <p className="text-xl text-gray-600">
          Privacy-first, FERPA/COPPA compliant, with human oversight
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-600 rounded mt-4" />
      </div>

      {/* Critical Privacy Commitment */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg p-8 mb-12">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold mb-3">Critical Privacy Commitment</h3>
            <p className="text-gray-800 text-lg mb-4">
              StoryPath is designed with privacy-first principles. <strong>We will never sell,
              share, or monetize student data.</strong> All data collection serves only to improve
              book recommendations for the library's patrons.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-sm mb-2">✓ FERPA Compliant</p>
                <p className="text-xs text-gray-700">
                  Student education records are protected. Only library staff can access individual 
                  patron data.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-sm mb-2">✓ COPPA Compliant</p>
                <p className="text-xs text-gray-700">
                  Anonymous mode uses coarse age bands (no exact age). No PII collected from children under 13.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Security Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold">Data Minimization</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Anonymous Mode Available</p>
                <p className="text-xs text-gray-600">No login required. Only age band selection (Child/Teen).</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">No PII in Anonymous Mode</p>
                <p className="text-xs text-gray-600">Name, email, address—none collected unless user logs in.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Minimal Data Storage</p>
                <p className="text-xs text-gray-600">Logged-in: Library card ID + age + borrow history only.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Lock className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold">Access Controls</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Role-Based Permissions</p>
                <p className="text-xs text-gray-600">Students see recommendations. Librarians manage books. Admins control system.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Secure Authentication</p>
                <p className="text-xs text-gray-600">Password hashing, session management, optional MFA.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">IP Whitelisting Option</p>
                <p className="text-xs text-gray-600">Limit admin access to library network IPs.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Eye className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-bold">Data Transparency</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Visible Data Collection</p>
                <p className="text-xs text-gray-600">Users see exactly what data is stored in their profile.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Export Your Data</p>
                <p className="text-xs text-gray-600">Students/parents can request full data export anytime.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Clear Privacy Policy</p>
                <p className="text-xs text-gray-600">Plain-language explanation of what data is collected and why.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <UserX className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-lg font-bold">Right to Deletion</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Account Deletion</p>
                <p className="text-xs text-gray-600">Students can delete their account and all data instantly.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Automatic Data Purging</p>
                <p className="text-xs text-gray-600">Anonymous session data purged after 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Inactive Account Cleanup</p>
                <p className="text-xs text-gray-600">Accounts inactive for 2 years are auto-deleted (configurable).</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Moderation & Safety */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-6">Content Moderation & Safety Controls</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-6 h-6" />
              <h4 className="font-bold text-lg">Age Filters</h4>
            </div>
            <ul className="text-sm space-y-2 opacity-90">
              <li>• <strong>Family-Safe Mode:</strong> Always on in anonymous mode. Blocks mature content.</li>
              <li>• <strong>Grade-Band Matching:</strong> Recommendations filtered by reading level + age.</li>
              <li>• <strong>Configurable Policies:</strong> Librarians set school-specific content rules.</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <BookX className="w-6 h-6" />
              <h4 className="font-bold text-lg">Block Lists</h4>
            </div>
            <ul className="text-sm space-y-2 opacity-90">
              <li>• <strong>Manual Override:</strong> Librarians can block specific books from recommendations.</li>
              <li>• <strong>Keyword Blocking:</strong> Filter out books with flagged terms (violence, profanity).</li>
              <li>• <strong>Community Reports:</strong> Students/parents can flag inappropriate suggestions.</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6" />
              <h4 className="font-bold text-lg">Human Oversight</h4>
            </div>
            <ul className="text-sm space-y-2 opacity-90">
              <li>• <strong>Librarian Review:</strong> All negative feedback reviewed by library staff.</li>
              <li>• <strong>Audit Logs:</strong> Track what books were recommended and why.</li>
              <li>• <strong>Override Controls:</strong> Librarians have final say on all recommendations.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-6">Why Trust & Safety is Non-Negotiable</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-3">For Parents & Administrators</h4>
            <p className="text-sm text-gray-700 mb-3">
              Libraries handle sensitive data about children's reading habits. A privacy breach would 
              be catastrophic for community trust.
            </p>
            <p className="text-xs text-gray-600 italic">
              "If we're going to use AI, we need absolute certainty that student data is protected and 
              content is appropriate. No exceptions."
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
            <h4 className="font-bold text-lg mb-3">For Librarians</h4>
            <p className="text-sm text-gray-700 mb-3">
              Librarians are responsible for ensuring age-appropriate recommendations. They need tools 
              to audit, override, and control the AI.
            </p>
            <p className="text-xs text-gray-600 italic">
              "I can't recommend a book to a 9-year-old without knowing it's safe. I need to see why the 
              AI suggested it and be able to block it if needed."
            </p>
          </div>
        </div>

        <div className="mt-6 bg-green-50 rounded-lg p-6">
          <p className="text-sm text-gray-700">
            <strong>Bottom line:</strong> StoryPath isn't a black box. It's a tool that <em>amplifies</em> 
            librarian expertise while maintaining strict privacy controls, transparent operations, and 
            human oversight at every critical decision point.
          </p>
        </div>
      </div>
    </div>
  );
}
