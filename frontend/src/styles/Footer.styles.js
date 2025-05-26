import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.footer`
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  padding: 2rem 1rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

export const SocialLink = styled(motion.a)`
  color: #64ffda;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: white;
    transform: translateY(-3px);
  }

  &::after {
    content: '♪';
    position: absolute;
    top: -15px;
    right: -10px;
    font-size: 0.8rem;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
    transform: rotate(15deg) translateY(-5px);
  }
`;

export const Copyright = styled.p`
  color: #d4d7df;
  font-size: 0.9rem;
  font-family: "Electrolize", sans-serif;
  text-align: center;
`;

export const HeartIcon = styled(motion.span)`
  color: #64ffda;
  display: inline-block;
  margin: 0 0.3rem;
  font-size: 1rem;
`;

export const MadeWith = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #d4d7df;
  font-family: "Electrolize", sans-serif;
  font-size: 0.9rem;
`;

export const TechStack = styled.span`
  color: #64ffda;
  font-weight: bold;
`;

export const BuiltBy = styled.div`
  color: #d4d7df;
  font-family: "Electrolize", sans-serif;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Divider = styled.span`
  margin: 0 1rem;
  color: #64ffda;
  opacity: 0.6;
`;