import { TrendingUp, Clock, DollarSign, Github } from 'lucide-react';

export function ExecutiveSummary() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-orange-600 font-semibold uppercase text-sm tracking-wider">
          Executive Summary
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          Increasing Student Reading Through AI
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded" />
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-700 leading-relaxed">
          StoryPath is an AI-powered book recommendation system designed to increase student reading
          engagement at Providence Library by providing personalized, age-appropriate book suggestions
          through natural language interactions.
        </p>
      </div>

      {/* GitHub Repository Links */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Github className="w-6 h-6 text-white" />
          <h3 className="text-xl font-bold text-white">Open Source Code</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="https://github.com/joseph-c-mcguire/story-path"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all rounded-lg p-4 flex items-center gap-3 group"
          >
            <Github className="w-5 h-5 text-orange-400 flex-shrink-0" />
            <div>
              <div className="text-white font-semibold group-hover:underline">StoryPath Application</div>
              <div className="text-gray-300 text-sm">github.com/joseph-c-mcguire/story-path</div>
            </div>
          </a>
          <a 
            href="https://github.com/joseph-c-mcguire/Storypathpitch"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all rounded-lg p-4 flex items-center gap-3 group"
          >
            <Github className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <div className="text-white font-semibold group-hover:underline">Presentation Code</div>
              <div className="text-gray-300 text-sm">github.com/joseph-c-mcguire/Storypathpitch</div>
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 w-full md:w-80">
          <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Expected Impact</h3>
          <p className="text-4xl font-bold text-blue-600 mb-2">30-50%</p>
          <p className="text-gray-700">increase in student book checkouts within 6 months</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 w-full md:w-80">
          <Clock className="w-8 h-8 text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Timeline</h3>
          <p className="text-4xl font-bold text-purple-600 mb-2">5-10</p>
          <p className="text-gray-700">weeks from kickoff to production deployment</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6">Key Value Propositions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="w-2 bg-blue-600 rounded" />
            <div>
              <h4 className="font-semibold mb-2">Librarian Empowerment</h4>
              <p className="text-gray-700">
                Scales librarian expertise through AI, enabling personalized recommendations for
                every student without manual effort
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 bg-purple-600 rounded" />
            <div>
              <h4 className="font-semibold mb-2">Privacy-First Design</h4>
              <p className="text-gray-700">
                Full compliance with FERPA, COPPA, and student privacy laws with anonymous access
                mode available
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 bg-green-600 rounded" />
            <div>
              <h4 className="font-semibold mb-2">Hybrid Intelligence</h4>
              <p className="text-gray-700">
                Combines collaborative filtering from borrow history with semantic search for
                accurate, diverse recommendations
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 bg-orange-600 rounded" />
            <div>
              <h4 className="font-semibold mb-2">Age-Appropriate Content</h4>
              <p className="text-gray-700">
                Automatic content filtering aligned with RI reading grade bands and parental
                control options
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}