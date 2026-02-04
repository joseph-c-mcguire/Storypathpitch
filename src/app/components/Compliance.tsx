import { FileText, Users, Accessibility, CheckCircle } from 'lucide-react';

export function Compliance() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto bg-gray-50">
      <div className="mb-12">
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Compliance & Standards
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          Meeting Legal & Educational Requirements
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Student Privacy Laws</h3>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold">FERPA Compliance</h4>
              </div>
              <p className="text-sm text-gray-600 ml-7">
                Family Educational Rights and Privacy Act protects student education records. Our
                system:
              </p>
              <ul className="text-sm text-gray-600 ml-7 mt-2 space-y-1">
                <li>• Stores only education-related data (reading history)</li>
                <li>• Requires parental consent for minors under 18</li>
                <li>• Provides data access/correction rights</li>
                <li>• Restricts third-party disclosure</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold">COPPA Compliance</h4>
              </div>
              <p className="text-sm text-gray-600 ml-7">
                Children's Online Privacy Protection Act regulates data collection from children
                under 13:
              </p>
              <ul className="text-sm text-gray-600 ml-7 mt-2 space-y-1">
                <li>• Anonymous mode available—no data collection required</li>
                <li>• Parental consent for account creation (library card authorization)</li>
                <li>• No advertising or third-party tracking</li>
                <li>• Clear privacy notice in child-friendly language</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold">Student Privacy Pledge</h4>
              </div>
              <p className="text-sm text-gray-600 ml-7">
                References: <a href="https://studentprivacy.ed.gov" className="text-blue-600 underline">studentprivacy.ed.gov</a>
              </p>
              <ul className="text-sm text-gray-600 ml-7 mt-2 space-y-1">
                <li>• No sale of student data</li>
                <li>• No behavioral advertising</li>
                <li>• No unauthorized profile creation</li>
                <li>• Clear data retention policies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Educational Standards</h3>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold">RI Reading Grade Bands</h4>
              </div>
              <p className="text-sm text-gray-600 ml-7">
                Aligned with Rhode Island Department of Education content standards:
              </p>
              <p className="text-xs text-gray-500 ml-7 mt-1">
                Reference: <a href="https://ride.ri.gov/instruction-assessment/content-standards" className="text-blue-600 underline">ride.ri.gov/instruction-assessment/content-standards</a>
              </p>
              <ul className="text-sm text-gray-600 ml-7 mt-2 space-y-1">
                <li>• K-2: Early readers (Lexile BR-450L)</li>
                <li>• 3-5: Intermediate readers (Lexile 450-790L)</li>
                <li>• 6-8: Middle grades (Lexile 790-1010L)</li>
                <li>• 9-12: High school (Lexile 1010-1335L)</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold">Reading Level Detection</h4>
              </div>
              <p className="text-sm text-gray-600 ml-7">
                Our system uses LLM parsing (DeepSeek) to extract age-appropriateness from book
                descriptions and metadata:
              </p>
              <ul className="text-sm text-gray-600 ml-7 mt-2 space-y-1">
                <li>• Automatic age range tagging (e.g., 10-13, 14-17)</li>
                <li>• Cross-referenced with external APIs (OpenLibrary, Google Books)</li>
                <li>• Feedback loop for corrections ("too easy" / "too hard" flags)</li>
                <li>• Manual override by librarians for edge cases</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold">Diverse Content Representation</h4>
              </div>
              <p className="text-sm text-gray-600 ml-7">
                Recommendations include diverse authors, cultures, and perspectives to support
                inclusive education goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <Accessibility className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold">Accessibility Requirements (ADA)</h3>
        </div>

        <p className="text-gray-700 mb-6">
          Our system meets ADA web accessibility standards (WCAG 2.1 Level AA) as outlined in the
          2024 web rule:{' '}
          <a
            href="https://www.ada.gov/resources/2024-03-08-web-rule/"
            className="text-blue-600 underline"
          >
            ada.gov/resources/2024-03-08-web-rule
          </a>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Perceivable</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Alt text for all images and book covers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>High contrast color schemes (4.5:1 minimum)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Resizable text without loss of functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Text-to-speech compatible interface</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Operable</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Full keyboard navigation (no mouse required)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>No time limits on reading or interactions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Clear focus indicators for navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Voice input for searches (speech-to-text)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Understandable</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Plain language (no jargon)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Consistent navigation across pages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Clear error messages with guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Multi-language support (starting with English/Spanish)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-green-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Assistive Technology Support</h4>
          <p className="text-sm text-gray-700">
            Tested and compatible with JAWS, NVDA, VoiceOver, and TalkBack screen readers. Touch
            targets minimum 44x44px for motor accessibility.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Compliance Commitment</h3>
        <p className="text-lg leading-relaxed mb-6">
          Qvest US commits to maintaining compliance with all relevant laws and standards throughout
          the project lifecycle. We will:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>Conduct annual privacy audits and update policies as laws evolve</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>Provide staff training on student privacy and data protection</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>Maintain transparent change logs for system updates affecting privacy</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>Work with Providence Library legal counsel to ensure ongoing compliance</span>
          </li>
        </ul>
      </div>
    </div>
  );
}