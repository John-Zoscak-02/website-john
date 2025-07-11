import * as React from 'react';

import { Typography } from '@mui/material';
// import { createTheme } from '@mui/material/styles';
// import { common } from '@mui/material/colors';
import code from '../images/icons-svgs/code.svg';

const Header = (props) => {

  // const whiteText = createTheme({
  //   typography: {
  //     h1: {
  //       color: common.white,
  //     },
  //     h4: {
  //       color: common.white,
  //     },
  //     h6: {
  //       color: common.white,
  //     }
  //   }
  // });

  return (
    <header>
      <div className='header'>
        <div className='header-text'>
          {/*<img src={JohnZoscak} alt='John Zoscak' />*/}
          {/* <Typography variant='h4' theme={whiteText} align='left'>Hello, my name is</Typography> */}
          {/* <Typography variant='h1' theme={whiteText} align='left'>John Zoscak</Typography> */}
          {/* <Typography variant='h6' theme={whiteText} align='left'>BSCS student at UVA</Typography> */}
          {/* <Typography variant='h4' theme={whiteText} align='left'><b>&#60;/&#62;</b></Typography> */}
          <Typography variant='h5' align='left'>Hello, my name is</Typography>
          <Typography variant='h1' align='left'>John Zoscak</Typography>
          <Typography variant='h5' align='left'>UVA Graduate</Typography>
          {/* <Typography variant='h4' align='left'><b>&#60;/&#62;</b></Typography> */}
          <img src={code} alt="</>" />
        </div>
      </div>
    </header>
  );
}
export default Header;
