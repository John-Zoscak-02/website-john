import * as React from 'react';

import { Typography, Divider } from '@mui/material';
import { Fade } from 'react-reveal';

// import Graduation from '../images/profile.jpg';
//import JHUAPL from '../images/space-horizontal.gif';
import Selfie from '../images/hakone-selfie.jpg';
import FloralCorner from '../svgs/floral-corner.svg';
import FloralCenter from '../svgs/floral-center.svg';
import Center from '../svgs/center.svg';

const Landing = (props) => {
  return (
    <div className='landing'>
      <Fade big>
        {/* <Divider variant="middle" classes={{ root: props.classes.divider }} /> */}
        {/* <div className="decoration">
          <img className="top-center" src={FloralCenter} alt="floral center"></img>
        </div> */}
      </Fade >
      <div class="divider-grid">
          <div class="divider left"></div>
          <img className="top-center center" src={Center} alt="floral center"></img>
          <div class="divider right"></div>
      </div>
      <div className='grid-2-h'>
        <div className='about-me'>
          <Fade left>
            <Typography variant='h3'>About me</Typography>
            <Typography variant='subtitle1'>Graduate from the School of Engineering and Applied Science at UVA with degree in Computer Science and Minor in Business Engineering. Master's in Computer Science</Typography>
            <Typography variant='subtitle1'>Previous employee with Johns Hopkins University Applied Physics Laboratory, and Altamira Technologies Corporation</Typography> 
            <Typography variant='subtitle1'>Previous developer with Cavalier Autonomous Racing</Typography>
            <Typography variant='subtitle1'>Aspiring Software Developer</Typography>
          </Fade>
        </div>
        <div className='landing-image-container'>
          <Fade right>
            <img className='landing-image' src={Selfie} alt='High School Graduation' />
          </Fade>          
        </div>
      </div>
      {/*<div className='grid-h'>
        <Fade big>
          <img className='resize' src={JHUAPL} alt='loading...' />
        </Fade>
      </div>*/}
    </div>
  );
}
export default Landing;