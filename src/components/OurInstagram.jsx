import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { FiArrowRight } from "react-icons/fi";
import { instagram } from "../data";

const OurInstagram = () => {
  return (
    <div>
      <ArrowStyled>
        <FiArrowRight className="arrow" />
      </ArrowStyled>
      <WrapperStyled>
        <MenuItem title="Our instagram" />
        <CardListStyled>
          <ImageItemStyled image={instagram.inst1} />
          <ImageItemStyled image={instagram.inst2} />
          <ImageItemStyled image={instagram.inst3} />
        </CardListStyled>
      </WrapperStyled>
      <StoreStyled>@Drydope.store</StoreStyled>
    </div>
  );
};

const WrapperStyled = styled.div`
  display: flex;
`;
const ArrowStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;

  .arrow {
    width: 30px;
    height: 30px;
  }
`;

const CardListStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;
const ImageItemStyled = styled.div`
  width: 390px;
  height: 390px;
  border-radius: 30px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.image});
  margin-bottom: 58px;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
const StoreStyled = styled.p`
  text-align: right;
  font-family: "PT Root UI", sans-serif;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

export default OurInstagram;
