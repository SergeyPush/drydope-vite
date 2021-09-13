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
        <div className="clients-wrapper">
          {clients.map((item, index) => (
            <ReactSVG src={item.image} key={index} className="item" />
          ))}
        </div>
      </div>
    </WrapperStyled>
  );
};

const PaddingWrapper = styled.div`
  padding: 0 60px;
`;

const WrapperStyled = styled.div`
  .clients {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    margin-bottom: 165px;
    height: 124px;
  }
  .clients-wrapper {
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
    display: flex;
    width: 100%;
    height: 100%;
    padding-left: 60px;
    padding-right: 60px;
    justify-content: space-between;
  }

  .item {
    align-self: center;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
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
