import React from 'react';
import projectsData from '../data/projects.json';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/carattere";
import "@fontsource/electrolize";
import { FaGithub, FaFilePdf, FaDesktop } from 'react-icons/fa';
import bgImg from '../assets/projects/bg-img.png';
import hireVistaImg from '../assets/projects/hireVista.png';
import onlineVotingImg from '../assets/projects/online-voting.png';
import gemInsightImg from '../assets/projects/gemInsight_2.jpg';
import comDet from '../assets/projects/com-det.png';
import {
  ProjectsContainer,
  SliderContainer,
  ProjectCard,
  ProjectTitle,
  TechStack,
  TechTag,
  ProjectDescription,
  ProjectLinks,
  ProjectImage
} from '../styles/Projects.styles';

const Projects = () => {
  const projectImages = {
    'bg-img.png': bgImg,
    'hireVista.png': hireVistaImg,
    'online-voting.png': onlineVotingImg,
    'gemInsight_2.jpg': gemInsightImg,
    'com-det.png': comDet
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <ProjectsContainer id="projects">
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
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <SliderContainer>
          <Slider {...settings}>
            {projectsData.projects.map((project, index) => (
              <div key={index}>
                <ProjectCard
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ProjectImage
                    variants={imageVariants}
                  >
                    <img 
                      src={projectImages[project.image]} 
                      alt={project.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x200?text=Project+Image';
                      }}
                    />
                  </ProjectImage>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <TechStack>
                    {project.technologies.map((tech, techIndex) => (
                      <TechTag
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </TechTag>
                    ))}
                  </TechStack>
                  <ProjectDescription>
                    {project.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ProjectDescription>
                  <ProjectLinks>
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.links.paper && (
                      <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                        <FaFilePdf /> Paper
                      </a>
                    )}
                    {project.links.presentation && (
                      <a href={project.links.presentation} target="_blank" rel="noopener noreferrer">
                        <FaDesktop /> Presentation
                      </a>
                    )}
                  </ProjectLinks>
                </ProjectCard>
              </div>
            ))}
          </Slider>
        </SliderContainer>
      </motion.div>
    </ProjectsContainer>
  );
};

export default Projects;