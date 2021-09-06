import styled from "styled-components";
import Header from "./components/Header";
import BestSellers from "./components/BestSellers";
import React from "react";
import AboutUs from "./components/AboutUs";
import OurInstagram from "./components/OurInstagram";

function App() {
  return (
    <StyledWrapper>
      <Header />
      <TitleStyled>Clothes with character</TitleStyled>
      <SubtitleStyled>
        Stylish clothes for traveling and walking around the city
      </SubtitleStyled>
      <HeroImgStyled />
      <BestSellers />
      <AboutUs />
      <OurInstagram />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  padding-top: 20px;
`;
const TitleStyled = styled.div`
  font-family: "Gosha Sans", sans-serif;
  font-size: 94px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  color: #000;
  background-color: #fff;
  margin-bottom: 7px;
`;
const SubtitleStyled = styled.div`
  font-family: "Gosha Sans", sans-serif;
  font-size: 39px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  margin-bottom: 37px;
`;
const HeroImgStyled = styled.div`
  height: 829px;
  width: auto;
  background-image: url("/images/hero.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 202px;
`;

export default App;
