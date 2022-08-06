import React from 'react';
import { Helmet } from 'react-helmet';

import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Landing from '../Components/Landing.js';
import Featured from '../Components/Featured.js';
import Projects from '../Components/Projects.js';
import Icons from '../Components/Icons.js';
import Skills from '../Components/Skills';

import '../styles/global.scss';

const Layout = (props) => {  

  const useStyles = makeStyles(theme => ({
    divider: {
      background: theme.palette.divider,
      height: 2,
    },
    imageIcon: {
      display: 'flex',
      height: 'inherit',
      width: 'inherit'
    },
    iconRoot: {
      textAlign: 'center'
    }
  }));

  const classes = useStyles(props.theme);

  return (
    <main>
      <div className='global-container' >
        <Helmet>
          <title>John Zoscak | Software Engineer</title>
          <meta name="description" content="John Zoscak: Computer science student at UVA" />
        </Helmet>
        <Header />
        <Icons classes={classes}/>
        <div className="content">
          <ThemeProvider theme={props.theme}>
            <Landing classes={classes} />
            <Featured classes={classes} />
            <Skills classes={classes} />
            <Projects classes={classes} />
          </ThemeProvider>
        </div>
        <Footer classes={classes} />
      </div>
    </main>
  );
}

export default Layout;