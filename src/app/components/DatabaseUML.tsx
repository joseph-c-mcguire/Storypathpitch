import { Database, Key, Link2 } from 'lucide-react';

export function DatabaseUML() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="mb-12">
        <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
          Slide 3 (continued)
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          Database Schema
        </h2>
        <p className="text-xl text-gray-600">
          Core entities and relationships
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded mt-4" />
      </div>

      <div className="relative bg-white rounded-2xl p-8 shadow-xl">
        {/* Layout Grid */}
        <div className="grid grid-cols-4 gap-4">
          {/* Column 1 - User */}
          <div className="space-y-4">
            {/* User Entity */}
            <div className="border-2 border-green-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-green-400 text-white px-3 py-2 font-bold flex items-center gap-2 text-sm">
                <Database className="w-4 h-4" />
                User
              </div>
              <div className="bg-white text-xs">
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Key className="w-3 h-3 text-yellow-600" />
                  <span className="font-mono">id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">PK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">library_card</span>
                  <span className="text-orange-600 ml-2">varchar(50)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">password_hash</span>
                  <span className="text-orange-600 ml-2">varchar(255)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">name</span>
                  <span className="text-orange-600 ml-2">varchar(200)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">age</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">email</span>
                  <span className="text-orange-600 ml-2">varchar(200)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">role</span>
                  <span className="text-purple-600 ml-2">enum</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">family_safe_mode</span>
                  <span className="text-green-600 ml-2">boolean</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">language_preference</span>
                  <span className="text-orange-600 ml-2">varchar(10)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">total_borrows</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">total_recommendations_viewed</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">total_feedback_given</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">created_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">updated_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">last_login</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">last_active</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
                <div className="px-3 py-1.5">
                  <span className="font-mono">deleted_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                  <span className="text-gray-400 ml-1">NULL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Book & Reading Lists */}
          <div className="space-y-4">
            {/* Book Entity */}
            <div className="border-2 border-blue-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-blue-400 text-white px-3 py-2 font-bold flex items-center gap-2 text-sm">
                <Database className="w-4 h-4" />
                Book
              </div>
              <div className="bg-white text-xs">
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Key className="w-3 h-3 text-yellow-600" />
                  <span className="font-mono">id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">PK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">isbn</span>
                  <span className="text-orange-600 ml-2">varchar(20)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">title</span>
                  <span className="text-orange-600 ml-2">varchar(512)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">authors[]</span>
                  <span className="text-purple-600 ml-2">text[]</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">description</span>
                  <span className="text-orange-600 ml-2">text</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">year</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">pages</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">language</span>
                  <span className="text-orange-600 ml-2">varchar(10)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">subjects[]</span>
                  <span className="text-purple-600 ml-2">text[]</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">tags[]</span>
                  <span className="text-purple-600 ml-2">text[]</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">age_min</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">age_max</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">age_range</span>
                  <span className="text-orange-600 ml-2">varchar(20)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">popularity_score</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">borrow_count</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">recommendation_count</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">positive_feedback_count</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">negative_feedback_count</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">cover_url</span>
                  <span className="text-orange-600 ml-2">text</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">status</span>
                  <span className="text-purple-600 ml-2">enum</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">embedding</span>
                  <span className="text-red-600 ml-2">vector(1536)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">metadata</span>
                  <span className="text-purple-600 ml-2">jsonb</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Link2 className="w-3 h-3 text-blue-600" />
                  <span className="font-mono">created_by</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">FK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">created_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
                <div className="px-3 py-1.5">
                  <span className="font-mono">updated_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
              </div>
            </div>

            {/* Reading Lists */}
            <div className="border-2 border-cyan-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-cyan-400 text-white px-3 py-2 font-bold flex items-center gap-2 text-sm">
                <Database className="w-4 h-4" />
                Reading_Lists
              </div>
              <div className="bg-white text-xs">
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Key className="w-3 h-3 text-yellow-600" />
                  <span className="font-mono">id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">PK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Link2 className="w-3 h-3 text-blue-600" />
                  <span className="font-mono">user_id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">FK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">name</span>
                  <span className="text-orange-600 ml-2">varchar(200)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">description</span>
                  <span className="text-orange-600 ml-2">text</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">is_public</span>
                  <span className="text-green-600 ml-2">boolean</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">created_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
                <div className="px-3 py-1.5">
                  <span className="font-mono">updated_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Relationships */}
          <div className="space-y-4">
            {/* Borrow History */}
            <div className="border-2 border-purple-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-purple-400 text-white px-3 py-2 font-bold flex items-center gap-2 text-sm">
                <Database className="w-4 h-4" />
                Borrow_History
              </div>
              <div className="bg-white text-xs">
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Key className="w-3 h-3 text-yellow-600" />
                  <span className="font-mono">id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">PK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Link2 className="w-3 h-3 text-blue-600" />
                  <span className="font-mono">user_id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">FK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Link2 className="w-3 h-3 text-blue-600" />
                  <span className="font-mono">book_id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">FK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">borrowed_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">due_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">returned_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                  <span className="text-gray-400 ml-1">NULL</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">status</span>
                  <span className="text-purple-600 ml-2">enum</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">created_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
                <div className="px-3 py-1.5">
                  <span className="font-mono">updated_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="border-2 border-indigo-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-indigo-400 text-white px-3 py-2 font-bold flex items-center gap-2 text-sm">
                <Database className="w-4 h-4" />
                Recommendations
              </div>
              <div className="bg-white text-xs">
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Key className="w-3 h-3 text-yellow-600" />
                  <span className="font-mono">id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">PK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Link2 className="w-3 h-3 text-blue-600" />
                  <span className="font-mono">user_id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">FK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Link2 className="w-3 h-3 text-blue-600" />
                  <span className="font-mono">book_id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">FK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">source</span>
                  <span className="text-orange-600 ml-2">varchar(50)</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">reason</span>
                  <span className="text-orange-600 ml-2">text</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">recommended_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">is_viewed</span>
                  <span className="text-green-600 ml-2">boolean</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">viewed_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                  <span className="text-gray-400 ml-1">NULL</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">is_borrowed</span>
                  <span className="text-green-600 ml-2">boolean</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">borrowed_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                  <span className="text-gray-400 ml-1">NULL</span>
                </div>
                <div className="px-3 py-1.5">
                  <span className="font-mono">created_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
              </div>
            </div>

            {/* Reading List Items */}
            <div className="border-2 border-teal-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-teal-400 text-white px-3 py-2 font-bold flex items-center gap-2 text-sm">
                <Database className="w-4 h-4" />
                Reading_List_Items
              </div>
              <div className="bg-white text-xs">
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Key className="w-3 h-3 text-yellow-600" />
                  <span className="font-mono">id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">PK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Link2 className="w-3 h-3 text-blue-600" />
                  <span className="font-mono">reading_list_id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">FK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Link2 className="w-3 h-3 text-blue-600" />
                  <span className="font-mono">book_id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">FK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">position</span>
                  <span className="text-blue-600 ml-2">int</span>
                </div>
                <div className="px-3 py-1.5">
                  <span className="font-mono">added_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 - Feedback & Session */}
          <div className="space-y-4">
            {/* Feedback Entity */}
            <div className="border-2 border-pink-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-pink-400 text-white px-3 py-2 font-bold flex items-center gap-2 text-sm">
                <Database className="w-4 h-4" />
                Feedback
              </div>
              <div className="bg-white text-xs">
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Key className="w-3 h-3 text-yellow-600" />
                  <span className="font-mono">id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">PK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Link2 className="w-3 h-3 text-blue-600" />
                  <span className="font-mono">user_id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">FK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Link2 className="w-3 h-3 text-blue-600" />
                  <span className="font-mono">book_id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">FK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">rating</span>
                  <span className="text-purple-600 ml-2">enum</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">comment</span>
                  <span className="text-orange-600 ml-2">text</span>
                  <span className="text-gray-400 ml-1">NULL</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">maturity_flag</span>
                  <span className="text-green-600 ml-2">boolean</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">reading_level_flag</span>
                  <span className="text-green-600 ml-2">boolean</span>
                </div>
                <div className="px-3 py-1.5">
                  <span className="font-mono">created_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
              </div>
            </div>

            {/* Session Entity */}
            <div className="border-2 border-amber-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-amber-400 text-white px-3 py-2 font-bold flex items-center gap-2 text-sm">
                <Database className="w-4 h-4" />
                Session
              </div>
              <div className="bg-white text-xs">
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Key className="w-3 h-3 text-yellow-600" />
                  <span className="font-mono">id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">PK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200 flex items-center gap-2">
                  <Link2 className="w-3 h-3 text-blue-600" />
                  <span className="font-mono">user_id</span>
                  <span className="text-blue-600 ml-auto">uuid</span>
                  <span className="text-gray-500">FK</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">access_token</span>
                  <span className="text-orange-600 ml-2">text</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">refresh_token</span>
                  <span className="text-orange-600 ml-2">text</span>
                </div>
                <div className="px-3 py-1.5 border-b border-gray-200">
                  <span className="font-mono">expires_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
                <div className="px-3 py-1.5">
                  <span className="font-mono">created_at</span>
                  <span className="text-teal-600 ml-2">timestamp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Relationship Lines - simplified for clarity */}
        <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          {/* User -> Reading Lists */}
          <line x1="25%" y1="40%" x2="40%" y2="70%" stroke="#666" strokeWidth="2" strokeDasharray="5,5" />
          
          {/* User -> Borrow History */}
          <line x1="25%" y1="30%" x2="62%" y2="25%" stroke="#666" strokeWidth="2" strokeDasharray="5,5" />
          
          {/* User -> Recommendations */}
          <line x1="25%" y1="35%" x2="62%" y2="50%" stroke="#666" strokeWidth="2" strokeDasharray="5,5" />
          
          {/* Book -> Borrow History */}
          <line x1="50%" y1="30%" x2="62%" y2="30%" stroke="#666" strokeWidth="2" strokeDasharray="5,5" />
          
          {/* Book -> Recommendations */}
          <line x1="50%" y1="40%" x2="62%" y2="55%" stroke="#666" strokeWidth="2" strokeDasharray="5,5" />
          
          {/* Book -> Feedback */}
          <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#666" strokeWidth="2" strokeDasharray="5,5" />
          
          {/* Reading Lists -> Reading List Items */}
          <line x1="50%" y1="75%" x2="62%" y2="80%" stroke="#666" strokeWidth="2" strokeDasharray="5,5" />
          
          {/* Book -> Reading List Items */}
          <line x1="50%" y1="60%" x2="62%" y2="85%" stroke="#666" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
        <h3 className="font-bold text-lg mb-4">Key Details</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-sm text-gray-700 mb-2">Data Types:</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li><span className="font-mono text-blue-600">uuid</span> - Primary identifiers</li>
              <li><span className="font-mono text-orange-600">varchar/text</span> - String data</li>
              <li><span className="font-mono text-blue-600">int</span> - Numeric data</li>
              <li><span className="font-mono text-purple-600">enum</span> - Fixed values (role: anonymous/patron/librarian, status: active/returned/overdue)</li>
              <li><span className="font-mono text-red-600">vector(1536)</span> - OpenAI embeddings for semantic search</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Relationships:</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• User ↔ Reading Lists (1:many) - Personalized book collections</li>
              <li>• User ↔ Borrow History (1:many) - Checkout history</li>
              <li>• User ↔ Recommendations (1:many) - Personalized book suggestions</li>
              <li>• Book ↔ Borrow History (1:many) - Circulation tracking</li>
              <li>• Book ↔ Recommendations (1:many) - Book suggestions</li>
              <li>• Book ↔ Feedback (1:many) - Book ratings</li>
              <li>• Reading Lists ↔ Reading List Items (1:many) - List contents</li>
              <li>• Book ↔ Reading List Items (1:many) - List contents</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}