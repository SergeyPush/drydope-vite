import React from "react";
import CardBig from "./CardBig";
import styled from "styled-components";
import { bestsellers as data } from "../data";
import MenuItem from "./MenuItem";

const BestSellers = () => {
  return (
    <WrapperStyled>
      <MenuItem title="Bestsellers" />
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
  justify-content: space-between;
  margin-bottom: 180px;

  .card-list {
    //width: 100%;
    display: grid;
    //grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: repeat(3, minmax(300px, 450px));
    column-gap: 20px;
    row-gap: 60px;
  }
`;

export default BestSellers;
