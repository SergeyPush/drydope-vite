import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const CardBig = ({ data }) => {
  const [hovered, setHovered] = useState(false);
  const { name, price, imageOne, imageTwo } = data;

  const getImage = () => {
    if (hovered && imageTwo) {
      return imageTwo;
    }
    return imageOne;
  };

  return (
    <CardStyled
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      hovered={hovered}
    >
      <ImageStyled hovered={hovered} image={getImage} />
      <div className="title">
        <span className="title-name">{name}</span>
        <span className="price">{price} UAH</span>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    background-color: ${(props) => (props.hovered ? '#F9C202;' : '#000')};
    color: ${(props) => (props.hovered ? '#000' : '#fff')};
    border-radius: 0 0 30px 30px;
  }
`;
const ImageStyled = styled.div`
  border-radius: ${(props) => (props.hovered ? '30px 30px 0px 0px' : '30px')};
  width: 100%;
  height: 612px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.image});
`;

export default CardBig;
