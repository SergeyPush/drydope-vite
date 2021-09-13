import React from 'react';
import styled from 'styled-components';

const FullWidth = ({ text }) => {
  return (
    <Wrapper>
      <svg viewBox="0 0 136 15">
        <text x="0" y="15">
          {text}
        </text>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  svg {
    width: 100%;
  }
  text {
    font-weight: 500;
    text-transform: uppercase;
    fill: #fff;
    font-family: 'Gosha Sans', sans-serif;
  }
`;

export default FullWidth;
