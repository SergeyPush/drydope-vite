import React from 'react';
import CardBig from './CardBig';
import styled from 'styled-components';
import data from '../data';
import { HiArrowRight } from 'react-icons/hi';

const BestSellers = () => {
  return (
    <WrapperStyled>
      <TitleWrapperStyled>
        <TitleStyled>
          Bestsellers <HiArrowRight className="arrow" />
        </TitleStyled>
      </TitleWrapperStyled>
      <div className="card-list">
        {data.map((item, index) => (
          <CardBig data={item} key={index} />
        ))}
      </div>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: row;

  .card-list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 60px;
  }
`;

const TitleWrapperStyled = styled.div`
  position: relative;
  width: 177px;
  font-family: 'Gosha Sans', sans-serif;
  font-size: 39px;
  text-transform: uppercase;
`;
const TitleStyled = styled.p`
  top: 0;
  left: 20px;
  position: absolute;
  transform-origin: 0 0;
  transform: rotate(90deg);
  width: 300px;
  .arrow {
    width: 20px;
    height: 20px;
  }
`;

export default BestSellers;
