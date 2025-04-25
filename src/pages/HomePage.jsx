import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #0a0b1a;
  color: white;
  padding: 0 5%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #ff69b4, #9370db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ff69b4;
    }
  }
`;

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: calc(100vh - 100px);
  gap: 2rem;
`;

const HeroContent = styled.div`
  h2 {
    color: #ccc;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    background: linear-gradient(to right, #ff69b4, #9370db);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1rem;
  }

  p {
    color: #ccc;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const TechStack = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TechPill = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(to right, #ff69b4, #9370db);
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    background: linear-gradient(to right, #ff69b4, #9370db);
    border-radius: 50%;
    z-index: -1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Nav>
        <Logo>FolioKD</Logo>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </Nav>

      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Hello it's Me</h2>
            <h1>Happy Dude</h1>
            <h3>Web Developer & SEO Expert</h3>
            <p>We build stunning websites that rank higher and perform better. Let's create something amazing together!</p>
            
            <TechStack>
              <TechPill>WordPress</TechPill>
              <TechPill>CSS</TechPill>
              <TechPill>JavaScript</TechPill>
              <TechPill>HTML</TechPill>
            </TechStack>

            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Book A Call →
            </CTAButton>
          </motion.div>
        </HeroContent>

        <ImageContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProfileImage>
              <img src="/profile-image.jpg" alt="Profile" />
            </ProfileImage>
          </motion.div>
        </ImageContainer>
      </HeroSection>
    </HomeContainer>
  );
};

export default HomePage; 