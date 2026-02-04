import { CheckCircle, Hammer, Rocket } from 'lucide-react';

export function PoCScope() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-green-600 font-semibold uppercase text-sm tracking-wider">
          Slide 9
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          What's Real in the PoC vs What's Mocked
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded" />
      </div>

      <div className="bg-blue-50 rounded-2xl p-8 mb-8 border-l-4 border-blue-600">
        <p className="text-lg text-gray-700 leading-relaxed">
          This submission includes a <strong>runnable proof-of-concept</strong> demonstrating core
          functionality with ~75% test coverage. Some production features are intentionally mocked
          or simplified to focus on the recommendation engine and user experience. Below is the
          honest breakdown of what works today vs. what's planned for production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Working in PoC */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Working in PoC</h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>End-to-end query → recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Anonymous discovery mode (search + chat)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Age band filtering & family-safe mode</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Hybrid ranking (collaborative + semantic)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>LLM query parsing (DeepSeek)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Feedback capture (thumbs up/down)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Catalog ingestion (OpenLibrary + Google Books)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Vector embeddings & semantic search</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Basic accessibility controls (themes, fonts)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Playwright E2E tests + pytest unit tests</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>75% test coverage + ~120 integration tests</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>CI/CD pipeline (GitHub Actions, Docker)</span>
            </li>
          </ul>
        </div>

        {/* Mocked / Simplified */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Hammer className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold">Mocked / Simplified</h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <Hammer className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>LangSmith monitoring (hooks configured, mocked)</span>
            </li>
            <li className="flex items-start gap-2">
              <Hammer className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>Library card login (basic auth, needs hardening)</span>
            </li>
            <li className="flex items-start gap-2">
              <Hammer className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>Librarian dashboard (partial workflows verified)</span>
            </li>
            <li className="flex items-start gap-2">
              <Hammer className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>Admin job console (untested smoke paths)</span>
            </li>
            <li className="flex items-start gap-2">
              <Hammer className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>Popular books overview (data not surfacing)</span>
            </li>
            <li className="flex items-start gap-2">
              <Hammer className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>Recommendation history persistence (breakpoints exist)</span>
            </li>
            <li className="flex items-start gap-2">
              <Hammer className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>Full FERPA/COPPA audit workflows (documented only)</span>
            </li>
            <li className="flex items-start gap-2">
              <Hammer className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>Production monitoring (basic logging, no LangSmith yet)</span>
            </li>
            <li className="flex items-start gap-2">
              <Hammer className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>Bulk import workflows (UI present, needs testing)</span>
            </li>
          </ul>
        </div>

        {/* Planned for Production */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Planned for Production</h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Supabase row-level security (RLS) for patron data</span>
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Full role-based access control (RBAC)</span>
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Comprehensive audit logs & retention policies</span>
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>LangSmith monitoring for LLM observability</span>
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Grafana + Prometheus metrics pipeline</span>
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>90%+ test coverage (currently ~75%)</span>
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Multi-school tenant isolation (Kubernetes)</span>
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Librarian training materials & documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Integration with existing circulation systems</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Engineering Maturity Statement</h3>
        <p className="text-lg leading-relaxed mb-4">
          This PoC intentionally prioritizes <strong>core recommendation quality</strong> and{' '}
          <strong>user experience</strong> over production-grade infrastructure. The ~75% test
          coverage and working end-to-end flows demonstrate that the architecture is sound and
          scalable.
        </p>
        <p className="text-lg leading-relaxed">
          The P0/P1/P2 action items listed in the implementation roadmap show a clear path from
          demo to production deployment. Gaps are known, documented, and addressable within the
          proposed 16-20 week timeline.
        </p>
      </div>
    </div>
  );
}