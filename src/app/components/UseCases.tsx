import { User, Laptop, BookOpen, UserCheck } from 'lucide-react';

export function UseCases() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Use Cases
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          Real-World Scenarios
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded" />
      </div>

      <div className="space-y-8">
        {/* Use Case 1 */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-blue-900/50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-700">
              <User className="w-8 h-8 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-white">Young Reader Discovery</h3>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full border border-blue-700">
                  Anonymous iPad Mode
                </span>
              </div>
              <div className="bg-blue-950/50 rounded-lg p-6 mb-4 border border-blue-800">
                <p className="text-gray-300 italic mb-2">
                  "A 10-year-old student walks up to the library iPad kiosk during lunch break. They
                  tap the screen and say: 'Hey, I want a Mary Poppins book.'"
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">System Action:</strong> Selects age band "Child (6-12)" automatically
                    from anonymous mode
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Agent Response:</strong> "Searching for Mary Poppins books..."
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Results:</strong> Shows Mary Poppins series plus similar books like "Matilda"
                    and "The Magic Tree House"—all age-appropriate and available in the library
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Student Action:</strong> Taps to add 2 books to their "want to check out" list
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Case 2 */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-purple-900/50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-purple-700">
              <Laptop className="w-8 h-8 text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-white">Librarian Book Ingestion</h3>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full border border-purple-700">
                  Admin Dashboard
                </span>
              </div>
              <div className="bg-purple-950/50 rounded-lg p-6 mb-4 border border-purple-800">
                <p className="text-gray-300 italic mb-2">
                  "It's a snowy Monday morning. The librarian arrives with a donation box containing
                  15 new books. They sit at the admin desk to add them to the system."
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Action:</strong> Librarian logs into admin dashboard, opens "Add Books" panel
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Input:</strong> Scans ISBN barcodes or types ISBNs manually
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">System:</strong> Calls Admin API → Vector Embedding Service → OpenLibrary
                    API to fetch metadata (title, author, description, cover)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Processing:</strong> DeepSeek analyzes description to extract age range,
                    themes, mood tags
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    5
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Result:</strong> Books are vectorized, stored, and immediately searchable
                    by students within minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Case 3 */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-green-900/50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-green-700">
              <UserCheck className="w-8 h-8 text-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-white">Parent Seeking Age-Appropriate Book</h3>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-900/50 text-green-300 text-sm rounded-full border border-green-700">
                  Anonymous Mode + Manual Query
                </span>
              </div>
              <div className="bg-green-950/50 rounded-lg p-6 mb-4 border border-green-800">
                <p className="text-gray-300 italic mb-2">
                  "A parent visits the library with their 13-year-old son. The kid loves fantasy. The
                  parent uses the kiosk to find something appropriate:"
                </p>
                <p className="text-gray-200 font-semibold mt-2">
                  Query: "Hey, I want a book for my 13-year-old kid. They're really into fantasy and
                  like J.R.R. Tolkien's stuff. What are some other good books for them?"
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">LLM Parsing:</strong> Extracts structured filters → Genre: Fantasy, Age:
                    13, Similar to: "J.R.R. Tolkien"
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Vector Search:</strong> Finds books with similar themes (epic fantasy,
                    world-building) and appropriate age range (12-15)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Results:</strong> "The Hobbit," "Eragon," "Percy Jackson," "A Wizard of
                    Earthsea"—filtered to exclude mature content
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Parent:</strong> Reviews list, approves, and child checks out 3 books
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Case 4 */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-orange-900/50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-orange-700">
              <BookOpen className="w-8 h-8 text-orange-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-white">Adult Seeking Private Recommendation</h3>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-orange-900/50 text-orange-300 text-sm rounded-full border border-orange-700">
                  Anonymous Mode
                </span>
              </div>
              <div className="bg-orange-950/50 rounded-lg p-6 mb-4 border border-orange-800">
                <p className="text-gray-300 italic mb-2">
                  "A 30-year-old patron feels self-conscious about asking a librarian for Young Adult
                  fiction recommendations. They use the kiosk privately:"
                </p>
                <p className="text-gray-200 font-semibold mt-2">
                  Query: "Hey, I want to read some YA fiction. I really like Warhammer books. What are
                  some good recommendations based on that?"
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">System:</strong> Selects "Adult" age band, searches YA fiction with
                    Warhammer-like themes (dark fantasy, action, military sci-fi)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Results:</strong> "Red Rising," "The Hunger Games," "Ender's Game," "Six
                    of Crows"
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Privacy Benefit:</strong> No judgment, no awkward conversation—just helpful
                    recommendations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Case 5 */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-indigo-900/50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-indigo-700">
              <UserCheck className="w-8 h-8 text-indigo-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-white">Logged-In Personalized Recommendations</h3>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-indigo-900/50 text-indigo-300 text-sm rounded-full border border-indigo-700">
                  Library Card Login
                </span>
              </div>
              <div className="bg-indigo-950/50 rounded-lg p-6 mb-4 border border-indigo-800">
                <p className="text-gray-300 italic mb-2">
                  "A frequent student reader logs in with their library card. The system has their
                  borrow history showing they love mystery novels."
                </p>
                <p className="text-gray-200 font-semibold mt-2">
                  Query: "What should I read next?"
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">System Analysis:</strong> Reviews borrow history → Notices pattern of
                    mystery novels by Agatha Christie, Sherlock Holmes
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Collaborative Filter:</strong> "Students who borrowed these also borrowed
                    books by Dorothy Sayers, G.K. Chesterton"
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-white">Results:</strong> Personalized recommendations matching proven reading
                    preferences with diverse new authors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}