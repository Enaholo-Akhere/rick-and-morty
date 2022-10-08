import Box from '@mui/material/Box';
import NavBar from '../navbar.js/navbar';
import Sidebar from '../sidebar/sidebar';
import { useState } from 'react';
import ScrollTo from '../../utilities/scroll-to';
import { useEffect } from 'react';
const Layout = (props) => {
  const [open, onClose] = useState(false);

  return (
    <Box sx={{ position: '', width: '100%', zIndex: 10 }}>
      <Box sx={{ position: 'fixed', width: '100%', zIndex: 10, top: 0 }}>
        <NavBar onClose={() => onClose(true)} />
        <Sidebar open={open} onClose={() => onClose(false)} />
      </Box>
      {props.children}
      <ScrollTo />
    </Box>
  );
};

export default Layout;
