import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { clients } from "../data";
import { ReactSVG } from "react-svg";

const Clients = () => {
  return (
    <WrapperStyled>
      <MenuItem title="Our clients" />
      <div className="clients-wrapper">
        <ClientsTitleStyled>
          branded solutions for your company
        </ClientsTitleStyled>
        <div className="clients">
          {clients.map((item, index) => (
            <ReactSVG src={item.image} key={index} className="item" />
          ))}
        </div>
      </div>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  .clients-wrapper {
    width: 100%;
  }

  .clients {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    row-gap: 68px;
  }

  .item {
    align-self: center;
    justify-self: center;
  }
`;
const ClientsTitleStyled = styled.p`
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 86px;
`;

export default Clients;
