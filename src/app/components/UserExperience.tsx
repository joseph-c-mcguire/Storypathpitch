import loginScreenshot from 'figma:asset/596da40fe2187b03c3cb54773194d9d78386d848.png';
import quickBrowseSetup from 'figma:asset/f2bde4c6721410e5d39f1b24f7790cbb556ad858.png';
import chatInterface from 'figma:asset/40bb646bf172709fc150386929f21c9c69d5c33a.png';
import structuredSearch from 'figma:asset/32cc1f6b839c4c32ffe6a6dc9c6b944bc9e48f2a.png';
import accessibilitySettings from 'figma:asset/905942aca372b257f9f119d79fb41460bfc7f7af.png';
import searchResults from 'figma:asset/94bb33b12ba59b86824826751d9fe281aeab5695.png';
import bookDetails from 'figma:asset/98ccd3b1e6e72b74fa249f9664e7b0394064cfc5.png';
import feedbackModal from 'figma:asset/d2daa89aca0581ef2b7e5d9f8d6536dc0ed06d45.png';
import { Users, CreditCard, Shield, MessageSquare, Search, Eye, Type, Palette, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';

export function UserExperience() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">{/* Image Modal */}
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
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Slide 6
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-4">
          Complete User Experience
        </h2>
        <p className="text-xl text-gray-600">
          Three access modes + conversational AI + accessibility features
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mt-4" />
      </div>

      {/* Three Access Modes */}
      <div className="bg-white rounded-2xl p-8 shadow-2xl mb-12">
        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            ✓ Working in PoC
          </span>
          <h3 className="text-2xl font-bold mt-3">Three Access Modes (Live Demo)</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg cursor-pointer hover:border-blue-400 transition-all"
            onClick={() => openModal(loginScreenshot)}
          >
            <img 
              src={loginScreenshot} 
              alt="StoryPath Login Screen showing three access modes"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2 text-base">Quick Browse (Anonymous iPad)</p>
                  <p className="text-sm text-gray-700">
                    Coarse age bands (Child/Teen) • Zero PII • Session-only • COPPA compliant • 
                    Family-safe always on
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <CreditCard className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <p className="font-semibold text-purple-900 mb-2 text-base">Library Card Login</p>
                  <p className="text-sm text-gray-700">
                    Personalized history • Save favorites • Borrow tracking • Recommendations 
                    based on past reads • FERPA compliant
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold text-green-900 mb-2 text-base">Librarian Dashboard</p>
                  <p className="text-sm text-gray-700">
                    Add books • Monitor usage • Patron lookup • Feedback review • System settings • 
                    Analytics reports
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy-First Quick Browse Setup */}
      <div className="bg-white rounded-2xl p-8 shadow-2xl mb-12">
        <h3 className="text-2xl font-bold mb-4">Privacy-First Design (COPPA Compliant)</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg cursor-pointer hover:border-blue-400 transition-all"
            onClick={() => openModal(quickBrowseSetup)}
          >
            <img 
              src={quickBrowseSetup} 
              alt="Quick Browse Setup with age group selection"
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <p className="font-semibold text-green-900 text-sm mb-2">✓ Family-Safe Always On</p>
              <p className="text-sm text-gray-700">Content filtering is mandatory. No bypass option.</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="font-semibold text-blue-900 text-sm mb-2">✓ Coarse Age Bands Only</p>
              <p className="text-sm text-gray-700">Child (5-11) or Teen (12-17). No exact age.</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <p className="font-semibold text-purple-900 text-sm mb-2">✓ Zero Tracking</p>
              <p className="text-sm text-gray-700">Session-based only. No cookies or storage.</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4">
              <p className="font-semibold text-orange-900 text-sm mb-2">✓ COPPA Compliant</p>
              <p className="text-sm text-gray-700">No PII collected from children under 13.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conversational AI Interface */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-6">Conversational AI: Chat + Structured Search</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-6 h-6" />
              <h4 className="font-bold text-lg">Chat Mode (Natural Language)</h4>
            </div>
            <div 
              className="bg-white rounded-lg overflow-hidden mb-4 shadow-xl cursor-pointer hover:ring-4 hover:ring-blue-300 transition-all"
              onClick={() => openModal(chatInterface)}
            >
              <img src={chatInterface} alt="Chat interface" className="w-full h-auto" />
            </div>
            <p className="text-base opacity-90">
              Students type conversationally: "I want a funny mystery like Diary of a Wimpy Kid" → 
              AI extracts intent → Vector search → RAG explains results
            </p>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-6 h-6" />
              <h4 className="font-bold text-lg">Structured Search (Guided Filters)</h4>
            </div>
            <div 
              className="bg-white rounded-lg overflow-hidden mb-4 shadow-xl cursor-pointer hover:ring-4 hover:ring-blue-300 transition-all"
              onClick={() => openModal(structuredSearch)}
            >
              <img src={structuredSearch} alt="Structured search form" className="w-full h-auto" />
            </div>
            <p className="text-base opacity-90">
              Select dropdowns: Genre, Reading Level, Pages, Mood → Same hybrid retrieval engine → 
              Faster for students who know what they want
            </p>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-5">
          <p className="text-base">
            <strong>Why both modes?</strong> Some students prefer chatting ("like asking a librarian"), 
            others prefer filters ("like browsing shelves"). Both access the same recommendation engine.
          </p>
        </div>
      </div>

      {/* End-to-End Search Flow */}
      <div className="bg-white rounded-2xl p-8 shadow-2xl mb-12">
        <div className="mb-8">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            ✓ Working in PoC
          </span>
          <h3 className="text-2xl font-bold mt-3">End-to-End Search Flow: Query → Results → Details</h3>
          <p className="text-gray-600 mt-2">
            Watch a student go from "I want a harry potter book" to browsing detailed book information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Search Results */}
          <div>
            <div 
              className="rounded-xl overflow-hidden border-4 border-indigo-200 shadow-2xl mb-4 cursor-pointer hover:border-indigo-400 transition-all"
              onClick={() => openModal(searchResults)}
            >
              <img 
                src={searchResults} 
                alt="Search results showing 3 Harry Potter book recommendations with cover images and View details buttons"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-indigo-50 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mb-3 text-xl">Step 1: Search Results</h4>
              <ul className="text-base text-gray-700 space-y-2">
                <li>• Student types: "I want a harry potter book"</li>
                <li>• AI returns 3 Harry Potter recommendations</li>
                <li>• Each card shows: cover image*, title, author, genre tags</li>
                <li>• <em>*Cover images would be added in production (not in PoC to save space)</em></li>
              </ul>
            </div>
          </div>

          {/* Book Details */}
          <div>
            <div 
              className="rounded-xl overflow-hidden border-4 border-purple-200 shadow-2xl mb-4 cursor-pointer hover:border-purple-400 transition-all"
              onClick={() => openModal(bookDetails)}
            >
              <img 
                src={bookDetails} 
                alt="Book detail view showing Harry Potter and the Sorcerer's Stone with full cover art, description, metadata, and Like/Dislike buttons"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-purple-50 rounded-lg p-5">
              <h4 className="font-bold text-purple-900 mb-3 text-lg">Step 2: Book Details</h4>
              <ul className="text-base text-gray-700 space-y-2">
                <li>• Full cover art (OpenLibrary API integration)</li>
                <li>• Rich metadata: ISBN, language, pages, subjects, age range</li>
                <li>• LLM-generated tags (fantasy, adventure, coming-of-age)</li>
                <li>• Like/Dislike feedback for recommendation tuning</li>
                <li>• "Add to Reading List" for personalized collections</li>
                <li>• Real-time availability (No Copies Available)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-600">
          <p className="text-base text-gray-700">
            <strong>What this demonstrates:</strong> The entire discovery journey is seamless. Students 
            can chat naturally, see relevant results instantly, and dive into rich book details with 
            metadata from OpenLibrary API. The feedback loop (Like/Dislike) feeds back into the 
            recommendation engine to improve future suggestions.
          </p>
        </div>
      </div>

      {/* User Feedback Modal */}
      <div className="bg-white rounded-2xl p-8 shadow-2xl mb-12">
        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            ✓ Working in PoC
          </span>
          <h3 className="text-2xl font-bold mt-3 flex items-center gap-3">
            <MessageSquare className="w-7 h-7 text-blue-600" />
            Step 3: Feedback & Continuous Improvement
          </h3>
          <p className="text-gray-600 mt-2">
            Students can leave helpful comments to improve recommendations for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div 
            className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg cursor-pointer hover:border-blue-400 transition-all"
            onClick={() => openModal(feedbackModal)}
          >
            <img 
              src={feedbackModal} 
              alt="Feedback modal showing 'Great choice!' message with optional comment field and Submit Feedback button"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
              <h4 className="font-bold text-green-900 mb-2 text-base">👍 Positive Feedback Flow</h4>
              <p className="text-sm text-gray-700 mb-2">
                When students like a recommendation:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Click "Like" button → Modal appears with "Great choice!" message</li>
                <li>• Optional comments: "What did you like or dislike about this recommendation?"</li>
                <li>• Examples: "Loved the Percy Jackson recommendation! More mythology books please."</li>
                <li>• Feedback stored with patron ID + book ID + timestamp</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
              <h4 className="font-bold text-red-900 mb-2 text-base">👎 Negative Feedback Flow</h4>
              <p className="text-sm text-gray-700 mb-2">
                When recommendations miss the mark:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Click "Dislike" button → Modal prompts for improvement feedback</li>
                <li>• Examples: "This book was way too childish for me" or "I need more mature content"</li>
                <li>• Flags age-inappropriate suggestions for librarian review</li>
                <li>• Helps tune collaborative filtering weights</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <h4 className="font-bold text-purple-900 mb-2 text-base">🔄 How Feedback Improves the System</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>For logged-in users:</strong> Updates their preference profile → Better future recommendations</li>
                <li>• <strong>For librarians:</strong> Aggregated in admin dashboard → Identify problematic books</li>
                <li>• <strong>For the algorithm:</strong> Adjusts collaborative signals → "Users who liked X also disliked Y"</li>
                <li>• <strong>Privacy-safe:</strong> Anonymous users can still provide feedback (session-only)</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-900 mb-2 text-base">📊 Real-World Impact</h4>
              <p className="text-sm text-gray-700">
                Over time, feedback creates a "wisdom of the crowd" effect: Books that consistently 
                get positive feedback rise in rankings, while problematic suggestions get flagged 
                and reviewed. This self-correcting loop ensures StoryPath gets smarter with every interaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Features */}
      <div className="bg-white rounded-2xl p-8 shadow-2xl">
        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            ✓ Working in PoC
          </span>
          <h3 className="text-2xl font-bold mt-3">Built for Everyone: WCAG 2.1 AA + ADA Compliant</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg cursor-pointer hover:border-blue-400 transition-all"
            onClick={() => openModal(accessibilitySettings)}
          >
            <img 
              src={accessibilitySettings} 
              alt="Accessibility settings panel"
              className="w-full h-auto"
            />
          </div>

          <div>
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-blue-900 mb-2 text-base">Why This Matters for Libraries</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Legal:</strong> ADA Title II mandates accessibility for public services</li>
                <li>• <strong>Equity:</strong> 26% of U.S. adults have some disability; 10-15% of children have dyslexia</li>
                <li>• <strong>Mission:</strong> Libraries serve everyone — StoryPath must too</li>
              </ul>
            </div>

            <h4 className="text-lg font-bold mb-3">Six Accessibility Dimensions:</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Eye className="w-5 h-5 text-blue-600" />
                  <p className="font-semibold text-sm">Display Theme</p>
                </div>
                <p className="text-sm text-gray-600">Light / Dark / High Contrast</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Type className="w-5 h-5 text-purple-600" />
                  <p className="font-semibold text-sm">Font Style</p>
                </div>
                <p className="text-sm text-gray-600">OpenDyslexic / Regular</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Type className="w-5 h-5 text-green-600" />
                  <p className="font-semibold text-sm">Text Size</p>
                </div>
                <p className="text-sm text-gray-600">Small / Medium / Large / X-Large</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Palette className="w-5 h-5 text-orange-600" />
                  <p className="font-semibold text-sm">Color Blind Mode</p>
                </div>
                <p className="text-sm text-gray-600">Deuteranopia / Protanopia / Tritanopia</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-sm mb-1">Reduce Motion</p>
                <p className="text-sm text-gray-600">Removes animations</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-semibold text-sm mb-1">Screen Reader</p>
                <p className="text-sm text-gray-600">Enhanced ARIA labels</p>
              </div>
            </div>

            <div className="mt-4 bg-green-50 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>Auto-saved:</strong> Settings persist across sessions. All features keyboard-navigable 
                with proper focus indicators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}