import { useState, useEffect } from 'react';
import { OutcomesHero } from '@/app/components/OutcomesHero';
import { TableOfContents } from '@/app/components/TableOfContents';
import { ProblemSlide } from '@/app/components/ProblemSlide';
import { SolutionSlide } from '@/app/components/SolutionSlide';
import { ArchitectureDiagram } from '@/app/components/ArchitectureDiagram';
import { CombinedRecommendationLogic } from '@/app/components/CombinedRecommendationLogic';
import { UserExperience } from '@/app/components/UserExperience';
import { LibrarianPortal } from '@/app/components/LibrarianPortal';
import { TrustAndSafety } from '@/app/components/TrustAndSafety';
import { PoCScope } from '@/app/components/PoCScope';
import { PhasedDelivery } from '@/app/components/PhasedDelivery';
import { KPIs } from '@/app/components/KPIs';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sections = [
    'hero',
    'problem',
    'solution',
    'architecture',
    'recommendation-logic',
    'user-experience',
    'librarian-portal',
    'trust-safety',
    'poc-scope',
    'phased-delivery',
    'kpis'
  ];

  // Apply dark theme by default
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation - left/right for sections, up/down for smooth scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or has a button/link focused
      if (
        e.target instanceof HTMLInputElement || 
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLButtonElement ||
        e.target instanceof HTMLAnchorElement
      ) {
        return;
      }

      const currentIndex = sections.indexOf(activeSection);

      if (e.key === 'ArrowRight') {
        // Navigate to next section
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
          const nextSection = sections[currentIndex + 1];
          const element = document.getElementById(nextSection);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } else if (e.key === 'ArrowLeft') {
        // Navigate to previous section
        e.preventDefault();
        if (currentIndex > 0) {
          const prevSection = sections[currentIndex - 1];
          const element = document.getElementById(prevSection);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } else if (e.key === 'ArrowDown') {
        // Smooth scroll down
        e.preventDefault();
        window.scrollBy({ top: 100, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        // Smooth scroll up
        e.preventDefault();
        window.scrollBy({ top: -100, behavior: 'smooth' });
      } else if (e.key === 'Home') {
        // Go to top
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'End') {
        // Go to bottom
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, sections]);

  return (
    <div className="min-h-screen">
      <TableOfContents 
        activeSection={activeSection} 
        onToggle={setIsSidebarOpen}
      />
      
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'mr-64' : 'mr-0'}`}>
        <section id="hero">
          <OutcomesHero />
        </section>

        <section id="problem">
          <ProblemSlide />
        </section>

        <section id="solution">
          <SolutionSlide />
        </section>

        <section id="architecture">
          <ArchitectureDiagram />
        </section>

        <section id="recommendation-logic">
          <CombinedRecommendationLogic />
        </section>

        <section id="user-experience">
          <UserExperience />
        </section>

        <section id="librarian-portal">
          <LibrarianPortal />
        </section>

        <section id="trust-safety">
          <TrustAndSafety />
        </section>

        <section id="poc-scope">
          <PoCScope />
        </section>

        <section id="phased-delivery">
          <PhasedDelivery />
        </section>

        <section id="kpis">
          <KPIs />
        </section>
      </main>
    </div>
  );
}