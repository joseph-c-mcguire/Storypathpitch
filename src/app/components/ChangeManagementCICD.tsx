import { GitBranch, CheckCircle, AlertTriangle, Rocket, Database, Activity, Play } from 'lucide-react';
import { useState } from 'react';

export function ChangeManagementCICD() {
  const [activeTab, setActiveTab] = useState<'readiness' | 'deployment'>('readiness');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-indigo-600 font-semibold uppercase text-sm tracking-wider">
          Testing & Change Management
        </span>

        {/* Header */}
        <div className="mt-6 mb-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Testing Plan & Deployment Strategy
          </h2>
          <p className="text-xl text-gray-600">
            Automated testing, CI/CD pipeline, and controlled rollout framework for school district deployment
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab('readiness')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'readiness'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-indigo-50'
            }`}
          >
            Testing Framework
          </button>
          <button
            onClick={() => setActiveTab('deployment')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'deployment'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-indigo-50'
            }`}
          >
            Change Management & CI/CD
          </button>
        </div>

        {/* Readiness Tab */}
        {activeTab === 'readiness' && (
          <div className="space-y-6">
            {/* Proof of Concept Status */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white bg-opacity-20 rounded-full p-4">
                  <Play className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Proof of Concept Deployed for Testing</h3>
                  <p className="text-xl opacity-90">Running with sample OpenLibrary data to validate approach</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-4">
                  <div className="text-4xl font-bold mb-2">50</div>
                  <div className="text-base">Sample books from OpenLibrary API</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-4">
                  <div className="text-4xl font-bold mb-2">3</div>
                  <div className="text-base">Access modes tested (anonymous, card, librarian)</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-4">
                  <div className="text-4xl font-bold mb-2">&lt;2s</div>
                  <div className="text-base">Target recommendation response time (95th percentile)</div>
                </div>
              </div>
            </div>

            {/* Test Coverage Plan */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-indigo-600" />
                Automated Testing Strategy
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {/* Unit Tests */}
                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
                  <div className="font-bold text-xl text-blue-900 mb-3">Unit Tests</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-3xl font-bold text-blue-700">75%</div>
                    <div className="text-sm text-gray-600">current PoC</div>
                  </div>
                  <div className="text-sm text-gray-700 mb-4">Target: ≥70% backend coverage (enforced)</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Authentication & JWT validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>DeepSeek query parsing logic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Vector search ranking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>FERPA/COPPA guardrails</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs bg-blue-100 rounded p-2 text-blue-900">
                    <strong>Tool:</strong> pytest with coverage enforcement (--cov-fail-under=70)
                  </div>
                </div>

                {/* Integration Tests */}
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
                  <div className="font-bold text-xl text-green-900 mb-3">Integration Tests</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-3xl font-bold text-green-700">12</div>
                    <div className="text-sm text-gray-600">endpoints</div>
                  </div>
                  <div className="text-sm text-gray-700 mb-4">All critical API routes validated</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>POST /auth/anonymous</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>POST /auth/login (library card)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>GET /books (semantic search)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>POST /recommendations/chat</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs bg-green-100 rounded p-2 text-green-900">
                    <strong>Setup:</strong> PostgreSQL container + seed data for reproducible tests
                  </div>
                </div>

                {/* E2E Tests */}
                <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
                  <div className="font-bold text-xl text-purple-900 mb-3">E2E Tests</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-3xl font-bold text-purple-700">5</div>
                    <div className="text-sm text-gray-600">user flows</div>
                  </div>
                  <div className="text-sm text-gray-700 mb-4">Browser automation with Playwright</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Anonymous kiosk mode flow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Library card login → search</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Chat recommendation workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Librarian admin panel access</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs bg-purple-100 rounded p-2 text-purple-900">
                    <strong>Coverage:</strong> Screenshots + videos on failure for debugging
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Gates */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Automated Quality Gates (CI/CD Pipeline)</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Security Vulnerabilities</span>
                      <span className="text-2xl font-bold text-red-700">0 critical</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Target: 0 critical/high severity (enforced)</div>
                    <div className="text-xs bg-white rounded p-2 text-gray-700">
                      <strong>Tools:</strong> Trivy (container scanning), pip-audit, npm audit, Snyk
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Type Safety</span>
                      <span className="text-2xl font-bold text-blue-700">100%</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">TypeScript strict mode + Python mypy</div>
                    <div className="text-xs bg-white rounded p-2 text-gray-700">
                      <strong>Enforced:</strong> Pipeline fails on type errors
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Code Style</span>
                      <span className="text-2xl font-bold text-green-700">✓ Pass</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Automated formatting checks</div>
                    <div className="text-xs bg-white rounded p-2 text-gray-700">
                      <strong>Tools:</strong> Black (Python), ESLint + Prettier (TS/React)
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">License Compliance</span>
                      <span className="text-2xl font-bold text-purple-700">✓ Pass</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">MIT/Apache-2.0 dependencies only</div>
                    <div className="text-xs bg-white rounded p-2 text-gray-700">
                      <strong>Check:</strong> Flags GPL/proprietary licenses automatically
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Test Data Strategy */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg p-8 border-2 border-cyan-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-cyan-600" />
                Test Data & Environment Strategy
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-cyan-300">
                  <div className="font-bold text-cyan-900 mb-2 text-lg">PoC Environment</div>
                  <div className="text-base text-gray-700 mb-3">Sample OpenLibrary data</div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 50 sample books with embeddings</li>
                    <li>• Test user accounts (anon, patron, admin)</li>
                    <li>• Validates approach & search quality</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <div className="font-bold text-blue-900 mb-2 text-lg">Staging Environment</div>
                  <div className="text-base text-gray-700 mb-3">Full catalog for pilot district</div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Automated deployment from 'dev' branch</li>
                    <li>• Integration tests run post-deploy</li>
                    <li>• QA validation before production</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-300">
                  <div className="font-bold text-green-900 mb-2 text-lg">Production Rollout</div>
                  <div className="text-base text-gray-700 mb-3">Controlled phased deployment</div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Pilot: Single library branch (2 weeks)</li>
                    <li>• Library system-wide: After validation</li>
                    <li>• Blue-green deployment for safety</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Deployment Tab */}
        {activeTab === 'deployment' && (
          <div className="space-y-6">
            {/* CI/CD Pipeline Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Rocket className="w-8 h-8 text-indigo-600" />
                11-Phase CI/CD Pipeline (GitHub Actions)
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-300">
                  <div className="font-bold text-blue-900 mb-3">Phases 1-5: Quality Gates</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <span><strong>Testing:</strong> pytest (backend) + npm test (frontend)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <span><strong>Linting:</strong> flake8, black, mypy, ESLint</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <span><strong>Security:</strong> pip-audit, npm audit, Snyk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <span><strong>Dependencies:</strong> License compliance check</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                      <span><strong>Database:</strong> Schema validation, migration check</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-300">
                  <div className="font-bold text-green-900 mb-3">Phases 6-11: Build & Deploy</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">6</div>
                      <span><strong>Build:</strong> Docker images → GHCR registry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">7</div>
                      <span><strong>Container Scan:</strong> Trivy + SBOM generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">8</div>
                      <span><strong>Integration:</strong> E2E tests with PostgreSQL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">9</div>
                      <span><strong>Release Check:</strong> Aggregate readiness decision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">10</div>
                      <span><strong>Notify:</strong> Slack notifications to team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">11</div>
                      <span><strong>Deploy:</strong> Staging (auto) / Production (manual)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-4 border border-indigo-300">
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-indigo-700" />
                  <div>
                    <div className="font-bold text-indigo-900">Pipeline Execution Time: ~15 minutes</div>
                    <div className="text-sm text-gray-700">Parallel execution of independent phases (tests + linting + security run simultaneously)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Branching Strategy */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <GitBranch className="w-8 h-8 text-purple-600" />
                Git Branching Strategy (Modified Git Flow)
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
                  <div className="font-bold text-lg text-blue-900 mb-3">feature/*</div>
                  <div className="text-sm text-gray-700 mb-3">New development work</div>
                  <div className="bg-white rounded p-2 font-mono text-xs text-gray-800 mb-2">
                    feature/ISSUE-042-coppa
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Branch from: dev</li>
                    <li>• Merge to: dev</li>
                    <li>• Requires: 2 PR approvals</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
                  <div className="font-bold text-lg text-green-900 mb-3">dev</div>
                  <div className="text-sm text-gray-700 mb-3">Integration branch</div>
                  <div className="bg-white rounded p-2 font-mono text-xs text-gray-800 mb-2">
                    dev (always deployable)
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Auto-deploy to staging</li>
                    <li>• All features integrated here</li>
                    <li>• Protected: No direct push</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
                  <div className="font-bold text-lg text-purple-900 mb-3">release/*</div>
                  <div className="text-sm text-gray-700 mb-3">Release preparation</div>
                  <div className="bg-white rounded p-2 font-mono text-xs text-gray-800 mb-2">
                    release/v1.2.0
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Branch from: dev</li>
                    <li>• Merge to: main + dev</li>
                    <li>• Requires: Tech lead approval</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                  <div className="font-bold text-lg text-red-900 mb-3">hotfix/*</div>
                  <div className="text-sm text-gray-700 mb-3">Emergency fixes</div>
                  <div className="bg-white rounded p-2 font-mono text-xs text-gray-800 mb-2">
                    hotfix/ISSUE-789-jwt
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Branch from: main</li>
                    <li>• Merge to: main + dev</li>
                    <li>• Fast-track: 1 approval</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Semantic Versioning */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Semantic Versioning Strategy</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border border-red-300">
                  <div className="font-bold text-red-900 mb-2 text-2xl">MAJOR.x.x</div>
                  <div className="text-sm text-gray-700 mb-3">Breaking changes (v2.0.0)</div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• API endpoint removal</li>
                    <li>• Database schema breaking change</li>
                    <li>• Authentication method change</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-300">
                  <div className="font-bold text-yellow-900 mb-2 text-2xl">x.MINOR.x</div>
                  <div className="text-sm text-gray-700 mb-3">New features (v1.2.0)</div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• New API endpoints</li>
                    <li>• New UI components</li>
                    <li>• Backward-compatible changes</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-300">
                  <div className="font-bold text-green-900 mb-2 text-2xl">x.x.PATCH</div>
                  <div className="text-sm text-gray-700 mb-3">Bug fixes (v1.1.1)</div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Security patches</li>
                    <li>• Bug fixes</li>
                    <li>• Performance improvements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Rollback Strategy */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg p-8 border-2 border-orange-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
                Rollback Strategy (Target: &lt;5 minutes)
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-lg text-orange-900 mb-4">Automated Rollback Triggers</div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                      <div className="font-semibold text-red-800 mb-1">Error Rate Spike</div>
                      <div className="text-sm text-gray-600">If error rate &gt;1% for 5 minutes → alert on-call</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                      <div className="font-semibold text-red-800 mb-1">Health Check Failure</div>
                      <div className="text-sm text-gray-600">/health endpoint returns non-200 → rollback immediately</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-2 border-orange-300">
                      <div className="font-semibold text-orange-800 mb-1">Manual Trigger</div>
                      <div className="text-sm text-gray-600">On-call engineer can rollback via Slack command or dashboard</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg text-green-900 mb-4">Rollback Execution</div>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400">
                    <div className="text-gray-400"># 1. Identify last known good version</div>
                    <div>git tag --list  # → v1.1.0</div>
                    <div className="mt-3 text-gray-400"># 2. Pull previous images</div>
                    <div>docker pull ghcr.io/.../backend:v1.1.0</div>
                    <div className="mt-3 text-gray-400"># 3. Restart with old version</div>
                    <div>docker-compose up -d</div>
                    <div className="mt-3 text-gray-400"># 4. Verify health</div>
                    <div>curl /health  # → 200 OK ✓</div>
                    <div className="mt-3 text-gray-400"># 5. Monitor for 5 minutes</div>
                    <div># Error rate back to &lt;0.1%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring Plan */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Activity className="w-8 h-8 text-blue-600" />
                Post-Deployment Monitoring Plan
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <div className="font-bold text-blue-900 mb-3">LangSmith Tracing</div>
                  <div className="text-sm text-gray-700 mb-3">LLM call observability</div>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-blue-600 mt-0.5" />
                      <span>DeepSeek query parsing traces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-blue-600 mt-0.5" />
                      <span>Token usage + cost tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-blue-600 mt-0.5" />
                      <span>Latency breakdown by LLM call</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-300">
                  <div className="font-bold text-green-900 mb-3">Application Logs</div>
                  <div className="text-sm text-gray-700 mb-3">Structured JSON logging</div>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-600 mt-0.5" />
                      <span>Request/response pairs logged</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-600 mt-0.5" />
                      <span>Error tracking with stack traces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-600 mt-0.5" />
                      <span>Performance metrics (p50, p95, p99)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-300">
                  <div className="font-bold text-purple-900 mb-3">Health Checks</div>
                  <div className="text-sm text-gray-700 mb-3">Automated availability monitoring</div>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-purple-600 mt-0.5" />
                      <span>/health endpoint (every 30s)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-purple-600 mt-0.5" />
                      <span>Database connectivity check</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-purple-600 mt-0.5" />
                      <span>API response time alerting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Target Deployment Success Metrics</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2">Deployment Frequency</div>
                  <div className="text-3xl font-bold mb-2">≥2/week</div>
                  <div className="text-sm opacity-90">Fast iteration cycle for pilot feedback</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2">Change Failure Rate</div>
                  <div className="text-3xl font-bold mb-2">&lt;5%</div>
                  <div className="text-sm opacity-90">1 in 20 deployments requires rollback</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2">Mean Time to Recovery</div>
                  <div className="text-3xl font-bold mb-2">&lt;1 hour</div>
                  <div className="text-sm opacity-90">From incident detection to resolution</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}