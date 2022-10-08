import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import { useNavigate } from 'react-router-dom';

const CharacterListComp = () => {
  const { gender } = useSelector((state) => state.filter.gender);
  const { status } = useSelector((state) => state.filter.status);
  const { name } = useSelector((state) => state.filter.name);
  const navigate = useNavigate();

  const [characterList, setCharacterLists] = useState('');
  const [pageNo, setPageNo] = useState(0);
  const [count, setCount] = useState(1);

  //generate array from pageNo to use in displaying page count
  const pageNoArr = () => {
    let arr = [];
    if (pageNo >= 5) {
      const pageCount = Math.ceil(pageNo / 5);

      for (let i = 1; i <= pageCount; i++) {
        arr.push(i);
      }
      return arr;
    } else {
      arr.push(1);
      return arr;
    }
  };

  const pageArray = pageNoArr();

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character?page=${count}&name=${name}&status=${status}&gender=${gender}`
      )
      .then(({ data }) => {
        setPageNo(data.info.pages);
        setCharacterLists(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [count, gender, status, name]);

 

    return (
      <Box
        sx={{
          width: { xs: '90%', lg: '60%' },
          marginRight: { xs: 'auto', lg: '10%' },
          marginLeft: { xs: 'auto', lg: '30%' },
          marginTop: 15,
          zIndex: 1000,
        }}
      >
        <Grid container spacing={4} zIndex={1000}>
          {characterList &&
            characterList?.map((list) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={list.id}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                    }}
                  >
                    <Box sx={{ backgroundColor: 'rgb(61, 61, 61)' }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          margin: 'auto',
                          py: 3,
                        }}
                      >
                        <Box
                          component={'img'}
                          src={list.image}
                          sx={{
                            textAlign: 'center',
                            color: 'rgb(217, 217, 217)',
                            pb: 1,
                            height: 1,
                            width: 1,
                            margin: 'auto',
                            borderRadius: '100%',
                          }}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        padding: 4,
                        backgroundColor: 'rgb(217, 217, 217)',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography sx={{ textAlign: 'left' }}>
                          Name:{' '}
                        </Typography>
                        <Typography sx={{ textAlign: 'right' }}>
                          {list.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography sx={{ textAlign: 'left' }}>
                          Specie:
                        </Typography>
                        <Typography sx={{ textAlign: 'right' }}>
                          {list.species}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography sx={{ textAlign: 'left' }}>
                          Status:{' '}
                        </Typography>
                        <Typography sx={{ textAlign: 'right' }}>
                          {list.status}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: 'rgb(124, 124, 124)',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        variant='text'
                        sx={{
                          textAlign: 'center',
                          padding: 3,
                          color: 'lightgray',
                        }}
                        onClick={() =>
                          navigate(`/character-details/${list.id}`)
                        }
                      >
                        Details
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
        <Box sx={{ my: 5, zIndex: 100, mt: 20 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              position: 'fixed',
              bottom: 20,
              zIndex: 1000,
              backgroundColor: 'rgb(255, 255, 255)',
            }}
          >
            <Button
              disabled={count < 2}
              variant='outlined'
              onClick={() => setCount(1)}
              sx={{
                border: '1px solid gray',
                borderRadius: 2,
                color: 'gray',
                m: { xs: 0.1, md: 0.5 },
                transition: '0.4s ease-in',
                cursor: 'pointer',
                p: { xs: 0.5, md: 1 },
                '&:hover': {
                  color: 'red',
                  boxShadow: 8,
                },
              }}
            >
              <FirstPageIcon sx={{ fontSize: { xs: 18, md: 20 } }} />
            </Button>
            <Button
              disabled={count < 2}
              variant='outlined'
              onClick={() => setCount((prev) => prev - 1)}
              sx={{
                border: '1px solid gray',
                borderRadius: 2,
                color: 'gray',
                m: { xs: 0.1, md: 0.5 },
                transition: '0.4s ease-in',
                cursor: 'pointer',
                p: { xs: 0.5, md: 1 },
                '&:hover': {
                  color: 'red',
                  boxShadow: 8,
                },
              }}
            >
              <ArrowBackIcon sx={{ fontSize: { xs: 18, md: 25 } }} />
            </Button>
            {pageArray.map((arr) => {
              return (
                <Box key={arr}>
                  <Typography
                    onClick={() => setCount(arr)}
                    sx={{
                      border: '1px solid gray',
                      borderRadius: 2,
                      color: 'gray',
                      m: { xs: 0.1, md: 0.5 },
                      fontSize: { xs: 18, md: 25 },
                      transition: '0.4s ease-in',
                      cursor: 'pointer',
                      p: { xs: 0.5, md: 1 },
                      '&:hover': {
                        boxShadow: 8,
                        color: 'red',
                      },
                    }}
                  >
                    {arr}
                  </Typography>
                </Box>
              );
            })}

            <Button
              disabled={count === pageNo}
              variant='outlined'
              onClick={() => setCount((prev) => prev + 1)}
              sx={{
                border: '1px solid gray',
                borderRadius: 2,
                color: 'gray',
                m: { xs: 0.1, md: 0.5 },
                transition: '0.4s ease-in',
                cursor: 'pointer',
                fontSize: { xs: 18, md: 25 },
                p: { xs: 0.5, md: 1 },
                '&:hover': {
                  color: 'red',
                  boxShadow: 8,
                },
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: 15 }} />
            </Button>
            <Button
              disabled={count >= pageNo}
              variant='outlined'
              onClick={() => setCount(pageNo)}
              sx={{
                border: '1px solid gray',
                borderRadius: 2,
                color: 'gray',
                m: { xs: 0.1, md: 0.5 },
                transition: '0.4s ease-in',
                cursor: 'pointer',
                p: { xs: 0.5, md: 1 },
                fontSize: 15,
                '&:hover': {
                  color: 'red',
                  boxShadow: 8,
                },
              }}
            >
              <LastPageIcon sx={{ fontSize: 15 }} />
            </Button>
          </Box>
        </Box>
      </Box>
    );
}
export default CharacterListComp;
