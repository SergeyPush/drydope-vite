import React from "react";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";

const Footer = () => {
  return (
    <WrapperStyled>
      <TitleStyled>
        <ImCancelCircle className="logo-icon" /> <span>Drydope</span>
      </TitleStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div``;
const TitleStyled = styled.div`
  font-family: "Gosha Sans", sans-serif;
  font-size: 39px;
  text-transform: uppercase;
  line-height: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 28px;

  .logo-icon {
    margin-right: 8px;
  }
`;

export default Footer;
