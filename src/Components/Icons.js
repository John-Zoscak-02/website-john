import * as React from 'react';

import { Fade } from 'react-reveal';
import { IconButton } from '@mui/material';
// import Github from '../images/icons/github.png';
import Github from '../images/icons/github-dark.png';
// import Linkedin from '../images/icons/linkedin.png';
import Linkedin from '../images/icons/linkedin-dark.png';
import FloralCorner from '../svgs/floral-corner.svg';
import FloralCenter from '../svgs/floral-center.svg';

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