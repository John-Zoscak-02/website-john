import React, {useEffect, useRef} from 'react';
import { Helmet } from 'react-helmet';

import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Landing from '../Components/Landing.js';
import Featured from '../Components/Featured.js';
import Projects from '../Components/Projects.js';
import Icons from '../Components/Icons.js';
import Skills from '../Components/Skills';

import JZ from '../images/jz.png';
import JZ_sharp from '../images/jz-sharp.png';

import about from '../images/icons-svgs/about-me.svg';
import resume from '../images/icons-svgs/resume.svg';
import code from '../images/icons-svgs/code.svg';
import projects from '../images/icons-svgs/projects.svg';
import contact from '../images/icons-svgs/contact.svg';

import '../styles/global.scss';

const Layout = (props) => {  

  const [topbarVisible, setTopbarVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px
        setTopbarVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setTopbarVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  const executeScroll = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });
  
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
        <div className={`topbar ${topbarVisible ? 'visible' : 'hidden'}`}>
          <div className="topbar-container">
            <img className='icon grow' src={JZ_sharp} alt='jz icon' />
            <div className='center'> </div>
            <div className='buttons'>
              <Button variant="text" underline="hover" className="button" onClick={() => executeScroll(landingRef)}><img src={about} alt="•"/> About Me</Button>
              <Button variant="text" underline="hover" className="button" onClick={() => executeScroll(featuredRef)}><img src={resume} alt="•"/> Resume</Button>
              <Button variant="text" underline="hover" className="button" onClick={() => executeScroll(skillsRef)}><img src={code} alt="•"/> Skills</Button>
              <Button variant="text" underline="hover" className="button" onClick={() => executeScroll(projectsRef)}><img src={projects} alt="•"/> Projects</Button>
              <Button variant="text" underline="hover" className="button" onClick={() => executeScroll(contactRef)}><img src={contact} alt="•"/> Contact</Button>
            </div>
          </div>
        </div>
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