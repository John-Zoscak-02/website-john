import * as React from 'react';

import { Typography, Divider, Link } from '@mui/material';
import { Fade } from 'react-reveal';

const Featured = (props) => {

  return (
    <div className='featured'>
      <Fade big>
        <Divider variant="middle" classes={{ root: props.classes.divider }} />
        <Link href='https://drive.google.com/file/d/18QU2s1NE7oH3m_pkaVTUJbcPM31CBrYl/preview' target='_blank' color='inherit' underline='hover'>
          <Typography className='grow' variant='h3'>Resume</Typography>
        </Link>
      </Fade>
      <div className='pdf'>
        <Fade big>
          <iframe title='John Zoscak Resume, 2021' src='https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=18QU2s1NE7oH3m_pkaVTUJbcPM31CBrYl&hl=en&embedded=true' alt='PDF of Resume' frameborder="0" />
        </Fade>
      </div>
    </div>
  );
}
export default Featured;