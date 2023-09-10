import * as React from 'react';
import { IconButton, Link, Divider } from '@mui/material';

import Github from '../images/icons/github.png';
//import Github from '../images/icons/github-dark.png';
import Linkedin from '../images/icons/linkedin.png';
import JZ from '../images/jz.png';

const Footer = (props) => {
  return (
    <div className='footer'>
      {/*<Fade bottom>*/}
        <Divider variant="middle" classes={{ root: props.classes.divider }} />
        <div className='footer-content'>
          <div className='contact'>
            <Link className='grow' underline='none' color='inherit'>{'(703) 935-6163'}</Link>
            <Link className='grow' underline='hover' color='inherit' href='mailto:jzoscak@email.virginia.edu, jzoscak02@gmail.com'>{'jzoscak@email.virginia.com'}</Link>
          </div>
          <img className='icon grow' src={JZ} alt='jz icon'/>
          <div className='socials'>
            <IconButton size='small' onClick={() => {
              window.open('https://github.com/John-Zoscak-02/', "_blank")
            }}><img classname='sc_lnk' src={Github} alt='GH' /></IconButton>
            <IconButton size='small' onClick={() => {
              window.open('https://www.linkedin.com/in/john-mzoscak/', "_blank");
            }}><img classname='sc_lnk' src={Linkedin} alt='in' /></IconButton>
          </div>
        </div>
      {/*</Fade>*/}
    </div>
  );
}
export default Footer;