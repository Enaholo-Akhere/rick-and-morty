import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import WestIcon from '@mui/icons-material/West';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';
const rick_and_morty_logo = require('../../assets/rick-and-morty-logo.png');

const NavBar = ({ onClose }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'), {
    defaultMatches: true,
    noSsr: false,
  });
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(217, 217, 217)',
        zIndex: 10,
        height: '10vh',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          p: 2,
        }}
      >
        {pathname === '/' ? (
          <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
            <MenuIcon
              onClick={() => onClose(true)}
              sx={{ color: 'rgb(59, 59, 59)', p: 1 }}
            />
          </Box>
        ) : (
          <Box sx={{ display: 'flex' }}>
            <Button
              startIcon={<WestIcon />}
              variant='text'
              onClick={() => navigate(-1)}
              sx={{ color: 'rgb(59, 59, 59)', p: 1 }}
            >
              {mdUp && 'Back'}
            </Button>
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            margin: 'auto',
          }}
        >
          <Link to='/'>
            <Box
              sx={{
                //backgroundColor: 'rgb(59, 59, 59)',
                width: 400,
                height: 50,
                margin: 'auto',
                marginTop: -1,
              }}
            >
              <Box
                component={'img'}
                src={rick_and_morty_logo}
                sx={{
                  textAlign: 'center',
                  color: 'rgb(217, 217, 217)',
                  px: 2,
                  pb: 1,
                  height: 1,
                  width: 1,
                  margin: 'auto',
                }}
              />
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
