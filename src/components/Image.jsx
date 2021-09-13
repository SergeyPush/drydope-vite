import React from 'react';
import styled from 'styled-components';

const Image = ({ src, angle, width, height }) => {
  return (
    <ImageStyled
      src={src}
      alt="src"
      width={width}
      height={height}
      angle={angle}
    />
  );
};

const ImageStyled = styled.img``;

export default Image;
