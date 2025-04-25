// src/pages/Portfolio.jsx
import React, { useState } from 'react';
import { FaCode, FaCertificate, FaTools, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import realEstateImg from '../assets/real-estate-marketplace.png';
import discordBotImg from '../assets/discord-bot.png';
import oracleCertImg from '../assets/certificates/oracle.png';
import nptelJavaImg from '../assets/certificates/npteljava.png';
import awsCloudImg from '../assets/certificates/awscloud.png';
import reactIcon from '../assets/icons/react-icon.svg';
import nodeIcon from '../assets/icons/node-icon.svg';
import pythonIcon from '../assets/icons/python-icon.svg';
import mongodbIcon from '../assets/icons/mongodb-icon.svg';
import firebaseIcon from '../assets/icons/firebase-icon.svg';
import htmlIcon from '../assets/icons/html5-icon.svg';
import cssIcon from '../assets/icons/css3-icon.svg';
import jsIcon from '../assets/icons/js-icon.svg';
import javaIcon from '../assets/icons/java-icon.svg';
import mysqlIcon from '../assets/icons/mysql-icon.svg';
import tensorflowIcon from '../assets/icons/tensorflow-icon.svg';
import './Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: 'Real Estate Marketplace',
      description: 'A comprehensive real estate platform featuring ML-powered price validation, fraud detection, and an AI chatbot assistant. The platform streamlines property listing and browsing with automated verification processes, ensuring fair pricing through advanced anomaly detection algorithms.',
      image: realEstateImg,
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Random Forest', 'Isolation Forest', 'Gemini API', 'JWT', 'AWS S3'],
      github: 'https://github.com/tharunK03/Hestia',
      featured: true
    },
    {
      title: 'Lung Disease Detection Web App',
      description: 'A Flask-based web application that uses a Convolutional Neural Network (CNN) to classify lung diseases from chest X-ray images. The system can detect five categories: Bacterial Pneumonia, COVID-19, Normal, Tuberculosis, and Viral Pneumonia, providing real-time predictions through an intuitive interface.',
      image: discordBotImg,
      technologies: ['Python', 'Flask', 'TensorFlow', 'CNN', 'HTML', 'CSS', 'Keras', 'Data Augmentation'],
      github: 'https://github.com/tharunK03/Lung-Disease-Prediction',
      featured: true
    }
  ];

  const certificates = [
    {
      title: 'Oracle Cloud Infrastructure 2024',
      subtitle: 'Certified Foundations Associate',
      issuer: 'Oracle Corporation',
      date: 'January 06, 2025',
      validUntil: 'January 06, 2027',
      credentialId: 'OCI-2024-FA',
      icon: '🏆',
      signatory: 'Damien Carey',
      signatoryTitle: 'Senior Vice President, Oracle University',
      recipientName: 'Tharun K',
      image: oracleCertImg
    },
    {
      title: 'Programming in Java',
      subtitle: 'NPTEL Online Certification',
      issuer: 'Ministry of Education, Government of India',
      date: 'October 2023',
      duration: '12 weeks',
      score: '64%',
      details: {
        assignments: '23.35/25',
        exam: '40.75/75',
        totalCertified: 11713
      },
      recipientName: 'THARUN K',
      icon: '🎓',
      image: nptelJavaImg
    },
    {
      title: 'AWS Academy Graduate',
      subtitle: 'AWS Academy Cloud Operations',
      issuer: 'AWS Academy',
      date: 'September 22, 2024',
      duration: '40 hours',
      credentialId: 'GTTwdsa7',
      digitalBadge: 'https://www.credly.com/go/GTTwdsa7',
      recipientName: 'THARUN K',
      icon: '☁️',
      image: awsCloudImg
    }
  ];

  const skills = [
    { name: 'Python', icon: pythonIcon, level: 'Intermediate' },

    { name: 'Java', icon: javaIcon, level: 'Intermediate' },
    { name: 'MySQL', icon: mysqlIcon, level: 'Intermediate' },
    { name: 'TensorFlow', icon: tensorflowIcon, level: 'Intermediate' }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            Portfolio <span className="highlight">Showcase</span>
          </h2>
          <p className="portfolio-subtitle">
            Explore My Journey through Projects, Certificates, And Technical Expertise. Each Section
            Represents a Milestone in My Continuous Learning Path
          </p>
        </div>

        <div className="portfolio-tabs">
          <button
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FaCode /> Projects
          </button>
          <button
            className={`tab-button ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            <FaCertificate /> Certificate
          </button>
          <button
            className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <FaTools /> My Skill
          </button>
        </div>

        <div className="portfolio-content">
          {activeTab === 'projects' && (
            <>
              {projects.map((project, index) => (
                <div key={index} className={`portfolio-card project-card ${project.featured ? 'featured' : ''}`}>
                  <div className="card-image-container">
                    <img src={project.image} alt={project.title} className="card-image" />
                    {project.featured && <span className="featured-badge">Featured</span>}
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                    <div className="card-technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="technology-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="card-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link">
                        <FaGithub /> View Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          {activeTab === 'certificates' && (
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <div key={index} className="certificate-card">
                  <div className="certificate-content">
                    {cert.image && (
                      <div className="certificate-image-container">
                        <img src={cert.image} alt={`${cert.title} Certificate`} className="certificate-image" />
                      </div>
                    )}
                    <span className="certificate-icon">{cert.icon}</span>
                    <h3 className="certificate-title">{cert.title}</h3>
                    {cert.subtitle && <h4 className="certificate-subtitle">{cert.subtitle}</h4>}
                    {cert.recipientName && <p className="certificate-recipient">Awarded to: {cert.recipientName}</p>}
                    <p className="certificate-issuer">{cert.issuer}</p>
                    <p className="certificate-date">Issued: {cert.date}</p>
                    {cert.duration && <p className="certificate-duration">Duration: {cert.duration}</p>}
                    {cert.score && (
                      <div className="certificate-score">
                        <p className="score-title">Score: {cert.score}</p>
                        {cert.details && (
                          <div className="score-details">
                            <p>Online Assignments: {cert.details.assignments}</p>
                            <p>Proctored Exam: {cert.details.exam}</p>
                            <p className="total-certified">Total Certified: {cert.details.totalCertified}</p>
                          </div>
                        )}
                      </div>
                    )}
                    {cert.validUntil && <p className="certificate-validity">Valid until: {cert.validUntil}</p>}
                    {cert.credentialId && (
                      <p className="certificate-id">
                        Credential ID: {cert.digitalBadge ? (
                          <a href={cert.digitalBadge} target="_blank" rel="noopener noreferrer" className="digital-badge-link">
                            {cert.credentialId} 🔗
                          </a>
                        ) : cert.credentialId}
                      </p>
                    )}
                    {cert.signatory && (
                      <div className="certificate-signatory">
                        <p className="signatory-name">{cert.signatory}</p>
                        <p className="signatory-title">{cert.signatoryTitle}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="skills-container">
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;