import * as React from 'react';

import { Typography, Divider } from '@mui/material';
import { Fade } from 'react-reveal';

import java from '../images/skills/java.png';
import git from '../images/skills/git.png';
import react from '../images/skills/react.png';
import html from '../images/skills/html.png';
import css from '../images/skills/css.png';
import js from '../images/skills/javascript.png';
import cpp from '../images/skills/c++.png';
import python from '../images/skills/python.png';
import ubuntu from '../images/skills/ubuntu.png';
import go from '../images/skills/go.png';
import sass from '../images/skills/sass.png';
import c from '../images/skills/c.png';

import FloralCorner from '../svgs/floral-corner.svg';
import FloralCenter from '../svgs/floral-center.svg';

const Skills = (props) => {
  return (
    <div className='skills'>
      <Fade big>
        {/* <Divider variant="middle" classes={{ root: props.classes.divider }} /> */}
        <div className="decoration">
          {/* <img className="upper-left" src={FloralCorner} alt="floral corner"></img> */}
          <img className="top-center" src={FloralCenter} alt="floral center"></img>
        </div>
        <Typography variant='h3'>My Skills</Typography>
      </Fade>
      <Fade> 
        <div className='skills-container'>
          <img className='grow' src={java} alt='java' />
          <img className='grow' src={git} alt='git' />
          <img className='grow' src={react} alt='react' />
          <img className='grow' src={html} alt='html 5' />
          <img className='grow' src={css} alt='css' />
          <img className='grow' src={js} alt='js' />
          <img className='grow' src={cpp} alt='cpp' />
          <img className='grow' src={python} alt='python' />
          <img className='grow' src={ubuntu} alt='ubuntu' />
          <img className='grow' src={go} alt='golang' />
          <img className='grow' src={sass} alt='sass' />
          <img className='grow' src={c} alt='c' />
        </div>
      </Fade>
    </div>
  );
}
export default Skills;