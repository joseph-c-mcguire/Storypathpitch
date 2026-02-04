import { Code, Database, Cloud, Zap, BarChart, Lock } from 'lucide-react';

export function TechnologyStack() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Technology Stack
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          Modern, Scalable Architecture
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-lg">Frontend</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span><strong>React 18+</strong> - Modern UI framework</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span><strong>TypeScript</strong> - Type-safe development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span><strong>Tailwind CSS</strong> - Responsive styling</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span><strong>Vite</strong> - Fast build tooling</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span><strong>Shadcn/UI</strong> - Accessible components</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-lg">Backend API</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full" />
              <span><strong>Python 3.11+</strong> - Core language</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full" />
              <span><strong>FastAPI</strong> - High-performance API framework</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full" />
              <span><strong>Pydantic</strong> - Data validation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full" />
              <span><strong>LangChain</strong> - LLM orchestration</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full" />
              <span><strong>Celery</strong> - Background tasks (cron jobs)</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-lg">Database</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full" />
              <span><strong>Supabase</strong> - Managed Postgres + Auth</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full" />
              <span><strong>pgvector</strong> - Vector similarity search</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full" />
              <span><strong>Redis</strong> - Caching layer</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full" />
              <span><strong>Row-level security</strong> - Data isolation</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-lg">AI/ML Stack</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-600 rounded-full" />
              <span><strong>DeepSeek R1</strong> - Free LLM for tagging/parsing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-600 rounded-full" />
              <span><strong>Sentence Transformers</strong> - Embeddings</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-600 rounded-full" />
              <span><strong>scikit-learn</strong> - Collaborative filtering</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-600 rounded-full" />
              <span><strong>LangSmith</strong> - LLM evaluation & tracing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-600 rounded-full" />
              <span><strong>Recommenders (Microsoft)</strong> - Rec algorithms</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-lg">External APIs</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              <span><strong>OpenLibrary API</strong> - Primary metadata</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              <span><strong>Google Books API</strong> - Fallback enrichment</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              <span><strong>openlibrary-client (Python)</strong> - SDK</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BarChart className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-lg">Monitoring</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full" />
              <span><strong>LangSmith</strong> - LLM tracing & observability (P2 priority)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full" />
              <span><strong>Grafana</strong> - Visualization dashboards</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full" />
              <span><strong>Prometheus</strong> - Metrics collection</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full" />
              <span><strong>Sentry</strong> - Error tracking</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full" />
              <span><strong>Structured logging</strong> - JSON logs to Supabase</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-lg">DevOps & Security</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full" />
              <span><strong>Docker</strong> - Containerization</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full" />
              <span><strong>Kubernetes</strong> - Orchestration (optional)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full" />
              <span><strong>GitHub Actions</strong> - CI/CD pipelines</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-600 rounded-full" />
              <span><strong>Supabase Auth</strong> - User management</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-lg">Testing</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span><strong>Playwright</strong> - E2E testing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span><strong>pytest</strong> - Backend unit tests</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span><strong>Jest/React Testing Library</strong> - Frontend</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span><strong>LangSmith Evals</strong> - RAG quality testing</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-lg">Hosting</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-600 rounded-full" />
              <span><strong>Vercel/Netlify</strong> - Frontend hosting</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-600 rounded-full" />
              <span><strong>Supabase Cloud</strong> - Database + Auth</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-600 rounded-full" />
              <span><strong>Fly.io/Railway</strong> - API backend</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-600 rounded-full" />
              <span><strong>Cloudflare</strong> - CDN + DDoS protection</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <h3 className="text-2xl font-bold mb-6">Architecture Decisions & Rationale</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Why Supabase over custom Postgres?</h4>
            <p className="text-gray-700 text-sm">
              Supabase provides managed Postgres with built-in auth, row-level security, and real-time
              subscriptions. The pgvector extension enables native vector search without external
              services. This reduces operational complexity and cost for Providence Library.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-purple-600">Why DeepSeek over GPT-4?</h4>
            <p className="text-gray-700 text-sm">
              DeepSeek offers comparable performance for structured parsing and tagging at near-zero
              cost. For a public library with budget constraints, this makes the system sustainable
              long-term. We can upgrade to commercial LLMs if needed.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-green-600">Why hybrid recommendations?</h4>
            <p className="text-gray-700 text-sm">
              Pure collaborative filtering fails for new books (cold start problem). Pure content-based
              search misses usage patterns. Combining both gives us accuracy with coverage. Librarians
              confirmed this matches their mental model of "similar books" + "what others enjoyed."
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-orange-600">Why FastAPI over Flask/Django?</h4>
            <p className="text-gray-700 text-sm">
              FastAPI provides automatic OpenAPI docs, async support for LLM calls, and Pydantic
              validation out-of-the-box. The performance gains matter when handling concurrent student
              queries during school hours.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Scalability Path</h3>
        <p className="mb-4">
          Initial deployment supports 1,000-5,000 students at Providence Library. Architecture
          scales to district-wide deployment:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-xl">•</span>
            <span>
              <strong>Multi-tenancy:</strong> Kubernetes namespace per school, isolated Supabase
              projects
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">•</span>
            <span>
              <strong>Horizontal scaling:</strong> API pods auto-scale based on load
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">•</span>
            <span>
              <strong>Caching:</strong> Redis layer reduces DB queries for popular searches
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">•</span>
            <span>
              <strong>Cost optimization:</strong> Serverless Supabase Edge Functions for inference API
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}