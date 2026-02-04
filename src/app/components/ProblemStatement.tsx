import { AlertCircle, Users, BookOpen, TrendingDown } from 'lucide-react';

export function ProblemStatement() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto bg-gray-50">
      <div className="mb-12">
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          The Challenge
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          Why Students Need Better Recommendations
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded" />
      </div>

      <div className="bg-white rounded-2xl p-8 mb-8 border-l-4 border-orange-500">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-3">Core Problem</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Students are reading fewer books because they struggle to find titles that match their
              interests and reading level. Librarians have the expertise to provide excellent
              recommendations but cannot scale this knowledge to serve hundreds of students individually.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="font-semibold text-lg">Discovery Challenge</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">•</span>
              <span>Students don't know what they want to read next</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">•</span>
              <span>Library catalogs are hard to search without specific titles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">•</span>
              <span>Genre and topic browsing yields overwhelming results</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg">Librarian Bandwidth</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-1">•</span>
              <span>Limited time to provide personalized recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-1">•</span>
              <span>Relying on memory of student reading preferences</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-1">•</span>
              <span>Can't track reading patterns across entire student body</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg">Reading Level Mismatch</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>Books too advanced discourage struggling readers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>Books too simple bore advanced readers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>Age-inappropriate content concerns for parents</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg">Data Availability</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Rich borrow history data exists but underutilized</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Electronic catalog has metadata but no intelligence layer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>No feedback loop to improve recommendations</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Research Insight</h3>
        <p className="text-lg leading-relaxed">
          During librarian interviews, a consistent pattern emerged: <strong>students reliably read
          books recommended by librarians</strong> based on what other similar students enjoyed. This
          proves that personalized, peer-informed recommendations work—we just need to scale them.
        </p>
      </div>
    </div>
  );
}