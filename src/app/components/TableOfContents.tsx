import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface TableOfContentsProps {
  activeSection: string;
  onToggle?: (isOpen: boolean) => void;
}

export function TableOfContents({ activeSection, onToggle }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true); // Start open on desktop

  const sections = [
    { id: 'hero', label: '1. Overview' },
    { id: 'problem-definition', label: '2. Success Metrics & Data' },
    { id: 'system-architecture', label: '3. System Architecture' },
    { id: 'user-workflow', label: '4. User Workflow' },
    { id: 'architectural-decisions', label: '5. Architectural Decisions' },
    { id: 'recommendation-engine', label: '6. Hybrid Recommender' },
    { id: 'governance', label: '7. Governance & Iteration' },
    { id: 'authentication', label: '8. Authentication' },
    { id: 'production-readiness', label: '9. Production Readiness' },
    { id: 'rollout', label: '10. Rollout Plan' },
    { id: 'conclusion', label: '11. Conclusion' },
    { id: 'live-demo', label: '12. Live Demo →' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <>
      {/* Toggle Button - visible on all screen sizes */}
      <button
        onClick={handleToggle}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Table of Contents */}
      <nav
        className={`accessibility-panel fixed top-0 right-0 h-full shadow-2xl z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 p-6 overflow-y-auto border-2`}
      >
        <div className="mb-8">
          <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-4">
            Contents
          </h3>
        </div>

        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-100 text-blue-900 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={handleToggle}
        />
      )}
    </>
  );
}