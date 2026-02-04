import { Calendar, CheckCircle, Users, Wrench } from 'lucide-react';

export function Implementation() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto bg-gray-50">
      <div className="mb-12">
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Implementation Roadmap
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          Timeline & Rollout Strategy
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded" />
      </div>

      {/* Current Status Callout */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-4">Current Project Status (Demo Phase)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-3xl font-bold mb-2">~75%</div>
            <div className="text-sm">Test Coverage Achieved</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-3xl font-bold mb-2">Week 14</div>
            <div className="text-sm">Testing & Evaluation Phase</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-3xl font-bold mb-2">Stable</div>
            <div className="text-sm">Anonymous Discovery Mode</div>
          </div>
        </div>
        <div className="bg-white/10 rounded-lg p-6">
          <h4 className="font-bold mb-3">Priority Action Items (P0):</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Stabilize library card login flows and recommendation history management</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>End-to-end verification of librarian dashboard workflows and feedback review</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Smoke-test admin job controls (recommendation refresh, analytics, embeddings)</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Expand Playwright scenarios for child, adult, and family personas (P1)</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Implement LangSmith monitoring pipeline for model interactions (P2)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
        <div className="flex items-center gap-4 mb-8">
          <Calendar className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="text-2xl font-bold">16-20 Week Timeline</h3>
            <p className="text-gray-600">From kickoff to production deployment</p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600" />

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="relative pl-20">
              <div className="absolute left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
                1
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">Discovery & Setup</h4>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    Weeks 1-3
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Data audit:</strong> Review library catalog structure, borrow history
                      format, user database schema
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Requirements workshops:</strong> Interview librarians, observe student
                      interactions, define success metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Infrastructure setup:</strong> Provision Supabase, configure APIs,
                      establish dev environments
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Privacy review:</strong> Legal counsel approval for FERPA/COPPA
                      compliance plan
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative pl-20">
              <div className="absolute left-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
                2
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">Data Migration & Enrichment</h4>
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                    Weeks 4-7
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Legacy catalog import:</strong> One-time migration script for existing
                      10,000+ book records
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Metadata enrichment:</strong> Fetch OpenLibrary/Google Books data for
                      all titles (parallel processing)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>LLM tagging:</strong> DeepSeek analyzes descriptions to extract themes,
                      mood, age ranges
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Vector embedding:</strong> Generate and store embeddings for semantic
                      search
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Borrow history import:</strong> Anonymized checkout data for
                      collaborative filtering
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative pl-20">
              <div className="absolute left-4 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
                3
              </div>
              <div className="bg-indigo-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">Core Development</h4>
                  <span className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full">
                    Weeks 8-13
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>API services:</strong> Build Agent, Inference, Embed, Admin, Auth
                      endpoints
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Recommendation engine:</strong> Implement hybrid collaborative +
                      content-based filtering
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Frontend UI:</strong> Build anonymous mode, card-login, and admin
                      dashboard interfaces
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Chat interface:</strong> Natural language query processing with LLM
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Accessibility:</strong> WCAG 2.1 AA compliance, screen reader testing
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative pl-20">
              <div className="absolute left-4 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
                4
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">Testing & Evaluation</h4>
                  <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                    Weeks 14-15
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Playwright E2E tests:</strong> User flows for all personas (student,
                      librarian, admin)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>LangSmith RAG evaluations:</strong> Persona-based tests (child, teen, adult, family) 
                      with known-good queries ("Wuthering Heights" for "Victorian sad books", age-appropriate filtering)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Integration tests:</strong> Backend + frontend workflows, auth flows, recommendation history
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Coverage expansion:</strong> Increase automated test coverage from ~75% to 90% target
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Librarian beta testing:</strong> 2-3 librarians test admin tools and
                      provide feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Security audit:</strong> Penetration testing, privacy compliance check
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="relative pl-20">
              <div className="absolute left-4 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
                5
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">Pilot Launch</h4>
                  <span className="px-3 py-1 bg-orange-600 text-white text-sm rounded-full">
                    Week 16
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Soft launch:</strong> Deploy to 50-100 students (1-2 classes) with iPad
                      kiosk
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Librarian training:</strong> 2-hour workshop on admin dashboard,
                      troubleshooting
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Monitoring:</strong> Real-time Grafana dashboards, Sentry error tracking
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Feedback collection:</strong> Surveys for students and librarians after
                      1 week
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 6 */}
            <div className="relative pl-20">
              <div className="absolute left-4 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-lg">
                6
              </div>
              <div className="bg-red-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">Full Rollout & Handoff</h4>
                  <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                    Weeks 17-20
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Iteration:</strong> Fix bugs, refine recommendations based on pilot
                      feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Full deployment:</strong> All students gain access, announce via school
                      communications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Documentation:</strong> Admin guide, troubleshooting wiki, API reference
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Handoff:</strong> Transfer ownership to Providence Library IT, establish
                      support SLA
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Structure */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div className="flex items-center gap-4 mb-8">
          <Users className="w-8 h-8 text-purple-600" />
          <div>
            <h3 className="text-2xl font-bold">Project Team Structure</h3>
            <p className="text-gray-600">5-7 person cross-functional team</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-bold mb-2">Technical Lead</h4>
            <p className="text-sm text-gray-600 mb-2">1 person, 50% allocation</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Architecture decisions</li>
              <li>• Code review</li>
              <li>• Stakeholder communication</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-600 pl-4">
            <h4 className="font-bold mb-2">ML/AI Engineers</h4>
            <p className="text-sm text-gray-600 mb-2">2 people, 100% allocation</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Recommendation engine</li>
              <li>• Vector embeddings</li>
              <li>• LLM integration</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-600 pl-4">
            <h4 className="font-bold mb-2">Full-Stack Developers</h4>
            <p className="text-sm text-gray-600 mb-2">2 people, 100% allocation</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• API services (FastAPI)</li>
              <li>• Frontend (React/TypeScript)</li>
              <li>• Database schema</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-600 pl-4">
            <h4 className="font-bold mb-2">UX/UI Designer</h4>
            <p className="text-sm text-gray-600 mb-2">1 person, 50% allocation</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Interface design</li>
              <li>• Accessibility compliance</li>
              <li>• User testing facilitation</li>
            </ul>
          </div>

          <div className="border-l-4 border-red-600 pl-4">
            <h4 className="font-bold mb-2">QA Engineer</h4>
            <p className="text-sm text-gray-600 mb-2">1 person, 75% allocation</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• E2E test automation</li>
              <li>• RAG evaluation</li>
              <li>• Security testing</li>
            </ul>
          </div>

          <div className="border-l-4 border-indigo-600 pl-4">
            <h4 className="font-bold mb-2">Project Manager</h4>
            <p className="text-sm text-gray-600 mb-2">1 person, 25% allocation</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Timeline coordination</li>
              <li>• Stakeholder updates</li>
              <li>• Risk management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ongoing Support */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-4 mb-6">
          <Wrench className="w-8 h-8" />
          <h3 className="text-2xl font-bold">Post-Launch Support</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">First 6 Months (Included)</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Weekly check-ins with librarians</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Bug fixes and performance tuning</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Monthly KPI reports (checkout rates, usage stats)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>On-demand training sessions</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Long-Term (Optional)</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Retainer for feature enhancements</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Annual model retraining with new data</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Multi-school expansion support</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Custom integration with district systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}