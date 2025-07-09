import * as React from 'react';

import { Typography } from '@mui/material';

import Selfie from '../images/hakone-selfie.jpg';
import Center from '../svgs/center.svg';

const Landing = (props) => {
  return (
    <div className='landing'>
      <div class="divider-grid">
          <div class="divider left"></div>
          <img className="top-center center" src={Center} alt="floral center"></img>
          <div class="divider right"></div>
      </div>
      <div className='grid-2-h'>
        <div className='about-me'>
            <Typography variant='h3'>About me</Typography>
            <Typography variant='subtitle1'>Graduate from the School of Engineering and Applied Science at UVA with degree in Computer Science and Minor in Business Engineering. Master's in Computer Science</Typography>
            <Typography variant='subtitle1'>Previous employee with Johns Hopkins University Applied Physics Laboratory, and Altamira Technologies Corporation</Typography> 
            <Typography variant='subtitle1'>Previous developer with Cavalier Autonomous Racing</Typography>
            <Typography variant='subtitle1'>Aspiring Software Developer</Typography>
        </div>
        <div className='landing-image-container'>
            <img className='landing-image' src={Selfie} alt='High School Graduation' />
        </div>
      </div>
    </div>
  );
}
export default Landing;