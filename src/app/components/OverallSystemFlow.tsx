import {
  Database,
  Cpu,
  Users,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function OverallSystemFlow() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-orange-500 font-semibold uppercase text-sm tracking-wider">
          System Architecture
        </span>

        {/* Header */}
        <div className="mt-4 mb-6">
          <h2 className="text-4xl font-bold text-white mb-2">
            System Architecture
          </h2>
          <p className="text-base text-gray-300">
            Monolithic FastAPI backend • PostgreSQL + pgvector semantic search
          </p>
        </div>

        {/* System Architecture Diagram */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 mb-6 border-2 border-orange-500">
          <h3 className="text-3xl font-bold text-white mb-6">
            System Architecture Diagram
          </h3>

          <div className="space-y-6">
            {/* Client Layer */}
            <div className="border-2 border-orange-500 rounded-lg p-5 bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-white">
                  Client Layer
                </div>
                <div className="text-base text-orange-400">
                  Three Access Modes
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-black rounded-lg p-4 border-2 border-orange-500 shadow-lg">
                  <div className="font-bold text-lg text-white mb-2">
                    Anonymous Mode
                  </div>
                  <div className="text-base text-gray-300">
                    iPad Kiosk
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    No login • User provides age
                  </div>
                </div>
                <div className="bg-black rounded-lg p-4 border-2 border-orange-500 shadow-lg">
                  <div className="font-bold text-lg text-white mb-2">
                    Library Card
                  </div>
                  <div className="text-base text-gray-300">
                    Patron Login
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Borrow history • No PII stored
                  </div>
                </div>
                <div className="bg-black rounded-lg p-4 border-2 border-orange-500 shadow-lg">
                  <div className="font-bold text-lg text-white mb-2">
                    Admin Mode
                  </div>
                  <div className="text-base text-gray-300">
                    Librarian Dashboard
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Fully implemented (852 lines)
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-orange-500 rotate-90" />
            </div>

            {/* Frontend Layer */}
            <div className="border-2 border-orange-500 rounded-lg p-5 bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-white">
                  Frontend Layer
                </div>
                <div className="text-base text-orange-400">
                  React 18.3 + TypeScript + Material-UI
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-3">
                <div className="bg-black rounded p-3 border border-orange-500">
                  <div className="font-bold text-base text-white">
                    BookCard
                  </div>
                  <div className="text-sm text-gray-400">
                    Cover + metadata
                  </div>
                </div>
                <div className="bg-black rounded p-3 border border-orange-500">
                  <div className="font-bold text-base text-white">
                    ChatInterface
                  </div>
                  <div className="text-sm text-gray-400">
                    Conversational UI
                  </div>
                </div>
                <div className="bg-black rounded p-3 border border-orange-500">
                  <div className="font-bold text-base text-white">
                    FilterPanel
                  </div>
                  <div className="text-sm text-gray-400">
                    Age/genre filters
                  </div>
                </div>
                <div className="bg-black rounded p-3 border border-orange-500">
                  <div className="font-bold text-base text-white">
                    AdminDashboard
                  </div>
                  <div className="text-sm text-gray-400">
                    Book management
                  </div>
                </div>
              </div>
              <div className="text-center text-base text-gray-300 font-semibold mb-2">
                AuthContext • AccessibilityContext • API Service
                Layer
              </div>
              <div className="bg-orange-900/30 border border-orange-500 rounded p-2 text-center">
                <div className="text-sm font-semibold text-orange-400 mb-1">
                  Custom Hooks:
                </div>
                <div className="text-sm text-gray-300">
                  useBooks • useRecommendations • useAdmin •
                  useBorrow • useFeedback • useUsers
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-orange-500 rotate-90" />
            </div>

            {/* API Gateway Layer */}
            <div className="border-2 border-orange-500 rounded-lg p-5 bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-white">
                  API Gateway Layer
                </div>
                <div className="text-base text-orange-400">
                  FastAPI + Uvicorn + JWT Middleware
                </div>
              </div>
              <div className="grid grid-cols-6 gap-2">
                <div className="bg-black rounded p-3 border border-orange-500 text-center">
                  <div className="font-bold text-sm text-white">
                    /auth
                  </div>
                  <div className="text-sm text-gray-400">
                    Login/refresh
                  </div>
                </div>
                <div className="bg-black rounded p-3 border border-orange-500 text-center">
                  <div className="font-bold text-sm text-white">
                    /books
                  </div>
                  <div className="text-sm text-gray-400">
                    CRUD ops
                  </div>
                </div>
                <div className="bg-black rounded p-3 border border-orange-500 text-center">
                  <div className="font-bold text-sm text-white">
                    /recommendations
                  </div>
                  <div className="text-sm text-gray-400">
                    Chat/filter
                  </div>
                </div>
                <div className="bg-black rounded p-3 border border-orange-500 text-center">
                  <div className="font-bold text-sm text-white">
                    /borrow
                  </div>
                  <div className="text-sm text-gray-400">
                    Checkout/return
                  </div>
                </div>
                <div className="bg-black rounded p-3 border border-orange-500 text-center">
                  <div className="font-bold text-sm text-white">
                    /admin
                  </div>
                  <div className="text-sm text-gray-400">
                    Manage
                  </div>
                </div>
                <div className="bg-black rounded p-3 border border-orange-500 text-center">
                  <div className="font-bold text-sm text-white">
                    /feedback
                  </div>
                  <div className="text-sm text-gray-400">
                    Ratings
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-orange-500 rotate-90" />
            </div>

            {/* Service Layer */}
            <div className="border-2 border-gray-600 rounded-lg p-5 bg-gradient-to-br from-gray-800 to-black">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-white">
                  Service Layer
                </div>
                <div className="text-base text-gray-400">
                  Python Business Logic Services
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-3">
                <div className="bg-gray-900 rounded p-3 border-2 border-gray-600">
                  <div className="font-bold text-base text-white mb-1">
                    AuthService
                  </div>
                  <div className="text-sm text-gray-400">
                    • JWT tokens
                  </div>
                  <div className="text-sm text-gray-400">
                    • bcrypt hash
                  </div>
                  <div className="text-sm text-gray-400">
                    • Role checks
                  </div>
                </div>
                <div className="bg-gray-900 rounded p-3 border-2 border-gray-600">
                  <div className="font-bold text-base text-white mb-1">
                    AgentService
                  </div>
                  <div className="text-sm text-gray-400">
                    • Parse queries
                  </div>
                  <div className="text-sm text-gray-400">
                    • DeepSeek LLM
                  </div>
                  <div className="text-sm text-gray-400">
                    • Filter extraction
                  </div>
                </div>
                <div className="bg-gray-900 rounded p-3 border-2 border-gray-600">
                  <div className="font-bold text-base text-white mb-1">
                    VectorService
                  </div>
                  <div className="text-sm text-gray-400">
                    • OpenAI embed
                  </div>
                  <div className="text-sm text-gray-400">
                    • pgvector search
                  </div>
                  <div className="text-sm text-gray-400">
                    • Cosine similarity
                  </div>
                </div>
                <div className="bg-gray-900 rounded p-3 border-2 border-gray-600">
                  <div className="font-bold text-base text-white mb-1">
                    BookService
                  </div>
                  <div className="text-sm text-gray-400">
                    • CRUD ops
                  </div>
                  <div className="text-sm text-gray-400">
                    • OpenLibrary sync
                  </div>
                  <div className="text-sm text-gray-400">
                    • Metadata mgmt
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-900 rounded p-3 border-2 border-gray-600">
                  <div className="font-bold text-base text-white mb-1">
                    ChatContextManager
                  </div>
                  <div className="text-sm text-gray-400">
                    • Conversation history
                  </div>
                  <div className="text-sm text-gray-400">
                    • Deduplication
                  </div>
                  <div className="text-sm text-gray-400">
                    • 30-day TTL
                  </div>
                </div>
                <div className="bg-gray-900 rounded p-3 border-2 border-gray-600">
                  <div className="font-bold text-base text-white mb-1">
                    FeedbackService
                  </div>
                  <div className="text-sm text-gray-400">
                    • Analytics aggregation
                  </div>
                  <div className="text-sm text-gray-400">
                    • Ratings management
                  </div>
                </div>
                <div className="bg-gray-900 rounded p-3 border-2 border-gray-600">
                  <div className="font-bold text-base text-white mb-1">
                    BorrowingService
                  </div>
                  <div className="text-sm text-gray-400">
                    • Checkout/return logic
                  </div>
                  <div className="text-sm text-gray-400">
                    • Overdue tracking
                  </div>
                </div>
              </div>
            </div>

            {/* Bidirectional arrows to External APIs and Database */}
            <div className="grid grid-cols-2 gap-6">
              {/* External APIs */}
              <div>
                <div className="flex justify-center mb-2">
                  <ArrowRight className="w-6 h-6 text-orange-500 rotate-90" />
                </div>
                <div className="border-2 border-orange-500 rounded-lg p-4 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="text-center mb-3">
                    <div className="text-xl font-bold text-white">
                      External APIs
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-black rounded p-3 border border-orange-500">
                      <div className="font-bold text-base text-white">
                        DeepSeek API
                      </div>
                      <div className="text-sm text-gray-300">
                        Query parsing (2-3s)
                      </div>
                      <div className="text-sm text-gray-400">
                        Confidence threshold 0.7-1.0
                      </div>
                    </div>
                    <div className="bg-black rounded p-3 border border-orange-500">
                      <div className="font-bold text-base text-white">
                        OpenAI API
                      </div>
                      <div className="text-sm text-gray-300">
                        Embeddings + GPT-4o-mini (1-2s)
                      </div>
                      <div className="text-sm text-gray-400">
                        Embedding: 200-400ms • Explanation: 1-2s
                      </div>
                    </div>
                    <div className="bg-black rounded p-3 border border-orange-500">
                      <div className="font-bold text-base text-white">
                        OpenLibrary API
                      </div>
                      <div className="text-sm text-gray-300">
                        Book metadata sync
                      </div>
                    </div>
                    <div className="bg-black rounded p-3 border border-orange-500">
                      <div className="font-bold text-base text-white">
                        Guardrails AI
                      </div>
                      <div className="text-sm text-gray-300">
                        LLM validation • XSS prevention
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Database Layer */}
              <div>
                <div className="flex justify-center mb-2">
                  <ArrowRight className="w-6 h-6 text-orange-500 rotate-90" />
                </div>
                <div className="border-2 border-gray-600 rounded-lg p-4 bg-gradient-to-br from-gray-800 to-black">
                  <div className="text-center mb-3">
                    <div className="text-xl font-bold text-white">
                      Database Layer
                    </div>
                    <div className="text-sm text-gray-400">
                      Supabase PostgreSQL + pgvector
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-900 rounded p-3 border border-gray-600">
                      <div className="font-bold text-base text-white">
                        Core Tables
                      </div>
                      <div className="text-sm text-gray-400">
                        users • books • conversations
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded p-3 border border-gray-600">
                      <div className="font-bold text-base text-white">
                        Engagement
                      </div>
                      <div className="text-sm text-gray-400">
                        ratings • reviews • events
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded p-3 border border-gray-600">
                      <div className="font-bold text-base text-white">
                        Circulation
                      </div>
                      <div className="text-sm text-gray-400">
                        borrows • holds
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded p-3 border border-gray-600">
                      <div className="font-bold text-base text-white">
                        Vector Storage
                      </div>
                      <div className="text-sm text-gray-400">
                        1536-dim embeddings (IVFFLAT)
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded p-3 border border-gray-600">
                      <div className="font-bold text-base text-white">
                        Security
                      </div>
                      <div className="text-sm text-gray-400">
                        Row Level Security + RLS policies
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Jobs Layer */}
            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-orange-500 rotate-90" />
            </div>

            <div className="border-2 border-gray-600 rounded-lg p-5 bg-gradient-to-br from-gray-800 to-black">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-white">
                  Background Jobs Layer
                </div>
                <div className="text-base text-orange-400">
                  APScheduler fully implemented with 4 scheduled jobs
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="text-sm font-semibold text-white mb-2">
                    Automated Jobs (Running)
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-900 rounded p-3 border border-orange-500">
                      <div className="font-bold text-base text-white">
                        Embeddings Processing
                      </div>
                      <div className="text-sm text-gray-300">
                        Daily at 2:00 AM
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded p-3 border border-orange-500">
                      <div className="font-bold text-base text-white">
                        Recommendations Update
                      </div>
                      <div className="text-sm text-gray-300">
                        Daily at 3:00 AM
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded p-3 border border-orange-500">
                      <div className="font-bold text-base text-white">
                        Token Cleanup
                      </div>
                      <div className="text-sm text-gray-300">
                        Daily at 4:00 AM
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-2">
                    Analytics & Manual Triggers
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-900 rounded p-3 border border-orange-500">
                      <div className="font-bold text-base text-white">
                        Analytics Summary
                      </div>
                      <div className="text-sm text-gray-300">
                        Weekly (Sunday 5:00 AM)
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded p-3 border border-orange-500">
                      <div className="font-bold text-base text-white">
                        POST /admin/jobs/process-embeddings
                      </div>
                      <div className="text-sm text-gray-300">
                        Manual trigger available
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded p-3 border border-orange-500">
                      <div className="font-bold text-base text-white">
                        GET /api/v1/jobs/status
                      </div>
                      <div className="text-sm text-gray-300">
                        Monitor execution history
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-orange-900/30 border border-orange-500 rounded p-2 text-center">
                <div className="text-sm text-orange-400">
                  ✅ APScheduler v3.10.4+ integrated and auto-starting via lifespan events
                </div>
              </div>
            </div>

            {/* Key Architecture Notes */}
            <div className="mt-6 bg-gradient-to-br from-orange-900/40 to-orange-950/40 rounded-lg p-5 border-2 border-orange-500">
              <div className="text-base font-bold text-orange-400 mb-3">
                🏗️ Architecture Highlights:
              </div>
              <div className="grid grid-cols-3 gap-4 text-base text-gray-300 mb-3">
                <div>
                  <strong className="text-white">
                    REST API:
                  </strong>{" "}
                  Stateless request handling via JWT.
                  Conversation history accepted in requests for LLM context; not persisted between sessions.
                </div>
                <div>
                  <strong className="text-white">
                    Hybrid AI:
                  </strong>{" "}
                  DeepSeek (parsing) + OpenAI (embeddings) +
                  GPT-4o-mini (explanations) + Guardrails
                  (validation)
                </div>
                <div>
                  <strong className="text-white">
                    Privacy-First:
                  </strong>{" "}
                  Anonymous mode, RLS, FERPA/COPPA compliant
                </div>
              </div>
              <div className="bg-black/50 rounded p-3 border-l-4 border-orange-500 mb-2">
                <div className="text-sm font-semibold text-orange-400 mb-1">
                  Security Layer:
                </div>
                <div className="text-sm text-gray-300">
                  JWT Authentication (HS256) • Row Level
                  Security (RLS) • RBAC (patron vs librarian) •
                  COPPA age verification • Rate limiting configured (enforcement planned) •
                  Input sanitization (Guardrails AI)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Service Architecture */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 mb-6 border-2 border-orange-500">
            <h3 className="text-2xl font-bold text-white mb-6">
              Backend Service Architecture & Data Flow
            </h3>

            {/* Implementation Status Banner */}
            <div className="bg-gradient-to-r from-orange-900/50 to-orange-950/50 rounded-lg p-4 mb-6 border-2 border-orange-500">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-sm font-bold text-white mb-2">
                    Implementation Status Legend:
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">
                        ✅ Implemented & Tested (~50% complete)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-300">
                        🔄 Planned P1 Priority (conversation layer)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* Core Services */}
              <div className="bg-green-50 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-base font-bold text-green-900 mb-3">
                  Core Services
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded p-3 border border-green-300">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="font-bold text-gray-900">
                        AuthService
                      </div>
                    </div>
                    <div className="text-gray-600">
                      • JWT tokens + bcrypt hashing
                    </div>
                    <div className="text-gray-600">
                      • 7-day refresh + RBAC
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border border-green-300">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="font-bold text-gray-900">
                        VectorService
                      </div>
                    </div>
                    <div className="text-gray-600">
                      • OpenAI text-embedding-3-small
                    </div>
                    <div className="text-gray-600">
                      • pgvector cosine similarity
                    </div>
                    <div className="text-xs text-amber-600 mt-1">
                      🔄 Deduplication: Planned P1
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border border-green-300">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="font-bold text-gray-900">
                        AgentService
                      </div>
                    </div>
                    <div className="text-gray-600">
                      • DeepSeek query parsing
                    </div>
                    <div className="text-gray-600">
                      • Confidence-based clarification
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border border-amber-300">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <div className="font-bold text-gray-900">
                        ChatContextManager
                      </div>
                      <span className="text-xs bg-amber-500/30 text-amber-800 px-2 py-0.5 rounded border border-amber-500">
                        Planned P1
                      </span>
                    </div>
                    <div className="text-gray-600">
                      • DB conversation persistence
                    </div>
                    <div className="text-gray-600">
                      • Filter merging across turns
                    </div>
                    <div className="text-gray-600">
                      • Book deduplication tracking
                    </div>
                    <div className="text-xs text-amber-600 mt-1 font-semibold">
                      Current: In-request context via endpoint
                    </div>
                  </div>
                </div>
              </div>

              {/* External APIs */}
              <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-base font-bold text-blue-900 mb-3">
                  External APIs (Implemented)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded p-3 border border-blue-300">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="font-bold text-gray-900">
                        OpenAI API
                      </div>
                    </div>
                    <div className="text-gray-600">
                      • text-embedding-3-small (1536-dim)
                    </div>
                    <div className="text-gray-600">
                      • Latency: ~200-400ms
                    </div>
                    <div className="text-gray-600">
                      • GPT-4o-mini for explanations (~1-2s)
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border border-blue-300">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="font-bold text-gray-900">
                        DeepSeek API
                      </div>
                    </div>
                    <div className="text-gray-600">
                      • deepseek-chat for query parsing
                    </div>
                    <div className="text-gray-600">
                      • Latency: ~2-3s (serial)
                    </div>
                    <div className="text-gray-600">
                      • Filter extraction + enrichment
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border border-blue-300">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="font-bold text-gray-900">
                        OpenLibrary API
                      </div>
                    </div>
                    <div className="text-gray-600">
                      • ISBN lookup: covers, descriptions
                    </div>
                  </div>
                </div>
              </div>

              {/* Guardrails Validation */}
              <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-base font-bold text-orange-900 mb-3">
                  Guardrails (Implemented)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded p-3 border border-orange-300">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="font-bold text-gray-900">
                        validate_chat_summary()
                      </div>
                    </div>
                    <div className="text-gray-600">
                      ✓ 8-320 chars, XSS prevention
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border border-orange-300">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="font-bold text-gray-900">
                        validate_metadata_payload()
                      </div>
                    </div>
                    <div className="text-gray-600">
                      ✓ COPPA age_range validation
                    </div>
                    <div className="text-gray-600">
                      ✓ 20-1500 char JSON structure
                    </div>
                  </div>

                  <div className="bg-white rounded p-3 border border-orange-300">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="font-bold text-gray-900">
                        validate_agent_filters()
                      </div>
                    </div>
                    <div className="text-gray-600">
                      ✓ Genre array validation
                    </div>
                    <div className="text-gray-600">
                      ✓ Confidence 0.0-1.0 range
                    </div>
                    <div className="text-gray-600">
                      ✓ SQL injection prevention
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Flow Diagram */}
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-5 text-white border-2 border-orange-500">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6" />
              <h3 className="text-lg font-bold">
                Privacy-First
              </h3>
            </div>
            <div className="space-y-2 text-sm">
              <div>• No PII in anonymous mode</div>
              <div>• Age-based content filtering</div>
              <div>• FERPA/COPPA compliant</div>
              <div>• JWT-secured endpoints</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-black rounded-xl p-5 text-white border-2 border-gray-600">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-orange-400" />
              <h3 className="text-lg font-bold">Hybrid AI</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div>• Vector semantic search (current)</div>
              <div>• LLM metadata enrichment (current)</div>
              <div>• RAG-powered explanations (current)</div>
              <div>
                • CFRAG collaborative filtering (P1 planned)
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-5 text-white border-2 border-gray-600">
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-6 h-6 text-orange-400" />
              <h3 className="text-lg font-bold">
                Scalable Design
              </h3>
            </div>
            <div className="space-y-2 text-sm">
              <div>• Service layer pattern</div>
              <div>• Connection pooling</div>
              <div>• Background job scheduler</div>
              <div>• Microservice migration ready</div>
            </div>
          </div>
        </div>

        {/* Next Up Preview */}
        <div className="bg-gradient-to-r from-orange-900/40 to-orange-950/40 rounded-xl p-5 border-2 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-orange-400 font-semibold text-sm mb-1">
                NEXT UP
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                User Workflow Example
              </h3>
              <p className="text-sm text-gray-300">
                Detailed flow: "I want fantasy books" →
                recommendations in &lt;2s with latency
                breakdowns
              </p>
            </div>
            <ArrowRight className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
}