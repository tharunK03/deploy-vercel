import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import '../styles/LeetCode.css';

export default function LeetCode() {
  return (
    <section 
      id="leetcode" 
      className="leetcode-section"
      style={{ background: 'none' }}
    >
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
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.18}
            glareColor="#fff"
            glarePosition="all"
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            scale={1.06}
            transitionSpeed={1200}
            className="w-full flex justify-center"
          >
            <a
              href="https://leetcode.com/u/Tharun03k/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-3xl"
              style={{ textDecoration: 'none' }}
            >
              <div className="leetcode-card">
                <img
                  src="https://leetcard.jacoblin.cool/Tharun03k?theme=light&ext=heatmap"
                  alt="LeetCode Stats"
                  className="leetcode-image"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="padding: 40px; text-align: center;"><h3>Loading LeetCode Stats...</h3><p>View profile on LeetCode</p></div>';
                  }}
                />
              </div>
            </a>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
