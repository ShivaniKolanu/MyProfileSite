import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 2rem 1rem;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
  }
`;

export const SliderContainer = styled.div`
  .slick-slider {
    margin: 0 -1rem;

    @media (max-width: 768px) {
      margin: 0;
    }
  }

  .slick-slide {
    padding: 0 1rem;
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    z-index: 1;

    &:before {
      font-size: 40px;
      color: #64ffda;
    }
  }

  .slick-prev {
    left: -45px;

    @media (max-width: 768px) {
      left: 5px;
      z-index: 1;
    }
  }

  .slick-next {
    right: -45px;

    @media (max-width: 768px) {
      right: 5px;
      z-index: 1;
    }
  }

  .slick-dots li button:before {
    color: #64ffda;
  }

  .slick-dots li.slick-active button:before {
    color: #64ffda;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const ProjectCard = styled(motion.div)`
  background: rgba(42, 42, 42, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  height: 650px;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: rgba(100, 255, 218, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(100, 255, 218, 0.15);
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 600px;
  }
`;

export const ProjectTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'Carattere', cursive;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const TechTag = styled(motion.span)`
  background: rgba(100, 255, 218, 0.1);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-family: 'Electrolize', sans-serif;
`;

export const ProjectDescription = styled.ul`
  color: #d4d7df;
  margin: 1rem 0;
  padding-left: 1.2rem;
  font-family: 'Electrolize', sans-serif;
  list-style: none;
  text-align: left;
  flex: 1;
  overflow-y: auto;

  li {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    line-height: 1.6;
    position: relative;
    padding-left: 1.5rem;
    text-align: left;

    &::before {
      content: '♪';
      position: absolute;
      left: 0;
      color: #64ffda;
      font-size: 1rem;
      opacity: 0.8;
      transform: rotate(-15deg);
      transition: all 0.3s ease;
    }

    &:hover::before {
      transform: rotate(15deg) scale(1.2);
      opacity: 1;
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(100, 255, 218, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(100, 255, 218, 0.3);
    border-radius: 3px;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;

  a {
    color: #64ffda;
    text-decoration: none;
    font-size: 0.9rem;
    font-family: 'Electrolize', sans-serif;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: white;
    }
  }
`;

export const ProjectImage = styled(motion.div)`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.2);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(100, 255, 218, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    &::after {
      opacity: 1;
    }
  }
`;