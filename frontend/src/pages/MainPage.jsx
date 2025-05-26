import NameHeaderSimple from "./NameHeaderSimple";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Footer from "./Footer";
import bgImage from "../assets/bg-img.png";
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { AnimatePresence } from "framer-motion";
import { useState } from 'react';
import {
  BackgroundContainer,
  OverlayDiv,
  MainContainer,
  StyledBox,
  StyledButtonGroup,
  MusicNote
} from '../styles/MainPage.styles';

const AnimatedMusicNotes = () => {
  const notes = ["♪", "♫", "♬", "𝄞","♩"];
  return (
    <AnimatePresence>
      {notes.map((note, index) => (
        <MusicNote key={index} left={index * 20}>
          {note}
        </MusicNote>
      ))}
    </AnimatePresence>
  );
};

export default function MainPage() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <BackgroundContainer bgImage={bgImage} />
      <OverlayDiv />
      <MainContainer>
        <NameHeaderSimple />
        <StyledBox>
          <StyledButtonGroup 
            variant="text" 
            size="large"
            aria-label="Basic button group"
          >
            <Box sx={{ position: 'relative' }}>
              <Button
                onMouseEnter={() => setHoveredButton('experience')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => scrollToSection('experience')}
              >
                {hoveredButton === 'experience' && <AnimatedMusicNotes />}
                Experience
              </Button>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Button
                onMouseEnter={() => setHoveredButton('skills')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => scrollToSection('skills')}
              >
                {hoveredButton === 'skills' && <AnimatedMusicNotes />}
                Skills
              </Button>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Button
                onMouseEnter={() => setHoveredButton('project')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => scrollToSection('projects')}
              >
                {hoveredButton === 'project' && <AnimatedMusicNotes />}
                Projects
              </Button>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Button
                onMouseEnter={() => setHoveredButton('education')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => scrollToSection('education')}
              >
                {hoveredButton === 'education' && <AnimatedMusicNotes />}
                Education
              </Button>
            </Box>
          </StyledButtonGroup>
        </StyledBox>
      </MainContainer>
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </>
  );
}