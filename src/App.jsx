// App.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Experience from './pages/Experience';
import LeetCode from './pages/LeetCode';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const touchData = useRef({ x: 0, y: 0, time: 0 });
  const sections = useMemo(
    () => ['home', 'about', 'experience', 'portfolio', 'leetcode', 'contact'],
    []
  );
  const sectionTitles = {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    portfolio: 'Portfolio',
    leetcode: 'LeetCode',
    contact: 'Contact'
  };

  const getNavHeight = () => {
    const navbar = document.querySelector('.navbar');
    return navbar ? navbar.offsetHeight : 0;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const navbarHeight = getNavHeight();
    const elementPosition = element.offsetTop - navbarHeight;
    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const handleTouchStart = (event) => {
    if (!isMobile) return;
    const touch = event.touches[0];
    touchData.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
  };

  const handleTouchEnd = (event) => {
    if (!isMobile) return;
    const start = touchData.current;
    if (!start.time) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    touchData.current = { x: 0, y: 0, time: 0 };

    if (Math.abs(dx) < 60 || Math.abs(dy) > 60) return;

    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = dx < 0 ? Math.min(sections.length - 1, currentIndex + 1) : Math.max(0, currentIndex - 1);
    if (nextIndex !== currentIndex) {
      setActiveSection(sections[nextIndex]);
    }
  };

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth <= 768);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return (
    <div className="app">
      <Navbar />
      {isMobile && (
        <div className="mobile-page-title">
          {sectionTitles[activeSection] || 'Home'}
        </div>
      )}
      <main
        className="main-content"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`section-strip ${isMobile ? 'section-strip-mobile' : ''}`}
          style={isMobile ? { transform: `translateX(-${sections.indexOf(activeSection) * 100}vw)` } : {}}
        >
          <section id="home" className="section">
            <Home />
          </section>
          
          <section id="about" className="section">
            <About />
          </section>
          
          <section id="experience" className="section">
            <Experience />
          </section>
          
          <section id="portfolio" className="section">
            <Portfolio />
          </section>
          
          <section id="leetcode" className="section">
            <LeetCode />
          </section>
          
          <section id="contact" className="section">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
