import React from 'react';
import styled from 'styled-components';

const FullWidth = ({ text, viewBox }) => {
  return (
    <Wrapper>
      <svg viewBox={viewBox} width="100%">
        <text x="0" y="15">
          {text}
        </text>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* margin-bottom: 80px; */
  svg {
    width: 100%;
    max-width: 100%;
  }
  text {
    font-weight: 500;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    fill: #fff;
    font-family: 'Gosha Sans', sans-serif;
  }
`;

export default FullWidth;
