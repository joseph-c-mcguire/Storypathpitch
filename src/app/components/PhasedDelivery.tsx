import { Calendar, Users as UsersIcon, Target, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

export function PhasedDelivery() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
          Rollout Plan
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          15-Week Pro Bono Sprint to Pilot
        </h2>
        <p className="text-xl text-gray-600">
          Realistic phased deployment: PoC → Production Pilot → Scale in Phase 2
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
                <span><strong>Quick Browse Setup:</strong> Age bands (child 0-12, teen 13-17, adult 18+)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Chat Interface:</strong> Conversational AI book assistant with greeting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Structured Search:</strong> Genre, free text search working</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>Vector Search:</strong> pgvector similarity search (tested with sample data)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-200 font-bold">✓</span>
                <span><strong>LLM Query Parsing:</strong> Extract intent from natural language (DeepSeek)</span>
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
            production data integration, scale testing, and reaching a functional pilot deployment.
          </p>
        </div>
      </div>

      {/* What's Realistic vs Phase 2 */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-10 mb-12 border-2 border-orange-300">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
          <AlertTriangle className="w-8 h-8 text-orange-600" />
          Scope: What's Realistic in 15 Weeks vs. Phase 2
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-green-400">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h4 className="font-bold text-lg text-green-900">✅ Achievable in 15 Weeks</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>50K books ingested</strong> with vector embeddings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Pilot in 1 library branch</strong> with iPads deployed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Basic admin dashboard</strong> for librarians (monitoring, basic analytics)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>2-3 weeks real usage data</strong> for validation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Trained librarians</strong> with support documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Performance at scale tested</strong> (50K books, concurrent users)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Data-driven case for Phase 2</strong> expansion</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-blue-400">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <h4 className="font-bold text-lg text-blue-900">🔄 Phase 2 (Post-Pilot)</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Full ILS integration</strong> (depends on library's system - Koha/Evergreen/other)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Real-time book availability</strong> (checked out vs. on shelf)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Barcode scanner integration</strong> for iPad kiosks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Collaborative filtering</strong> ("users like you also borrowed...")</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Co-borrow matrix</strong> for enhanced recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>System-wide rollout</strong> (4-8 weeks after pilot validation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Professional security audit</strong> for multi-library deployment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-orange-100 rounded-lg p-4 border border-orange-300">
          <p className="text-sm text-gray-800">
            <strong>Why this split?</strong> The 15-week timeline focuses on proving value with a working pilot. 
            Advanced features like ILS integration depend on external systems (library's infrastructure) and 
            require validation that the core system works first. Phase 2 is funded based on pilot success.
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
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                Weeks 1-2
              </span>
              <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">✅ Realistic</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Discovery & Integration Planning</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>• Stakeholder interviews (librarians, IT, privacy officers)</li>
              <li>• Identify library's ILS system and evaluate API access options</li>
              <li>• Privacy constraints documentation (FERPA/COPPA compliance review)</li>
              <li>• Success metrics definition + baseline data collection plan</li>
              <li>• Select 1 pilot library branch for initial testing</li>
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
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                Weeks 3-10
              </span>
              <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded">⚠️ Compressed (realistic: 11-12 weeks)</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Production Data Integration & Scale Testing</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span><strong>Ingest Providence Library catalog</strong> (~50K books from export)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span><strong>Generate embeddings</strong> for full catalog (OpenAI batch processing)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span><strong>Supabase production deployment</strong> with pgvector optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span><strong>Performance testing at scale</strong> (50K books, 50+ concurrent users)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span><strong>Security hardening</strong> (FERPA/COPPA compliance validation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 flex-shrink-0">→</span>
                <span><strong>Nightly ETL pipeline</strong> for new acquisitions (setup, not fully automated)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">↓</span>
                <span className="text-gray-500"><strong>Co-borrow matrix</strong> (deferred to Phase 2 - requires borrow history analysis)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">↓</span>
                <span className="text-gray-500"><strong>Collaborative filtering</strong> (deferred to Phase 2 - complex algorithm)</span>
              </li>
            </ul>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Deliverable:</strong> Production database with 50K books + embeddings + tested performance + security validation
              </p>
            </div>
            <div className="mt-3 bg-yellow-50 rounded-lg p-3 border border-yellow-300">
              <p className="text-xs text-gray-700">
                <strong>Timeline Note:</strong> Realistically needs 11-12 weeks for all components. Can deliver core functionality in 8 weeks but ETL automation may extend timeline.
              </p>
            </div>
          </div>

          {/* Week 11-12: Librarian Tools */}
          <div className="relative pl-8 border-l-4 border-green-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              3
            </div>
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Weeks 11-12
              </span>
              <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded">⚠️ Scoped for MVP</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Librarian Admin Portal (Basic)</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span><strong>Admin dashboard</strong> (monitor usage, view top queries, basic analytics)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span><strong>Content moderation tools</strong> (flag inappropriate recommendations, basic filters)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span><strong>Analytics dashboard</strong> (queries, recommendations, engagement metrics)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">↓</span>
                <span className="text-gray-500"><strong>ILS integration</strong> (Phase 2 - depends on library's system API)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">↓</span>
                <span className="text-gray-500"><strong>Barcode scanner</strong> (Phase 2 - requires hardware testing)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">↓</span>
                <span className="text-gray-500"><strong>Real-time availability</strong> (Phase 2 - requires ILS integration)</span>
              </li>
            </ul>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Deliverable:</strong> Basic admin portal with monitoring + analytics • ILS/barcode features deferred to Phase 2
              </p>
            </div>
            <div className="mt-3 bg-blue-50 rounded-lg p-3 border border-blue-300">
              <p className="text-xs text-gray-700">
                <strong>Phase 2 Rationale:</strong> ILS integration requires identifying library's specific system (Koha, Evergreen, etc.) and API evaluation. This is 2-3 weeks work that's better done after pilot proves core value.
              </p>
            </div>
          </div>

          {/* Week 13: Pilot Deployment */}
          <div className="relative pl-8 border-l-4 border-orange-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              4
            </div>
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                Week 13
              </span>
              <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">✅ Realistic</span>
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

          {/* Week 14-15: Data Collection */}
          <div className="relative pl-8 border-l-4 border-red-600">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              5
            </div>
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                Weeks 14-15
              </span>
              <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">✅ Realistic</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Data Collection & Refinement</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>• Monitor real usage: query patterns, recommendation acceptance, checkout conversion</li>
              <li>• Weekly check-ins with pilot librarians (feedback, pain points, feature requests)</li>
              <li>• UX refinements based on patron usage (e.g., query rewording, UI tweaks)</li>
              <li>• Content filter tuning (age-appropriateness, family-safe adjustments)</li>
              <li>• Performance optimization (caching, query latency reduction)</li>
              <li>• <strong>Prepare Phase 2 recommendations</strong> based on pilot data</li>
              <li>• Final pilot report: metrics, case studies, scale-up plan</li>
            </ul>
            <div className="bg-red-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Deliverable:</strong> Validated pilot + 2-3 weeks usage data + tuning recommendations + data-driven case for Phase 2
              </p>
            </div>
            <div className="mt-3 bg-blue-50 rounded-lg p-3 border border-blue-300">
              <p className="text-xs text-gray-700">
                <strong>Timeline Note:</strong> System-wide rollout requires 4-8 weeks pilot validation (industry standard). Week 15 delivers pilot report with recommendations, not full rollout.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
          <p className="text-center font-bold text-2xl">
            Total: 15 weeks from kickoff to validated pilot with real usage data
          </p>
          <p className="text-center text-sm mt-2 opacity-90">
            Pro bono engagement • Foundation already built • Focus on proving value with 1-branch pilot
          </p>
        </div>
      </div>

      {/* Phase 2: What Comes Next */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 mb-12 border-2 border-blue-300">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">
          Phase 2: Post-Pilot Expansion (Estimated 8-12 weeks)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-blue-300">
            <h4 className="font-bold text-lg mb-4 text-blue-900">Advanced Features</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Full ILS Integration</strong> (2-3 weeks once system identified)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Barcode Scanner</strong> (1-2 weeks hardware integration)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Collaborative Filtering</strong> (2-3 weeks algorithm development)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Co-Borrow Matrix</strong> (2-3 weeks with borrow history)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Professional Security Audit</strong> (2-3 weeks for multi-library)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border border-green-300">
            <h4 className="font-bold text-lg mb-4 text-green-900">Scale-Up Rollout</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span><strong>Week 1-2:</strong> Incorporate pilot feedback + refinements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span><strong>Week 3-5:</strong> Deploy to 3-5 additional branches (gradual expansion)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span><strong>Week 6-8:</strong> Monitor, tune, prepare for system-wide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span><strong>Week 9-12:</strong> Library system-wide deployment (all branches)</span>
              </li>
            </ul>
            <div className="mt-4 bg-green-50 rounded p-3">
              <p className="text-xs text-gray-700">
                <strong>Contingency:</strong> Each wave includes 2-week monitoring period before next expansion.
              </p>
            </div>
          </div>
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
              Start with 1 library branch for validation + UX iteration. Prove core value before 
              committing to advanced features. Fail fast, learn, adjust.
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-6">
            <h4 className="font-bold mb-2 text-purple-900">Expand Gradually</h4>
            <p className="text-sm text-gray-700">
              Phase 2 adds 3-5 branches, then library system-wide. Each wave gets training templates + 
              office hours for 2 weeks post-launch. 4-8 week validation between phases.
            </p>
          </div>

          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-bold mb-2 text-green-900">Fallback Plans</h4>
            <p className="text-sm text-gray-700">
              If LLM fails, fall back to keyword search. If vector DB is slow, cache aggressively. 
              Graceful degradation everywhere. No single point of failure.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <p className="text-sm text-gray-700">
            <strong>Training approach:</strong> 30-45 min librarian sessions, 1-page "how to use 
            kiosk" guides for patrons, office hours for 1-2 weeks after deployment. Change management 
            lead ensures smooth adoption and captures feedback.
          </p>
        </div>

        <div className="mt-6 bg-orange-50 rounded-xl p-6 border border-orange-300">
          <p className="text-sm text-gray-700">
            <strong>Realistic Timeline Summary:</strong> 15 weeks delivers a validated pilot with real 
            usage data and a data-driven case for Phase 2. Advanced features (ILS, barcode, collaborative 
            filtering) and system-wide rollout happen in Phase 2 (8-12 additional weeks) once pilot proves 
            value. This approach minimizes risk and ensures funding decisions are based on evidence.
          </p>
        </div>
      </div>
    </div>
  );
}
