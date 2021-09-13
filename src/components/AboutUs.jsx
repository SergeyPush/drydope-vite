import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import Title from './Title';
import Image from './Image';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <WrapperStyled>
      <Title title="About Us" />
      <TextStyled>
        <ImCancelCircle className="logo-icon" /> Drydope is a{' '}
        <span className="underlined">
          Ukrainian
          <img
            src="/images/about1.png"
            alt="Drydope"
            className="hidden-image"
          />
        </span>{' '}
        brand clothes with character. Our team of{' '}
        <span className="underlined">
          creative{' '}
          <img
            src="/images/about2.png"
            alt="Drydope"
            className="hidden-image"
          />
        </span>{' '}
        people combines practicality, style and{' '}
        <span className="underlined">
          individuality{' '}
          <img
            src="/images/about3.png"
            alt="Drydope"
            className="hidden-image"
          />
        </span>{' '}
        in each model of clothing for traveling and walking around the{' '}
        <span className="underlined">
          city{' '}
          <img
            src="/images/about4.png"
            alt="Drydope"
            className="hidden-image"
          />
        </span>
      </TextStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  padding: 0 60px;
`;

const TextStyled = styled.p`
  font-size: 50px;
  line-height: 160%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 270px;
  font-family: 'Gosha Sans', sans-serif;

  .hidden-image {
    position: absolute;
    /* transform: translate(65%, -50%); */
    z-index: 20;
    display: none;
    left: 10px;
    top: -80%;
  }

  .underlined {
    position: relative;
    cursor: pointer;
  }

  .underlined:hover .hidden-image {
    display: block;
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
