import { useState, useEffect } from 'react';
import { OutcomesHero } from '@/app/components/OutcomesHero';
import { TableOfContents } from '@/app/components/TableOfContents';
import { ProblemDefinition } from '@/app/components/ProblemDefinition';
import { OverallSystemFlow } from '@/app/components/OverallSystemFlow';
import { UserWorkflowExample } from '@/app/components/UserWorkflowExample';
import { ArchitecturalDecisions } from '@/app/components/ArchitecturalDecisions';
import { RecommendationEngineComponent } from '@/app/components/RecommendationEngineComponent';
import { GovernanceIteration } from '@/app/components/GovernanceIteration';
import { AuthenticationUserManagement } from '@/app/components/AuthenticationUserManagement';
import { ChangeManagementCICD } from '@/app/components/ChangeManagementCICD';
import { PhasedDelivery } from '@/app/components/PhasedDelivery';
import { SuccessMetricsConclusion } from '@/app/components/SuccessMetricsConclusion';
import { LiveDemoTransition } from '@/app/components/LiveDemoTransition';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sections = [
    'hero',
    'problem-definition',
    'system-architecture',
    'user-workflow',
    'architectural-decisions',
    'recommendation-engine',
    'governance',
    'authentication',
    'production-readiness',
    'rollout',
    'conclusion',
    'live-demo'
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

        <section id="problem-definition">
          <ProblemDefinition />
        </section>

        <section id="system-architecture">
          <OverallSystemFlow />
        </section>

        <section id="user-workflow">
          <UserWorkflowExample />
        </section>

        <section id="architectural-decisions">
          <ArchitecturalDecisions />
        </section>

        <section id="recommendation-engine">
          <RecommendationEngineComponent />
        </section>

        <section id="governance">
          <GovernanceIteration />
        </section>

        <section id="authentication">
          <AuthenticationUserManagement />
        </section>

        <section id="production-readiness">
          <ChangeManagementCICD />
        </section>

        <section id="rollout">
          <PhasedDelivery />
        </section>

        <section id="conclusion">
          <SuccessMetricsConclusion />
        </section>

        <section id="live-demo">
          <LiveDemoTransition />
        </section>
      </main>
    </div>
  );
}