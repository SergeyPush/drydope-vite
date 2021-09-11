import React from 'react';
import styled from 'styled-components';

const Title = ({ title, mb = 42 }) => {
  return <ParagraphStyled mb={mb}>{title}</ParagraphStyled>;
};

const ParagraphStyled = styled.p`
  font-family: 'Gosha Sans', sans-serif;
  font-size: 95px;
  text-transform: uppercase;
  color: #f9c202;
  margin-bottom: ${(props) => props.mb}px;
  letter-spacing: 0.03em;
`;

export default Title;
