import {
  Shield,
  Users,
  Key,
  Code2,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

export function AuthenticationUserManagement() {
  const [activeTab, setActiveTab] = useState<
    "flow" | "code" | "security"
  >("flow");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-orange-600 font-semibold uppercase text-sm tracking-wider">
          Component Deep Dive
        </span>

        {/* Header */}
        <div className="mt-6 mb-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Authentication & Privacy
          </h2>
          <p className="text-xl text-gray-600">
            Accessibility-first design: Anonymous access by
            default, opt-in personalization
          </p>
        </div>

        {/* Implementation Status Banner */}
        <div className="mb-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-6 h-6" />
              <div>
                <div className="font-bold">
                  Auth System: 100% Implemented
                </div>
                <div className="text-sm opacity-90">
                  All 4 auth endpoints live • JWT tokens working
                  • Role-based access control ✓
                </div>
              </div>
            </div>
            <div className="text-xs bg-white bg-opacity-20 px-3 py-1 rounded">
              User Management: Code ready, routers need
              registration
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab("flow")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "flow"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-orange-50"
            }`}
          >
            User Flow & Schema
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "code"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-orange-50"
            }`}
          >
            Code Implementation
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "security"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-orange-50"
            }`}
          >
            Security & Compliance
          </button>
        </div>

        {/* User Flow Tab */}
        {activeTab === "flow" && (
          <div className="space-y-6">
            {/* Access Modes Diagram */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Three Access Modes
                </h3>
                <div className="text-xs bg-green-600 text-white px-3 py-1 rounded font-semibold">
                  ✓ ALL LIVE
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {/* Anonymous Mode */}
                <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                      ✓ Live
                    </div>
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">
                    Anonymous Kiosk
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      • Select age band (child/teen/adult)
                    </li>
                    <li>• Enter age for content filtering</li>
                    <li>• No PII collected</li>
                    <li>• 24-hour session token</li>
                    <li>• Browse + recommendations only</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <div className="text-xs font-semibold text-orange-700">
                      POST /api/v1/auth/anonymous
                    </div>
                  </div>
                </div>

                {/* Card Login Mode */}
                <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                      ✓ Live
                    </div>
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">
                    Library Card Login
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Enter library card number</li>
                    <li>• Age verification</li>
                    <li>• Personalized recommendations</li>
                    <li>• Borrow history tracking</li>
                    <li>• Save favorites</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-amber-200">
                    <div className="text-xs font-semibold text-amber-700">
                      POST /api/v1/auth/login
                    </div>
                  </div>
                </div>

                {/* Librarian Mode */}
                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                      ✓ Live
                    </div>
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">
                    Librarian Admin
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Card + password authentication</li>
                    <li>• View analytics dashboard</li>
                    <li>• Add/edit books via ISBN</li>
                    <li>• Review user feedback</li>
                    <li>• Manage patron accounts</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-red-200">
                    <div className="text-xs font-semibold text-red-700">
                      POST /api/v1/auth/librarian/login
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Database Schema */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Database Schema
                </h3>
                <div className="text-xs bg-amber-600 text-white px-3 py-1 rounded font-semibold">
                  ⚠ PII Stored Plaintext
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {/* Users Table */}
                <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-300 font-mono text-sm">
                  <div className="bg-green-600 text-white px-4 py-2 rounded-t font-bold -mx-6 -mt-6 mb-4">
                    users
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-yellow-600">
                        🔑
                      </span>{" "}
                      <strong>id</strong>: UUID (PK)
                    </div>
                    <div>
                      <span className="text-blue-600">📝</span>{" "}
                      library_card: VARCHAR(50) UNIQUE
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600">⚠️</span>
                      <span className="text-red-600">
                        name: VARCHAR(255) (plaintext)
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600">📝</span>{" "}
                      age: INTEGER
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600">⚠️</span>
                      <span className="text-red-600">
                        email: VARCHAR(255) (plaintext)
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600">📝</span>{" "}
                      role: ENUM('patron', 'librarian', 'admin')
                    </div>
                    <div>
                      <span className="text-green-600">✓</span>{" "}
                      password_hash: TEXT (bcrypt)
                    </div>
                    <div>
                      <span className="text-blue-600">📝</span>{" "}
                      family_safe_mode: BOOLEAN
                    </div>
                    <div>
                      <span className="text-gray-400">⏰</span>{" "}
                      created_at: TIMESTAMP
                    </div>
                    <div>
                      <span className="text-gray-400">⏰</span>{" "}
                      last_login: TIMESTAMP
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-red-300 text-xs text-red-600">
                    <strong>P1 Required:</strong> Hash
                    library_card, encrypt name/email
                  </div>
                </div>

                {/* Sessions Table */}
                <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-300 font-mono text-sm">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-t font-bold -mx-6 -mt-6 mb-4">
                    sessions
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-yellow-600">
                        🔑
                      </span>{" "}
                      <strong>id</strong>: UUID (PK)
                    </div>
                    <div>
                      <span className="text-green-600">🔗</span>{" "}
                      user_id: UUID (FK → users.id)
                    </div>
                    <div>
                      <span className="text-green-600">✓</span>{" "}
                      access_token: TEXT (JWT)
                    </div>
                    <div>
                      <span className="text-green-600">✓</span>{" "}
                      refresh_token: TEXT (JWT)
                    </div>
                    <div>
                      <span className="text-blue-600">📝</span>{" "}
                      access_mode: ENUM
                    </div>
                    <div>
                      <span className="text-blue-600">📝</span>{" "}
                      age_band: ENUM('child', 'teen', 'adult')
                    </div>
                    <div>
                      <span className="text-gray-400">⏰</span>{" "}
                      created_at: TIMESTAMP
                    </div>
                    <div>
                      <span className="text-gray-400">⏰</span>{" "}
                      expires_at: TIMESTAMP
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-300 text-xs text-gray-600">
                    <strong>Indexes:</strong> user_id,
                    expires_at ✓
                  </div>
                </div>
              </div>
            </div>

            {/* Endpoint Status */}
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Endpoint Status
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-green-700 mb-2">
                    ✓ Live & Working:
                  </div>
                  <div className="space-y-1 text-gray-700">
                    <div>• POST /auth/anonymous</div>
                    <div>• POST /auth/login</div>
                    <div>• POST /auth/librarian/login</div>
                    <div>• POST /auth/refresh</div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-blue-700 mb-2">
                    🎯 Planned (Code Ready):
                  </div>
                  <div className="space-y-1 text-gray-700">
                    <div>
                      • GET /users/{`{id}`} (users.py ready)
                    </div>
                    <div>
                      • PUT /users/{`{id}`} (users.py ready)
                    </div>
                    <div>
                      • GET /users/{`{id}`}/history (planned)
                    </div>
                    <div className="text-xs mt-2">
                      Next: Register users.router in main.py
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Code Implementation Tab */}
        {activeTab === "code" && (
          <div className="space-y-6">
            {/* Anonymous Login Code */}
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-green-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Anonymous Login Handler
                    </h3>
                    <p className="text-sm text-gray-400">
                      backend/app/api/auth.py
                    </p>
                  </div>
                </div>
                <div className="text-xs bg-green-600 text-white px-3 py-1 rounded font-semibold">
                  ✓ LIVE
                </div>
              </div>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-sm">
                <code className="text-gray-300">
                  {`@router.post("/anonymous", response_model=TokenResponse)
async def anonymous_login(
    request: AnonymousLoginRequest,
    db: Client = Depends(get_db)
):
    """Anonymous session for kiosk mode - NO PII collected."""
    auth_service = AuthService(db)
    
    # Validate age
    if request.age < 0 or request.age > 120:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid age"
        )
    
    result, error = await auth_service.anonymous_login(request)
    
    if error:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=error
        )
    
    # Returns JWT with 24-hour expiration
    return result`}
                </code>
              </pre>
            </div>

            {/* JWT Token Creation */}
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-green-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Key className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      JWT Token Creation (Role-Based Expiration)
                    </h3>
                    <p className="text-sm text-gray-400">
                      backend/app/core/security.py
                    </p>
                  </div>
                </div>
                <div className="text-xs bg-green-600 text-white px-3 py-1 rounded font-semibold">
                  ✓ LIVE
                </div>
              </div>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-sm">
                <code className="text-gray-300">
                  {`def create_access_token(
    data: Dict[str, Any],
    expires_delta: Optional[timedelta] = None,
    token_type: str = "patron"
) -> str:
    """Create JWT with RS256 signing."""
    
    to_encode = data.copy()
    
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        if token_type == "librarian":
            expire = datetime.now(timezone.utc) + timedelta(hours=8)
        else:
            expire = datetime.now(timezone.utc) + timedelta(hours=24)
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(
        to_encode,
        settings.secret_key,
        algorithm="RS256"  # Asymmetric signing
    )
    
    return encoded_jwt`}
                </code>
              </pre>
            </div>

            {/* Router Registration Issue */}
          </div>
        )}

        {/* Security & Compliance Tab */}
        {activeTab === "security" && (
          <div className="space-y-6">
            {/* Compliance Requirements */}
            <div className="grid grid-cols-2 gap-6">
              {/* COPPA Compliance */}
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    COPPA Strategy
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-300">
                    <div className="font-bold text-green-700 mb-2">
                      ✓ Working Protections:
                    </div>
                    <ul className="space-y-1 text-gray-700">
                      <li>✓ Anonymous mode requires NO PII</li>
                      <li>✓ Age gate before data collection</li>
                      <li>
                        ✓ Card login assumes parent consent via
                        library registration
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-300">
                    <div className="font-bold text-blue-700 mb-2">
                      🎯 Planned P1 Features:
                    </div>
                    <ul className="space-y-1 text-gray-700">
                      <li>
                        • Parental consent verification workflow
                      </li>
                      <li>
                        • Parent portal for account management
                      </li>
                      <li>• PII field-level encryption</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FERPA Compliance */}
              <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-300">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    FERPA Strategy
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-300">
                    <div className="font-bold text-green-700 mb-2">
                      ✓ Working Protections:
                    </div>
                    <ul className="space-y-1 text-gray-700">
                      <li>
                        ✓ Reading history NOT shared with
                        schools
                      </li>
                      <li>✓ Anonymized analytics only</li>
                      <li>
                        ✓ Librarian access = legitimate interest
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-300">
                    <div className="font-bold text-purple-700 mb-2">
                      🎯 Planned P1 Features:
                    </div>
                    <ul className="space-y-1 text-gray-700">
                      <li>
                        • Audit logging for access tracking
                      </li>
                      <li>• 90-day data retention policy</li>
                      <li>
                        • Parent data download/deletion
                        endpoints
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Implementation */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Security Implementation
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-lg text-gray-900">
                      Password Hashing
                    </div>
                    <div className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                      ✓ LIVE
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Bcrypt with auto salts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cost factor: 12 rounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Passlib fallback</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-lg text-gray-900">
                      JWT Tokens
                    </div>
                    <div className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                      ✓ LIVE
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>RS256 (asymmetric)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>8hr librarian / 24hr patron</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>7-day refresh tokens</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-lg text-gray-900">
                      Data Protection
                    </div>
                    <div className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      PLANNED
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>TLS 1.3 in transit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5 flex-shrink-0">
                        🎯
                      </span>
                      <span>PII field encryption (P1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5 flex-shrink-0">
                        🎯
                      </span>
                      <span>Audit logging (P1)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Roadmap */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                Compliance Roadmap (P1 for School Deployment)
              </h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold mb-2">
                    🎯 PII Protection
                  </div>
                  <div className="opacity-90">
                    • Hash library_card fields
                    <br />
                    • Encrypt name/email (AES-256)
                    <br />• PII scanner automation
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-2">
                    🎯 Audit & Retention
                  </div>
                  <div className="opacity-90">
                    • Audit logging for access
                    <br />
                    • 90-day retention policy
                    <br />• Automated data purging
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-2">
                    🎯 Parent Rights
                  </div>
                  <div className="opacity-90">
                    • Consent verification workflow
                    <br />
                    • Data download endpoint
                    <br />• Data deletion endpoint
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}