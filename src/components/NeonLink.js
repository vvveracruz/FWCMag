import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NeonLink = ( props ) => {
  const NeonLink = styled(motion.p)`
    font-family: 'Pacifico';
    color: white;
    text-shadow:
      .5px .5px 2px gray,
      0 0 5px rgba(38, 149, 255, 1),
      0 0 10px rgba(38, 149, 255, 0.9),
      0 0 15px rgba(38, 149, 255, 0.9),
      0 0 20px rgba(38, 149, 255, 0.9),
      0 0 40px rgba(38, 149, 255, 0.7),
      0 0 100px rgba(38, 149, 255, 0.7),
      0 0 200px rgba(38, 149, 255, 0.6),
      0 0 300px rgba(38, 149, 255, 0.5),
      0 0 500px rgba(38, 149, 255, 0.4);
  `;

  return (
    <>
      <NeonLink
        whileHover = {{
          opacity: [1, 0.1, 1, 1,  0.5, 1]
        }}
        transition = {{ duration: 0.1 }}
      ><motion.a
        href = { props.href }
      >{ props.text }</motion.a>
      </NeonLink>
    </>
  )
};

export default NeonLink;
