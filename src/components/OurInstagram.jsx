import React from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import { instagram } from '../data';
import Title from './Title';

const OurInstagram = () => {
  return (
    <div>
      <WrapperStyled>
        <Title title="Our Instagram" />
        <StoreStyled>
          <div className="title title-one">follow us @drydope.store</div>
          <div className="title title-two">
            More info <FiArrowRight />
          </div>
        </StoreStyled>
        <CardListStyled>
          <ImageItemStyled image={instagram.inst1} />
          <ImageItemStyled image={instagram.inst2} />
          <ImageItemStyled image={instagram.inst3} />
        </CardListStyled>
      </WrapperStyled>
    </div>
  );
};

const WrapperStyled = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  margin-bottom: 160px;
`;
const CardListStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const ImageItemStyled = styled.div`
  width: 390px;
  height: 390px;
  border-radius: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.image});
`;

const StoreStyled = styled.div`
  display: flex;
  justify-content: space-between;
  .title {
    font-family: 'PT Root UI', sans-serif;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  .title-one {
    text-align: left;
  }
  .title-two {
    text-align: right;
  }

  margin-bottom: 45px;
`;

export default OurInstagram;
