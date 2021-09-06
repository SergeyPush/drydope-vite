import React from "react";
import { ImCancelCircle } from "react-icons/im";
import MenuItem from "./MenuItem";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <WrapperStyled>
      <MenuItem title="About Us" />
      <div>
        <TitleStyled>
          <ImCancelCircle className="logo-icon" /> <span>Drydope</span>
        </TitleStyled>
        <TextStyled>
          We are a <span className="underlined">Ukrainian</span> brand clothes
          with character. Our <span className="underlined">team</span> of
          creative people combines practicality, style and{" "}
          <span className="underlined">individuality</span> in each model of
          clothing for traveling and walking around the{" "}
          <span className="underlined">city</span>
        </TextStyled>
      </div>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
`;

const TitleStyled = styled.p`
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
const TextStyled = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 160%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 180px;

  .underlined {
    position: relative;
  }

  .underlined:after {
    position: absolute;
    content: "";
    border-bottom: 3px solid orange;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
`;

export default AboutUs;
