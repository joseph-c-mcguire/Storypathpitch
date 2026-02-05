import { Calendar, Users as UsersIcon, Target, CheckCircle } from 'lucide-react';

export function PhasedDelivery() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
          Rollout Plan
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          15-Week Pro Bono Sprint
        </h2>
        <p className="text-xl text-gray-600">
          Pro bono consulting project for Providence Library
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-teal-600 rounded mt-4" />
      </div>

      {/* Team Composition */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white mb-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <UsersIcon className="w-8 h-8" />
          Small Consulting Squad (5 people)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <div className="text-4xl mb-3">👨‍💻</div>
            <h4 className="font-bold mb-2">Tech Lead / Architect</h4>
            <p className="text-sm opacity-90">System design, API architecture, technical decisions</p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <div className="text-4xl mb-3">⚙️</div>
            <h4 className="font-bold mb-2">Full-Stack Engineer</h4>
            <p className="text-sm opacity-90">Frontend (React), backend (FastAPI), integration</p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <div className="text-4xl mb-3">🤖</div>
            <h4 className="font-bold mb-2">Data/ML Engineer</h4>
            <p className="text-sm opacity-90">Embeddings, pipelines, ranking, monitoring</p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <div className="text-4xl mb-3">🎨</div>
            <h4 className="font-bold mb-2">Product/UX</h4>
            <p className="text-sm opacity-90">Part-time: User research, prototyping, testing</p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <div className="text-4xl mb-3">📚</div>
            <h4 className="font-bold mb-2">Change Mgmt</h4>
            <p className="text-sm opacity-90">Part-time: Training, docs, librarian support</p>
          </div>
        </div>
      </div>

      {/* Already Implemented in PoC */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-10 text-white mb-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <CheckCircle className="w-8 h-8" />
          ✓ Already Implemented in Working PoC
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-4">Core Functionality</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>3 Access Modes:</strong> Anonymous iPad, Library Card Login, Librarian Admin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Quick Browse Setup:</strong> Age bands (5-11, 12-17), family-safe filters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Chat Interface:</strong> Conversational AI book assistant with greeting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Structured Search:</strong> Genre, mood, era, length, language dropdowns + free text</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Vector Search:</strong> pgvector similarity search on ~50 books (OpenLibrary)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>LLM Query Parsing:</strong> Extract metadata from natural language</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Accessibility & UX</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Display Themes:</strong> Light, Dark, High Contrast modes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Dyslexia-Friendly Fonts:</strong> Toggle for OpenDyslexic/Lexend</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Text Size:</strong> Small, Medium, Large, Extra Large options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Color Blind Modes:</strong> Protanopia, Deuteranopia, Tritanopia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Reduce Motion:</strong> Toggle for vestibular sensitivity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Screen Reader Mode:</strong> ARIA labels for JAWS/NVDA/VoiceOver</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-white bg-opacity-10 backdrop-blur rounded-xl p-6">
          <p className="text-sm">
            <strong>What this means:</strong> StoryPath already has a working foundation with core recommendation 
            logic, accessibility features, and privacy-first design implemented. The 15-week plan focuses on 
            production data integration, scale testing, and librarian admin tools.
          </p>
        </div>
      </div>

      {/* 15-Week Timeline */}
      <div className="bg-white rounded-2xl p-10 shadow-xl mb-12">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-blue-600" />
          15-Week Sprint: PoC → Production Pilot
        </h3>

        <div className="space-y-8">
          {/* Week 1-2: Discovery */}
          <div className="relative pl-8 border-l-4 border-blue-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              1
            </div>
            <div className="mb-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                Weeks 1-2
              </span>
            </div>
            <h4 className="text-xl font-bold mb-2">Discovery & Integration Planning</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>• Stakeholder interviews (librarians, IT, privacy officers)</li>
              <li>• Confirm library system API access (card catalog + borrow history export)</li>
              <li>• Privacy constraints documentation (FERPA/COPPA compliance review)</li>
              <li>• Success metrics definition + baseline data collection plan</li>
              <li>• Identify 1 pilot library branch for initial testing</li>
            </ul>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Deliverable:</strong> Technical integration spec + privacy compliance doc + pilot library sign-off
              </p>
            </div>
          </div>

          {/* Week 3-10: Data Foundation */}
          <div className="relative pl-8 border-l-4 border-purple-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              2
            </div>
            <div className="mb-2">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                Weeks 3-10
              </span>
            </div>
            <h4 className="text-xl font-bold mb-2">Production Data Integration & Development</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>• Ingest Providence Library card catalog (~50K books)</li>
              <li>• Import anonymized borrow history (last 2 years) for collaborative signals</li>
              <li>• Generate embeddings for full catalog (DeepSeek batch job)</li>
              <li>• Build co-borrow matrix + cohort popularity scores</li>
              <li>• Set up nightly ETL pipeline for new acquisitions</li>
              <li>• Supabase schema migration + pgvector index optimization</li>
              <li>• Performance testing and optimization at scale</li>
              <li>• Security hardening and penetration testing</li>
            </ul>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Deliverable:</strong> Production database with 50K books + embeddings + automated sync + tested performance
              </p>
            </div>
          </div>

          {/* Week 11-12: Librarian Tools + ILS Integration */}
          <div className="relative pl-8 border-l-4 border-green-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              3
            </div>
            <div className="mb-2">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Weeks 11-12
              </span>
            </div>
            <h4 className="text-xl font-bold mb-2">Librarian Admin Portal + Real-Time Availability</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>• Librarian admin dashboard (monitor usage, flag inappropriate recommendations)</li>
              <li>• Content moderation tools (block books, adjust filters, tag metadata)</li>
              <li>• ILS integration for real-time book availability (checked out vs on shelf)</li>
              <li>• Barcode scanner integration for iPad kiosks</li>
              <li>• Analytics dashboard (top queries, recommendation→checkout rate, engagement)</li>
            </ul>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Deliverable:</strong> Admin portal + ILS integration + barcode scanning working
              </p>
            </div>
          </div>

          {/* Week 13: Pilot Deployment */}
          <div className="relative pl-8 border-l-4 border-orange-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              4
            </div>
            <div className="mb-2">
              <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                Week 13
              </span>
            </div>
            <h4 className="text-xl font-bold mb-2">Pilot Deployment + Librarian Training</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>• Deploy iPads with StoryPath kiosks to 1 pilot library branch</li>
              <li>• 45-min librarian training session (monitoring, moderation, troubleshooting)</li>
              <li>• Patron orientation materials (1-page "How to Use StoryPath" handouts)</li>
              <li>• Monitoring + alerting setup (error tracking, performance metrics)</li>
              <li>• Launch with 1-week office hours support</li>
            </ul>
            <div className="bg-orange-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Deliverable:</strong> Live pilot in 1 library branch + trained librarians + support plan
              </p>
            </div>
          </div>

          {/* Week 14-15: Monitor, Iterate, Scale */}
          <div className="relative pl-8 border-l-4 border-red-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              5
            </div>
            <div className="mb-2">
              <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                Weeks 14-15
              </span>
            </div>
            <h4 className="text-xl font-bold mb-2">Data Collection, UX Refinement & System-Wide Rollout</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>• Monitor real usage: query patterns, recommendation acceptance, checkout conversion</li>
              <li>• Weekly check-ins with pilot librarians (feedback, pain points, feature requests)</li>
              <li>• UX refinements based on patron usage (e.g., query rewording, UI tweaks)</li>
              <li>• Content filter tuning (age-appropriateness, family-safe adjustments)</li>
              <li>• Performance optimization (caching, query latency reduction)</li>
              <li>• Begin library system-wide rollout preparation and deployment</li>
              <li>• Final pilot report: metrics, case studies, recommendations for scale</li>
            </ul>
            <div className="bg-red-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Deliverable:</strong> Validated pilot + usage data + tuning recommendations + system-wide rollout initiated
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
          <p className="text-center font-bold text-2xl">
            Total: 15 weeks from kickoff to library system-wide deployment
          </p>
          <p className="text-center text-sm mt-2 opacity-90">
            Pro bono engagement • Foundation already built in PoC • Focus on production readiness
          </p>
        </div>
      </div>

      {/* Risk Mitigation */}
      <div className="bg-white rounded-2xl p-10 shadow-xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Target className="w-8 h-8 text-orange-600" />
          Low-Risk Rollout Strategy
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-bold mb-2 text-blue-900">Pilot First</h4>
            <p className="text-sm text-gray-700">
              Start with 1 library branch for validation + UX iteration before scaling. 
              Fail fast, learn, adjust.
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-6">
            <h4 className="font-bold mb-2 text-purple-900">Expand Gradually</h4>
            <p className="text-sm text-gray-700">
              Additional branches next, then library system-wide. Each wave gets training templates + office 
              hours for 2 weeks post-launch.
            </p>
          </div>

          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-bold mb-2 text-green-900">Fallback Plans</h4>
            <p className="text-sm text-gray-700">
              If LLM fails, fall back to keyword search. If vector DB is slow, cache aggressively. 
              Graceful degradation everywhere.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <p className="text-sm text-gray-700">
            <strong>Training approach:</strong> 30-45 min librarian sessions, 1-page "how to use 
            kiosk" guides for patrons, office hours for 2 weeks after each wave. Change management 
            lead ensures smooth adoption.
          </p>
        </div>
      </div>
    </div>
  );
}