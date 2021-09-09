import React from "react";
import { HiArrowRight } from "react-icons/hi";
import styled from "styled-components";

const MenuItem = ({ title }) => {
  return (
    <TitleWrapperStyled>
      <TitleStyled>
        {title} <HiArrowRight className="arrow" />
      </TitleStyled>
    </TitleWrapperStyled>
  );
};

const TitleWrapperStyled = styled.div`
  position: relative;
  min-width: 110px;
`;
const TitleStyled = styled.p`
  font-family: "Gosha Sans", sans-serif;
  font-size: 39px;
  text-transform: uppercase;
  top: 0;
  left: 40px;
  position: absolute;
  transform-origin: 0 0;
  transform: rotate(90deg);
  width: 500px;

  .arrow {
    width: 20px;
    height: 20px;
  }
`;

export default MenuItem;
