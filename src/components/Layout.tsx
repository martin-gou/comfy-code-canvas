
import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            
            // Update URL without reload
            history.pushState(null, '', href);
          }
        }
      }
    };

    // Enhanced section reveal animations with more subtle transitions
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Add reveal class if not already present
        if (!section.classList.contains('reveal-section')) {
          section.classList.add('reveal-section');
        }
        
        // Reveal section when 15% of it is in viewport
        if (sectionTop < windowHeight * 0.85) {
          // Add a small delay based on section index for cascade effect
          setTimeout(() => {
            section.classList.add('revealed');
          }, index * 120);
        }
      });
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for sections in viewport with slight delay for page load
    setTimeout(handleScroll, 200);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
