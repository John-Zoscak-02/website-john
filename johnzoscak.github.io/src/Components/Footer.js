import * as React from 'react';
import { IconButton, Typography, Link, Divider} from '@material-ui/core';
import {Fade} from 'react-reveal';

import Github from '../images/icons/github.png';
import Linkedin from '../images/icons/linkedin.png';

const Footer = (props) => {
  return (
    <div className='footer'>
      <Fade bottom>
        <Divider variant="middle" classes={{ root: props.classes.divider }} />
        <div className='footer-content'>
          <div className='contact'>
            <Link className='grow' underline='hover' color='inherit'>{'(703) 935-6163'}</Link>
            <Link className='grow' underline='hover' color='inherit'>{'jzoscak02@gmail.com'}</Link>
          </div>
          <div className='end'>
            <Link underline='hover' color='inherit'><Typography className='grow' variant='h4'>John Zoscak</Typography></Link>
          </div>
          <div className='socials'>
            <IconButton size='small' onClick={() => {
              setTimeout(function () { }, '1000');
              window.open('https://github.com/John-Zoscak-02/', "_blank")
            }}><img src={Github} alt='GH' /></IconButton>
            <IconButton size='small' onClick={() => {
              setTimeout(function () { }, '1000');
              window.open('https://www.linkedin.com/in/john-mzoscak/', "_blank");
            }}><img src={Linkedin} alt='in' /></IconButton>
          </div>
        </div>
      </Fade>
    </div>
  );
}
export default Footer;