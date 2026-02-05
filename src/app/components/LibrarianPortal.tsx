import { useState } from 'react';
import { Shield, Database, Upload, BarChart3, PlayCircle, Users, Clock, CheckCircle, X, Settings } from 'lucide-react';
import { LiveDemoPrompt } from './LiveDemoPrompt';

export function LibrarianPortal() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Placeholder images for mockups
  const adminOverview = "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW4lMjBjb21wdXRlcnxlbnwxfHx8fDE3NzAzMDYxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
  const addBooks = "https://images.unsplash.com/photo-1702026693653-5314debbd7f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9vayUyMGNhdGFsb2clMjBmb3JtfGVufDF8fHx8MTc3MDMwNjE5Mnww&ixlib=rb-4.1.0&q=80&w=1080";
  const patronLookup = "https://images.unsplash.com/photo-1714427834153-473059d2fd88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJlYWRzaGVldCUyMGRhdGFiYXNlJTIwcm93c3xlbnwxfHx8fDE3NzAzMDYxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
  const feedback = "https://images.unsplash.com/photo-1738152878182-869a3fc9e220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZWVkYmFjayUyMGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMzA2MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080";
  const settings = "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXR0aW5ncyUyMGNvbmZpZ3VyYXRpb24lMjBzY3JlZW58ZW58MXx8fHwxNzcwMzA2MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080";

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>
          <img
            src={modalImage}
            alt="Full screen preview"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="mb-12">
        <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
          Slide 7
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          Librarian Admin Portal
        </h2>
        <p className="text-xl text-gray-600">
          Full control, monitoring, and content moderation — no technical skills required
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded mt-4" />
      </div>

      {/* Why Librarians Need Control */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-10 text-white mb-12">
        <h3 className="text-2xl font-bold mb-6">Why Librarian Control is Critical</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <Shield className="w-8 h-8 mb-3" />
            <h4 className="font-bold text-lg mb-3">Content Governance</h4>
            <p className="text-sm opacity-90">
              Librarians are responsible for age-appropriate recommendations. They need to flag, 
              block, or adjust filters if the AI suggests inappropriate content.
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <BarChart3 className="w-8 h-8 mb-3" />
            <h4 className="font-bold text-lg mb-3">Operational Insights</h4>
            <p className="text-sm opacity-90">
              Track what students are reading, which books are popular, and which recommendations 
              lead to checkouts. Data-driven collection development.
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <Users className="w-8 h-8 mb-3" />
            <h4 className="font-bold text-lg mb-3">Patron Support</h4>
            <p className="text-sm opacity-90">
              Look up individual patron reading history, get personalized recommendations for 
              students who need help, and respond to feedback.
            </p>
          </div>
        </div>
      </div>

      {/* 1. Overview Dashboard */}
      <div className="bg-white rounded-2xl p-8 shadow-2xl mb-12">
        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            ✓ Working in PoC
          </span>
          <h3 className="text-2xl font-bold mt-3 flex items-center gap-3">
            <BarChart3 className="w-7 h-7 text-purple-600" />
            1. Overview Dashboard
          </h3>
          <p className="text-gray-600 mt-2">
            At-a-glance metrics + one-click background jobs for system maintenance
          </p>
        </div>
        
        <div 
          className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg cursor-pointer hover:border-purple-400 transition-all mb-8"
          onClick={() => openModal(adminOverview)}
        >
          <img 
            src={adminOverview} 
            alt="Admin overview dashboard showing total books, registered patrons, active loans, recent activity, popular books, and background jobs"
            className="w-full"
          />
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Key Metrics & Actions</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
              <p className="font-semibold text-blue-900 mb-2">📊 Real-Time Stats</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Total Books</strong> in collection</li>
                <li>• <strong>Registered Patrons</strong> (active users)</li>
                <li>• <strong>Active Loans</strong> (currently borrowed)</li>
                <li>• <strong>Total Checkouts</strong> all-time</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
              <p className="font-semibold text-green-900 mb-2">📈 Activity Monitoring</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Recent Activity:</strong> Latest checkouts & returns</li>
                <li>• <strong>Popular Books This Month:</strong> Most recommended & borrowed</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <p className="font-semibold text-purple-900 mb-2">⚙️ Background Jobs (One-Click)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Embedding Generation:</strong> Re-index books for vector search</li>
                <li>• <strong>Update Recommendations:</strong> Refresh collaborative cache</li>
                <li>• <strong>Analytics Summary:</strong> Generate usage reports (checkouts by age, genre, etc.)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 rounded-lg p-4">
            <p className="text-xs text-gray-700">
              <strong>Why this matters:</strong> Librarians can monitor system health, trigger maintenance 
              tasks, and generate reports without calling IT or touching code.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Add Books */}
      <div className="bg-white rounded-2xl p-8 shadow-2xl mb-12">
        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            ✓ Working in PoC
          </span>
          <h3 className="text-2xl font-bold mt-3 flex items-center gap-3">
            <Upload className="w-7 h-7 text-purple-600" />
            2. Add Books to Collection
          </h3>
          <p className="text-gray-600 mt-2">
            Add new acquisitions manually or via bulk CSV import
          </p>
        </div>
        
        <div 
          className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg cursor-pointer hover:border-purple-400 transition-all mb-8"
          onClick={() => openModal(addBooks)}
        >
          <img 
            src={addBooks} 
            alt="Add books form with ISBN lookup, title, author, publication year, pages, language, subject/genre, description, tags, and bulk CSV import"
            className="w-full"
          />
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Smart Book Entry</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
              <p className="font-semibold text-blue-900 mb-2">🔍 ISBN Lookup (Auto-Fill)</p>
              <p className="text-sm text-gray-700">
                Enter ISBN → System fetches metadata from OpenLibrary or Google Books API → 
                Auto-fills title, author, year, pages, genre, description
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
              <p className="font-semibold text-green-900 mb-2">✍️ Manual Entry Fields</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Title, Author(s), Publication Year</li>
                <li>• Number of Pages, Language</li>
                <li>• Subject/Genre (e.g., "Fantasy, Adventure")</li>
                <li>• Description (for vector embeddings)</li>
                <li>• Tags (comma-separated: "wizards, quest, classic")</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <p className="font-semibold text-purple-900 mb-2">📦 Bulk Import CSV</p>
              <p className="text-sm text-gray-700">
                Upload catalog exports from ILS systems (Koha, Alma, Sierra) → System parses 
                and adds hundreds of books at once → Automatically generates embeddings
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-600">
              <p className="font-semibold text-orange-900 mb-2">🤖 Auto-Embedding Generation</p>
              <p className="text-sm text-gray-700">
                When a book is added, the system automatically creates a vector embedding from 
                the description + metadata → Book is immediately searchable
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Patron Lookup */}
      <div className="bg-white rounded-2xl p-8 shadow-2xl mb-12">
        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            ✓ Working in PoC
          </span>
          <h3 className="text-2xl font-bold mt-3 flex items-center gap-3">
            <Database className="w-7 h-7 text-purple-600" />
            3. Patron Lookup & Recommendations
          </h3>
          <p className="text-gray-600 mt-2">
            Search by library card number to view borrow history and generate personalized recommendations
          </p>
        </div>
        
        <div 
          className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg cursor-pointer hover:border-purple-400 transition-all mb-8"
          onClick={() => openModal(patronLookup)}
        >
          <img 
            src={patronLookup} 
            alt="Patron lookup interface showing library card search, demo cards, and patron list with name, card number, age, and books borrowed"
            className="w-full"
          />
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Personalized Librarian Support</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
              <p className="font-semibold text-blue-900 mb-2">🔎 Search by Library Card</p>
              <p className="text-sm text-gray-700">
                Enter a patron's library card number (e.g., LC-001234) → System retrieves their 
                profile: name, age, total books borrowed
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
              <p className="font-semibold text-green-900 mb-2">📚 View Borrow History</p>
              <p className="text-sm text-gray-700">
                See all books a patron has borrowed → Identify reading patterns (genres, authors, themes) 
                → Understand their preferences
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <p className="font-semibold text-purple-900 mb-2">💡 Get Recommendations</p>
              <p className="text-sm text-gray-700">
                Click "Get Recommendations" → System uses patron's borrow history + collaborative 
                filtering → Suggests books similar to what they've enjoyed
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-600">
              <p className="font-semibold text-orange-900 mb-2">👥 Browse All Patrons</p>
              <p className="text-sm text-gray-700">
                View registered library users in a table → Filter by name, age, or activity → 
                Quickly look up students who need reading suggestions
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 rounded-lg p-4">
            <p className="text-xs text-gray-700">
              <strong>Use case:</strong> A student asks the librarian "I don't know what to read next." 
              The librarian scans their card, views their history, and uses StoryPath to suggest 
              books they'll actually enjoy — all in under 30 seconds.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Feedback System */}
      <div className="bg-white rounded-2xl p-8 shadow-2xl mb-12">
        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            ✓ Working in PoC
          </span>
          <h3 className="text-2xl font-bold mt-3 flex items-center gap-3">
            <CheckCircle className="w-7 h-7 text-purple-600" />
            4. User Feedback & Quality Control
          </h3>
          <p className="text-gray-600 mt-2">
            Monitor patron feedback on recommendations to improve the system
          </p>
        </div>
        
        <div 
          className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg cursor-pointer hover:border-purple-400 transition-all mb-8"
          onClick={() => openModal(feedback)}
        >
          <img 
            src={feedback} 
            alt="User feedback panel showing positive and negative ratings with patron comments on book recommendations"
            className="w-full"
          />
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Continuous Improvement Loop</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
              <p className="font-semibold text-green-900 mb-2">👍 Positive Feedback</p>
              <p className="text-sm text-gray-700 mb-2">
                When students love a recommendation:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Shows patron name, age, and timestamp</li>
                <li>• Displays the recommended book title</li>
                <li>• Captures optional written feedback (e.g., "Loved the Percy Jackson recommendation! More mythology books please.")</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
              <p className="font-semibold text-red-900 mb-2">👎 Negative Feedback</p>
              <p className="text-sm text-gray-700 mb-2">
                When recommendations miss the mark:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Flags age-inappropriate suggestions (e.g., "This book was way too childish for me.")</li>
                <li>• Identifies content issues (e.g., "I need more mature content.")</li>
                <li>• Helps librarians tune filters or block books</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
              <p className="font-semibold text-blue-900 mb-2">📊 Feedback Analytics</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Track positive vs negative feedback ratio</li>
                <li>• Identify books that get consistent negative feedback → Remove or retag</li>
                <li>• Surface trending themes from written comments</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <p className="font-semibold text-purple-900 mb-2">🔄 System Learning</p>
              <p className="text-sm text-gray-700">
                Negative feedback on specific books can trigger re-embedding, tag adjustments, or 
                collaborative signal updates to improve future recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. System Settings */}
      <div className="bg-white rounded-2xl p-8 shadow-2xl mb-12">
        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            ✓ Working in PoC
          </span>
          <h3 className="text-2xl font-bold mt-3 flex items-center gap-3">
            <Settings className="w-7 h-7 text-purple-600" />
            5. System Settings & Debugging
          </h3>
          <p className="text-gray-600 mt-2">
            Configure recommendation engine behavior and troubleshoot backend integrations
          </p>
        </div>
        
        <div 
          className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg cursor-pointer hover:border-purple-400 transition-all mb-8"
          onClick={() => openModal(settings)}
        >
          <img 
            src={settings} 
            alt="System settings showing content filtering toggles, vector database configuration, embedding model selection, and integration status"
            className="w-full"
          />
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Backend Configuration Controls</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
              <p className="font-semibold text-blue-900 mb-2">🔒 Content Filtering</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Enable family-safe mode by default:</strong> Toggle on/off</li>
                <li>• <strong>Enforce age-based restrictions:</strong> Toggle on/off</li>
                <li>Quick toggles for school-wide policy enforcement</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
              <p className="font-semibold text-green-900 mb-2">🗄️ Vector Database Config</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Books indexed:</strong> Shows current catalog size</li>
                <li>• <strong>Embedding model:</strong> Display current model (e.g., "text-embedding-3-small")</li>
                <li>• <strong>Re-Index All Books:</strong> Button to regenerate embeddings (if model changes or data corrupted)</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <p className="font-semibold text-purple-900 mb-2">🔗 Integration Status</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>OpenLibrary API:</strong> Connection health (Connected/Failback)</li>
                <li>• <strong>Google Books API:</strong> Connection health</li>
                <li>• <strong>LLM Service (DeepSeek):</strong> API status (Connected/Offline)</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-600">
              <p className="font-semibold text-orange-900 mb-2">🛠️ Debugging Info</p>
              <p className="text-sm text-gray-700">
                If recommendations fail or system behaves unexpectedly, librarians can check 
                integration status → Identify which backend service is down → Contact IT 
                or submit a support ticket with specific error details
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Admin Portal Matters */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-10 text-white">
        <h3 className="text-2xl font-bold mb-6">Why This Admin Portal is Critical for Adoption</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3">🎯 Librarians Own the System</h4>
            <p className="text-sm opacity-90">
              No dependency on IT for daily operations. Librarians can add books, monitor usage, 
              adjust filters, and troubleshoot — all without touching code or waiting for developers.
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3">📊 Data-Driven Decisions</h4>
            <p className="text-sm opacity-90">
              Usage reports show which books are popular, which genres students prefer, and which 
              recommendations lead to checkouts → Informs collection development and budget allocation.
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3">🛡️ Trust & Safety</h4>
            <p className="text-sm opacity-90">
              Feedback system ensures inappropriate recommendations are flagged and addressed. 
              Content filters can be adjusted school-by-school. Librarians maintain editorial control.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white bg-opacity-10 backdrop-blur rounded-xl p-6">
          <p className="text-sm">
            <strong>Bottom line:</strong> StoryPath isn't just an AI black box. It's a tool that \n            amplifies librarian expertise — giving them superpowers to serve more students, faster, \n            with better recommendations, while maintaining full control over content and policies.
          </p>
        </div>
      </div>

      {/* Live Demo Prompt */}
      <LiveDemoPrompt 
        title="Librarian Admin Dashboard"
        description="Navigate the complete admin interface and see how librarians manage the system"
        demoPoints={[
          "View real-time analytics dashboard",
          "Add books via ISBN lookup",
          "Search patron history & get recommendations",
          "Review user feedback & content moderation"
        ]}
        variant="secondary"
      />
    </div>
  );
}