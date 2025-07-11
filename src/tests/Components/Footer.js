import * as React from 'react';
import { IconButton, Link } from '@mui/material';

// import Github from '../images/icons/github.png';
import Github from '../images/icons/github-dark.png';
// import Linkedin from '../images/icons/linkedin.png';
import Linkedin from '../images/icons/linkedin-dark.png';
import JZ from '../images/jz.png';
import FloralCenter from '../svgs/floral-center.png';

const Footer = (props) => {
  return (
    <div className='footer'>
      {/*<Fade bottom>*/}
        {/* <Divider variant="middle" classes={{ root: props.classes.divider }} /> */}
        <div className="decoration">
          {/* <img className="upper-left" src={FloralCorner} alt="floral corner"></img> */}
          <img className="top-center" src={FloralCenter} alt="floral center"></img>
        </div>
        <div className='footer-content'>
          <div className='contact'>
            <Link className='grow' underline='none' color='inherit'>{'(703) 935-6163'}</Link>
            <Link className='grow' underline='hover' color='inherit' href='mailto:jzoscak@email.virginia.edu, jzoscak02@gmail.com'>{'jzoscak@email.virginia.com'}</Link>
          </div>
          <img className='icon grow' src={JZ} alt='jz icon'/>
          <div className='socials'>
            <IconButton size='small' onClick={() => {
              window.open('https://github.com/John-Zoscak-02/', "_blank")
            }}><img className='sc_lnk' src={Github} alt='GH' /></IconButton>
            <IconButton size='small' onClick={() => {
              window.open('https://www.linkedin.com/in/john-mzoscak/', "_blank");
            }}><img className='sc_lnk' src={Linkedin} alt='in' /></IconButton>
          </div>
        </div>
      {/*</Fade>*/}
    </div>
  );
}
export default Footer;