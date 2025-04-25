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
        I’m a tech enthusiast who believes every problem is an opportunity to create something valuable. I enjoy building practical solutions, whether it’s through data analysis, machine learning, or full stack development. With each project, I aim to learn something new and make a meaningful impact.


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