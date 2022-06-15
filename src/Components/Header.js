import * as React from 'react';

import {Fade} from 'react-reveal';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { common } from '@mui/material/colors';

const Header = (props) => {

  const whiteText = createTheme({
    typography: {
      h1: {
        color: common.white,
      }
    }
  });

  return (
    <header>
      <div className='header'>
        <div className='header-text'>
          <Fade top>
            {/*<img src={JohnZoscak} alt='John Zoscak' />*/}
            <Typography variant='h4' theme={whiteText} align='left'>Hello, my name is</Typography>
            <Typography variant='h1' theme={whiteText} align='left'>John Zoscak</Typography>
            <Typography variant='h6' theme={whiteText} align='left'>BSCS student at SEAS of UVA</Typography>
          </Fade>
        </div>
      </div>
    </header>
  );
}
export default Header;
