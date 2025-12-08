// App.jsx
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Experience from './pages/Experience';
import LeetCode from './pages/LeetCode';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  const touchData = useRef({ x: 0, y: 0, time: 0 });
  const sections = ['home', 'about', 'experience', 'portfolio', 'leetcode', 'contact'];

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
  };

  const handleTouchStart = (event) => {
    if (window.innerWidth > 768) return;
    const touch = event.touches[0];
    touchData.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
  };

  const handleTouchEnd = (event) => {
    if (window.innerWidth > 768) return;
    const start = touchData.current;
    if (!start.time) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    touchData.current = { x: 0, y: 0, time: 0 };

    if (Math.abs(dx) < 60 || Math.abs(dy) > 80) return;

    const navbarHeight = getNavHeight();
    const scrollPosition = window.scrollY + navbarHeight + 5;
    let currentIndex = 0;
    sections.forEach((id, index) => {
      const el = document.getElementById(id);
      if (el && scrollPosition >= el.offsetTop) {
        currentIndex = index;
      }
    });

    const nextIndex = dx < 0 ? Math.min(sections.length - 1, currentIndex + 1) : Math.max(0, currentIndex - 1);
    if (nextIndex !== currentIndex) {
      scrollToSection(sections[nextIndex]);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <main
        className="main-content"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
      </main>
    </div>
  );
}

export default App;
