import {
  Play,
  ExternalLink,
  Monitor,
  MousePointer,
} from "lucide-react";

export function LiveDemoTransition() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20 px-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        {/* Slide Number */}
        <span className="text-purple-300 font-semibold uppercase text-lg tracking-wider">
          Live Prototype Demo
        </span>

        {/* Main Heading */}
        <div className="mt-8 mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-white bg-opacity-20 rounded-full p-6 backdrop-blur-sm animate-pulse">
              <Play className="w-16 h-16 text-white fill-white" />
            </div>
          </div>

          <h2 className="text-7xl font-bold text-white mb-6">
            Working Prototype Demo
          </h2>

          <p className="text-3xl text-purple-200">
            Sample data • Core features functional
          </p>
        </div>

        {/* Transition Message */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-12 border-2 border-white border-opacity-30 shadow-2xl mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Monitor className="w-12 h-12 text-cyan-300" />
            <p className="text-3xl text-white font-semibold">
              Switching to Live Prototype
            </p>
          </div>

          <div className="bg-yellow-500 bg-opacity-20 backdrop-blur rounded-xl p-6 mb-8 border border-yellow-400 border-opacity-40">
            <p className="text-xl text-yellow-100">
              <strong>Demo Context:</strong> This prototype uses
              sample book data to validate core functionality.
              Providence Library integration happens in Weeks
              3-10 of the rollout plan.
            </p>
          </div>

          {/* What We'll Show */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-10">
            <h3 className="text-3xl font-bold text-white mb-8">
              What's Working:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white">
                    User Experience
                  </h4>
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    ✓ READY
                  </span>
                </div>
                <ul className="space-y-3 text-lg text-white text-opacity-90">
                  <li>• Anonymous & patron login</li>
                  <li>• Age-based filtering</li>
                  <li>• Natural language search</li>
                  <li>• AI recommendations</li>
                  <li>• Accessibility features</li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white">
                    AI Engine
                  </h4>
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    ✓ READY
                  </span>
                </div>
                <ul className="space-y-3 text-lg text-white text-opacity-90">
                  <li>• LLM intent parsing (DeepSeek)</li>
                  <li>• Vector search (OpenAI)</li>
                  <li>• RAG explanations</li>
                  <li>• Age-appropriate filtering</li>
                  <li>• Sub-2-second response</li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-8 opacity-70">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white">
                    Librarian Portal
                  </h4>
                  <span className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    ⚠️ IN PROGRESS
                  </span>
                </div>
                <ul className="space-y-3 text-lg text-white text-opacity-90">
                  <li>• Backend APIs ready</li>
                  <li>• UI in development</li>
                  <li>• Analytics endpoints built</li>
                  <li>
                    <span className="text-gray-300">
                      Dashboard UI (Weeks 11-12)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-8 opacity-70">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white">
                    Advanced Features
                  </h4>
                  <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    🔄 PHASE 2
                  </span>
                </div>
                <ul className="space-y-3 text-lg text-white text-opacity-90">
                  <li>
                    <span className="text-gray-300">
                      Collaborative filtering
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-300">
                      Real-time availability
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-300">
                      Barcode scanner
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-300">
                      Full ILS integration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Prompt */}
      </div>
    </div>
  );
}