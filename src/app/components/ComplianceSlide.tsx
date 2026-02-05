import { Shield, AlertTriangle, CheckCircle, XCircle, Users, Lock, FileText, Eye } from 'lucide-react';

export function ComplianceSlide() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="mb-12">
        <span className="text-purple-400 font-semibold uppercase text-sm tracking-wider">
          Slide 10
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4 text-white">
          Privacy & Compliance
        </h2>
        <p className="text-xl text-gray-300">
          Risk assessment and mitigation strategy
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded mt-4" />
      </div>

      {/* The Risk */}
      <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 shadow-2xl mb-8 border border-red-700">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-8 h-8 text-red-300" />
          <h3 className="text-3xl font-bold text-white">The Risk</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold text-red-100 mb-4">Why COPPA Applies:</h4>
            <div className="space-y-3">
              <div className="bg-black bg-opacity-30 rounded-lg p-4 border border-red-600">
                <div className="flex items-center gap-2 text-red-200 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span className="font-semibold">Mixed Audience</span>
                </div>
                <div className="text-sm text-gray-300">Serves children under 13 alongside adults</div>
              </div>
              
              <div className="bg-black bg-opacity-30 rounded-lg p-4 border border-red-600">
                <div className="flex items-center gap-2 text-red-200 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span className="font-semibold">Education Setting</span>
                </div>
                <div className="text-sm text-gray-300">Used in schools and libraries with minors</div>
              </div>
              
              <div className="bg-black bg-opacity-30 rounded-lg p-4 border border-red-600">
                <div className="flex items-center gap-2 text-red-200 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span className="font-semibold">Personal Data Collection</span>
                </div>
                <div className="text-sm text-gray-300">Names, library cards, ages, reading history, feedback</div>
              </div>
              
              <div className="bg-black bg-opacity-30 rounded-lg p-4 border border-red-600">
                <div className="flex items-center gap-2 text-red-200 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span className="font-semibold">Actual Knowledge</span>
                </div>
                <div className="text-sm text-gray-300">Age verification in login flow confirms child users</div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-red-100 mb-4">Financial Exposure:</h4>
            <div className="bg-black bg-opacity-40 rounded-lg p-6 border-2 border-red-500">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-red-300 mb-2">$53,088</div>
                <div className="text-sm text-gray-300">per violation per child</div>
              </div>
              
              <div className="border-t border-red-600 pt-4 mt-4">
                <div className="text-sm text-gray-300 mb-3">Example scenario:</div>
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>100 children affected</span>
                    <span>× 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3 violations (no consent, no policy, data sharing)</span>
                    <span>× 3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Penalty per violation</span>
                    <span>× $53,088</span>
                  </div>
                  <div className="border-t border-red-600 pt-2 mt-2 flex justify-between font-bold text-red-300 text-base">
                    <span>Total Exposure:</span>
                    <span>$15.9M</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-yellow-900 bg-opacity-50 rounded-lg p-4 border border-yellow-600">
              <div className="text-sm text-yellow-200">
                <span className="font-bold">Recent precedents:</span> TikTok ($92M), YouTube ($136M)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mitigation Strategy */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 shadow-2xl border border-gray-600">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-green-400" />
          <h3 className="text-3xl font-bold text-white">Our Mitigation Strategy</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Age Screening & Consent */}
          <div className="bg-black bg-opacity-40 rounded-xl p-6 border border-gray-600">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-6 h-6 text-blue-400" />
              <h4 className="text-lg font-bold text-white">Age Gate & Consent</h4>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="bg-green-900 bg-opacity-30 rounded p-3 border border-green-700">
                <div className="flex items-center gap-2 text-green-300 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-semibold">Pre-Collection Screening</span>
                </div>
                <ul className="space-y-1 text-xs text-gray-300 ml-6">
                  <li>• Neutral DOB entry (no defaults)</li>
                  <li>• Server-side validation</li>
                  <li>• Prevent age manipulation</li>
                </ul>
              </div>
              
              <div className="bg-green-900 bg-opacity-30 rounded p-3 border border-green-700">
                <div className="flex items-center gap-2 text-green-300 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-semibold">Parental Consent Flow</span>
                </div>
                <ul className="space-y-1 text-xs text-gray-300 ml-6">
                  <li>• Email Plus (internal use)</li>
                  <li>• Credit card verify ($0.01)</li>
                  <li>• School-mediated consent</li>
                </ul>
              </div>
              
              <div className="bg-green-900 bg-opacity-30 rounded p-3 border border-green-700">
                <div className="flex items-center gap-2 text-green-300 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-semibold">Direct Notice Sent</span>
                </div>
                <div className="text-xs text-gray-300 ml-6">
                  30-day consent deadline with full disclosure
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-black bg-opacity-40 rounded-xl p-6 border border-gray-600">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-6 h-6 text-purple-400" />
              <h4 className="text-lg font-bold text-white">Data Protection</h4>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="bg-purple-900 bg-opacity-30 rounded p-3 border border-purple-700">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-semibold">Encryption</span>
                </div>
                <ul className="space-y-1 text-xs text-gray-300 ml-6">
                  <li>• HTTPS (in transit)</li>
                  <li>• AES-256 (at rest)</li>
                  <li>• bcrypt password hashing</li>
                </ul>
              </div>
              
              <div className="bg-purple-900 bg-opacity-30 rounded p-3 border border-purple-700">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-semibold">Data Minimization</span>
                </div>
                <ul className="space-y-1 text-xs text-gray-300 ml-6">
                  <li>• Only essential fields collected</li>
                  <li>• No photos/audio/video</li>
                  <li>• Anonymized vendor sharing</li>
                </ul>
              </div>
              
              <div className="bg-purple-900 bg-opacity-30 rounded p-3 border border-purple-700">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-semibold">Auto-Deletion</span>
                </div>
                <div className="text-xs text-gray-300 ml-6">
                  Daily job enforces retention policy
                </div>
              </div>
            </div>
          </div>

          {/* Parent Rights */}
          <div className="bg-black bg-opacity-40 rounded-xl p-6 border border-gray-600">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-6 h-6 text-cyan-400" />
              <h4 className="text-lg font-bold text-white">Parent Controls</h4>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="bg-cyan-900 bg-opacity-30 rounded p-3 border border-cyan-700">
                <div className="flex items-center gap-2 text-cyan-300 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-semibold">Parent Portal</span>
                </div>
                <ul className="space-y-1 text-xs text-gray-300 ml-6">
                  <li>• View all child data</li>
                  <li>• Edit profile information</li>
                  <li>• Delete account anytime</li>
                  <li>• Revoke consent</li>
                </ul>
              </div>
              
              <div className="bg-cyan-900 bg-opacity-30 rounded p-3 border border-cyan-700">
                <div className="flex items-center gap-2 text-cyan-300 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-semibold">Response Time</span>
                </div>
                <div className="text-xs text-gray-300 ml-6">
                  30-day guarantee for access/deletion requests
                </div>
              </div>
              
              <div className="bg-cyan-900 bg-opacity-30 rounded p-3 border border-cyan-700">
                <div className="flex items-center gap-2 text-cyan-300 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-semibold">Multiple Access Methods</span>
                </div>
                <ul className="space-y-1 text-xs text-gray-300 ml-6">
                  <li>• Email verification</li>
                  <li>• Direct portal URL</li>
                  <li>• Phone support via librarian</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Management */}
        <div className="mt-8 bg-black bg-opacity-40 rounded-xl p-6 border border-gray-600">
          <h4 className="text-lg font-bold text-white mb-4">Third-Party Vendor Compliance</h4>
          
          <div className="grid grid-cols-5 gap-3 text-xs">
            <div className="bg-gray-700 bg-opacity-50 rounded p-3 border border-gray-600">
              <div className="font-semibold text-green-300 mb-1">Supabase</div>
              <div className="text-gray-400 mb-2">Database storage</div>
              <div className="flex items-center gap-1 text-green-400">
                <CheckCircle className="w-3 h-3" />
                <span>COPPA Compliant</span>
              </div>
            </div>
            
            <div className="bg-gray-700 bg-opacity-50 rounded p-3 border border-gray-600">
              <div className="font-semibold text-blue-300 mb-1">OpenAI</div>
              <div className="text-gray-400 mb-2">Embeddings only</div>
              <div className="text-blue-400">
                Contextual use
              </div>
            </div>
            
            <div className="bg-gray-700 bg-opacity-50 rounded p-3 border border-gray-600">
              <div className="font-semibold text-blue-300 mb-1">DeepSeek</div>
              <div className="text-gray-400 mb-2">Intent parsing</div>
              <div className="text-blue-400">
                Anonymized
              </div>
            </div>
            
            <div className="bg-gray-700 bg-opacity-50 rounded p-3 border border-gray-600">
              <div className="font-semibold text-green-300 mb-1">OpenLibrary</div>
              <div className="text-gray-400 mb-2">ISBN lookup</div>
              <div className="flex items-center gap-1 text-green-400">
                <CheckCircle className="w-3 h-3" />
                <span>Compliant</span>
              </div>
            </div>
            
            <div className="bg-gray-700 bg-opacity-50 rounded p-3 border border-gray-600">
              <div className="font-semibold text-green-300 mb-1">Google Books</div>
              <div className="text-gray-400 mb-2">Cover images</div>
              <div className="flex items-center gap-1 text-green-400">
                <CheckCircle className="w-3 h-3" />
                <span>Compliant</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-gray-400">
            <span className="font-semibold text-yellow-400">Quarterly audits</span> ensure ongoing compliance with contractual COPPA clauses
          </div>
        </div>

        {/* Additional Compliance */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-blue-900 bg-opacity-30 rounded-lg p-4 border border-blue-700">
            <div className="font-semibold text-blue-300 mb-2">FERPA (Education Records)</div>
            <div className="text-xs text-gray-300 space-y-1">
              <div>• Role-based access controls</div>
              <div>• Reading history = education record</div>
              <div>• School consent model supported</div>
              <div>• Complete audit logging</div>
            </div>
          </div>
          
          <div className="bg-purple-900 bg-opacity-30 rounded-lg p-4 border border-purple-700">
            <div className="font-semibold text-purple-300 mb-2">ADA (Accessibility - WCAG 2.1 AA)</div>
            <div className="text-xs text-gray-300 space-y-1">
              <div>• Screen reader compatible (ARIA labels)</div>
              <div>• Keyboard navigation, high contrast mode</div>
              <div>• Font scaling (80%-120%), color blind modes</div>
              <div>• Semantic HTML structure</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}