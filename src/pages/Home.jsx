import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import '../styles/Home.css';

export default function Home() {
  const scrollToLeetCode = (e) => {
    e.preventDefault();
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const leetcodeSection = document.getElementById('leetcode');
    
    if (leetcodeSection) {
      const elementPosition = leetcodeSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home-container">
      <div className="text-content">
        <motion.p 
          className="intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1 
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tharun K
        </motion.h1>
        
        <motion.h2 
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          AIML Student & Problem Solver
        </motion.h2>
        
        <motion.p 
          className="desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Passionate about Frontend Development, Machine Learning, and Data Science. 
          I love building intuitive user interfaces, developing AI models, and analyzing complex datasets. 
          Currently exploring Backend Development, Cloud Technologies, and Generative AI while creating practical, impactful solutions.
        </motion.p>
        
        <motion.div 
          className="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {['Frontend Development', 'Backend & Cloud', 'Machine Learning', 'Gen AI', 'Data Science', 'React.js'].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href="#contact" className="glow-button">
            Let's Collaborate <span className="arrow">→</span>
          </a>
        </motion.div>
        
        <motion.div 
          className="socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <a href="https://www.linkedin.com/in/tharun-k03/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tharunK03" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="#leetcode" onClick={scrollToLeetCode} aria-label="LeetCode">
            <FaCode />
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="image-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="glow-ring">
          <img 
            src="/assets/Tharun.png" 
            alt="Tharun K - AIML Student" 
          />
        </div>
      </motion.div>
    </div>
  );
}