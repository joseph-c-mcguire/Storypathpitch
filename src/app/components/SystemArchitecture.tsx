import { Server, Database, Zap, Lock, BarChart3, FileText, Shield, Globe } from 'lucide-react';

export function SystemArchitecture() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto bg-gray-50">
      <div className="mb-12">
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Technical Architecture
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          System Design & Services
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded" />
      </div>

      {/* Architecture Diagram */}
      <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
        <h3 className="text-2xl font-bold mb-8 text-center">Service Architecture</h3>
        
        <div className="space-y-6">
          {/* Frontend Layer */}
          <div className="border-2 border-blue-300 rounded-xl p-6 bg-blue-50">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
              <h4 className="font-bold text-lg">Frontend Layer</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="font-semibold text-sm mb-1">Anonymous iPad Mode</div>
                <div className="text-xs text-gray-600">Age band + family-safe filter</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="font-semibold text-sm mb-1">Card Login Mode</div>
                <div className="text-xs text-gray-600">Personalized + history</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="font-semibold text-sm mb-1">Admin Dashboard</div>
                <div className="text-xs text-gray-600">Role-based management</div>
              </div>
            </div>
          </div>

          {/* API Gateway */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-300 to-purple-300" />
          </div>

          {/* Core Services */}
          <div className="border-2 border-purple-300 rounded-xl p-6 bg-purple-50">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-purple-600" />
              <h4 className="font-bold text-lg">Core API Services (/api/v1/...)</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <Zap className="w-5 h-5 text-purple-600 mb-2" />
                <div className="font-semibold text-sm mb-1">Agent Service</div>
                <div className="text-xs text-gray-600">/agent</div>
                <div className="text-xs text-gray-500 mt-2">
                  • Parse query<br/>
                  • Clarify query
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <FileText className="w-5 h-5 text-purple-600 mb-2" />
                <div className="font-semibold text-sm mb-1">Recommendations</div>
                <div className="text-xs text-gray-600">/recommendations</div>
                <div className="text-xs text-gray-500 mt-2">• Query search<br/>• Chat interface</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <Database className="w-5 h-5 text-purple-600 mb-2" />
                <div className="font-semibold text-sm mb-1">Books Service</div>
                <div className="text-xs text-gray-600">/books</div>
                <div className="text-xs text-gray-500 mt-2">
                  • Search<br/>
                  • CRUD operations<br/>
                  • ISBN lookup<br/>
                  • Bulk import
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <Shield className="w-5 h-5 text-purple-600 mb-2" />
                <div className="font-semibold text-sm mb-1">Users Service</div>
                <div className="text-xs text-gray-600">/users</div>
                <div className="text-xs text-gray-500 mt-2">
                  • Get/Update/Delete<br/>
                  • List users<br/>
                  • Borrow history<br/>
                  • Bulk import
                </div>
              </div>
            </div>
          </div>

          {/* Support Services */}
          <div className="border-2 border-green-300 rounded-xl p-6 bg-green-50">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-green-600" />
              <h4 className="font-bold text-lg">Support Services</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-sm mb-1">Authentication</div>
                <div className="text-xs text-gray-600 mb-2">/auth</div>
                <div className="text-xs text-gray-500">
                  • Anonymous login<br/>
                  • Patron login<br/>
                  • Librarian login<br/>
                  • Refresh token<br/>
                  • Logout
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-sm mb-1">Feedback</div>
                <div className="text-xs text-gray-600 mb-2">/feedback</div>
                <div className="text-xs text-gray-500">
                  • Submit feedback<br/>
                  • Get summary
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-sm mb-1">Analytics</div>
                <div className="text-xs text-gray-600 mb-2">/analytics</div>
                <div className="text-xs text-gray-500">
                  • Submit feedback<br/>
                  • Summary stats
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-sm mb-1">Borrow History</div>
                <div className="text-xs text-gray-600 mb-2">/borrow</div>
                <div className="text-xs text-gray-500">
                  • Checkout book<br/>
                  • Return book<br/>
                  • User history<br/>
                  • Circulation stats
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-sm mb-1">Jobs</div>
                <div className="text-xs text-gray-600 mb-2">/jobs</div>
                <div className="text-xs text-gray-500">
                  • Status check<br/>
                  • Run job
                </div>
              </div>
            </div>
          </div>

          {/* Admin Services */}
          <div className="border-2 border-indigo-300 rounded-xl p-6 bg-indigo-50">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-indigo-600" />
              <h4 className="font-bold text-lg">Admin Services</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <div className="font-semibold text-sm mb-1">Analytics</div>
                <div className="text-xs text-gray-600 mb-2">/admin/analytics</div>
                <div className="text-xs text-gray-500">System-wide analytics</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <div className="font-semibold text-sm mb-1">Jobs Control</div>
                <div className="text-xs text-gray-600 mb-2">/admin/jobs</div>
                <div className="text-xs text-gray-500">
                  • Embeddings job<br/>
                  • Recommendations job
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <div className="font-semibold text-sm mb-1">Health Check</div>
                <div className="text-xs text-gray-600 mb-2">/admin/health</div>
                <div className="text-xs text-gray-500">Admin health status</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <div className="font-semibold text-sm mb-1">Books Admin</div>
                <div className="text-xs text-gray-600 mb-2">/books</div>
                <div className="text-xs text-gray-500">ISBN metadata lookup</div>
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-gradient-to-b from-green-300 to-orange-300" />
          </div>

          <div className="border-2 border-orange-300 rounded-xl p-6 bg-orange-50">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-orange-600" />
              <h4 className="font-bold text-lg">Data Layer (Supabase)</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="font-semibold text-sm mb-1">Vector DB</div>
                <div className="text-xs text-gray-600">Book embeddings + metadata</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="font-semibold text-sm mb-1">User DB</div>
                <div className="text-xs text-gray-600">Library cards, age, prefs</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="font-semibold text-sm mb-1">Borrow History</div>
                <div className="text-xs text-gray-600">Co-occurrence data</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <div className="font-semibold text-sm mb-1">Feedback DB</div>
                <div className="text-xs text-gray-600">Thumbs up/down + flags</div>
              </div>
            </div>
          </div>

          {/* External Services */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-gradient-to-b from-orange-300 to-gray-300" />
          </div>

          <div className="border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-gray-600" />
              <h4 className="font-bold text-lg">External APIs</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-semibold text-sm mb-1">OpenLibrary API</div>
                <div className="text-xs text-gray-600">Primary metadata source</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-semibold text-sm mb-1">Google Books API</div>
                <div className="text-xs text-gray-600">Fallback enrichment</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-semibold text-sm mb-1">DeepSeek LLM</div>
                <div className="text-xs text-gray-600">Free tagging & parsing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-600" />
            Agent Service Flow
          </h3>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="font-bold text-blue-600">1.</span>
              <span>User submits natural language query</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-600">2.</span>
              <span>LLM parses query into structured filters (genre, age, mood, etc.)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-600">3.</span>
              <span>Agent decides: simple response, DB query, or clarification</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-600">4.</span>
              <span>Calls Vector Inference API with filters</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-600">5.</span>
              <span>Returns top-K recommendations with grounded explanations</span>
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-purple-600" />
            Vector Inference Flow
          </h3>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="font-bold text-purple-600">1.</span>
              <span>Receive query + user context + filters</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-purple-600">2.</span>
              <span>Check cache for recent identical queries</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-purple-600">3.</span>
              <span>Create vector query from text + apply metadata filters (age, genre)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-purple-600">4.</span>
              <span>Query vector DB for top-K similar books</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-purple-600">5.</span>
              <span>Re-rank with diversity rules and user preferences</span>
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-600" />
            Embedding Service Flow
          </h3>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="font-bold text-green-600">1.</span>
              <span>Receive ISBN or Title/Author/Edition from admin</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-green-600">2.</span>
              <span>Query OpenLibrary API (fallback to Google Books)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-green-600">3.</span>
              <span>Use DeepSeek to extract themes, mood, age range from description</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-green-600">4.</span>
              <span>Concatenate: Title + Author + Description + Tags</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-green-600">5.</span>
              <span>Generate vector embedding and store in Supabase</span>
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-orange-600" />
            Authentication Modes
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="font-bold text-orange-600">•</span>
              <div>
                <strong>Anonymous:</strong> Age band selection only, no PII collected, auto-blocks
                18+ content
              </div>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-orange-600">•</span>
              <div>
                <strong>Card Login:</strong> Library card + password, enables borrow history
                recommendations
              </div>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-orange-600">•</span>
              <div>
                <strong>Admin:</strong> Role-based permissions (librarian, admin, developer) via
                Supabase Auth
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}