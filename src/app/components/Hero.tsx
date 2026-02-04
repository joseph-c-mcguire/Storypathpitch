import { BookOpen, Sparkles, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-900 mb-8">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">AI-Powered Library Recommendation System</span>
        </div>

        <h1 className="text-6xl font-bold mb-6 text-white">
          StoryPath
        </h1>

        <p className="text-2xl text-gray-700 mb-4">
          Connecting Readers with Their Next Great Adventure
        </p>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          A proposal for Providence Library to increase student reading engagement through
          intelligent, privacy-first book recommendations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
            <p className="text-gray-600">
              Hybrid AI system combining collaborative filtering and semantic search
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-600">
              FERPA & COPPA compliant with age-appropriate content filtering
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Natural language interface for all ages and technical abilities
            </p>
          </div>
        </div>

        <div className="mt-16 text-sm text-gray-500">
          Prepared for Qvest US • Providence Library Partnership Proposal
        </div>
        
        <div className="mt-4 text-base text-gray-700 font-medium">
          Presented by Joseph McGuire
        </div>
      </div>
    </div>
  );
}