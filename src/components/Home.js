import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import NeonLink from './NeonLink';
import StyledTitle from './StyledTitle';

const Home = ( props ) => {
  const TitleBox = styled(motion.div)`
    font-size: 400%;
    margin: auto;
    margin-top: 10%;
    width: 50%;
  `;
  const TitleBoxVariants = {
    initial: {
      y: '-100vh'
    },
    animate: {
      y: 0,
      transition: { type: 'spring', stiffness: 50 }
    },
    whileTap : { scale: 0.9 },
    exit: {
      y: '-100vh',
      transition: { ease: 'easeInOut' }
    }
  }

  const NavContainer = styled.div`
    position: absolute;
    bottom: 5%;
    width: 100%;
    justify-content: center;
  `;

  const NavElement = styled(motion.div)`
    display: inline-block;
    margin: auto;
    position: relative;
    width: 50%;
    font-size: 350%;
    text-align: center;
  `;

  const NavElementVariants = {
    exit: {
      y: '100vh',
      transition: { ease: 'easeInOut' }
    }
  }

  const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(255,255,255,0.15);
  `;

  const Wrapper = styled(motion.div)`
    height: 100%;
    width: 100%;
    background: linear-gradient(
      20deg,
      indigo 10%,
      hotpink 66%,
      pink 100% );
    position: absolute;
  `;

  const WrapperVariants = {
    initial: { },
    animate: {  },
    whileTap : { },
    exit: { opacity: 0 }
  }

  return (
    <>
      <Wrapper
        variants = { WrapperVariants }
        initial = 'initial' animate = 'animate' whileTap = 'whileTap' exit = 'exit'>
        <Overlay>
          <TitleBox
            variants = { TitleBoxVariants }>
            <StyledTitle />
          </TitleBox>
          <NavContainer>
            <NavElement variants = { NavElementVariants } >
              <NeonLink
                to='/about'
                text='About'/></NavElement>
            <NavElement variants = { NavElementVariants }>
              <NeonLink
                to='/contributors'
                text='Contributors'/></NavElement>
          </NavContainer>
        </Overlay>
      </Wrapper>
    </>
  )
};

export default Home;
