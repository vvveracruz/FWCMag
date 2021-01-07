import React from 'react';
import styled from 'styled-components';

const About = ( props ) => {
  const Title = styled.h1`
    text-align: center;
    font-family: 'Old London';
    font-size: 500%;
  `
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

  return (
    <Wrapper>
      <Content>
        <Title>About</Title>
      </Content>
    </Wrapper>
  )
};

export default About;
