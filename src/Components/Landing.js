import * as React from 'react';

import { Typography } from '@mui/material';

import Selfie from '../images/hakone-selfie.jpg';
import Center from '../svgs/center.svg';

import uva from '../images/uva.svg';
import riverside from '../images/riverside-research.svg';
import cavauto from '../images/cavauto.jpg';
import cru from '../images/cru.svg';
import apl from '../images/apl-shield.svg';
import altamira from '../images/altamira-a.svg';

const Landing = (props) => {
  return (
    <div className='landing' ref={props.compRef}>
      <div class="divider-grid">
          <div class="divider left"></div>
          <img className="top-center center" src={Center} alt="floral center"></img>
          <div class="divider right"></div>
      </div>
      <div className='grid-2-h'>
        <div className='about-me'>
          <Typography variant='h3'>About me</Typography>
          <Typography variant='subtitle1'>Graduate from the School of Engineering and Applied Science at UVA with degree in Computer Science and Minor in Business Engineering. Master's in Computer Science</Typography>
          <Typography variant='subtitle1'>Previous developer with Johns Hopkins University Applied Physics Laboratory, Altamira Technologies Corporation, and Cavalier Autonomous Racing</Typography>
          <div className='grid-5-h'>
            <div className="org-icon grow"><a href="https://www.cru.org/" target='_blank' rel="noreferrer"><img src={cru} alt="cru" /></a></div>
            <img src={uva} alt="UVA Logo" className='grow' />
            <img src={cavauto} alt="Cavauto" className='grow' />
            <img src={altamira} alt="Altamira" className='grow' />
            <img src={apl} alt="APL" className='grow' />
          </div>
          <div className="work">
            <Typography variant='subtitle1' fontWeight="bold">Software Developer at:</Typography> 
            <div className="riverside-icon grow">
              <a href='https://www.riversideresearch.org' target='_blank' rel="noreferrer">
                <img src={riverside} alt="Riverside Research"/>
              </a>
            </div>
          </div>
        </div>
        <div className='landing-image-container'>
            <img className='landing-image' src={Selfie} alt='High School Graduation' />
        </div>
      </div>
    </div>
  );
}
export default Landing;