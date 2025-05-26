import React, { useState } from 'react';
import educationData from '../data/education.json';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import "@fontsource/carattere";
import "@fontsource/electrolize";
// Import images
import msDiploma from '../assets/projects/ms-diploma.png';
import btechDiploma from '../assets/projects/btech-pc.jpg';

import {
  EducationContainer,
  EducationGrid,
  EducationCard,
  DiplomaSection,
  School,
  Location,
  Degree,
  Duration,
  GPA,
  MusicNote
} from '../styles/Education.styles';

const Education = () => {
  const [musicNotes, setMusicNotes] = useState([]);

  // Create image mapping
  const diplomaImages = {
    'ms-diploma.png': msDiploma,
    'btech-pc.jpg': btechDiploma
  };

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
        duration: 0.5
      }
    }
  };

  const handleMouseMove = (e, cardIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newNote = {
      id: Date.now(),
      x,
      y,
      cardIndex,
      symbol: '♪'
    };

    setMusicNotes(prev => [...prev, newNote]);
    
    // Remove the note after animation
    setTimeout(() => {
      setMusicNotes(prev => prev.filter(note => note.id !== newNote.id));
    }, 1000);
  };

  return (
    <EducationContainer id="education">
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
        Education
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <EducationGrid>
          {educationData.educations.map((education, index) => (
            <EducationCard
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <AnimatePresence>
                {musicNotes.filter(note => note.cardIndex === index).map((note) => (
                  <MusicNote
                    key={note.id}
                    initial={{ opacity: 1, scale: 1, x: note.x, y: note.y }}
                    animate={{ 
                      opacity: 0, 
                      scale: 0,
                      y: note.y - 50,
                      x: note.x + (Math.random() * 40 - 20)
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                      position: 'absolute',
                      pointerEvents: 'none'
                    }}
                  >
                    {note.symbol}
                  </MusicNote>
                ))}
              </AnimatePresence>

              <DiplomaSection>
                <img 
                  src={diplomaImages[education.imagePath]} 
                  alt={`${education.school} Diploma`}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Diploma+Image';
                  }}
                />
              </DiplomaSection>
              
              <School>{education.school}</School>
              <Location>
                <FaMapMarkerAlt />
                {education.location}
              </Location>
              <Degree>{education.degree}</Degree>
              <Duration>{education.duration}</Duration>
              <GPA>
                GPA: <span>{education.gpa}</span>
              </GPA>
            </EducationCard>
          ))}
        </EducationGrid>
      </motion.div>
    </EducationContainer>
  );
};

export default Education;