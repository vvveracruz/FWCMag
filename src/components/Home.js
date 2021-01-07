import React from 'react';
import styled from 'styled-components';

import NeonLink from './NeonLink';
import StyledTitle from './StyledTitle';

const Home = ( props ) => {
  const TitleBox = styled.div`
    font-size: 300%;
    margin: auto;
    margin-top: 15%;
    width: 70%;
  `;

  const NavContainer = styled.div`
    position: absolute;
    bottom: 5%;
    width: 100%;
    justify-content: center;
  `;

  const NavElement = styled.div`
    display: inline-block;
    margin: auto;
    position: relative;
    width: 50%;
    font-size: 350%;
    text-align: center;
  `;

  const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(255,255,255,0.15);
  `;

  const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(
      20deg,
      indigo 10%,
      hotpink 66%,
      pink 100% );
    position: absolute;
  `;

  return (
    <>
      <Wrapper>
        <Overlay>
          <TitleBox>
            <StyledTitle />
          </TitleBox>
          <NavContainer>
            <NavElement>
              <NeonLink
                href='/about'
                text='About'/></NavElement>
            <NavElement>
              <NeonLink
                href='/contributors'
                text='Contributors'/></NavElement>
          </NavContainer>
        </Overlay>
      </Wrapper>
    </>
  )
};

export default Home;
