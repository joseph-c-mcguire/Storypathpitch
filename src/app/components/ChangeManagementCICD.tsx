import {
  GitBranch,
  CheckCircle,
  AlertTriangle,
  Rocket,
  Database,
  Activity,
  Play,
  Clock,
} from "lucide-react";
import { useState } from "react";

export function ChangeManagementCICD() {
  const [activeTab, setActiveTab] = useState<
    "readiness" | "deployment"
  >("readiness");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-orange-600 font-semibold uppercase text-sm tracking-wider">
          Production Readiness
        </span>

        {/* Header */}
        <div className="mt-6 mb-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Testing & Deployment Infrastructure
          </h2>
          <p className="text-xl text-gray-600">
            Current implementation status and planned
            enhancements for production deployment
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab("readiness")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "readiness"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-orange-50"
            }`}
          >
            Testing Framework
          </button>
          <button
            onClick={() => setActiveTab("deployment")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "deployment"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-orange-50"
            }`}
          >
            CI/CD & Deployment
          </button>
        </div>

        {/* Readiness Tab */}
        {activeTab === "readiness" && (
          <div className="space-y-6">
            {/* Proof of Concept Status */}

            {/* Test Coverage - Current State */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-indigo-600" />
                Automated Testing Infrastructure
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {/* Unit Tests - IMPLEMENTED */}
                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 relative">
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      ✅ LIVE
                    </span>
                  </div>
                  <div className="font-bold text-xl text-blue-900 mb-3">
                    Unit Tests
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-3xl font-bold text-blue-700">
                      ~50%
                    </div>
                    <div className="text-sm text-gray-600">
                      current coverage
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 mb-4">
                    Target: 70% enforced in CI/CD
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Authentication & JWT validation ✅
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Book search endpoints ✅</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Recommendation engine (partial)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Admin endpoints (in progress)</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs bg-blue-100 rounded p-2 text-blue-900">
                    <strong>Tool:</strong> pytest • Coverage
                    enforcement planned
                  </div>
                </div>

                {/* Integration Tests - PARTIAL */}
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 relative">
                  <div className="absolute top-3 right-3">
                    <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded">
                      ⚠️ PARTIAL
                    </span>
                  </div>
                  <div className="font-bold text-xl text-green-900 mb-3">
                    Integration Tests
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-3xl font-bold text-green-700">
                      ~30%
                    </div>
                    <div className="text-sm text-gray-600">
                      endpoint coverage
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 mb-4">
                    Target: All critical API routes
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>POST /auth/anonymous ✅</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>GET /books (basic search) ✅</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>
                        POST /recommendations/chat (planned)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>
                        User management endpoints (planned)
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs bg-green-100 rounded p-2 text-green-900">
                    <strong>Next:</strong> PostgreSQL test
                    containers + seed data scripts
                  </div>
                </div>

                {/* E2E Tests - PLANNED */}
                <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 relative">
                  <div className="absolute top-3 right-3">
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                      🔄 PLANNED
                    </span>
                  </div>
                  <div className="font-bold text-xl text-purple-900 mb-3">
                    E2E Tests (Playwright)
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-3xl font-bold text-purple-700">
                      5
                    </div>
                    <div className="text-sm text-gray-600">
                      critical user flows
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 mb-4">
                    Browser automation for validation
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Anonymous kiosk mode flow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Library card login → search</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Chat recommendation workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Librarian admin access</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-xs bg-purple-100 rounded p-2 text-purple-900">
                    <strong>Timeline:</strong> 1-2 weeks
                    implementation (high priority)
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Gates - Current vs Planned */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Automated Quality Gates (CI/CD)
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300 relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        Security Scanning
                      </span>
                      <span className="text-2xl font-bold text-red-700">
                        Target: 0
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Critical vulnerabilities blocked in CI
                    </div>
                    <div className="text-xs bg-white rounded p-2 text-gray-700">
                      <strong>Planned:</strong> Trivy,
                      pip-audit, npm audit (1 week to implement)
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                        🔄 PLANNED
                      </span>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300 relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        Type Safety
                      </span>
                      <span className="text-2xl font-bold text-blue-700">
                        ~80%
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      TypeScript strict mode enabled
                    </div>
                    <div className="text-xs bg-white rounded p-2 text-gray-700">
                      <strong>Status:</strong> Backend mypy
                      enforcement planned
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded">
                        ⚠️ PARTIAL
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300 relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        Docker Build
                      </span>
                      <span className="text-2xl font-bold text-green-700">
                        ✓ Pass
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Images published to GHCR
                    </div>
                    <div className="text-xs bg-white rounded p-2 text-gray-700">
                      <strong>Working:</strong> Backend +
                      frontend containerized & deployed
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                        ✅ LIVE
                      </span>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300 relative">
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                        🔄 PLANNED
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        License Compliance
                      </span>
                      <span className="text-2xl font-bold text-purple-700">
                        Target
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      MIT/Apache-2.0 dependencies only
                    </div>
                    <div className="text-xs bg-white rounded p-2 text-gray-700">
                      <strong>Planned:</strong> Automated
                      license checking in pipeline
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Environment Strategy */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg p-8 border-2 border-cyan-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-cyan-600" />
                Deployment Environment Strategy
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-cyan-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-cyan-900 text-lg">
                      PoC Environment
                    </div>
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      ✅ LIVE
                    </span>
                  </div>
                  <div className="text-base text-gray-700 mb-3">
                    Sample OpenLibrary data
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>
                      • 50 sample books with embeddings ✅
                    </li>
                    <li>• Test user accounts functional ✅</li>
                    <li>• Validates technical approach ✅</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-blue-900 text-lg">
                      Staging Environment
                    </div>
                    <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded">
                      ⚠️ PARTIAL
                    </span>
                  </div>
                  <div className="text-base text-gray-700 mb-3">
                    Pre-production validation
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Environment exists ✅</li>
                    <li>• Automated deployment planned 🔄</li>
                    <li>• Full catalog import needed 🔄</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-green-900 text-lg">
                      Production Rollout
                    </div>
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                      🔄 PLANNED
                    </span>
                  </div>
                  <div className="text-base text-gray-700 mb-3">
                    Phased deployment approach
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Single branch pilot (2 weeks) 🔄</li>
                    <li>
                      • System-wide rollout after validation 🔄
                    </li>
                    <li>
                      • Monitoring & rollback procedures 🔄
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Deployment Tab */}
        {activeTab === "deployment" && (
          <div className="space-y-6">
            {/* CI/CD Pipeline - Honest Assessment */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Rocket className="w-8 h-8 text-indigo-600" />
                CI/CD Pipeline (GitHub Actions) - Implementation
                Status
              </h3>

              {/* Current State */}
              <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-green-900 text-xl">
                    ✅ Currently Implemented (Core Pipeline)
                  </h4>
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded">
                    LIVE
                  </span>
                </div>
                <ul className="space-y-2 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Testing:</strong> pytest runs on
                      push/PR (basic coverage check)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Build:</strong> Docker images
                      built and published to GHCR
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Deploy:</strong> Manual deployment
                      to staging environment
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Health Checks:</strong> Basic
                      /health endpoint monitoring
                    </span>
                  </li>
                </ul>
              </div>

              {/* Planned Enhancements */}
              <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-blue-900 text-xl">
                    🔄 Planned Enhancements (8-12 week timeline)
                  </h4>
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded">
                    ROADMAP
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold text-blue-800 mb-2 text-base">
                      High Priority (1-3 weeks)
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Security Scanning:</strong>{" "}
                          pip-audit, npm audit, Trivy
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Coverage Enforcement:</strong>{" "}
                          70% minimum gate
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>E2E Tests:</strong> Playwright
                          browser automation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Structured Logging:</strong>{" "}
                          JSON format with request IDs
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-800 mb-2 text-base">
                      Medium Priority (4-8 weeks)
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Database Migrations:</strong>{" "}
                          Alembic versioning
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Automated Rollback:</strong>{" "}
                          Error rate monitoring triggers
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Performance Metrics:</strong>{" "}
                          LangSmith tracing, p95/p99
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>License Compliance:</strong>{" "}
                          Automated dependency checking
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Branching Strategy - Current Practice */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <GitBranch className="w-8 h-8 text-purple-600" />
                Git Branching Strategy (Modified Git Flow)
              </h3>
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-yellow-900 mb-1">
                      Current Status: Structure exists,
                      enforcement planned
                    </div>
                    <div className="text-sm text-gray-700">
                      Branches and workflow defined • Branch
                      protection rules to be configured • PR
                      approval requirements to be enforced
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
                  <div className="font-bold text-lg text-blue-900 mb-3">
                    feature/*
                  </div>
                  <div className="text-sm text-gray-700 mb-3">
                    New development work
                  </div>
                  <div className="bg-white rounded p-2 font-mono text-xs text-gray-800 mb-2">
                    feature/ISSUE-042-coppa
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Branch from: dev</li>
                    <li>• Merge to: dev</li>
                    <li>
                      • Target: 2 PR approvals (to be enforced)
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
                  <div className="font-bold text-lg text-green-900 mb-3">
                    dev
                  </div>
                  <div className="text-sm text-gray-700 mb-3">
                    Integration branch
                  </div>
                  <div className="bg-white rounded p-2 font-mono text-xs text-gray-800 mb-2">
                    dev (exists)
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Auto-deploy to staging (planned)</li>
                    <li>• All features integrated here</li>
                    <li>
                      • Branch protection (to be configured)
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
                  <div className="font-bold text-lg text-purple-900 mb-3">
                    release/*
                  </div>
                  <div className="text-sm text-gray-700 mb-3">
                    Release preparation
                  </div>
                  <div className="bg-white rounded p-2 font-mono text-xs text-gray-800 mb-2">
                    release/v1.2.0
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Branch from: dev</li>
                    <li>• Merge to: main + dev</li>
                    <li>• Currently: Manual tagging</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                  <div className="font-bold text-lg text-red-900 mb-3">
                    hotfix/*
                  </div>
                  <div className="text-sm text-gray-700 mb-3">
                    Emergency fixes
                  </div>
                  <div className="bg-white rounded p-2 font-mono text-xs text-gray-800 mb-2">
                    hotfix/ISSUE-789-jwt
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Branch from: main</li>
                    <li>• Merge to: main + dev</li>
                    <li>
                      • Fast-track process (to be defined)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Semantic Versioning */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Semantic Versioning Strategy
                </h3>
                <span className="bg-yellow-600 text-white text-sm font-bold px-3 py-1 rounded">
                  Manual • Automation Planned
                </span>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border border-red-300">
                  <div className="font-bold text-red-900 mb-2 text-2xl">
                    MAJOR.x.x
                  </div>
                  <div className="text-sm text-gray-700 mb-3">
                    Breaking changes (v2.0.0)
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• API endpoint removal</li>
                    <li>• Database schema breaking change</li>
                    <li>• Authentication method change</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-300">
                  <div className="font-bold text-yellow-900 mb-2 text-2xl">
                    x.MINOR.x
                  </div>
                  <div className="text-sm text-gray-700 mb-3">
                    New features (v1.2.0)
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• New API endpoints</li>
                    <li>• New UI components</li>
                    <li>• Backward-compatible changes</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-300">
                  <div className="font-bold text-green-900 mb-2 text-2xl">
                    x.x.PATCH
                  </div>
                  <div className="text-sm text-gray-700 mb-3">
                    Bug fixes (v1.1.1)
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Security patches</li>
                    <li>• Bug fixes</li>
                    <li>• Performance improvements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Rollback Strategy - Current Reality */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg p-8 border-2 border-orange-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
                Rollback Strategy
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-lg text-orange-900">
                      Current: Manual Process
                    </div>
                    <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded">
                      ~15-30 min
                    </span>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-orange-300 mb-4">
                    <div className="font-semibold text-orange-800 mb-2">
                      Manual Rollback Steps
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>1. Engineer identifies issue</li>
                      <li>2. SSH into server</li>
                      <li>
                        3. Pull previous Docker image version
                      </li>
                      <li>
                        4. Restart containers with old version
                      </li>
                      <li>5. Verify health endpoint</li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600 bg-white rounded p-3 border border-orange-200">
                    <strong>Current capability:</strong> Works
                    reliably but requires manual intervention
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-lg text-green-900">
                      Planned: Automated Rollback
                    </div>
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Target: &lt;5 min
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                      <div className="font-semibold text-blue-800 mb-1 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Automated Triggers (Planned)
                      </div>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>
                          • Error rate spike detection (&gt;1%
                          for 5min)
                        </li>
                        <li>
                          • Health check failure monitoring
                        </li>
                        <li>
                          • Performance degradation alerts
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                      <div className="font-semibold text-blue-800 mb-1 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Blue-Green Deployment (Planned)
                      </div>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Zero-downtime deployments</li>
                        <li>• Instant traffic switching</li>
                        <li>• One-click rollback capability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring - Honest State */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Activity className="w-8 h-8 text-blue-600" />
                Observability & Monitoring
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-green-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-green-900">
                      Health Checks
                    </div>
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      ✅ LIVE
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>/health endpoint active</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Basic uptime monitoring</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-blue-900">
                      Application Logs
                    </div>
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                      🔄 PLANNED
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 mt-0.5" />
                      <span>Structured JSON logging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 mt-0.5" />
                      <span>Request/response tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 mt-0.5" />
                      <span>Error tracking (Sentry)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-purple-900">
                      LLM Tracing
                    </div>
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                      🔄 PLANNED
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 mt-0.5" />
                      <span>LangSmith integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 mt-0.5" />
                      <span>DeepSeek call monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-orange-500 mt-0.5" />
                      <span>Token usage tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Timeline */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Production Readiness Timeline
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2">
                    Current State
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    ~50%
                  </div>
                  <div className="text-sm opacity-90">
                    Core infrastructure deployed • Basic testing
                    functional • Manual processes working
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2">
                    High Priority Phase
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    3-4 weeks
                  </div>
                  <div className="text-sm opacity-90">
                    Security scanning • E2E tests • Coverage
                    enforcement • Structured logging
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                  <div className="font-bold mb-2">
                    Production Ready
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    8-12 weeks
                  </div>
                  <div className="text-sm opacity-90">
                    Full observability • Automated rollback •
                    Database migrations • Complete CI/CD
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