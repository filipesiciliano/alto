import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom';

const theme = createTheme();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
