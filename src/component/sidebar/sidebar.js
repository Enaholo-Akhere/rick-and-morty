import { Box, Drawer, useMediaQuery } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Classes from './sidebar.module.css';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
import { setStatus, setName, setGender } from '../../redux/slices';
import { useLocation } from 'react-router-dom';

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const { open, onClose } = props;
  const [status, setStatusQ] = useState('');
  const [gender, setGenderQ] = useState('');
  const [name, setNameQ] = useState('');

  const { pathname } = useLocation();
  const handleName = (e) => {
    setNameQ(e.target.value);
    dispatch(setName(e.target.value));
  };

  const handleGender = (e) => {
    setGenderQ(e.target.value);
    dispatch(setGender(e.target.value));
  };

  const handleStatus = (e) => {
    setStatusQ(e.target.value);
    dispatch(setStatus(e.target.value));
  };

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = () => {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            p: 3,
          }}
        >
          <Box
            sx={{
              borderRadius: 10,
              backgroundColor: 'rgb(217, 217, 217)',
              overflow: 'hidden',
              border: '2px solid gray',
              my: 1,
            }}
          >
            <TextField
              sx={{ py: 1, px: 2 }}
              className={Classes['MuiTextField-root']}
              fullWidth
              type='text'
              variant='standard'
              onChange={(e) => handleName(e)}
              value={name}
              placeholder='Filter by name'
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              borderRadius: 10,
              backgroundColor: 'rgb(217, 217, 217)',
              overflow: 'hidden',
              border: '2px solid gray',
              my: 1,
            }}
          >
            <FormControl fullWidth>
              <TextField
                select
                placeholder='Status'
                label='Status'
                fullWidth
                name='status'
                onChange={(e) => handleStatus(e)}
                value={status}
                variant='filled'
                InputProps={{
                  disableUnderline: true,
                }}
              >
                <MenuItem value=''></MenuItem>
                <MenuItem value='unknown'> Unknown</MenuItem>
                <MenuItem value='alive'>Alive</MenuItem>
                <MenuItem value='dead'>Dead</MenuItem>
              </TextField>
            </FormControl>
          </Box>
          <Box
            sx={{
              borderRadius: 10,
              backgroundColor: 'rgb(217, 217, 217)',
              overflow: 'hidden',
              border: '2px solid gray',
              my: 1,
            }}
          >
            <FormControl fullWidth>
              <TextField
                select
                placeholder='Gender'
                label='Gender'
                fullWidth
                onChange={(e) => handleGender(e)}
                name='gender'
                value={gender}
                variant='filled'
                InputProps={{
                  disableUnderline: true,
                }}
              >
                <MenuItem value=''></MenuItem>
                <MenuItem value='unknown'> Unknown</MenuItem>
                <MenuItem value='male'>Male</MenuItem>
                <MenuItem value='female'>Female</MenuItem>
              </TextField>
            </FormControl>
          </Box>
        </Box>
      </>
    );
  };

  if (pathname === '/') {
    if (lgUp) {
      return (
        <Drawer
          anchor='left'
          open
          PaperProps={{
            sx: {
              backgroundColor: 'rgb(239, 239, 239)',
              color: '#FFFFFF',
              width: 280,
              position: 'absolute',
              height: '90vh',
              top: '10vh',
              left: 0,
            },
          }}
          variant='permanent'
        >
          {content()}
        </Drawer>
      );
    }
  }

  return (
    <Drawer
      anchor='left'
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'rgb(239, 239, 239)',
          color: '#FFFFFF',
          width: 400,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant='temporary'
    >
      {content()}
    </Drawer>
  );
};

export default Sidebar;
