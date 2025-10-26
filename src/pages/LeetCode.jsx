import React from 'react';
import { motion } from 'framer-motion';
import '../styles/LeetCode.css';
import { FaCode as FaCodeIcon, FaTrophy, FaCheckCircle, FaChartLine, FaLayerGroup } from 'react-icons/fa';

export default function LeetCode() {
  // IMPORTANT: Update these stats manually when your LeetCode stats change
  // Visit https://leetcode.com/u/tharunk03/ and copy the latest numbers
  const stats = {
    totalSolved: 396,      // Update: Total problems solved
    easySolved: 139,       // Update: Easy problems solved
    mediumSolved: 204,     // Update: Medium problems solved
    hardSolved: 53,        // Update: Hard problems solved
    acceptanceRate: 33.77,   // Update: Top percentile (shown as %)
    globalRanking: 257820,  // Update: Your global ranking
    totalSubmissions: 964   // Update: Total submissions in past year
  };

  const totalProblems = stats.easySolved + stats.mediumSolved + stats.hardSolved;
  const easyPercentage = (stats.easySolved / totalProblems * 100).toFixed(1);
  const mediumPercentage = (stats.mediumSolved / totalProblems * 100).toFixed(1);
  const hardPercentage = (stats.hardSolved / totalProblems * 100).toFixed(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const circularProgressVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (delay) => ({
      width: "100%",
      transition: {
        duration: 1,
        delay: delay,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="leetcode" className="leetcode-section">
      <div className="leetcode-container">
        <div className="section-header">
          <h2 className="section-title">
            LeetCode <span className="highlight">Statistics</span>
          </h2>
          <p className="section-description">
            Competitive programming progress and problem-solving achievements
          </p>
        </div>

        <motion.div 
          className="leetcode-stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Total Problems Solved Card */}
          <motion.div 
            className="stat-card main-card"
            variants={itemVariants}
          >
            <div className="card-icon-wrapper">
              <FaCheckCircle className="stat-icon large-icon" />
            </div>
            <h3 className="stat-value">{stats.totalSolved}</h3>
            <p className="stat-label">Problems Solved</p>
          </motion.div>

          {/* Top Percentile Card */}
          <motion.div 
            className="stat-card"
            variants={itemVariants}
          >
            <div className="card-icon-wrapper">
              <FaChartLine className="stat-icon" />
            </div>
            <h3 className="stat-value">{stats.acceptanceRate}%</h3>
            <p className="stat-label">Top Percentile</p>
          </motion.div>

          {/* Global Ranking Card */}
          <motion.div 
            className="stat-card"
            variants={itemVariants}
          >
            <div className="card-icon-wrapper">
              <FaTrophy className="stat-icon" />
            </div>
            <h3 className="stat-value">#{stats.globalRanking.toLocaleString()}</h3>
            <p className="stat-label">Global Ranking</p>
          </motion.div>

          {/* Total Submissions Card */}
          <motion.div 
            className="stat-card"
            variants={itemVariants}
          >
            <div className="card-icon-wrapper">
              <FaLayerGroup className="stat-icon" />
            </div>
            <h3 className="stat-value">{stats.totalSubmissions}</h3>
            <p className="stat-label">Total Submissions</p>
          </motion.div>
        </motion.div>

        {/* Difficulty Breakdown */}
        <motion.div 
          className="difficulty-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="difficulty-title">Difficulty Breakdown</h3>
          
          <div className="difficulty-cards">
            {/* Easy */}
            <motion.div 
              className="difficulty-card easy"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="difficulty-header">
                <span className="difficulty-name">Easy</span>
                <span className="difficulty-count">{stats.easySolved}</span>
              </div>
              <div className="progress-container">
                <div 
                  className="progress-bar easy-bar"
                  style={{ '--progress': `${easyPercentage}%` }}
                  variants={progressBarVariants}
                  custom={0.5}
                />
              </div>
              <p className="difficulty-percentage">{easyPercentage}%</p>
            </motion.div>

            {/* Medium */}
            <motion.div 
              className="difficulty-card medium"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="difficulty-header">
                <span className="difficulty-name">Medium</span>
                <span className="difficulty-count">{stats.mediumSolved}</span>
              </div>
              <div className="progress-container">
                <div 
                  className="progress-bar medium-bar"
                  style={{ '--progress': `${mediumPercentage}%` }}
                  variants={progressBarVariants}
                  custom={0.7}
                />
              </div>
              <p className="difficulty-percentage">{mediumPercentage}%</p>
            </motion.div>

            {/* Hard */}
            <motion.div 
              className="difficulty-card hard"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="difficulty-header">
                <span className="difficulty-name">Hard</span>
                <span className="difficulty-count">{stats.hardSolved}</span>
              </div>
              <div className="progress-container">
                <div 
                  className="progress-bar hard-bar"
                  style={{ '--progress': `${hardPercentage}%` }}
                  variants={progressBarVariants}
                  custom={0.9}
                />
              </div>
              <p className="difficulty-percentage">{hardPercentage}%</p>
            </motion.div>
          </div>
        </motion.div>

        {/* LeetCode Profile Link */}
        <motion.div
          className="leetcode-link-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="https://leetcode.com/u/tharunk03/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="leetcode-profile-link"
          >
            <FaCodeIcon className="link-icon" />
            <span>View Full Profile on LeetCode</span>
            <span className="link-arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
