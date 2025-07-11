import { useRef } from 'react';
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
import Topbar from '../Components/Topbar';

import JZ_sharp from '../images/jz-sharp.png';

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

  const landingRef = useRef(null);
  const featuredRef = useRef(null); 
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main>
      <div className='global-container'>
        <Helmet>
          <title>John Zoscak | Software Engineer</title>
          <meta name="description" content="John Zoscak: Computer science student at UVA" />
          <link rel='icon' href={JZ_sharp} />
        </Helmet>
        <Header />
        <Topbar
          landingRef={landingRef}
          featuredRef={featuredRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef} />
        <Icons classes={classes}/>
        <div className="content">
          <ThemeProvider theme={props.theme}>
            <Landing classes={classes} compRef={landingRef} />
            <Featured classes={classes} compRef={featuredRef} />
            <Skills classes={classes} compRef={skillsRef} />
            <Projects classes={classes} compRef={projectsRef} />
          </ThemeProvider>
        </div>
        <Footer classes={classes} compRef={contactRef}/>
      </div>
    </main>
  );
}

export default Layout;