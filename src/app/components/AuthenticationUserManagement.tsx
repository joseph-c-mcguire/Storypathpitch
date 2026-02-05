import { Shield, Users, Key, Code2, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function AuthenticationUserManagement() {
  const [activeTab, setActiveTab] = useState<'flow' | 'code' | 'security'>('flow');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-green-600 font-semibold uppercase text-sm tracking-wider">
          Component Deep Dive
        </span>

        {/* Header */}
        <div className="mt-6 mb-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Authentication & Privacy
          </h2>
          <p className="text-xl text-gray-600">
            Accessibility-first design: Anonymous access by default, opt-in personalization, full compliance
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab('flow')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'flow'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            User Flow & UML
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'code'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            Code Implementation
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'security'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            Security & Compliance
          </button>
        </div>

        {/* User Flow Tab */}
        {activeTab === 'flow' && (
          <div className="space-y-6">
            {/* Access Modes Diagram */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Three Access Modes</h3>
              <div className="grid grid-cols-3 gap-6">
                {/* Anonymous Mode */}
                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                    1
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Anonymous Kiosk</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Select age band (child/teen/adult)</li>
                    <li>• Enter age for content filtering</li>
                    <li>• No PII collected</li>
                    <li>• 24-hour session token</li>
                    <li>• Browse + recommendations only</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <div className="text-xs font-semibold text-blue-700">
                      ✓ FERPA Compliant
                    </div>
                  </div>
                </div>

                {/* Card Login Mode */}
                <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                    2
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Library Card Login</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Enter library card number</li>
                    <li>• Age verification</li>
                    <li>• Personalized recommendations</li>
                    <li>• Borrow history tracking</li>
                    <li>• Save favorites</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <div className="text-xs font-semibold text-purple-700">
                      ✓ Parental Consent Required (COPPA)
                    </div>
                  </div>
                </div>

                {/* Librarian Mode */}
                <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                    3
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Librarian Admin</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Card + password authentication</li>
                    <li>• View analytics dashboard</li>
                    <li>• Add/edit books via ISBN</li>
                    <li>• Review user feedback</li>
                    <li>• Manage patron accounts</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <div className="text-xs font-semibold text-orange-700">
                      ✓ 8-Hour Token (Security)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Database UML Schema */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Database Schema (UML)</h3>
              <div className="grid grid-cols-2 gap-6">
                {/* Users Table */}
                <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-300 font-mono text-sm">
                  <div className="bg-green-600 text-white px-4 py-2 rounded-t font-bold -mx-6 -mt-6 mb-4">
                    users
                  </div>
                  <div className="space-y-1">
                    <div><span className="text-yellow-600">🔑</span> <strong>id</strong>: UUID (PK)</div>
                    <div><span className="text-blue-600">📝</span> library_card: VARCHAR(50) UNIQUE</div>
                    <div><span className="text-blue-600">📝</span> name: VARCHAR(255)</div>
                    <div><span className="text-blue-600">📝</span> age: INTEGER</div>
                    <div><span className="text-blue-600">📝</span> email: VARCHAR(255)</div>
                    <div><span className="text-blue-600">📝</span> role: ENUM('patron', 'librarian', 'admin')</div>
                    <div><span className="text-blue-600">📝</span> password_hash: TEXT</div>
                    <div><span className="text-blue-600">📝</span> family_safe_mode: BOOLEAN</div>
                    <div><span className="text-gray-400">⏰</span> created_at: TIMESTAMP</div>
                    <div><span className="text-gray-400">⏰</span> last_login: TIMESTAMP</div>
                  </div>
                </div>

                {/* Sessions Table */}
                <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-300 font-mono text-sm">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-t font-bold -mx-6 -mt-6 mb-4">
                    sessions
                  </div>
                  <div className="space-y-1">
                    <div><span className="text-yellow-600">🔑</span> <strong>id</strong>: UUID (PK)</div>
                    <div><span className="text-green-600">🔗</span> user_id: UUID (FK → users.id)</div>
                    <div><span className="text-blue-600">📝</span> access_token: TEXT</div>
                    <div><span className="text-blue-600">📝</span> refresh_token: TEXT</div>
                    <div><span className="text-blue-600">📝</span> access_mode: ENUM</div>
                    <div><span className="text-blue-600">📝</span> age_band: ENUM('child', 'teen', 'adult')</div>
                    <div><span className="text-gray-400">⏰</span> created_at: TIMESTAMP</div>
                    <div><span className="text-gray-400">⏰</span> expires_at: TIMESTAMP</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-300 text-xs text-gray-600">
                    <strong>Indexes:</strong> user_id, expires_at
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Code Implementation Tab */}
        {activeTab === 'code' && (
          <div className="space-y-6">
            {/* Anonymous Login Code */}
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Anonymous Login Handler</h3>
                  <p className="text-sm text-gray-400">backend/app/api/auth.py (Lines 22-50)</p>
                </div>
              </div>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-sm">
                <code className="text-gray-300">
{`@router.post("/anonymous", response_model=TokenResponse)
async def anonymous_login(
    request: AnonymousLoginRequest,
    db: Client = Depends(get_db)
):
    """
    Create anonymous session for kiosk/quick browse mode.
    
    - **age_band**: "child", "teen", or "adult"
    - **age**: User's age (0-120)
    - **family_safe**: Enable family-safe content filtering
    """
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
    
    return result`}
                </code>
              </pre>
            </div>

            {/* JWT Token Creation */}
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <Key className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">JWT Token Creation (Role-Based Expiration)</h3>
                  <p className="text-sm text-gray-400">backend/app/core/security.py (Lines 41-74)</p>
                </div>
              </div>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-sm">
                <code className="text-gray-300">
{`def create_access_token(
    data: Dict[str, Any],
    expires_delta: Optional[timedelta] = None,
    token_type: str = "patron"
) -> str:
    """Create JWT access token with role-based expiration."""
    
    to_encode = data.copy()
    
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        if token_type == "librarian":
            # 8 hours for librarians (security)
            expire = datetime.now(timezone.utc) + timedelta(
                minutes=settings.librarian_token_expire_minutes
            )
        else:
            # 24 hours for patrons
            expire = datetime.now(timezone.utc) + timedelta(
                minutes=settings.access_token_expire_minutes
            )
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(
        to_encode,
        settings.secret_key,
        algorithm=settings.algorithm  # RS256
    )
    
    return encoded_jwt`}
                </code>
              </pre>
            </div>

            {/* Frontend Auth Context */}
            <div className="bg-slate-950 rounded-xl shadow-lg p-8 border-2 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">React Auth Context (Frontend)</h3>
                  <p className="text-sm text-gray-400">frontend/src/app/contexts/AuthContext.tsx (Lines 28-80)</p>
                </div>
              </div>
              <pre className="bg-black rounded-lg p-6 overflow-x-auto text-sm">
                <code className="text-gray-300">
{`export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserResponse | null>(null);
    const [accessMode, setAccessMode] = useState<AccessMode | null>(null);
    
    // Initialize from localStorage
    useEffect(() => {
        const initAuth = async () => {
            const storedUser = tokenManager.getUserData();
            const token = tokenManager.getAccessToken();
            
            if (storedUser && token) {
                setUser(storedUser);
                
                // Determine access mode from user role
                if (storedUser.role === 'librarian') {
                    setAccessMode('librarian');
                } else if (storedUser.card_number.startsWith('ANON-')) {
                    setAccessMode('anonymous');
                } else {
                    setAccessMode('card-login');
                }
            }
        };
        initAuth();
    }, []);`}
                </code>
              </pre>
            </div>
          </div>
        )}

        {/* Security & Compliance Tab */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            {/* Compliance Requirements */}
            <div className="grid grid-cols-2 gap-6">
              {/* COPPA Compliance */}
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-900">COPPA Compliance</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-bold text-red-700 mb-2">Risk: $51,744/violation</div>
                    <p className="text-gray-700">Collecting PII from children under 13 without verifiable parental consent</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-300">
                    <div className="font-bold text-green-700 mb-2">✓ Mitigation Strategy</div>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Anonymous mode requires NO PII</li>
                      <li>• Card login = parent already registered with library</li>
                      <li>• Age gate before any data collection</li>
                      <li>• Parent portal for account management</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FERPA Compliance */}
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">FERPA Compliance</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-bold text-blue-700 mb-2">Protected: Education Records</div>
                    <p className="text-gray-700">Reading history could be considered educational records if linked to school performance</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-300">
                    <div className="font-bold text-green-700 mb-2">✓ Mitigation Strategy</div>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Borrowing data NOT shared with schools</li>
                      <li>• Anonymized analytics only</li>
                      <li>• Parent-controlled data deletion</li>
                      <li>• Librarian access = legitimate educational interest</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Implementation */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Implementation</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-300">
                  <div className="font-bold text-lg text-gray-900 mb-3">Password Hashing</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Bcrypt with auto-generated salts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cost factor: 12 rounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Passlib fallback for legacy</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-300">
                  <div className="font-bold text-lg text-gray-900 mb-3">JWT Tokens</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>RS256 algorithm (asymmetric)</span>
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

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-300">
                  <div className="font-bold text-lg text-gray-900 mb-3">Data Protection</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>TLS 1.3 encryption in transit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>AES-256 encryption at rest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>90-day data retention policy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Flow Diagram */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Authentication Data Flow</h3>
              <div className="flex items-center justify-between">
                <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-300 text-center w-36">
                  <div className="font-bold text-blue-900">User</div>
                  <div className="text-xs text-blue-700">Browser</div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-gray-600">→ POST /api/v1/auth/login →</div>
                </div>
                <div className="bg-purple-100 rounded-lg p-4 border-2 border-purple-300 text-center w-36">
                  <div className="font-bold text-purple-900">API</div>
                  <div className="text-xs text-purple-700">FastAPI</div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-gray-600">→ Query →</div>
                </div>
                <div className="bg-cyan-100 rounded-lg p-4 border-2 border-cyan-300 text-center w-36">
                  <div className="font-bold text-cyan-900">Database</div>
                  <div className="text-xs text-cyan-700">PostgreSQL</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <div className="text-gray-600">← JWT Token (access + refresh) ←</div>
              </div>
              <div className="mt-6 bg-yellow-50 rounded-lg p-4 border border-yellow-300">
                <div className="font-bold text-sm text-yellow-900 mb-2">Token Payload Example:</div>
                <pre className="text-xs font-mono text-gray-700">
{`{
  "user_id": "uuid-here",
  "role": "patron",
  "access_mode": "card-login",
  "age": 13,
  "exp": 1738888800
}`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}