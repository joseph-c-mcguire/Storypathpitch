import { AlertCircle, Users, Target, Sparkles } from 'lucide-react';

export function ProblemSlide() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <span className="text-orange-600 font-semibold uppercase text-sm tracking-wider">
          Slide 2
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          The Problem
        </h2>
        <p className="text-xl text-gray-600">
          The challenge: students struggle to find books they'll actually enjoy
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
            <AlertCircle className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-xl font-bold mb-3">Recommendations Don't Scale</h3>
          <p className="text-gray-700 mb-4">
            Librarians give great personalized picks, but they're anecdotal and time-intensive.
            Can't scale to 500+ students per librarian.
          </p>
          <div className="bg-red-50 rounded-lg p-4 text-sm text-gray-700">
            <strong>Today:</strong> 5-10 min per student, mostly during limited library hours
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold mb-3">"Just-Right" is Hard</h3>
          <p className="text-gray-700 mb-4">
            Students need books matched to their interest + reading level + age-appropriateness.
            Getting all three right is difficult at scale.
          </p>
          <div className="bg-orange-50 rounded-lg p-4 text-sm text-gray-700">
            <strong>Result:</strong> Books returned unread, frustrated students, wasted holds
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold mb-3">Can't Explain the "Why"</h3>
          <p className="text-gray-700 mb-4">
            Librarians are great at explaining <em>why</em> they recommend a book to a student,
            but current automated tools don't provide that context - making librarians hesitant to trust them.
          </p>
          <div className="bg-yellow-50 rounded-lg p-4 text-sm text-gray-700">
            <strong>Result:</strong> Librarians avoid automated systems and stick to manual recommendations
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-10 text-white">
        <div className="flex items-start gap-6">
          <Users className="w-16 h-16 flex-shrink-0 opacity-75" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Key Requirements (To Validate with Librarians)</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Quick suggestions</strong> that match student's interests AND reading level</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Explainable "why"</strong> so librarians can trust and validate AI recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Easy control</strong> over filters, tags, and school-specific policies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Works on iPads</strong> for kiosk-style student self-service</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Privacy-safe</strong> — no PII collection, minimal data retention</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}