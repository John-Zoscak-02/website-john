import * as React from 'react';

import { Typography } from '@mui/material';
import { Fade } from 'react-reveal';

import c from '../images/skills-svgs/c.svg';
import cpp from '../images/skills-svgs/cpp.svg';
import css3 from '../images/skills-svgs/css3.svg';
import docker from '../images/skills-svgs/docker.svg';
import git from '../images/skills-svgs/git.svg';
import gitlab from '../images/skills-svgs/gitlab.svg';
import html5 from '../images/skills-svgs/html5.svg';
import java from '../images/skills-svgs/java.svg';
import linux from '../images/skills-svgs/linux.svg';
import matlab from '../images/skills-svgs/matlab.svg';
import python from '../images/skills-svgs/python.svg';
import ros from '../images/skills-svgs/ros.svg';
import ubuntu from '../images/skills-svgs/ubuntu.svg';
import vim from '../images/skills-svgs/vim.svg';
import cmake from '../images/skills-svgs/cmake.svg';
import overleaf from '../images/skills-svgs/overleaf.svg';
import debian from '../images/skills-svgs/debian.svg';
import kubernetes from '../images/skills-svgs/kubernetes.svg';

import Center from '../svgs/center.svg';

const Skills = (props) => {
  return (
    <div className='skills'>
      <div class="divider-grid">
          <div class="divider left"></div>
          <img className="top-center center" src={Center} alt="floral center"></img>
          <div class="divider right"></div>
      </div>
      <Typography variant='h3'>My Skills</Typography>
      <div className="grid-h">
        <div className='skills-container'>
          <img className='grow' src={cpp} alt='cpp' />
          <img className='grow' src={c} alt='c' />
          <img className='grow' src={cmake} alt='cmake' />
          <img className='grow' src={linux} alt='linux' />
          <img className='grow' src={ubuntu} alt='ubuntu' />
          <img className='grow' src={debian} alt='debian' />
          <img className='grow' src={vim} alt='vim' />
          <img className='grow' src={python} alt='python' />
          <img className='grow' src={java} alt='java' />
          <img className='grow' src={html5} alt='html5' />
          <img className='grow' src={css3} alt='css3' />
          <img className='grow' src={git} alt='git' />
          <img className='grow' src={gitlab} alt='gitlab' />
          <img className='grow' src={docker} alt='docker' />
          <img className='grow' src={kubernetes} alt='kubernetes' />
          <img className='grow' src={matlab} alt='matlab' />
          <img className='grow' src={ros} alt='ros' />
          <img className='grow' src={overleaf} alt='overleaf' />
        </div>
      </div>
    </div>
  );
}
export default Skills;