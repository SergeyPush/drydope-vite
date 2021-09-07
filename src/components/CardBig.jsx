import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { useState } from "react";

const CardBig = ({ data }) => {
  const { name, price, imageOne, imageTwo } = data;
  const [bg, setBg] = useState(imageOne);

  const onMouseOver = () => {
    setBg(imageTwo ? imageTwo : imageOne);
  };
  const onMouseOut = () => {
    setBg(imageOne);
  };

  return (
    <CardStyled
      onMouseOver={(e) => {
        onMouseOver(e);
      }}
      onMouseOut={(e) => {
        onMouseOut(e);
      }}
    >
      <div className="image-div" style={{ backgroundImage: `url(${bg})` }} />
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
    border-radius: 0 0 30px 30px;
    color: #fff;
  }

  .image-div {
    width: 100%;
    height: 612px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: all 0.1s linear;
    border-radius: 30px;
  }

  &:hover .title {
    color: #fff;
    background-color: #f9c202;
  }

  &:hover .image-div {
    border-radius: 30px 30px 0 0;
  }
`;

export default CardBig;
