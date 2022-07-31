import React from 'react';
import ReactDOM from "react-dom/client";
import '../src/styles/home.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Layout from './Layout/Layout.js';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    //mode: 'dark',
    mode: 'light',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout theme={theme}/>
  </ThemeProvider>
);

