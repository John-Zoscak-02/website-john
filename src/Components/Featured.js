import * as React from 'react';

import { Typography, Link } from '@mui/material';
import Center from '../svgs/center.svg';

const Featured = (props) => {

  return (
    <div className='featured' ref={props.compRef}>
      <div class="divider-grid">
          <div class="divider left"></div>
          <img className="top-center center" src={Center} alt="floral center"></img>
          <div class="divider right"></div>
      </div>
      <div className='grid-h'>
          {/* <Link href='https://drive.google.com/file/d/1m_nuEbTWBj28Qx-Y4m2-qYuOb9boJ521/preview' target='_blank' color='inherit' underline='hover'> */}
          <Link href='https://drive.google.com/file/d/1Zlk7vhAJOwWCjK0sGSrC6mbgsLRL3_kT/preview' target='_blank' color='inherit' underline='hover'>
            <Typography variant='h3'>Resume</Typography>
          </Link>
        <div className='pdf'>
            <iframe title='John Zoscak Resume, 2025' src='https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=1Zlk7vhAJOwWCjK0sGSrC6mbgsLRL3_kT&hl=en&embedded=true' alt='PDF of Resume' frameborder="0" />
        </div>
      </div>
    </div>
  );
}
export default Featured;