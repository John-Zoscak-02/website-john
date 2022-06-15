import * as React from 'react';

import { Typography, Divider } from '@mui/material';
import { Fade } from 'react-reveal';

import Graduation from '../images/grad.jpg';

const Landing = (props) => {
  return (
    <div className='landing'>
      <Fade big>
        <Divider variant="middle" classes={{ root: props.classes.divider }} />
      </Fade >
      <div className='grid-2-h'>
        <div className='about-me'>
          <Fade left>
            <Typography variant='h3'>About me</Typography>
            <Typography variant='body1'>Computer Science Student at the School of Engineering and Applied Science at UVA</Typography>
            <Typography variant='body1'>Graduate from Battlefield High School focusing on Computer Science, and aspiring Software developer.</Typography>
          </Fade>
        </div>
        <div className='landing-image-container'>
          <Fade right>
            <img className='landing-image' src={Graduation} alt='High School Graduation' />
          </Fade>          
        </div>
      </div>
    </div>
  );
}
export default Landing;