import * as React from 'react';

import { Fade } from 'react-reveal';
import { IconButton } from '@mui/material';
import Github from '../images/icons/github.png';
import Linkedin from '../images/icons/linkedin.png';

const Icons = (props) => {
  return (
    <Fade right>
      <div className='icons'>
        <IconButton size='small' onClick={() => {
          setTimeout(function () { }, '1000');
          window.open('https://github.com/John-Zoscak-02/', "_blank")
        }}><img src={Github} alt='GH'/></IconButton>
        <IconButton size='small' onClick={() => {
          setTimeout(function () { }, '1000');
          window.open('https://www.linkedin.com/in/john-mzoscak/', "_blank");
        }}><img src={Linkedin} alt='in'/></IconButton>
      </div>
    </Fade>
  );
}

export default Icons;