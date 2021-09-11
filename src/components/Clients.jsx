import React from 'react';
import styled from 'styled-components';
import { clients } from '../data';
import { ReactSVG } from 'react-svg';
import Title from './Title';
import { FiArrowRight } from 'react-icons/fi';

const Clients = () => {
  return (
    <WrapperStyled>
      <PaddingWrapper>
        <Title title="Corporate Clients" mb={37} />
        <ClientsTitleStyled>
          <div>branded solutions for your company</div>
          <div>
            More info <FiArrowRight />
          </div>
        </ClientsTitleStyled>
      </PaddingWrapper>
      <div className="clients">
        {clients.map((item, index) => (
          <ReactSVG src={item.image} key={index} className="item" />
        ))}
      </div>
    </WrapperStyled>
  );
};

const PaddingWrapper = styled.div`
  padding: 0 60px;
`;

const WrapperStyled = styled.div`
  .clients {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    margin-bottom: 165px;
  }

  .item {
    align-self: center;
    justify-self: center;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 100%;
  }
`;
const ClientsTitleStyled = styled.div`
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
`;

export default Clients;
