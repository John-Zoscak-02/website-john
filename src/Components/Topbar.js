import {useEffect, useState} from 'react';

import { IconButton, Button, Menu, MenuItem, Fade} from '@mui/material';

import JZ_sharp from '../images/jz-sharp.png';

import about from '../images/icons-svgs/about-me.svg';
import resume from '../images/icons-svgs/resume.svg';
import code from '../images/icons-svgs/code.svg';
import projects from '../images/icons-svgs/projects.svg';
import contact from '../images/icons-svgs/phone.svg';

import settings from '../images/icons-svgs/settings.svg';

const Topbar = (props) => {  

  const [topbarVisible, setTopbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const executeScroll = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (windowWidth <= 992) {
    return (
      <div className={`topbar ${topbarVisible ? 'visible' : 'hidden'}`}>
        <div className="topbar-container">
          <img className='icon grow' src={JZ_sharp} alt='jz icon' />
          <div className='center'> </div>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleClick}>
            <img className='icon' src={settings} alt='settings icon' />  
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
            <MenuItem onClick={() => executeScroll(props.landingRef)}><img className="menu-img" src={about} alt="•"/> About Me</MenuItem>
            <MenuItem onClick={() => executeScroll(props.featuredRef)}><img className="menu-img" src={resume} alt="•"/> Resume</MenuItem>
            <MenuItem onClick={() => executeScroll(props.skillsRef)}><img className="menu-img" src={code} alt="•"/> Skills</MenuItem>
            <MenuItem onClick={() => executeScroll(props.projectsRef)}><img className="menu-img" src={projects} alt="•"/> Projects</MenuItem>
            <MenuItem onClick={() => executeScroll(props.contactRef)}><img className="menu-img" src={contact} alt="•"/> Contact</MenuItem>
          </Menu>
        </div>
      </div>
    );
  }

  return (
    <div className={`topbar ${topbarVisible ? 'visible' : 'hidden'}`}>
      <div className="topbar-container">
        <img className='icon grow' src={JZ_sharp} alt='jz icon' />
        <div className='center'> </div>
        <div className='buttons'>
          <Button variant="text" underline="hover" className="button" onClick={() => executeScroll(props.landingRef)}><img src={about} alt="•"/> About Me</Button>
          <Button variant="text" underline="hover" className="button" onClick={() => executeScroll(props.featuredRef)}><img src={resume} alt="•"/> Resume</Button>
          <Button variant="text" underline="hover" className="button" onClick={() => executeScroll(props.skillsRef)}><img src={code} alt="•"/> Skills</Button>
          <Button variant="text" underline="hover" className="button" onClick={() => executeScroll(props.projectsRef)}><img src={projects} alt="•"/> Projects</Button>
          <Button variant="text" underline="hover" className="button" onClick={() => executeScroll(props.contactRef)}><img src={contact} alt="•"/> Contact</Button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;