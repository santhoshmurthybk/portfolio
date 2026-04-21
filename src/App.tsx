import { useEffect } from 'react';
import { Preloader } from '@components/Preloader';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Portfolio } from './sections/Portfolio';
import { Contact } from './sections/Contact';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = ['home', 'about', 'portfolio', 'contact'];

export function App() {
  const activeSection = useScrollSpy({ sectionIds: SECTION_IDS, offset: 100 });
  useTheme(); // Initialize theme

  // Handle hash navigation on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Scroll to section after a brief delay for DOM to be ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Preloader />
      <Header activeSection={activeSection} />
      
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
