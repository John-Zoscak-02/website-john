import * as React from 'react';

import { Typography, Divider, Box } from '@mui/material';
import { Fade } from 'react-reveal';

import Graduation from '../images/grad.jpg';
import JHUAPL from '../images/space-horizontal.gif';

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
            <Typography variant='subtitle1'>Student at the School of Engineering and Applied Science at UVA. Prospected Bachelor's degree, majoring in Computer Science and minoring in Business Engineering.</Typography>
            <Typography variant='subtitle1'>Graduate from Battlefield High School focusing on Computer Science.</Typography>
            <Typography variant='subtitle1'>Aspiring Software Developer.</Typography>
          </Fade>
        </div>
        <div className='landing-image-container'>
          <Fade right>
            <img className='landing-image' src={Graduation} alt='High School Graduation' />
          </Fade>          
        </div>
      </div>
      <div className='grid-h'>
        <Fade big>
          <img className='resize' src={JHUAPL} alt='loading...' />
        </Fade>
      </div>
    </div>
  );
}
export default Landing;