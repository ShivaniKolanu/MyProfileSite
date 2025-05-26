import styled from 'styled-components';
import { motion } from 'framer-motion';

export const EducationContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0.5rem;
  }
`;

export const EducationCard = styled(motion.div)`
  background: rgba(42, 42, 42, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    border-color: rgba(100, 255, 218, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(100, 255, 218, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0 0.5rem;
  }
`;

export const DiplomaSection = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 8px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 0, 0, 0.3)
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    height: 180px;
    margin-bottom: 1rem;
    
    img {
      padding: 4px;
    }
  }
`;

export const School = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: "Carattere", cursive;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(to right, #64ffda, transparent);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Location = styled.p`
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-family: "Electrolize", sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #64ffda;
  }
`;

export const Degree = styled.p`
  color: #d4d7df;
  font-size: 1.1rem;
  margin: 1rem 0;
  font-family: "Electrolize", sans-serif;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0.8rem 0;
  }
`;

export const Duration = styled.p`
  color: #64ffda;
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 0.5rem;
  font-family: "Electrolize", sans-serif;
`;

export const GPA = styled.p`
  color: #ffffff;
  font-size: 1rem;
  font-family: "Electrolize", sans-serif;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  
  span {
    color: #64ffda;
    font-weight: bold;
  }
`;

export const MusicNote = styled(motion.span)`
  position: absolute;
  color: #64ffda;
  font-size: 1.2rem;
  pointer-events: none;
  user-select: none;
  z-index: 10;
  text-shadow: 0 0 5px rgba(100, 255, 218, 0.5);
`;