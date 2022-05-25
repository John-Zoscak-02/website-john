import React from 'react';
import ReactDOM from "react-dom/client";
import '../src/styles/home.scss';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import Layout from './Layout/Layout.js';
import { CssBaseline } from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout theme={theme}/>
  </ThemeProvider>
);

