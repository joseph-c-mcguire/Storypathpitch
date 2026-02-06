import { Target, AlertTriangle, CheckCircle, Database, TrendingUp } from 'lucide-react';

export function ProblemDefinition() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Success Metrics & Context
        </span>

        {/* Header */}
        <div className="mt-4 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Success Metrics & Context
          </h2>
          <p className="text-lg text-gray-600">
            How StoryPath fits into Providence's literacy goals
          </p>
        </div>

        {/* District/State/National Context */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="text-xl font-bold text-gray-900 mb-4">Literacy Goals Context</div>
          <div className="grid grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="text-sm font-semibold text-blue-600 uppercase mb-1">Providence District</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">24% → 50%</div>
              <div className="text-sm text-gray-600">3rd graders reading at grade level by 2030</div>
              <div className="text-xs text-gray-500 mt-2">
                <a href="https://www.providenceschools.org/about-us/school-board/community-listening-sessions" className="underline" target="_blank" rel="noopener noreferrer">
                  Source: PPSD 2025-2030 Goals
                </a>
              </div>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <div className="text-sm font-semibold text-purple-600 uppercase mb-1">Rhode Island State</div>
              <div className="text-lg font-bold text-gray-900 mb-1">Personal Literacy Plans</div>
              <div className="text-sm text-gray-600">Required intervention planning for accelerating students to grade level</div>
              <div className="text-xs text-gray-500 mt-2">
                <a href="https://ride.ri.gov/instruction-assessment/literacy/personal-literacy-plans" className="underline" target="_blank" rel="noopener noreferrer">
                  RI Dept of Education
                </a>
              </div>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <div className="text-sm font-semibold text-green-600 uppercase mb-1">National Benchmark</div>
              <div className="text-lg font-bold text-gray-900 mb-1">3rd Grade Proficiency</div>
              <div className="text-sm text-gray-600">Campaign for Grade-Level Reading: increase low-income student proficiency</div>
              <div className="text-xs text-gray-500 mt-2">
                <a href="https://www.imls.gov/our-work/partnerships/campaign-grade-level-reading" className="underline" target="_blank" rel="noopener noreferrer">
                  Campaign Info
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Reality Check Banner */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4 mb-8">
          <div className="text-base font-bold text-gray-900 mb-2">
            StoryPath's Role: Supporting Literacy Goals
          </div>
          <div className="text-sm text-gray-700">
            <strong>Can do:</strong> Increase book access beyond library hours. 
            <strong className="ml-2">Cannot do alone:</strong> Teach reading or close proficiency gaps—requires broader intervention.
          </div>
        </div>

        {/* Success Metrics Defined First */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white mb-8">
          <div className="text-xl font-bold mb-3">Leading Indicators We Track</div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4 flex-1 text-center">
                <div className="text-xl font-bold">Discovery</div>
                <div className="text-xs opacity-90">Find books faster</div>
              </div>
              <div className="text-3xl font-bold opacity-75">→</div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4 flex-1 text-center">
                <div className="text-xl font-bold">Checkout</div>
                <div className="text-xs opacity-90">Borrow more</div>
              </div>
              <div className="text-3xl font-bold opacity-75">→</div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4 flex-1 text-center">
                <div className="text-xl font-bold">Return</div>
                <div className="text-xs opacity-90">Build habits</div>
              </div>
              <div className="text-3xl font-bold opacity-75">→</div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4 flex-1 text-center">
                <div className="text-xl font-bold">Volume</div>
                <div className="text-xs opacity-90">One factor in gains</div>
              </div>
            </div>
          </div>
          <div className="mt-3 text-xs opacity-90">
            <strong>Note:</strong> Proficiency tracking requires school partnership (not yet established).
          </div>
        </div>

        {/* Transition/Segue */}
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
          <div className="text-sm text-gray-700">
            <strong>Next:</strong> How we build a privacy-respecting system with real library data.
          </div>
        </div>


      </div>
    </div>
  );
}