import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/LeetCode.css';
import { FaCode as FaCodeIcon } from 'react-icons/fa';

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

  const totalProblems = stats.easySolved + stats.mediumSolved + stats.hardSolved;
  const easyPercentage = ((stats.easySolved / stats.easyTotal) * 100).toFixed(1);
  const mediumPercentage = ((stats.mediumSolved / stats.mediumTotal) * 100).toFixed(1);
  const hardPercentage = ((stats.hardSolved / stats.hardTotal) * 100).toFixed(1);
  
  const circlePercentage = ((stats.totalSolved / 3730) * 100).toFixed(1);

  return (
    <section id="leetcode" className="leetcode-section">
      <div className="leetcode-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-title">LeetCode Activity</h3>
          <p className="section-description">
            I love the thrill of problem solving and the art of competitive programming. Tackling algorithmic challenges on LeetCode sharpens my skills, fuels my curiosity, and keeps me at the top of my game. Whether it's a tricky DP problem or a clever graph algorithm, I enjoy the process of breaking down complex problems and finding elegant solutions.
            {loading && <span className="loading-indicator">🔄 Updating...</span>}
          </p>
        </motion.div>

        {/* Main Stats Card */}
        <motion.div
          className="leetcode-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-content">
            {/* Circular Progress & Stats */}
            <div className="top-section">
              <div className="circular-progress-wrapper">
                <svg className="circular-progress" viewBox="0 0 120 120">
                  <circle
                    className="progress-ring-background"
                    cx="60"
                    cy="60"
                    r="54"
                  />
                  <circle
                    className="progress-ring"
                    cx="60"
                    cy="60"
                    r="54"
                    strokeDasharray={`${(stats.totalSolved / 3730) * 339.29} 339.29`}
                    transform="rotate(-90 60 60)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="progress-text">
                  <div className="progress-number">{stats.totalSolved}</div>
                  <div className="progress-label">Solved</div>
                </div>
              </div>

              <div className="quick-stats">
                <div className="stat-box">
                  <div className="stat-value">{stats.contestRating}</div>
                  <div className="stat-label-small">Contest Rating</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">#{stats.globalRanking.toLocaleString()}</div>
                  <div className="stat-label-small">Global Ranking</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">{stats.topPercentile}%</div>
                  <div className="stat-label-small">Top Percentile</div>
                </div>
              </div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="difficulty-section">
              <div className="difficulty-item easy">
                <div className="difficulty-header">
                  <span className="difficulty-name">Easy</span>
                  <span className="difficulty-count">{stats.easySolved}/{stats.easyTotal}</span>
                </div>
                <div className="progress-container">
                  <div className="progress-bar easy-bar" style={{ width: `${easyPercentage}%` }} />
                </div>
                <div className="beats-text">Beats 90.5%</div>
              </div>

              <div className="difficulty-item medium">
                <div className="difficulty-header">
                  <span className="difficulty-name">Medium</span>
                  <span className="difficulty-count">{stats.mediumSolved}/{stats.mediumTotal}</span>
                </div>
                <div className="progress-container">
                  <div className="progress-bar medium-bar" style={{ width: `${mediumPercentage}%` }} />
                </div>
                <div className="beats-text">Beats 92.7%</div>
              </div>

              <div className="difficulty-item hard">
                <div className="difficulty-header">
                  <span className="difficulty-name">Hard</span>
                  <span className="difficulty-count">{stats.hardSolved}/{stats.hardTotal}</span>
                </div>
                <div className="progress-container">
                  <div className="progress-bar hard-bar" style={{ width: `${hardPercentage}%` }} />
                </div>
                <div className="beats-text">Beats 88.3%</div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="additional-stats">
              <div className="add-stat">
                <span className="add-stat-label">Badges:</span>
                <span className="add-stat-value">{stats.totalBadges}</span>
              </div>
              <div className="add-stat">
                <span className="add-stat-label">Contests:</span>
                <span className="add-stat-value">{stats.attended}</span>
              </div>
            </div>
          </div>

          <a
            href="https://leetcode.com/u/tharunk03/"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link-button"
          >
            <FaCodeIcon className="link-icon" />
            <span>View Profile on LeetCode</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
