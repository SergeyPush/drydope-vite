import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <NavigationWrapper>
      <NavigationStyled className="navigation">
        <LogoStyled>Drydope</LogoStyled>
        <ControlsStyled>
          <ul className="menu">
            <li className="menu-item">Shop</li>
            <li className="menu-item">About us</li>
            <li className="menu-item">Contacts</li>
          </ul>
          <ul className="languages">
            <li className="language-item">En</li>
            <li className="language-item">Ru</li>
          </ul>
          <div className="cart">Cart (0)</div>
        </ControlsStyled>
      </NavigationStyled>
      <HeroStyled>
        <div className="title-wrapper">
          <p className="title title-top">Clothes</p>
          <div className="hero-image"></div>
        </div>
        <p className="title title-bottom">with character</p>
        <div>
          <button className="shop">Shop collection</button>
        </div>
      </HeroStyled>
      <ParagraphStyled>
        Stylish clothes for traveling and walking around the city
      </ParagraphStyled>
    </NavigationWrapper>
  );
};
const NavigationWrapper = styled.div`
  padding-top: 20px;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('./images/heroimage.png');
  background-repeat: no-repeat;
  background-position: bottom left;
  margin-bottom: 160px;
`;

const HeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;

  .title {
    font-family: 'Gosha Sans', sans-serif;
    font-size: 146px;
    line-height: 100%;
    text-align: right;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .title-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .hero-image {
    width: 200px;
    height: 100px;
    border-radius: 60px;
    background-image: url('./images/hero.jpg');
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .title-bottom {
    margin-bottom: 80px;
  }

  .shop {
    display: block;
    font-family: 'Gosha Sans', sans-serif;
    font-size: 40px;
    text-transform: uppercase;
    padding: 20px 34px;
    background-color: transparent;
    border: 3px solid #fff;
    border-radius: 60px;
    margin-left: auto;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      color: #f9c202;
      border-color: #f9c202;
    }
  }
`;
const ParagraphStyled = styled.p`
  background: #f9c202;
  font-family: 'Gosha Sans', sans-serif;
  font-size: 39px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #030303;
  text-align: center;
`;

const NavigationStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 29px;
  padding: 0 60px;
`;
const LogoStyled = styled.div`
  font-family: 'Gosha Sans', sans-serif;
  font-weight: normal;
  font-size: 25px;
  text-transform: uppercase;
`;
const ControlsStyled = styled.div`
  display: flex;
  flex-direction: row;

  .menu {
    display: flex;
    flex-direction: row;

    .menu-item {
      margin-left: 30px;
    }
  }

  .languages {
    display: flex;
    flex-direction: row;
    margin-left: 92px;
  }

  .language-item:last-child {
    margin-left: 20px;
  }

  .cart {
    margin-left: 45px;
  }
`;

export default Header;
