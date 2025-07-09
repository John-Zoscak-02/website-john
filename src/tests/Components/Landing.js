import * as React from 'react';

import { Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';

// import Graduation from '../images/profile.jpg';
//import JHUAPL from '../images/space-horizontal.gif';
import Selfie from '../images/hakone-selfie.jpg';
import FloralCenter from '../svgs/floral-center.png';

const Landing = (props) => {
  return (
    <div className='landing'>
      <Fade big>
        {/* <Divider variant="middle" classes={{ root: props.classes.divider }} /> */}
        <div className="decoration">
          {/* <img className="upper-left" src={FloralCorner} alt="floral corner"></img> */}
          <img className="top-center" src={FloralCenter} alt="floral center"></img>
        </div>
      </Fade >
      <div className='grid-2-h'>
        <div className='about-me'>
          <Fade left>
            <Typography variant='h3'>About me</Typography>
            <Typography variant='subtitle1'>Student at the School of Engineering and Applied Science at UVA. Graduate Master's in Computer Science and minor in Business Engineering.</Typography>
            <Typography variant='subtitle1'>Previous employee with Johns Hopkins University Applied Physics Laboratory.</Typography> 
            <Typography variant='subtitle1'>Aspiring Software Developer.</Typography>
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