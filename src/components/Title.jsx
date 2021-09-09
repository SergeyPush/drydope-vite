import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return <ParagraphStyled>{title}</ParagraphStyled>;
};

const ParagraphStyled = styled.p`
  font-family: "Gosha Sans", sans-serif;
  font-size: 95px;
  text-transform: uppercase;
  color: #f9c202;
  margin-bottom: 60px;
`;

export default Title;
