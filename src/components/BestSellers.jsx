import React from 'react';
import CardBig from './CardBig';
import styled from 'styled-components';
import { bestsellers as data } from '../data';

import Title from './Title';

const BestSellers = () => {
  return (
    <WrapperStyled>
      <Title title="Bestsellers" />
      <div className="card-list">
        {data.map((item, index) => (
          <CardBig data={item} key={index} />
        ))}
      </div>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  margin-bottom: 180px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 80px;
  border-bottom: 0.5px solid #fff;

  .card-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 450px));
    justify-content: space-around;
    row-gap: 60px;
    column-gap: 40px;
  }
`;

export default BestSellers;
