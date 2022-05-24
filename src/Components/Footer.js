import * as React from 'react';
import { Typography, Divider} from '@material-ui/core';
import {Fade} from 'react-reveal';

const Footer = (props) => {
  return (
    <div className='footer'>
      <Fade big>
        <Divider variant="middle" classes={{ root: props.classes.divider }} />
        <div className='footer-content'>
          <Typography variant='body2'>(703) 935-6163</Typography>
          <Typography variant='body2' >jzoscak02@gmail.com</Typography>
          
        </div>
      </Fade>
    </div>
  );
}
export default Footer;