import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import theme from './theme'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme = {theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


