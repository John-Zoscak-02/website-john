import * as React from 'react';

import { Typography } from '@mui/material';
import {Fade} from 'react-awesome-reveal';

// import java from '../images/skills/java.png';
// import git from '../images/skills/git.png';
// import react from '../images/skills/react.png';
// import html from '../images/skills/html.png';
// import css from '../images/skills/css.png';
// import js from '../images/skills/javascript.png';
// import cpp from '../images/skills/c++.png';
// import python from '../images/skills/python.png';
// import ubuntu from '../images/skills/ubuntu.png';
// import go from '../images/skills/go.png';
// import sass from '../images/skills/sass.png';
// import c from '../images/skills/c.png';
import java from '../images/skills-svgs/java.svg';
import git from '../images/skills-svgs/git.svg';
import c from '../images/skills-svgs/c.svg';
import cpp from '../images/skills-svgs/cpp.svg';
import css3 from '../images/skills-svgs/css3.svg';
import docker from '../images/skills-svgs/docker.svg';
import gitlab from '../images/skills-svgs/gitlab.svg';
import html5 from '../images/skills-svgs/html5.svg';
import linux from '../images/skills-svgs/linux.svg';
import matlab from '../images/skills-svgs/matlab.svg';
import python from '../images/skills-svgs/python.svg';
import ros from '../images/skills-svgs/ros.svg';
// import ubuntu from '../images/skills-svgs/ubuntu.svg';

import FloralCenter from '../svgs/floral-center.png';

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
          <svg className='grow' src={java} alt='java' />
          <svg className='grow' src={git} alt='git' />
          <svg className='grow' src={gitlab} alt='gitlab' />
          <svg className='grow' src={cpp} alt='react' />
          <svg className='grow' src={c} alt='html 5' />
          <svg className='grow' src={docker} alt='css' />
          <svg className='grow' src={python} alt='python' />
          <svg className='grow' src={html5} alt='html5' />
          <svg className='grow' src={css3} alt='css3' />
          <svg className='grow' src={linux} alt='linux' />
          <svg className='grow' src={matlab} alt='matlab' />
          <svg className='grow' src={ros} alt='ros' />
        </div>
      </Fade>
    </div>
  );
}
export default Skills;