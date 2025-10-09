import * as React from 'react';
import { IconButton, Link, Typography} from '@mui/material';

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
      <div className="grid-center">
        <Typography type="subtitle1" fontWeight="bold">Rom. 8:38-39</Typography>
        <Typography type="subtitle1">For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come, nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord.
          <br></br>
          <br></br>
        </Typography>
        <Typography type="subtitle1" fontWeight="bold">John. 17:25-26</Typography>
        <Typography type="subtitle1">“Righteous Father, though the world does not know you, I know you, and they know that you have sent me. I have made you known to them, and will continue to make you known in order that the love you have for me may be in them and that I myself may be in them.”</Typography>
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
          }}><img className='sc_lnk' src={Github} alt='GH' /></IconButton>
          <IconButton size='small' onClick={() => {
            window.open('https://www.linkedin.com/in/john-mzoscak/', "_blank");
          }}><img className='sc_lnk' src={Linkedin} alt='in' /></IconButton>
        </div>
      </div>
    </div>
  );
}
export default Footer;