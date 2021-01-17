import React from 'react';
import styled from 'styled-components';

const StyledTile = ( props ) => {

  let title = 'FILMMAKERS WITHOUT CAMERAS';
  if ( props.type === 'short' ) {
    title = 'FWC'
  };

  let skew = '-7deg';
  if ( props.diagonal === 'False') {
    skew = '0deg';
  }

  const DiagonalBox = styled.div`
    transform: skewY( ${ skew } );
  `;

  const StyledTitle = styled.h1`
    font-family:            'ITC Serif Gothic Heavy';
    letter-spacing:         .75rem;
    color:                  white;
    text-shadow:            0 0 2px indigo,
                            0 0 5px indigo,
                            10px 10px 25px indigo,
                            0 0 200px thistle;
    text-align:             center;
  `;
  return (
    <DiagonalBox>
      <StyledTitle>{ title }</StyledTitle>
    </DiagonalBox>
  );
};

export default StyledTile;
