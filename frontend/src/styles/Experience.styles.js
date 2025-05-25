import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExperienceContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  margin-top: 2rem;
  position: relative;
`;

export const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #64ffda;
  transform-origin: 0%;
  z-index: 100;
`;

export const Timeline = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    background: linear-gradient(180deg, #64ffda 0%, rgba(100, 255, 218, 0.3) 100%);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1.5px;
  }
`;

export const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  
  &:nth-child(odd) {
    left: 0;
    text-align: right;
  }
  
  &:nth-child(even) {
    left: 50%;
    text-align: left;
  }

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: #64ffda;
    border: 4px solid rgba(26, 26, 26, 0.8);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    transition: all 0.3s ease;
    ${props => props.index % 2 === 0 ? 'right: -8px;' : 'left: -8px;'}
  }

  &:hover::after {
    transform: scale(1.3);
    box-shadow: 0 0 15px rgba(100, 255, 218, 0.5);
  }
`;

export const TimelineContent = styled(motion.div)`
  padding: 20px;
  background: rgba(42, 42, 42, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  text-align: left;
  font-family: "Electrolize", sans-serif;
  font-weight: 600;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 8px 24px rgba(100, 255, 218, 0.15);

    .header-container .title-row h3::after {
      width: 100%;
    }
  }
  
  .header-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 12px;

    .title-row {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      flex-wrap: wrap;

      h3 {
        margin: 0;
        color: #64ffda;
        font-size: 1.2rem;
        position: relative;
        display: inline-block;
        text-align: left;
        padding-bottom: 2px;
        
        &::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #64ffda;
          transition: width 0.3s ease;
        }
      }
    }
  }
  
  .company-info {
    color:rgb(255, 255, 255);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;

    .company-location {
      display: flex;
      align-items: center;
      color:rgb(252, 252, 252);
      font-size: 0.9rem;
      
      .separator {
        margin: 0 4px;
        opacity: 0.5;
      }
    }
  }

  .duration {
    color:rgb(255, 255, 255);
    font-size: 0.85rem;
    font-style: italic;
    margin-top: 4px;
    padding-left: 0;
  }

  ul {
    margin: 0;
    padding-left: 20px;
    color:rgb(212, 215, 223);
    list-style: none;
    text-align: left;
    
    li {
      margin-bottom: 8px;
      line-height: 1.6;
      font-size: 0.8rem;
      opacity: 0.9;
      transition: all 0.3s ease;
      position: relative;
      padding-left: 20px;
      
      &:hover {
        opacity: 1;
        
        &::before {
          background-color: #64ffda;
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
        }
      }
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 6px;
        height: 6px;
        background-color: rgba(100, 255, 218, 0.7);
        border-radius: 50%;
        transition: all 0.3s ease;
      }
    }
  }
`;

export const ShowMoreButton = styled(motion.button)`
  background: transparent;
  border: 1px solid #64ffda;
  color: #64ffda;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Electrolize", sans-serif;
  margin: 2rem auto;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;