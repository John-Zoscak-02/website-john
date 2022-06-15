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

const Skills = (props) => {
  return (
    <div className='skills'>
      <Fade big>
        <Divider variant="middle" classes={{ root: props.classes.divider }} />
        <Typography variant='h3'>My Skills</Typography>
      </Fade>
      <div className='skills-container'>
        <Fade> 
          <img src={java} alt='java' />
          <img src={git} alt='git' />
          <img src={react} alt='react' />
          <img src={html} alt='html 5' />
          <img src={css} alt='css' />
          <img src={js} alt='js' />
          <img src={cpp} alt='cpp' />
          <img src={python} alt='python' />
          <img src={ubuntu} alt='ubuntu' />
          <img src={go} alt='golang' />
        </Fade>
      </div>
    </div>
  );
}
export default Skills;