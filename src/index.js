import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyles';

const theme = {
  colors: {
    grey: '#212121',
    white: 'white',
    blue: '#3f51b5',
    hoveredBlue: '#303f9f',
    red: 'red',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
