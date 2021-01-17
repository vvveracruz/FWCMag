import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = ( props ) => {
  const Title = styled(motion.h1)`
    text-align: center;
    font-family: 'Old London';
    font-size: 500%;
  `;
  const TitleVariants = {
    initial: {
      scale: 0
    },
    animate: {
      scale: 1
    }
  };
  const Content = styled.div`
    width: 60%;
    margin: auto;
    padding: 4em;
  `;
  const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background: gold;
    position: absolute;
  `;

  const WrapperVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delayChildren: 0.1 } },
    whileTap : { },
    exit: { }
  };

  return (
    <Wrapper
      variants = { WrapperVariants }
      initial = 'initial' animate = 'animate' whileTap = 'whileTap' exit = 'exit'>
      <Content>
        <Title variants = { TitleVariants }>About</Title>
      </Content>
    </Wrapper>
  )
};

export default About;
