import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  FooterContainer,
  FooterContent,
  SocialLinks,
  SocialLink,
  Copyright,
  HeartIcon,
  MadeWith,
  TechStack,
  Divider
} from '../styles/Footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/ShivaniKolanu',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/shivani-kolanu',
      label: 'LinkedIn'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:shivanikolanu2000@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </SocialLink>
          ))}
        </SocialLinks>
        
        <MadeWith>
          <span>Made with</span>
          <HeartIcon
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            ♥
          </HeartIcon>
          <span>
            using <TechStack>React</TechStack> & <TechStack>Framer Motion</TechStack>
          </span>
          <Divider>|</Divider>
          <span>Built by Shivani Kolanu with AI collaboration</span>
        </MadeWith>

        <Copyright>
          © {currentYear} Shivani Kolanu. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;