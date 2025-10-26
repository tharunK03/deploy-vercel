import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/LeetCode.css';
import { FaCode as FaCodeIcon, FaTrophy, FaCheckCircle, FaChartLine, FaLayerGroup, FaCalendarAlt } from 'react-icons/fa';

export default function LeetCode() {
  const [stats, setStats] = useState({
    totalSolved: 300,
    easySolved: 95,
    mediumSolved: 168,
    hardSolved: 37,
    easyTotal: 620,
    mediumTotal: 1349,
    hardTotal: 564,
    topPercentile: 12.12,
    contestRating: 1702,
    globalRanking: 41430,
    totalContestUsers: 355439,
    attended: 10,
    totalBadges: 4
  });
  const [loading, setLoading] = useState(false);

  // Fetch live stats from LeetCode via serverless function
  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/leetcode?username=tharunk03');
        const data = await response.json();
        
        if (data && !data.error) {
          setStats({
            totalSolved: data.totalSolved,
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
            easyTotal: 620,
            mediumTotal: 1349,
            hardTotal: 564,
            topPercentile: data.topPercentile || 12.12,
            contestRating: data.contestRating || 1702,
            globalRanking: data.globalRanking,
            totalContestUsers: 355439,
            attended: data.attended || 10,
            totalBadges: data.totalBadges || 4
          });
        }
      } catch (error) {
        console.log('Could not fetch live data, using cached stats:', error);
      }
      setLoading(false);
    };

    fetchLeetCodeStats();
  }, []);

  const calculatePercentage = (solved, total) => ((solved / total) * 100).toFixed(1);
  const easyPercentage = calculatePercentage(stats.easySolved, stats.easyTotal);
  const mediumPercentage = calculatePercentage(stats.mediumSolved, stats.mediumTotal);
  const hardPercentage = calculatePercentage(stats.hardSolved, stats.hardTotal);
  
  const circlePercentage = ((stats.totalSolved / 3730) * 100).toFixed(1);
  const beatsEasy = 90.5;
  const beatsMedium = 92.7;
  const beatsHard = 88.3;

  return (
    <section id="leetcode" className="leetcode-section">
      <div className="leetcode-container">
        <div className="section-header">
          <h2 className="section-title">
            LeetCode <span className="highlight">Statistics</span>
          </h2>
          <p className="section-description">
            Real-time competitive programming achievements{loading && <span className="loading-indicator">🔄 Updating...</span>}
          </p>
        </div>

        {/* Top Stats Section */}
        <div className="top-stats-grid">
          {/* Left Panel - Contest Stats */}
          <motion.div 
            className="contest-stats-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contest-rating">
              <div className="stat-number-large">{stats.contestRating}</div>
              <div className="stat-label-large">Contest Rating</div>
            </div>
            
            <div className="contest-details">
              <div className="contest-item">
                <div className="contest-label">Global Ranking</div>
                <div className="contest-value">{stats.globalRanking.toLocaleString()}/{stats.totalContestUsers.toLocaleString()}</div>
              </div>
              <div className="contest-item">
                <div className="contest-label">Attended</div>
                <div className="contest-value">{stats.attended}</div>
              </div>
            </div>

            {/* Rating Graph Placeholder */}
            <div className="rating-graph">
              <div className="graph-placeholder">
                <svg width="100%" height="100" viewBox="0 0 300 80" preserveAspectRatio="none">
                  <path
                    d="M 0,60 Q 75,55 150,45 T 300,35"
                    stroke="#ec4899"
                    strokeWidth="3"
                    fill="none"
                    className="rating-line"
                  />
                  <circle cx="300" cy="35" r="5" fill="#ec4899" />
                  <text x="290" y="30" fill="#94a3b8" fontSize="10">{stats.contestRating}</text>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Top Percentile */}
          <motion.div 
            className="percentile-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="percentile-stat">
              <div className="stat-number-large">{stats.topPercentile}%</div>
              <div className="stat-label-large">Top</div>
            </div>
            
            {/* Bar Chart Placeholder */}
            <div className="bar-chart">
              {[20, 35, 45, 50, 65, 75, 85, 95].map((height, i) => (
                <div 
                  key={i} 
                  className="bar"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <div className="bottom-stats-grid">
          {/* Left Panel - Solved Problems */}
          <motion.div 
            className="solved-problems-panel"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="circular-progress-container">
              <svg className="circular-progress" viewBox="0 0 120 120">
                <circle
                  className="progress-ring-background"
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="#eee"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  className="progress-ring"
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${(stats.totalSolved / 3730) * 339.29} 339.29`}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="circular-progress-text">
                <div className="progress-number">{stats.totalSolved}</div>
                <div className="progress-label">Solved</div>
              </div>
            </div>

            <div className="difficulty-breakdown">
              {/* Easy */}
              <div className="difficulty-item easy-diff">
                <div className="difficulty-header">
                  <span className="difficulty-name">Easy</span>
                  <span className="difficulty-count">{stats.easySolved}<span className="difficulty-total">/{stats.easyTotal}</span></span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar easy-bar" style={{ width: `${easyPercentage}%` }} />
                </div>
                <div className="beats-percentage">Beats {beatsEasy}%</div>
              </div>

              {/* Medium */}
              <div className="difficulty-item medium-diff">
                <div className="difficulty-header">
                  <span className="difficulty-name">Medium</span>
                  <span className="difficulty-count">{stats.mediumSolved}<span className="difficulty-total">/{stats.mediumTotal}</span></span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar medium-bar" style={{ width: `${mediumPercentage}%` }} />
                </div>
                <div className="beats-percentage">Beats {beatsMedium}%</div>
              </div>

              {/* Hard */}
              <div className="difficulty-item hard-diff">
                <div className="difficulty-header">
                  <span className="difficulty-name">Hard</span>
                  <span className="difficulty-count">{stats.hardSolved}<span className="difficulty-total">/{stats.hardTotal}</span></span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar hard-bar" style={{ width: `${hardPercentage}%` }} />
                </div>
                <div className="beats-percentage">Beats {beatsHard}%</div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Badges */}
          <motion.div 
            className="badges-panel"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="badge-stat">
              <div className="stat-number-large">{stats.totalBadges}</div>
              <div className="stat-label-large">Badges</div>
            </div>
            
            <div className="recent-badge">
              <div className="badge-hexagon">
                <div className="hexagon-content">
                  <span className="badge-number">-9-</span>
                  <span className="badge-year">2022</span>
                </div>
              </div>
              <div className="badge-info">
                <div className="badge-title">Most Recent Badge</div>
                <div className="badge-name">100 Days Badge</div>
              </div>
            </div>
          </motion.div>
        </div>

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
