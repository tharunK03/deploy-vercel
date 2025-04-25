import React from 'react';
import './Experience.css';
import hyundaiLogo from '../assets/company-logos/hyundai.png';
import daimlerLogo from '../assets/company-logos/daimler.png';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Data Analytics Intern",
      company: "Hyundai Motor India Limited",
      location: "Sriperumbudur, Tamil Nadu (On-Site)",
      period: "July 2024",
      logo: hyundaiLogo,
      description: [
        "Performed real-time data analytics on robot motion data from manufacturing shops (e.g., paint, welding) using MySQL and Python.",
        "Implemented an auto-ticketing system to generate alerts for exceeding robot parameter thresholds(temperature,power), ensuring timely issue resolution.",
        "Gained hands-on experience with Qlik for real-time data monitoring and decision-making in an industrial setting."
      ],
      skills: ["Python", "MySQL", "Qlik", "Data Analytics", "Robot Motion Analysis"]
    },
    {
      title: "Manufacturing Process Automation Intern",
      company: "Daimler India Commercial Vehicles",
      location: "Chennai, Tamil Nadu (On-Site)",
      period: "Dec 2024 - Jan 2025",
      logo: daimlerLogo,
      description: [
        "Automated production planning in Excel using Python, integrating formulas, applicability matrices, and day-wise schedules.",
        "Developed a user-friendly front-end interface using HTML and CSS to enhance accessibility.",
        "Worked with the Manufacturing Engineering Team to align automation with production targets."
      ],
      skills: ["Python", "Excel Automation", "HTML", "CSS", "Production Planning"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle">
          My professional journey in industrial automation and data analytics.
        </p>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="company-info">
                  {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />}
                  <div>
                    <h3 className="experience-role">{exp.title}</h3>
                    <span className="experience-company">{exp.company}</span>
                    <span className="experience-location">{exp.location}</span>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                </div>
              </div>
              <div className="experience-description">
                <ul>
                  {exp.description.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="experience-skills">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 