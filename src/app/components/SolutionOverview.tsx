import { Brain, Database, MessageSquare, Shield } from 'lucide-react';

export function SolutionOverview() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Our Solution
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          StoryPath: AI-Powered Discovery Platform
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded" />
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          StoryPath combines collaborative filtering, semantic search, and conversational AI to
          deliver personalized book recommendations that respect student privacy and reading levels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
          <Brain className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Hybrid Recommendation Engine</h3>
          <p className="text-gray-700 mb-4">
            We don't rely on LLMs to invent books. Instead, we use a proven two-stage approach:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span>
                <strong>Collaborative Filtering:</strong> Analyze borrow history to find "students
                who borrowed X also borrowed Y" patterns
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span>
                <strong>Semantic Search:</strong> Use vector embeddings to match book descriptions,
                themes, and metadata to student preferences
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span>
                <strong>Smart Ranking:</strong> Merge candidates and apply diversity rules,
                age-filters, and reading level constraints
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
          <MessageSquare className="w-10 h-10 text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Natural Language Interface</h3>
          <p className="text-gray-700 mb-4">
            Students and librarians interact with the system using conversational language:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-600">•</span>
              <span>"I want a book like Harry Potter but darker"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600">•</span>
              <span>"Find me a sad Victorian romance"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600">•</span>
              <span>"Books about space for my 10-year-old"</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            The LLM parses queries into structured filters (genre, era, mood, age range) and
            provides grounded explanations—but never invents titles.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
          <Database className="w-10 h-10 text-green-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Enriched Catalog Data</h3>
          <p className="text-gray-700 mb-4">
            We enhance Providence Library's catalog with:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>
                <strong>External APIs:</strong> OpenLibrary (primary), Google Books (fallback) for
                rich metadata
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>
                <strong>LLM Tagging:</strong> Extract themes, moods, reading level from descriptions
                using DeepSeek (free/cheap)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>
                <strong>Vector Embeddings:</strong> Encode books for semantic similarity matching
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
          <Shield className="w-10 h-10 text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Three Access Modes</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <strong className="block mb-1">Anonymous iPad Mode</strong>
                <span className="text-sm">
                  Age band only (Child/Teen/Adult), auto-blocks 18+ content, optional family-safe
                  toggle
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <strong className="block mb-1">Library Card Login</strong>
                <span className="text-sm">
                  Personalized recommendations from borrow history, still enforces age filters
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <strong className="block mb-1">Librarian Admin Dashboard</strong>
                <span className="text-sm">
                  Add/edit books, manage users, view analytics, export reports
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Core Design Philosophy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">Grounded AI</div>
            <div className="text-blue-100">LLMs assist but never invent books</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Privacy First</div>
            <div className="text-blue-100">Anonymous mode available, FERPA compliant</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Librarian-Centric</div>
            <div className="text-blue-100">Scales expertise, doesn't replace it</div>
          </div>
        </div>
      </div>
    </div>
  );
}