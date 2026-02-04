import { Network } from 'lucide-react';

export function ArchitectureDiagram() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
          Slide 4
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          System Architecture
        </h2>
        <p className="text-xl text-gray-600">
          High-level components and data flow
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded mt-4" />
      </div>

      {/* ASCII-style diagram */}
      <div className="bg-white rounded-2xl p-12 mb-12 border-2 border-gray-200">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Frontend Layer */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">1. Frontend Layer</h3>
            <div className="pl-6 space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-lg">iPad Web App (Student Kiosk)</p>
                <p className="text-gray-700">React + TailwindCSS • Responsive design • Offline-capable with cached data</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-lg">Librarian Admin Portal (Web)</p>
                <p className="text-gray-700">Dashboard for managing filters, tags, performance monitoring, and rule adjustments</p>
              </div>
            </div>
          </div>

          {/* API Layer */}
          <div>
            <h3 className="text-2xl font-bold text-purple-600 mb-4">2. API Layer</h3>
            <div className="pl-6 space-y-3">
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-bold text-lg">Recommendation API (REST API)</p>
                <p className="text-gray-700">FastAPI endpoints • JWT authentication • Rate limiting • Request/response caching</p>
                <ul className="mt-2 text-gray-600 space-y-1">
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">/api/v1/recommendations/query</code> - Natural language search</li>
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">/api/v1/books/&#123;isbn&#125;</code> - Book metadata lookup</li>
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">/api/v1/feedback</code> - User feedback submission</li>
                  <li>• <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">/api/v1/admin/*</code> - Librarian management endpoints</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Business Logic Layer */}
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">3. Business Logic Layer</h3>
            <div className="pl-6 space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-bold text-lg">Retrieval Engine</p>
                <p className="text-gray-700 mb-2">Hybrid recommendation system combining two approaches:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• <strong>Vector Similarity:</strong> Semantic search using OpenAI embeddings (1536-dimensional)</li>
                  <li>• <strong>Collaborative Filtering:</strong> "Users who borrowed X also borrowed Y" patterns</li>
                  <li>• <strong>Ranking:</strong> Weighted combination of both signals + recency boost</li>
                </ul>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-bold text-lg">Policy & Filters</p>
                <p className="text-gray-700 mb-2">Content safety and business rules:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• <strong>Age Appropriateness:</strong> COPPA-compliant age bands (Child 5-11, Teen 12-17)</li>
                  <li>• <strong>Maturity Ratings:</strong> Filter explicit content based on patron age</li>
                  <li>• <strong>Availability:</strong> Real-time catalog checks, hold queue management</li>
                  <li>• <strong>Librarian Overrides:</strong> Manual allow/block lists for specific titles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">4. Data Layer</h3>
            <div className="pl-6 space-y-3">
              <div className="border-l-4 border-gray-600 pl-4">
                <p className="font-bold text-lg">Vector Database (Supabase pgvector)</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• 1536-dimensional book embeddings from OpenAI text-embedding-3-small</li>
                  <li>• Metadata: title, author, ISBN, genres, themes, age ranges</li>
                  <li>• Sub-50ms similarity queries using HNSW indexing</li>
                  <li>• Automatic embedding generation via DeepSeek content analysis</li>
                </ul>
              </div>
              <div className="border-l-4 border-gray-600 pl-4">
                <p className="font-bold text-lg">Catalog Database (PostgreSQL)</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Real-time availability and circulation status</li>
                  <li>• Hold queue counts and estimated wait times</li>
                  <li>• Patron borrowing history (FERPA-compliant encryption)</li>
                  <li>• Librarian annotations and manual tags</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Offline Pipelines */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">5. Offline Pipelines (Nightly/Weekly)</h3>
            <div className="pl-6 space-y-3">
              <div className="border-l-4 border-indigo-500 pl-4">
                <p className="font-bold text-lg">ETL Pipeline</p>
                <p className="text-gray-700">Card catalog + borrow history → normalize → feature store</p>
                <p className="text-sm text-gray-600 mt-1">Syncs library ILS data, cleans duplicates, builds co-borrow matrices</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <p className="font-bold text-lg">Embedding Generation</p>
                <p className="text-gray-700">OpenAI API → compute embeddings for new books → pgvector</p>
                <p className="text-sm text-gray-600 mt-1">Batch process for cost efficiency, updates vector index nightly</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <p className="font-bold text-lg">Co-borrow Matrix</p>
                <p className="text-gray-700">Analyze patron history → collaborative filtering weights</p>
                <p className="text-sm text-gray-600 mt-1">Weekly rebuild to capture trending books and seasonal patterns</p>
              </div>
            </div>
          </div>

          {/* Data Flow Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-600">
            <p className="font-bold text-lg mb-2">Complete Data Flow:</p>
            <p className="text-gray-700">
              Student query → API authentication → Retrieval engine fetches vector similarities + collaborative signals → 
              Policy filters apply age/maturity rules → Catalog database checks availability → 
              Ranked results returned → Student provides feedback → Nightly pipeline updates embeddings and co-borrow weights
            </p>
          </div>

        </div>
      </div>

      {/* CI/CD & DevOps Infrastructure */}
      <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
        <h3 className="text-2xl font-bold mb-6">CI/CD Pipeline & Deployment</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
            <h4 className="font-bold text-lg mb-4 text-blue-900">🧪 Automated Testing</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-blue-900 mb-1">75% Unit Test Coverage</p>
                <p className="text-xs text-gray-700">Front end + back end with Jest/Pytest</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-blue-900 mb-1">~120 Integration Tests</p>
                <p className="text-xs text-gray-700">End-to-end coverage of core workflows</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-blue-900 mb-1">Merge-Time Validation</p>
                <p className="text-xs text-gray-700">Tests run on every push to dev/main. Deploy blocks if tests fail or coverage drops below 75%.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
            <h4 className="font-bold text-lg mb-4 text-purple-900">🚀 Deployment Pipeline</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-purple-900 mb-1">Docker Containerization</p>
                <p className="text-xs text-gray-700">Backend + Frontend images built and pushed to Replit container registry on successful test runs</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-purple-900 mb-1">Production Options</p>
                <p className="text-xs text-gray-700">
                  <strong>Option 1:</strong> Kubernetes cluster (high compute)<br />
                  <strong>Option 2:</strong> GCP (Compute + Serverless for blocking ops)
                </p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-purple-900 mb-1">Architecture</p>
                <p className="text-xs text-gray-700">Services on Supabase + deployment on GCP serverless. Expose port via DNS → live web app.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <h4 className="font-bold text-lg mb-4 text-green-400">GitHub Actions Workflow</h4>
          <pre className="text-green-400 font-mono text-xs leading-relaxed overflow-x-auto">
{`on: push to [dev, main]
  ├─ Run unit tests (Jest/Pytest)
  ├─ Check coverage ≥ 75%
  ├─ Run integration tests (~120 tests)
  │
  ├─ ✅ All tests pass + coverage OK?
  │   ├─ Build Docker images (frontend + backend)
  │   ├─ Push to container registry
  │   └─ Deploy to staging/production
  │
  └─ ❌ Tests fail or coverage < 75%?
      └─ Block deployment + notify team`}
          </pre>
        </div>
      </div>

      {/* Monitoring & Observability */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6">📊 LangSmith Monitoring & Evals</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-5">
            <h4 className="font-bold text-lg mb-3">Real-Time Monitoring</h4>
            <ul className="text-sm space-y-2 opacity-90">
              <li>• <strong>Sampling:</strong> Configurable % of user requests (e.g., 10% in production)</li>
              <li>• <strong>Traces:</strong> LangSmith hooks capture query → retrieval → ranking → RAG pipeline</li>
              <li>• <strong>User Feedback:</strong> Thumbs up/down integrated as additional metric</li>
              <li>• <strong>Status:</strong> Hooks configured in .env, currently mocked, production-ready</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-5">
            <h4 className="font-bold text-lg mb-3">Automated Evals</h4>
            <div className="space-y-3">
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <p className="font-semibold text-sm mb-1">📚 Basic Checks</p>
                <p className="text-xs opacity-90">
                  "I want a Harry Potter book" → Returns Harry Potter?<br />
                  "Books by J.R.R. Tolkien" → Returns The Hobbit/LOTR?
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <p className="font-semibold text-sm mb-1">🎯 User Case Evals</p>
                <p className="text-xs opacity-90">
                  Based on real user queries from PoC testing. Tracks precision, relevance, age-appropriateness.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-4">
          <p className="text-sm">
            <strong>Why this matters:</strong> LangSmith monitoring ensures we can detect recommendation 
            quality regressions in production. If a model update causes bad suggestions, we catch it 
            immediately through automated evals + user feedback metrics.
          </p>
        </div>
      </div>
    </div>
  );
}