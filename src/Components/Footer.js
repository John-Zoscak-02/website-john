import * as React from 'react';
import { IconButton, Link } from '@mui/material';

// import Github from '../images/icons/github.png';
import Github from '../images/icons/github-dark.png';
// import Linkedin from '../images/icons/linkedin.png';
import Linkedin from '../images/icons/linkedin-dark.png';
import JZ from '../images/jz.png';
import Center from '../svgs/center.svg';

import phone from '../images/icons-svgs/phone.svg';
import email from '../images/icons-svgs/email.svg';

const Footer = (props) => {
  return (
    <div className='footer'>
      <div class="divider-grid">
          <div class="divider left"></div>
          <img className="top-center center" src={Center} alt="floral center"></img>
          <div class="divider right"></div>
      </div>
      <div className='footer-content'>
        <div className='contact'>
          <div className='row'>
            <img src={phone} alt="•"/>
            <Link underline='none' color='inherit'>{'(703) 935-6163'}</Link>
          </div>
          <div className='row'>
            <img src={email} alt="•" />
            <Link underline='hover' color='inherit' href='mailto:jzoscak@email.virginia.edu, jzoscak02@gmail.com'>{'jzoscak@email.virginia.com'}</Link>
          </div>
        </div>
        <img className='icon grow' src={JZ} alt='jz icon'/>
        <div className='socials' ref={props.compRef}>
          <IconButton size='small' onClick={() => {
            window.open('https://github.com/John-Zoscak-02/', "_blank")
          }}><img classname='sc_lnk' src={Github} alt='GH' /></IconButton>
          <IconButton size='small' onClick={() => {
            window.open('https://www.linkedin.com/in/john-mzoscak/', "_blank");
          }}><img classname='sc_lnk' src={Linkedin} alt='in' /></IconButton>
        </div>
      </div>
    </div>
  );
}
export default Footer;