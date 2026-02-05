import { Target, TrendingUp, Clock, BookOpen, Github, Users, Heart } from 'lucide-react';

export function OutcomesHero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white px-6">
      <div className="max-w-6xl">
        <div className="mb-8">
          <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm mb-4">
            PROPOSAL FOR 2026 PRO BONO PROJECT
          </div>
          <h1 className="text-7xl font-bold mb-4">
            StoryPath
          </h1>
          <p className="text-3xl font-light opacity-90 mb-2">
            Making Libraries Friendlier, Empowering Librarians
          </p>
          <p className="text-xl opacity-80">
            Accessibility-first AI that extends librarian expertise 24/7 for Rhode Island school districts
          </p>
        </div>

        <div className="w-32 h-1 bg-white opacity-50 rounded mb-8" />

        {/* Community Impact Banner */}
        <div className="bg-white bg-opacity-15 backdrop-blur rounded-2xl p-6 mb-8 border border-white border-opacity-30">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="w-6 h-6 text-pink-300" />
            <h3 className="font-bold text-xl">Community Impact & Accessibility First</h3>
          </div>
          <p className="text-lg opacity-90 leading-relaxed">
            Supporting Rhode Island's public libraries in their mission to provide equitable access to literacy resources. 
            Aligned with state initiatives to increase community engagement and build foundational reading skills for all children, 
            regardless of economic background or library hours.
          </p>
        </div>

        {/* GitHub Repository Links */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://github.com/joseph-c-mcguire/story-path"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur transition-all rounded-lg px-6 py-3 flex items-center gap-3 group"
          >
            <Github className="w-5 h-5 flex-shrink-0" />
            <div className="text-left">
              <div className="font-semibold group-hover:underline">Proof of Concept Code</div>
              <div className="text-sm opacity-75">github.com/joseph-c-mcguire/story-path</div>
            </div>
          </a>
          <a 
            href="https://github.com/joseph-c-mcguire/Storypathpitch"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur transition-all rounded-lg px-6 py-3 flex items-center gap-3 group"
          >
            <Github className="w-5 h-5 flex-shrink-0" />
            <div className="text-left">
              <div className="font-semibold group-hover:underline">This Presentation</div>
              <div className="text-sm opacity-75">github.com/joseph-c-mcguire/Storypathpitch</div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6">
            <Users className="w-10 h-10 mb-3 text-green-300" />
            <h3 className="font-bold text-xl mb-2">Empower Librarians</h3>
            <p className="text-sm opacity-90">
              Extend their expertise beyond library hours, not replace their knowledge
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6">
            <Target className="w-10 h-10 mb-3 text-yellow-300" />
            <h3 className="font-bold text-xl mb-2">Always-On During Library Hours</h3>
            <p className="text-sm opacity-90">
              Self-service recommendations without needing to find a librarian
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6">
            <BookOpen className="w-10 h-10 mb-3 text-blue-300" />
            <h3 className="font-bold text-xl mb-2">Hybrid AI</h3>
            <p className="text-sm opacity-90">
              Borrowing patterns + LLM-powered metadata analysis for quality recommendations
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6">
            <TrendingUp className="w-10 h-10 mb-3 text-pink-300" />
            <h3 className="font-bold text-xl mb-2">Measurable Impact</h3>
            <p className="text-sm opacity-90">
              Track checkout rate, repeat engagement, and recommendation diversity metrics
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4 text-sm opacity-75">
          <Clock className="w-4 h-4" />
          <span>Qvest US • Presented by Joseph McGuire • February 2026</span>
        </div>
      </div>
    </div>
  );
}