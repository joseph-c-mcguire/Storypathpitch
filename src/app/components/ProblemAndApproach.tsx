import { Users, Brain, Database, Sparkles } from 'lucide-react';

export function ProblemAndApproach() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-orange-600 font-semibold uppercase text-sm tracking-wider">
          Slide 2
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          Problem & Technical Approach
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-blue-600 rounded mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Problem */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold">The Opportunity</h3>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-4 mb-6">
            <p className="font-semibold text-gray-900">
              Librarian recommendations work - students read those books.
            </p>
          </div>

          <p className="text-gray-700 mb-4">
            <strong>The challenge:</strong> Access is limited.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span>500+ students per librarian</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span>5-10 minutes per recommendation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600">•</span>
              <span>Limited library hours</span>
            </li>
          </ul>

          <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-blue-600">
            <p className="font-semibold text-gray-900 mb-2">
              Goal: Make quality recommendations accessible 24/7
            </p>
          </div>

          <div className="mt-4 bg-slate-50 rounded-lg p-4 text-sm">
            <p className="font-semibold text-gray-900 mb-2">Providence Public Library (baseline):</p>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <div>• Population: <strong>59,190</strong></div>
              <div>• Students (est.): <strong>~12,000</strong></div>
              <div>• Hours/week: <strong>50</strong></div>
              <div>• Central libraries: <strong>1</strong></div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-300 text-xs text-gray-600">
              Source: <a href="https://olis.ri.gov/programs-and-support/library-statistics" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 transition-colors">RI Office of Library & Information Services</a>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-bold">Our Technical Approach</h3>
          </div>
          <p className="text-gray-700 mb-6">
            <strong>Hybrid AI system</strong> combining two data sources:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-gray-900">Borrowing History Patterns</h4>
              </div>
              <p className="text-sm text-gray-700">
                Vector embeddings of patron borrow history. Finds "students like you enjoyed these books" patterns.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h4 className="font-bold text-gray-900">Book Metadata (LLM)</h4>
              </div>
              <p className="text-sm text-gray-700">
                Vector embeddings of book descriptions. Enables natural language queries and explains recommendations.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-4">
            <p className="text-sm font-semibold">
              ✓ Combines usage patterns + semantic understanding
              <br />
              ✓ Works with cold start (new students/books)
              <br />
              ✓ Generates human-readable explanations
            </p>
          </div>
        </div>
      </div>

      {/* Technical Requirements */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6">Technical Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-green-400 font-bold flex-shrink-0">✓</span>
            <span>iPad-compatible kiosk (React/Tailwind)</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400 font-bold flex-shrink-0">✓</span>
            <span>Anonymous mode (FERPA/COPPA compliant)</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400 font-bold flex-shrink-0">✓</span>
            <span>Explainable recommendations (LLM-generated)</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400 font-bold flex-shrink-0">✓</span>
            <span>Librarian admin panel (filters, analytics)</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400 font-bold flex-shrink-0">✓</span>
            <span>Real-time catalog availability</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400 font-bold flex-shrink-0">✓</span>
            <span>&lt;5s response time (LLM components)</span>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-4">
          <h4 className="font-semibold mb-3">Scale & Concurrency (Providence baseline):</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div>• Peak concurrent users: <strong>~600</strong></div>
            <div>• Monthly active users: <strong>~5,000</strong></div>
            <div>• Total catalog size: <strong>~50,000 books</strong></div>
            <div>• Daily recommendations: <strong>~200-300</strong></div>
            <div>• Database: <strong>Supabase (PostgreSQL + pgvector)</strong></div>
            <div>• Hosting: <strong>Vercel (edge functions)</strong></div>
          </div>
          <div className="mt-3 pt-3 border-t border-white border-opacity-20 text-xs opacity-75">
            Source: <a href="https://olis.ri.gov/programs-and-support/library-statistics" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300 transition-colors">RI Office of Library & Information Services</a>
          </div>
        </div>
      </div>
    </div>
  );
}