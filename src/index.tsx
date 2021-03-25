// import './index.scss';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// router
import { BrowserRouter } from 'react-router-dom';

// generator function runtime - e.g. async / await enabler
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// contexts
import { AuthContext } from './contexts/AuthContext';

// components
import App from './App';

// global styles
import { GlobalStyles, globalStyles } from './App.styles';

ReactDOM.render(
  <StrictMode>
    <AuthContext>
      <BrowserRouter>
        <GlobalStyles styles={globalStyles} />
        <App />
      </BrowserRouter>
    </AuthContext>
  </StrictMode>,
  document.getElementById('root')
);
