import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts.css'
import GlobalStyles from './components/styled/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
