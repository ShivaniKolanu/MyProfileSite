import React, { useState } from 'react';
import workExperience from '../data/work_experience.json';
import { motion, useScroll, useSpring } from 'framer-motion';
import "@fontsource/electrolize";
import {
  ExperienceContainer,
  ProgressBar,
  Timeline,
  TimelineItem,
  TimelineContent,
  ShowMoreButton
} from '../styles/Experience.styles';

const Experience = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [visibleItems, setVisibleItems] = useState(3);

  const showMore = () => {
    setVisibleItems(prev => Math.min(prev + 1, workExperience.length));
  };

  return (
    <ExperienceContainer id="experience">
      <ProgressBar style={{ scaleX }} />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ 
          textAlign: 'center', 
          marginBottom: '3rem', 
          color: '#64ffda',
          fontSize: '2.5rem',
          background: 'linear-gradient(to right, #64ffda, #4fd1c5)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Carattere, cursive',
          fontWeight: 600,
        }}
      >
        Experience
      </motion.h2>
      <Timeline>
        {workExperience.slice(0, visibleItems).map((exp, index) => (
          <TimelineItem
            key={index}
            index={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.2
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <TimelineContent
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              isEven={index % 2 === 0}
            >
              <motion.div 
                className="header-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="title-row">
                  <motion.h3>
                    {exp.role}
                  </motion.h3>
                  <motion.div 
                    className="company-info"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="company-location">
                      <span>{exp.company}</span>
                      <span className="separator">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </motion.div>
                </div>
                <div className="duration">
                  {exp.month} {exp.year} {exp.endDate ? `- ${exp.endDate}` : '- Present'}
                </div>
              </motion.div>
              <motion.ul>
                {exp.description.map((desc, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                  >
                    {desc}
                  </motion.li>
                ))}
              </motion.ul>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {visibleItems < workExperience.length && (
        <ShowMoreButton
          onClick={showMore}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show More
        </ShowMoreButton>
      )}
    </ExperienceContainer>
  );
};

export default Experience;