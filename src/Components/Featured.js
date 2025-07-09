import * as React from 'react';

// import { Typography, Divider, Link } from '@mui/material';
import { Typography, Link, Divider, Chip} from '@mui/material';
import { Fade } from 'react-reveal';
import FloralCorner from '../svgs/floral-corner.svg';
import FloralCenter from '../svgs/floral-center.svg';
import Center from '../svgs/center.svg';

const Featured = (props) => {

  return (
    <div className='featured'>
      <Fade big>
        <Divider component="div" role="presentation" variant="middle" textAlign="center" classes={{ root: props.classes.divider }}>
          <img className="top-center" src={Center} alt="floral-center-svg"/>
        </Divider>
        {/* <div className="decoration"> */}
          <img className="upper-left" src={FloralCorner} alt="floral corner"></img>
          {/* <img className="top-center" src={FloralCenter} alt="floral center"></img> */}
        {/* </div> */}
        <Link href='https://drive.google.com/file/d/1m_nuEbTWBj28Qx-Y4m2-qYuOb9boJ521/preview' target='_blank' color='inherit' underline='hover'>
          <Typography className='grow' variant='h3'>Resume</Typography>
        </Link>
      </Fade>
      <div className='pdf'>
        <Fade big>
          {/*<iframe title='John Zoscak Resume, 2021' src='https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=1P9mAYOgvDkZ37yyKtMP0hiNxkxp2Y-hK&hl=en&embedded=true' alt='PDF of Resume' frameborder="0" />*/}
          <iframe title='John Zoscak Resume, 2021' src='https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=1m_nuEbTWBj28Qx-Y4m2-qYuOb9boJ521&hl=en&embedded=true' alt='PDF of Resume' frameborder="0" />
        </Fade>
      </div>
    </div>
  );
}
export default Featured;