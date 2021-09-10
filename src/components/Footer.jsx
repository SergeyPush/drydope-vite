import React from 'react';
import styled from 'styled-components';
import { ImCancelCircle } from 'react-icons/im';

const Footer = () => {
  return (
    <WrapperStyled>
      <ColumnStyled>
        <TitleStyled>
          <ImCancelCircle className="logo-icon" /> <span>Drydope</span>
        </TitleStyled>
        <ItmeStyled>Privacy Policy 2021</ItmeStyled>
      </ColumnStyled>
      <ColumnStyled>
        <SubtitleStyled>Menu</SubtitleStyled>
        <div>
          <ItmeStyled>Contact Us</ItmeStyled>
          <ItmeStyled>Shop</ItmeStyled>
          <ItmeStyled>About Us</ItmeStyled>
        </div>
      </ColumnStyled>
      <ColumnStyled>
        <SubtitleStyled>Social</SubtitleStyled>
        <div>
          <ItmeStyled>Instagram</ItmeStyled>
          <ItmeStyled>Facebook</ItmeStyled>
          <ItmeStyled>YouTube</ItmeStyled>
        </div>
      </ColumnStyled>
      <ColumnStyled>
        <SubtitleStyled>Keep in touch</SubtitleStyled>
        <Controls>
          <InputStyled type="text" placeholder="Your e-mail" />
          <ButtonStyled>Subscribe</ButtonStyled>
        </Controls>
      </ColumnStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  padding: 0 60px;
  display: flex;
  min-height: 200px;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SubtitleStyled = styled.p`
  font-family: 'Gosha Sans', sans-serif;
  font-size: 39px;
`;

const ItmeStyled = styled.p`
  font-family: 'Gosha Sans', sans-serif;
  font-size: 20px;
`;
const Controls = styled.div``;
const InputStyled = styled.input`
  background: #ffffff;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 5px 10px;

  &::placeholder {
    color: #000;
    font-family: 'Gosha Sans', sans-serif;
    text-align: center;
  }
`;
const ButtonStyled = styled.button`
  background: #030303;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 30px;
  color: #fff;
  padding: 5px 20px;
  font-family: 'Gosha Sans', sans-serif;
`;

const TitleStyled = styled.div`
  font-family: 'Gosha Sans', sans-serif;
  font-size: 39px;
  text-transform: uppercase;
  line-height: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 28px;

  .logo-icon {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
`;

export default Footer;
