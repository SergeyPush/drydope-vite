import React from 'react';
import styled from 'styled-components';
import { ImCancelCircle } from 'react-icons/im';
import FullWidth from './styled/FullWidth';

const Header = () => {
  return (
    <NavigationWrapper>
      <NavigationStyled className="navigation">
        <LogoStyled>
          <ImCancelCircle className="logo-icon" /> Drydope
        </LogoStyled>
        <ControlsStyled>
          <ul className="menu">
            <li className="menu-item">Shop</li>
            <li className="menu-item">About us</li>
            <li className="menu-item">Contacts</li>
          </ul>
          <ul className="languages">
            <li className="language-item">Ua</li>
            <li className="language-item">En</li>
          </ul>
          <div className="cart">Cart (0)</div>
        </ControlsStyled>
      </NavigationStyled>
      <HeroStyled>
        <div className="title-wrapper">
          <p className="title title-top">Clothes</p>
          <div className="hero-image"></div>
        </div>
        {/* <p className="title title-bottom">with character</p> */}
        <FullWidth text="with character" viewBox="0 0 143 15" />
        <div>
          <button className="shop">Shop collection</button>
        </div>
      </HeroStyled>
      <ParagraphStyled>
        <svg
          className={'svg'}
          width="1315"
          height="27"
          viewBox="0 0 1315 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.812656 23.194C3.50366 25.261 8.30066 26.665 12.0447 26.665C18.2457 26.665 22.0287 24.559 22.0287 19.528C22.0287 14.419 19.1817 12.82 11.6937 11.104C7.13066 10.051 5.10266 9.34904 5.10266 6.97004C5.10266 4.59104 7.01366 4.04504 10.1337 4.04504C12.6297 4.04504 16.0227 4.90304 19.9227 6.34604V2.36804C17.3097 1.08104 13.7997 0.145039 10.6407 0.145039C4.98566 0.145039 1.20266 2.17304 1.20266 6.85304C1.20266 10.987 3.26966 13.21 10.8747 14.965C15.3597 15.979 18.1287 16.564 18.1287 19.45C18.1287 22.414 15.5157 22.765 12.0447 22.765C8.53466 22.765 4.47866 21.439 0.812656 18.943V23.194ZM44.5792 0.145039H24.3772V4.04504H32.5282V26.665H36.4282V4.04504H44.5792V0.145039ZM67.2339 0.145039L60.2529 11.65H60.0189L53.0379 0.145039H48.4749L58.1859 16.096L58.2249 26.665H62.0859V16.096L71.7969 0.145039H67.2339ZM79.6048 22.765V0.145039H75.7048V26.665H90.4468V22.765H79.6048ZM95.4989 26.665H99.3989V0.145039H95.4989V26.665ZM105.267 23.194C107.958 25.261 112.755 26.665 116.499 26.665C122.7 26.665 126.483 24.559 126.483 19.528C126.483 14.419 123.636 12.82 116.148 11.104C111.585 10.051 109.557 9.34904 109.557 6.97004C109.557 4.59104 111.468 4.04504 114.588 4.04504C117.084 4.04504 120.477 4.90304 124.377 6.34604V2.36804C121.764 1.08104 118.254 0.145039 115.095 0.145039C109.44 0.145039 105.657 2.17304 105.657 6.85304C105.657 10.987 107.724 13.21 115.329 14.965C119.814 15.979 122.583 16.564 122.583 19.45C122.583 22.414 119.97 22.765 116.499 22.765C112.989 22.765 108.933 21.439 105.267 18.943V23.194ZM149.085 0.145039V11.845H135.864V0.145039H131.964V26.665H135.864V15.745H149.085V26.665H152.985V0.145039H149.085ZM173.248 13.405C173.248 20.035 176.524 26.665 185.026 26.665C192.28 26.665 195.985 22.024 196.219 16.564H192.319C191.656 20.776 190.33 22.765 185.026 22.765C179.41 22.765 177.148 20.074 177.148 13.405C177.148 6.73604 179.41 4.04504 185.026 4.04504C190.33 4.04504 191.656 6.03404 192.319 10.246H196.219C195.985 4.78604 192.28 0.145039 185.026 0.145039C176.524 0.145039 173.248 6.77504 173.248 13.405ZM205.605 22.765V0.145039H201.705V26.665H216.447V22.765H205.605ZM232.106 26.665C240.218 26.665 245.054 20.815 245.054 13.405C245.054 5.99504 240.218 0.145039 232.106 0.145039C223.994 0.145039 219.158 5.99504 219.158 13.405C219.158 20.815 223.994 26.665 232.106 26.665ZM232.106 22.765C226.88 22.765 223.058 20.464 223.058 13.405C223.058 6.34604 226.88 4.04504 232.106 4.04504C237.293 4.04504 241.154 6.34604 241.154 13.405C241.154 20.464 237.293 22.765 232.106 22.765ZM267.58 0.145039H247.378V4.04504H255.529V26.665H259.429V4.04504H267.58V0.145039ZM289.368 0.145039V11.845H276.147V0.145039H272.247V26.665H276.147V15.745H289.368V26.665H293.268V0.145039H289.368ZM316.587 4.04504V0.145039H299.505V26.665H316.587V22.765H303.405V14.965H313.467V11.065H303.405V4.04504H316.587ZM322.071 23.194C324.762 25.261 329.559 26.665 333.303 26.665C339.504 26.665 343.287 24.559 343.287 19.528C343.287 14.419 340.44 12.82 332.952 11.104C328.389 10.051 326.361 9.34904 326.361 6.97004C326.361 4.59104 328.272 4.04504 331.392 4.04504C333.888 4.04504 337.281 4.90304 341.181 6.34604V2.36804C338.568 1.08104 335.058 0.145039 331.899 0.145039C326.244 0.145039 322.461 2.17304 322.461 6.85304C322.461 10.987 324.528 13.21 332.133 14.965C336.618 15.979 339.387 16.564 339.387 19.45C339.387 22.414 336.774 22.765 333.303 22.765C329.793 22.765 325.737 21.439 322.071 18.943V23.194ZM381.035 4.04504V0.145039H363.953V26.665H367.853V16.525H378.734V12.625H367.853V4.04504H381.035ZM397.134 26.665C405.246 26.665 410.082 20.815 410.082 13.405C410.082 5.99504 405.246 0.145039 397.134 0.145039C389.022 0.145039 384.186 5.99504 384.186 13.405C384.186 20.815 389.022 26.665 397.134 26.665ZM397.134 22.765C391.908 22.765 388.086 20.464 388.086 13.405C388.086 6.34604 391.908 4.04504 397.134 4.04504C402.321 4.04504 406.182 6.34604 406.182 13.405C406.182 20.464 402.321 22.765 397.134 22.765ZM426.857 16.135V15.511C432.707 15.082 434.228 12.937 434.228 8.64704C434.228 3.85004 432.317 0.145039 423.893 0.145039H415.157V26.665H419.057V17.968H430.718V26.665H434.618V16.135H426.857ZM419.057 14.068V4.04504H423.893C429.197 4.04504 430.328 5.02004 430.328 9.03704C430.328 12.937 429.197 14.068 423.893 14.068H419.057ZM475.09 0.145039H454.888V4.04504H463.039V26.665H466.939V4.04504H475.09V0.145039ZM491.457 16.135V15.511C497.307 15.082 498.828 12.937 498.828 8.64704C498.828 3.85004 496.917 0.145039 488.493 0.145039H479.757V26.665H483.657V17.968H495.318V26.665H499.218V16.135H491.457ZM483.657 14.068V4.04504H488.493C493.797 4.04504 494.928 5.02004 494.928 9.03704C494.928 12.937 493.797 14.068 488.493 14.068H483.657ZM522.643 26.665H526.738L518.392 0.145039H512.23L503.884 26.665H507.979L509.89 20.62H520.732L522.643 26.665ZM511.099 16.72L514.999 4.35704H515.623L519.523 16.72H511.099ZM530.439 0.145039H526.344L534.69 26.665H540.852L549.198 0.145039H545.103L538.083 22.453H537.459L530.439 0.145039ZM570.96 4.04504V0.145039H553.878V26.665H570.96V22.765H557.778V14.965H567.84V11.065H557.778V4.04504H570.96ZM580.353 22.765V0.145039H576.453V26.665H591.195V22.765H580.353ZM596.247 26.665H600.147V0.145039H596.247V26.665ZM623.565 0.145039V18.787H622.941L610.305 0.145039H606.405V26.665H610.305V8.02304H610.929L623.565 26.665H627.465V0.145039H623.565ZM641.394 13.444V17.344H651.612C651.222 20.386 649.233 22.765 644.709 22.765C639.093 22.765 636.441 20.464 636.441 13.405C636.441 6.34604 638.703 4.04504 644.319 4.04504C648.843 4.04504 650.559 6.03404 650.871 9.07604H654.732C654.342 4.00604 650.793 0.145039 644.319 0.145039C635.817 0.145039 632.541 6.77504 632.541 13.405C632.541 20.035 635.817 26.665 643.929 26.665C648.765 26.665 650.286 24.481 650.988 22.96H651.612V26.665H655.512V13.444H641.394ZM694.553 26.665H698.648L690.302 0.145039H684.14L675.794 26.665H679.889L681.8 20.62H692.642L694.553 26.665ZM683.009 16.72L686.909 4.35704H687.533L691.433 16.72H683.009ZM720.489 0.145039V18.787H719.865L707.229 0.145039H703.329V26.665H707.229V8.02304H707.853L720.489 26.665H724.389V0.145039H720.489ZM739.362 0.145039H730.626V26.665H739.362C748.176 26.665 751.257 22.141 751.257 13.405C751.257 4.63004 748.176 0.145039 739.362 0.145039ZM739.362 22.765H734.526V4.04504H739.362C745.446 4.04504 747.357 5.80004 747.357 13.405C747.357 20.854 745.446 22.765 739.362 22.765ZM807.418 0.145039L801.451 22.453H800.827L794.743 0.145039H788.269L782.185 22.453H781.561L775.594 0.145039H771.538L778.675 26.665H785.071L791.194 4.35704H791.818L797.941 26.665H804.337L811.474 0.145039H807.418ZM830.2 26.665H834.295L825.949 0.145039H819.787L811.441 26.665H815.536L817.447 20.62H828.289L830.2 26.665ZM818.656 16.72L822.556 4.35704H823.18L827.08 16.72H818.656ZM842.876 22.765V0.145039H838.976V26.665H853.718V22.765H842.876ZM878.66 0.145039H873.941L866.219 11.455H862.67V0.145039H858.77V26.665H862.67V15.355H866.219L873.941 26.665H878.66L869.612 13.405L878.66 0.145039ZM883.706 26.665H887.606V0.145039H883.706V26.665ZM911.024 0.145039V18.787H910.4L897.764 0.145039H893.864V26.665H897.764V8.02304H898.388L911.024 26.665H914.924V0.145039H911.024ZM928.853 13.444V17.344H939.071C938.681 20.386 936.692 22.765 932.168 22.765C926.552 22.765 923.9 20.464 923.9 13.405C923.9 6.34604 926.162 4.04504 931.778 4.04504C936.302 4.04504 938.018 6.03404 938.33 9.07604H942.191C941.801 4.00604 938.252 0.145039 931.778 0.145039C923.276 0.145039 920 6.77504 920 13.405C920 20.035 923.276 26.665 931.388 26.665C936.224 26.665 937.745 24.481 938.447 22.96H939.071V26.665H942.971V13.444H928.853ZM982.012 26.665H986.107L977.761 0.145039H971.599L963.253 26.665H967.348L969.259 20.62H980.101L982.012 26.665ZM970.468 16.72L974.368 4.35704H974.992L978.892 16.72H970.468ZM1002.49 16.135V15.511C1008.34 15.082 1009.86 12.937 1009.86 8.64704C1009.86 3.85004 1007.95 0.145039 999.524 0.145039H990.788V26.665H994.688V17.968H1006.35V26.665H1010.25V16.135H1002.49ZM994.688 14.068V4.04504H999.524C1004.83 4.04504 1005.96 5.02004 1005.96 9.03704C1005.96 12.937 1004.83 14.068 999.524 14.068H994.688ZM1028.27 26.665C1036.38 26.665 1041.22 20.815 1041.22 13.405C1041.22 5.99504 1036.38 0.145039 1028.27 0.145039C1020.16 0.145039 1015.32 5.99504 1015.32 13.405C1015.32 20.815 1020.16 26.665 1028.27 26.665ZM1028.27 22.765C1023.05 22.765 1019.22 20.464 1019.22 13.405C1019.22 6.34604 1023.05 4.04504 1028.27 4.04504C1033.46 4.04504 1037.32 6.34604 1037.32 13.405C1037.32 20.464 1033.46 22.765 1028.27 22.765ZM1066.86 17.305V0.145039H1062.96V17.305C1062.96 21.595 1061.56 22.765 1056.17 22.765C1050.79 22.765 1049.39 21.595 1049.39 17.305V0.145039H1045.49V17.305C1045.49 24.208 1049.27 26.665 1056.17 26.665C1063.08 26.665 1066.86 24.208 1066.86 17.305ZM1089.88 0.145039V18.787H1089.25L1076.62 0.145039H1072.72V26.665H1076.62V8.02304H1077.24L1089.88 26.665H1093.78V0.145039H1089.88ZM1108.75 0.145039H1100.01V26.665H1108.75C1117.56 26.665 1120.64 22.141 1120.64 13.405C1120.64 4.63004 1117.56 0.145039 1108.75 0.145039ZM1108.75 22.765H1103.91V4.04504H1108.75C1114.83 4.04504 1116.74 5.80004 1116.74 13.405C1116.74 20.854 1114.83 22.765 1108.75 22.765ZM1161.13 0.145039H1140.93V4.04504H1149.08V26.665H1152.98V4.04504H1161.13V0.145039ZM1182.92 0.145039V11.845H1169.69V0.145039H1165.79V26.665H1169.69V15.745H1182.92V26.665H1186.82V0.145039H1182.92ZM1210.14 4.04504V0.145039H1193.05V26.665H1210.14V22.765H1196.95V14.965H1207.02V11.065H1196.95V4.04504H1210.14ZM1230.03 13.405C1230.03 20.035 1233.31 26.665 1241.81 26.665C1249.07 26.665 1252.77 22.024 1253 16.564H1249.1C1248.44 20.776 1247.12 22.765 1241.81 22.765C1236.2 22.765 1233.93 20.074 1233.93 13.405C1233.93 6.73604 1236.2 4.04504 1241.81 4.04504C1247.12 4.04504 1248.44 6.03404 1249.1 10.246H1253C1252.77 4.78604 1249.07 0.145039 1241.81 0.145039C1233.31 0.145039 1230.03 6.77504 1230.03 13.405ZM1258.49 26.665H1262.39V0.145039H1258.49V26.665ZM1287.66 0.145039H1267.46V4.04504H1275.61V26.665H1279.51V4.04504H1287.66V0.145039ZM1310.32 0.145039L1303.34 11.65H1303.1L1296.12 0.145039H1291.56L1301.27 16.096L1301.31 26.665H1305.17V16.096L1314.88 0.145039H1310.32Z"
            fill="#030303"
          />
        </svg>
      </ParagraphStyled>
    </NavigationWrapper>
  );
};
const NavigationWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('./images/heroimage.png');
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: contain;
  margin-bottom: 140px;
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
    letter-spacing: 0.034em;
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
    margin-left: 30px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .title-top {
    margin-bottom: 14px;
    font-size: 10vw;
  }

  .title-bottom {
    margin-bottom: 80px;
    text-align: right;
    width: 100%;
  }

  .shop {
    display: block;
    font-family: 'Gosha Sans', sans-serif;
    font-size: 40px;
    text-transform: uppercase;
    padding: 22px 34px;
    background-color: transparent;
    border: 3px solid #fff;
    border-radius: 60px;
    margin-left: auto;
    margin-top: 80px;
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
  font-size: 40px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #030303;
  text-align: center;
  padding: 10px 60px 3px;

  svg {
    fill: #fff;
    width: 100%;
    height: 40px;
  }
`;

const NavigationStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  margin-top: 24px;
  margin-bottom: 100px;
`;
const LogoStyled = styled.div`
  font-family: 'Gosha Sans', sans-serif;
  font-weight: normal;
  font-size: 25px;
  text-transform: uppercase;
  .logo-icon {
    width: 20px;
    height: 20px;
  }
`;
const ControlsStyled = styled.div`
  display: flex;
  flex-direction: row;
  text-transform: uppercase;

  .menu {
    display: flex;
    flex-direction: row;

    .menu-item {
      margin-left: 20px;
    }
  }

  .languages {
    display: flex;
    flex-direction: row;
    margin-left: 64px;
  }

  .language-item:last-child {
    margin-left: 20px;
  }

  .cart {
    margin-left: 45px;
  }
`;

export default Header;
