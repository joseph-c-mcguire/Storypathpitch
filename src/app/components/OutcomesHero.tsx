import { Target, TrendingUp, Clock, BookOpen } from 'lucide-react';

export function OutcomesHero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white px-6">
      <div className="max-w-5xl">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4">
            StoryPath
          </h1>
          <p className="text-3xl font-light opacity-90">
            Data-Informed Recommendations to Increase Student Reading
          </p>
        </div>

        <div className="w-32 h-1 bg-white opacity-50 rounded mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6">
            <Target className="w-10 h-10 mb-4" />
            <h3 className="font-bold text-xl mb-2">Goal</h3>
            <p className="text-sm opacity-90">
              Increase monthly book checkouts and improve repeat borrowing rates
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6">
            <BookOpen className="w-10 h-10 mb-4" />
            <h3 className="font-bold text-xl mb-2">Constraints</h3>
            <p className="text-sm opacity-90">
              FERPA/COPPA privacy, age-appropriate content, low librarian overhead
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-6">
            <TrendingUp className="w-10 h-10 mb-4" />
            <h3 className="font-bold text-xl mb-2">Deliverable</h3>
            <p className="text-sm opacity-90">
              AI-powered recommendation system with student kiosk, librarian tools, and analytics
            </p>
          </div>
        </div>

        <div className="bg-white bg-opacity-20 backdrop-blur rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">What Success Looks Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">+25%</div>
              <p className="text-sm opacity-90">Increase in monthly checkouts</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">+35%</div>
              <p className="text-sm opacity-90">Repeat borrowing within 30 days</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">-60%</div>
              <p className="text-sm opacity-90">Time to make a recommendation</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4 text-sm opacity-75">
          <Clock className="w-4 h-4" />
          <span>Presented to Qvest US • Providence Library Partnership • February 2026</span>
        </div>
      </div>
    </div>
  );
}