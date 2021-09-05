import React from 'react';
import styled from 'styled-components'

const Header = () => {
    return (
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
    );
};
const NavigationStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 29px;
`
const LogoStyled = styled.div`
  font-family: 'Gosha Sans', sans-serif;
  font-weight: normal;
  font-size: 25px;
  text-transform: uppercase;
`
const ControlsStyled = styled.div`
  display: flex;
  flex-direction: row;
  .menu{
    display: flex;
    flex-direction: row;
    .menu-item{
      margin-left: 30px;
    }
  }
  
  .languages{
    display: flex;
    flex-direction: row; 
    margin-left: 92px;
  }
  .language-item:last-child{
    margin-left: 20px;
  }
  
  .cart{
    margin-left: 45px;
  }
`



export default Header;