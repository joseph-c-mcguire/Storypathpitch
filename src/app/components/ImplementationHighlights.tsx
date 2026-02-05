import { Code2, Database, Shield, Brain, Zap, Check } from 'lucide-react';
import { useState } from 'react';

export function ImplementationHighlights() {
  const [activeTab, setActiveTab] = useState<'auth' | 'ai' | 'vector' | 'security' | 'frontend'>('auth');

  const tabs = [
    { id: 'auth' as const, label: 'Authentication', icon: Shield },
    { id: 'ai' as const, label: 'AI Agent', icon: Brain },
    { id: 'vector' as const, label: 'Vector Search', icon: Database },
    { id: 'security' as const, label: 'Security', icon: Shield },
    { id: 'frontend' as const, label: 'Frontend', icon: Code2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-blue-300 font-semibold uppercase text-sm tracking-wider">
          Slide 10 • Technical Deep Dive
        </span>

        {/* Header */}
        <div className="mt-6 mb-12">
          <h2 className="text-6xl font-bold text-white mb-4">
            Implementation Highlights
          </h2>
          <p className="text-2xl text-blue-200">
            Production code powering StoryPath's core features
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                activeTab === id
                  ? 'bg-white text-blue-900 shadow-lg'
                  : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>

        {/* Code Display Area */}
        <div className="bg-slate-950 rounded-2xl shadow-2xl border-2 border-blue-500 border-opacity-30 overflow-hidden">
          
          {/* Authentication Tab */}
          {activeTab === 'auth' && (
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-500 rounded-full p-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Multi-Mode Authentication</h3>
                  <p className="text-gray-400">Anonymous, Patron, and Librarian access flows</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Anonymous Login */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-lg font-bold text-white">Anonymous Login Handler</h4>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    <code className="text-cyan-400">backend/app/api/auth.py</code> (Lines 22-50)
                  </div>
                  <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">
{`@router.post("/anonymous")
async def anonymous_login(
    request: AnonymousLoginRequest,
    db: Client = Depends(get_db)
):
    """Create anonymous session for 
    kiosk/quick browse mode."""
    
    auth_service = AuthService(db)
    
    # Validate age
    if request.age < 0 or request.age > 120:
        raise HTTPException(
            status_code=400,
            detail="Invalid age"
        )
    
    result, error = await \\
        auth_service.anonymous_login(request)
    
    if error:
        raise HTTPException(
            status_code=400,
            detail=error
        )
    
    return result`}
                    </code>
                  </pre>
                </div>

                {/* Demo Account System */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-green-400" />
                    <h4 className="text-lg font-bold text-white">Demo Account Fallback</h4>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    <code className="text-green-400">backend/app/services/auth.py</code> (Lines 24-66)
                  </div>
                  <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">
{`# Demo accounts for testing without DB
_DEMO_PATRON_ACCOUNTS = {
    "LC-001234": {
        "id": "demo-patron-001234",
        "library_card": "LC-001234",
        "name": "Jamie Reader",
        "age": 13,
        "email": "jamie@example.com",
        "role": "patron",
        "family_safe_mode": True,
        "total_borrows": 0,
        "created_at": datetime.now().isoformat()
    }
}

def _get_demo_account(
    library_card: str
) -> Optional[Dict[str, Any]]:
    """Return demo account when 
    bypass mode is enabled."""
    if not settings.enable_demo_auth:
        return None
    return deepcopy(
        _DEMO_PATRON_ACCOUNTS.get(library_card)
    )`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="mt-6 bg-blue-900 bg-opacity-30 rounded-xl p-4 border border-blue-500 border-opacity-50">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <strong className="text-white">Key Features:</strong> Age validation, role-based token expiration 
                    (8hr librarian, 24hr patron), demo mode for testing, Supabase fallback architecture
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Agent Tab */}
          {activeTab === 'ai' && (
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-500 rounded-full p-3">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">DeepSeek LLM Query Parser</h3>
                  <p className="text-gray-400">Natural language → structured filters with confidence scoring</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Query Parsing */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg font-bold text-white">Intent Parsing Logic</h4>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    <code className="text-purple-400">backend/app/services/agent.py</code> (Lines 58-147)
                  </div>
                  <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">
{`async def parse_query(
    self, request: QueryParsingRequest
) -> AgentParsingResponse:
    """Convert natural-language query 
    into structured filters."""
    
    try:
        payload = await self._invoke_deepseek(
            prompt=self._build_parse_prompt(request),
            conversation=request.context.get(
                "conversation"
            )
        )
    except Exception as exc:
        logger.error(
            "[AGENT] Failed to parse: %s", exc
        )
        return self._build_fallback_response(
            request
        )
    
    # Guardrails validation
    if not validate_agent_filters(payload):
        logger.warning(
            "[AGENT] Guardrails rejected payload"
        )
        return self._build_fallback_response(
            request
        )`}
                    </code>
                  </pre>
                </div>

                {/* Small Talk Detection */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <h4 className="text-lg font-bold text-white">Small Talk Handler</h4>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    <code className="text-yellow-400">backend/app/services/agent.py</code> (Lines 35-46)
                  </div>
                  <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">
{`_SMALL_TALK_RESPONSES = {
    "hello": "Hello! I can help you find \\
books you'll love. Ask for a genre, \\
mood, or topic!",
    
    "hi": "Hi there! Tell me what kinds \\
of stories you're excited to read.",
    
    "who are you": "I'm StoryPath, your \\
friendly library assistant. Ask me \\
for book recommendations anytime!",
    
    "what can you do": "I can recommend \\
books by genre, mood, age range, \\
and more. Just tell me what you're \\
looking for!",
}

def _detect_small_talk(
    self, message: str
) -> Optional[str]:
    """Return canned response for \\
    common greetings."""
    normalized = message.lower().strip()
    return _SMALL_TALK_RESPONSES.get(
        normalized
    )`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="mt-6 bg-purple-900 bg-opacity-30 rounded-xl p-4 border border-purple-500 border-opacity-50">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <strong className="text-white">Key Features:</strong> Confidence thresholds (0.7 for clarification), 
                    multi-turn conversation context, guardrails validation, fallback responses, DeepSeek API with 30s timeout
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Vector Search Tab */}
          {activeTab === 'vector' && (
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cyan-500 rounded-full p-3">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">OpenAI Vector Embeddings</h3>
                  <p className="text-gray-400">Semantic search with text-embedding-3-small (1536 dimensions)</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Book Embedding */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Database className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-lg font-bold text-white">Book Embedding Generator</h4>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    <code className="text-cyan-400">backend/app/services/vector.py</code> (Lines 162-190)
                  </div>
                  <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">
{`async def embed_book_for_search(
    self,
    book: Dict[str, Any]
) -> Tuple[Optional[List[float]], 
           Optional[str]]:
    """Create searchable text and 
    embedding for a book."""
    
    try:
        # Concatenate book metadata
        text_parts = [
            book.get("title", ""),
            ", ".join(book.get("authors", [])),
            book.get("description", ""),
            ", ".join(book.get("tags", [])),
            ", ".join(book.get("subjects", []))
        ]
        
        # Create searchable text
        searchable_text = ". ".join([
            part for part in text_parts if part
        ])
        
        # Generate embedding
        embedding = await \\
            self.generate_embedding(
                searchable_text
            )
        
        return embedding, None`}
                    </code>
                  </pre>
                </div>

                {/* Query Hashing */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-orange-400" />
                    <h4 className="text-lg font-bold text-white">Query Hash Caching</h4>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    <code className="text-orange-400">backend/app/services/vector.py</code> (Lines 207-225)
                  </div>
                  <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">
{`def _normalize_text_param(
    self, value: Any
) -> str:
    """Normalize text params for hashing."""
    if value is None:
        return ""
    if isinstance(value, str):
        return value.lower()
    return str(value).lower()

def _build_query_hash(
    self, params: Dict[str, Any]
) -> str:
    """Create hash of normalized 
    query parameters."""
    
    # Normalize for consistent hashing
    normalized = {
        "query": self._normalize_text_param(
            params.get("query")
        ),
        "age": params.get("age"),
        "genre": self._normalize_text_param(
            params.get("genre")
        ),
    }
    
    hash_str = json.dumps(
        normalized, sort_keys=True
    )
    return hashlib.sha256(
        hash_str.encode()
    ).hexdigest()`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="mt-6 bg-cyan-900 bg-opacity-30 rounded-xl p-4 border border-cyan-500 border-opacity-50">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <strong className="text-white">Key Features:</strong> SHA-256 query hashing for caching, 
                    metadata concatenation (title + authors + description + tags), OpenAI text-embedding-3-small model, 
                    Postgres pgvector for cosine similarity search
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-500 rounded-full p-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">JWT Security & Encryption</h3>
                  <p className="text-gray-400">Bcrypt password hashing, RS256 tokens, role-based expiration</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Password Hashing */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-red-400" />
                    <h4 className="text-lg font-bold text-white">Password Hashing</h4>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    <code className="text-red-400">backend/app/core/security.py</code> (Lines 27-38)
                  </div>
                  <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">
{`def hash_password(password: str) -> str:
    """Hash a password using bcrypt."""
    hashed = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    )
    return hashed.decode("utf-8")

def verify_password(
    plain_password: str,
    hashed_password: str
) -> bool:
    """Verify password against hash."""
    try:
        return bcrypt.checkpw(
            plain_password.encode("utf-8"),
            hashed_password.encode("utf-8")
        )
    except ValueError:
        # Fallback to passlib for legacy
        from passlib.context import CryptContext
        legacy_context = CryptContext(
            schemes=["bcrypt"],
            deprecated="auto"
        )
        return legacy_context.verify(
            plain_password, hashed_password
        )`}
                    </code>
                  </pre>
                </div>

                {/* JWT Token Creation */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-green-400" />
                    <h4 className="text-lg font-bold text-white">JWT Token Creation</h4>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    <code className="text-green-400">backend/app/core/security.py</code> (Lines 41-74)
                  </div>
                  <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">
{`def create_access_token(
    data: Dict[str, Any],
    expires_delta: Optional[timedelta] = None,
    token_type: str = "patron"
) -> str:
    """Create a JWT access token with 
    role-based expiration."""
    
    to_encode = data.copy()
    
    if expires_delta:
        expire = datetime.now(timezone.utc) \\
            + expires_delta
    else:
        if token_type == "librarian":
            # 8 hours for librarians (security)
            expire = datetime.now(timezone.utc) \\
                + timedelta(
                    minutes=settings\\
                        .librarian_token_expire_minutes
                )
        else:
            # 24 hours for patrons
            expire = datetime.now(timezone.utc) \\
                + timedelta(
                    minutes=settings\\
                        .access_token_expire_minutes
                )
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(
        to_encode,
        settings.secret_key,
        algorithm=settings.algorithm
    )
    
    return encoded_jwt`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="mt-6 bg-red-900 bg-opacity-30 rounded-xl p-4 border border-red-500 border-opacity-50">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <strong className="text-white">Key Features:</strong> Bcrypt with auto-generated salts, 
                    RS256 JWT algorithm, role-based expiration (8hr librarian, 24hr patron, 7-day refresh), 
                    passlib fallback for legacy hashes
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Frontend Tab */}
          {activeTab === 'frontend' && (
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500 rounded-full p-3">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">React + TypeScript Frontend</h3>
                  <p className="text-gray-400">Context API, custom hooks, type-safe API client</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Auth Context */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-blue-400" />
                    <h4 className="text-lg font-bold text-white">Auth Context Provider</h4>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    <code className="text-blue-400">frontend/src/app/contexts/AuthContext.tsx</code> (Lines 28-80)
                  </div>
                  <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">
{`export function AuthProvider({ 
    children 
}: { children: ReactNode }) {
    const [user, setUser] = useState<
        UserResponse | null
    >(null);
    const [accessMode, setAccessMode] = 
        useState<AccessMode | null>(null);
    
    // Initialize from localStorage
    useEffect(() => {
        const initAuth = async () => {
            const storedUser = 
                tokenManager.getUserData();
            const token = 
                tokenManager.getAccessToken();
            
            if (storedUser && token) {
                setUser(storedUser);
                
                // Determine access mode
                if (storedUser.role === 'librarian') {
                    setAccessMode('librarian');
                } else if (
                    storedUser.card_number\\
                        .startsWith('ANON-')
                ) {
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

                {/* API Base URL Resolution */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <h4 className="text-lg font-bold text-white">API URL Resolution</h4>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    <code className="text-yellow-400">frontend/src/app/services/api.ts</code> (Lines 1-90)
                  </div>
                  <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">
{`export function resolveApiBaseUrl(
    env: EnvRecord = getRuntimeEnv(),
    runtime: { 
        windowLocationOrigin?: string 
    } = {}
): string {
    // Check environment variables
    const configuredBase =
        env.VITE_API_BASE_URL ||
        env.REACT_APP_API_BASE_URL ||
        env.NEXT_PUBLIC_API_BASE_URL;
    
    if (configuredBase && 
        configuredBase.trim().length > 0) {
        return configuredBase;
    }
    
    // Fallback to window.location.origin
    const origin = runtime.windowLocationOrigin
        || (typeof window !== 'undefined'
            ? window.location.origin
            : null);
    
    if (origin) {
        const parsed = new URL(origin);
        const isLocalHost = [
            'localhost', '127.0.0.1', '0.0.0.0'
        ].includes(parsed.hostname);
        const isVitePort = 
            parsed.port === '5173' ||
            parsed.port === '4173';
        
        if (isLocalHost || isVitePort) {
            return \\
              \`\${parsed.protocol}//\\
              \${parsed.hostname}:8000\`;
        }
        return origin;
    }
    
    return 'http://localhost:8000';
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="mt-6 bg-blue-900 bg-opacity-30 rounded-xl p-4 border border-blue-500 border-opacity-50">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <strong className="text-white">Key Features:</strong> React Context API for global state, 
                    localStorage token persistence with SSR fallback, environment-aware API URL resolution (dev/prod), 
                    TypeScript for type safety, custom hooks for API interactions
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Summary */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-gray-300">Test Coverage on Critical Paths</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-white mb-2">3-Tier</div>
            <div className="text-sm text-gray-300">Architecture: Frontend → API → Database</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-white mb-2">Production</div>
            <div className="text-sm text-gray-300">Code - All Snippets From Live Codebase</div>
          </div>
        </div>

        {/* Tech Stack Footer */}
        <div className="mt-8 bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-6 border-2 border-white border-opacity-20">
          <h4 className="text-lg font-bold text-white mb-4">Technology Stack</h4>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <div className="font-semibold text-purple-300 mb-2">Backend</div>
              <ul className="space-y-1 text-gray-300">
                <li>• Python 3.11+</li>
                <li>• FastAPI</li>
                <li>• Pydantic</li>
                <li>• APScheduler</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-cyan-300 mb-2">Database</div>
              <ul className="space-y-1 text-gray-300">
                <li>• PostgreSQL 15</li>
                <li>• Supabase</li>
                <li>• pgvector</li>
                <li>• Connection pooling</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-green-300 mb-2">AI Services</div>
              <ul className="space-y-1 text-gray-300">
                <li>• DeepSeek (LLM)</li>
                <li>• OpenAI Embeddings</li>
                <li>• RAG architecture</li>
                <li>• Guardrails validation</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-blue-300 mb-2">Frontend</div>
              <ul className="space-y-1 text-gray-300">
                <li>• React 18</li>
                <li>• TypeScript</li>
                <li>• Vite</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
