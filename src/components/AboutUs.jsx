import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import Title from './Title';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <WrapperStyled>
      <Title title="About Us" />
      <TextStyled>
        <ImCancelCircle className="logo-icon" /> <span>Drydope</span> is an{' '}
        <span className="underlined">Ukrainian</span> brand clothes with
        character. Our <span className="underlined">team</span> of creative
        people combines practicality, style and{' '}
        <span className="underlined">individuality</span> in each model of
        clothing for traveling and walking around the{' '}
        <span className="underlined">city</span>
      </TextStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  padding: 0 60px;
`;

const TextStyled = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 160%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 180px;

  .underlined {
    position: relative;
  }
  .logo-icon {
    width: 40px;
    height: 40px;
  }

  .underlined:after {
    position: absolute;
    content: '';
    border-bottom: 3px solid orange;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
`;

export default AboutUs;
