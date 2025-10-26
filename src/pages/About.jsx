import React from "react";
import './About.css';
import resumePDF from '../assets/TharunK_Resume.pdf';

const About = () => {
  const handleDownloadCV = () => {
    window.open(resumePDF, '_blank');
  };

  const scrollToPortfolio = (event) => {
    event.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
        I'm a passionate AIML student and problem solver who loves building innovative solutions across frontend development, machine learning, and data science. I enjoy creating intuitive user interfaces, developing intelligent AI models, and analyzing complex datasets to extract meaningful insights. Currently exploring Backend Development, Cloud Platforms, and Generative AI technologies. With a strong foundation in full-stack development and a deep interest in artificial intelligence, I aim to bridge the gap between cutting-edge technology and practical applications. Every project is an opportunity to learn, innovate, and make a meaningful impact.
        </p>
        <div className="about-buttons">
          <button className="about-button-primary" onClick={handleDownloadCV}>
            Download CV
          </button>
          <button className="about-button-outline" onClick={scrollToPortfolio}>
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;