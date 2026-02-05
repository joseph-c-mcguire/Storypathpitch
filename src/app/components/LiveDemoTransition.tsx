import { Play, ExternalLink, Monitor, MousePointer, Sparkles } from 'lucide-react';

export function LiveDemoTransition() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20 px-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        {/* Slide Number */}
        <span className="text-purple-300 font-semibold uppercase text-sm tracking-wider">
          Live Demo
        </span>

        {/* Main Heading with Animation */}
        <div className="mt-8 mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-white bg-opacity-20 rounded-full p-6 backdrop-blur-sm animate-pulse">
              <Play className="w-16 h-16 text-white fill-white" />
            </div>
          </div>
          
          <h2 className="text-7xl font-bold text-white mb-6">
            Let's See It In Action
          </h2>
          
          <p className="text-3xl text-purple-200">
            Live Demo Time
          </p>
        </div>

        {/* Transition Message */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-12 border-2 border-white border-opacity-30 shadow-2xl mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Monitor className="w-10 h-10 text-cyan-300" />
            <p className="text-2xl text-white font-semibold">
              Switching to Live Application
            </p>
            <ExternalLink className="w-10 h-10 text-cyan-300" />
          </div>
          
          <p className="text-xl text-purple-200 mb-8">
            Opening StoryPath in a separate browser tab...
          </p>

          {/* What We'll Demonstrate */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-left">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <h3 className="text-2xl font-bold text-white">What We'll Demonstrate:</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-white text-xl font-bold">
                    1
                  </div>
                  <h4 className="text-lg font-bold text-white">User Experience</h4>
                </div>
                <ul className="space-y-2 text-sm text-white text-opacity-90">
                  <li>• Anonymous & patron login flows</li>
                  <li>• Age-based content filtering</li>
                  <li>• Natural language book search</li>
                  <li>• AI-powered recommendations with explanations</li>
                  <li>• Accessibility features (screen reader, high contrast)</li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-white text-xl font-bold">
                    2
                  </div>
                  <h4 className="text-lg font-bold text-white">Librarian Portal</h4>
                </div>
                <ul className="space-y-2 text-sm text-white text-opacity-90">
                  <li>• Real-time analytics dashboard</li>
                  <li>• Add books via ISBN lookup</li>
                  <li>• Patron history & personalized recommendations</li>
                  <li>• User feedback & content moderation</li>
                  <li>• System settings & configuration</li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-white text-xl font-bold">
                    3
                  </div>
                  <h4 className="text-lg font-bold text-white">Hybrid AI Engine</h4>
                </div>
                <ul className="space-y-2 text-sm text-white text-opacity-90">
                  <li>• LLM intent parsing (DeepSeek)</li>
                  <li>• Vector similarity search (OpenAI embeddings)</li>
                  <li>• Collaborative filtering integration</li>
                  <li>• RAG-based explanations</li>
                  <li>• Real-time ranking algorithm</li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-white text-xl font-bold">
                    4
                  </div>
                  <h4 className="text-lg font-bold text-white">Privacy & Compliance</h4>
                </div>
                <ul className="space-y-2 text-sm text-white text-opacity-90">
                  <li>• Age verification flow</li>
                  <li>• COPPA consent mechanisms</li>
                  <li>• Anonymous mode (no PII)</li>
                  <li>• Data encryption & retention</li>
                  <li>• Parent portal access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Prompt */}
        <div className="flex items-center justify-center gap-4">
          <MousePointer className="w-8 h-8 text-purple-300 animate-bounce" />
          <p className="text-2xl text-white font-light">
            Press any key or click to continue to live demo →
          </p>
        </div>

        {/* Technical Note */}
        <div className="mt-12 bg-black bg-opacity-30 backdrop-blur rounded-xl p-6 border border-purple-500 border-opacity-50">
          <p className="text-sm text-purple-200">
            <strong className="text-white">Note:</strong> The live demo is running on a separate deployment with real Providence Public Library data, 
            working Supabase backend, and integrated AI services (DeepSeek for LLM, OpenAI for embeddings).
          </p>
        </div>
      </div>
    </div>
  );
}