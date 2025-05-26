import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1.5rem;
  }
`;

export const CategoryCard = styled(motion.div)`
  background: rgba(42, 42, 42, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(100, 255, 218, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(100, 255, 218, 0.15);
  }
`;

export const CategoryTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: "Carattere", cursive;
  text-align: center;
  position: relative;
  
  &::before {
    content: '♬';
    position: absolute;
    left: -25px;
    top: 50%;
    transform: translateY(-50%);
    color: #64ffda;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(to right, transparent, #64ffda, transparent);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.7rem;
  }
`;

export const SkillTag = styled(motion.span)`
  background: rgba(100, 255, 218, 0.1);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(100, 255, 218, 0.2);
  transition: all 0.3s ease;
  cursor: default;
  font-family: "Electrolize", sans-serif;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(100, 255, 218, 0.1);
    &::after {
      content: '♪';
      position: absolute;
      right: -12px;
      top: -12px;
      color: #64ffda;
      font-size: 0.8rem;
      animation: floatUpAndFade 0.8s ease-out forwards;
    }
  }

  @keyframes floatUpAndFade {
    0% {
      opacity: 0;
      transform: translateY(0) rotate(0);
    }
    50% {
      opacity: 1;
      transform: translateY(-10px) rotate(15deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-20px) rotate(30deg);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;