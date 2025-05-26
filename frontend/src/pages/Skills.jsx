import React from 'react';
import skillsData from '../data/skills.json';
import { motion } from 'framer-motion';
import "@fontsource/carattere";
import "@fontsource/electrolize";
import {
  SkillsContainer,
  SkillsGrid,
  CategoryCard,
  CategoryTitle,
  SkillsList,
  SkillTag
} from '../styles/Skills.styles';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <SkillsContainer id="skills">
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
        Skills
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <SkillsGrid>
          {skillsData.categories.map((category, index) => (
            <CategoryCard
              key={index}
              variants={cardVariants}
            >
              <CategoryTitle>{category.name}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skillIndex}
                    variants={tagVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </SkillsList>
            </CategoryCard>
          ))}
        </SkillsGrid>
      </motion.div>
    </SkillsContainer>
  );
};

export default Skills;