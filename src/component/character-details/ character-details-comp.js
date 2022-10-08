import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const rick_and_morty_logo = require('../../assets/rick-and-morty-logo.png');

const CharacterDetailsComp = () => {
  const { loading, setLoading } = useState(false);
  const [result, setResult] = useState({});
  const [episodeUrl, setEpisodeUrl] = useState('');
  const [episodesResult, setEpisodeResults] = useState({});
  const { id } = useParams();

  const details = [
    { key: 'Name', value: result?.name },
    { key: 'Status', value: result?.status },
    { key: 'Specie', value: result?.specie },
    { key: 'Type', value: result?.type },
    { key: 'Gender', value: result?.gender },
    { key: 'Origin', value: result?.origin?.name },
    { key: 'Created', value: result?.created },
  ];

  const episodeDetails = [
    { key: 'Episode ID', value: episodesResult?.id },
    { key: 'Episode name', value: episodesResult?.name },
    { key: 'Episode Air Date', value: episodesResult?.air_date },
    { key: 'Episode', value: episodesResult?.episode },
  ];

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        setResult(data);
      })
      .catch((err) => console.error(err.message));
  }, [id]);

  useEffect(() => {
    axios
      .get(episodeUrl)
      .then(({ data }) => {
        console.log('episode details', data);
        setEpisodeResults(data);
      })
      .catch((err) => console.error(err.message));
  }, [episodeUrl]);

  return (
    <Box
      sx={{
        width: { xs: '90%', md: '50%' },
        margin: 'auto',
        marginTop: 15,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
            width: '100%',
            marginY: 10,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: { xs: 450, md: 300 },
            height: { xs: 450, md: 300 },
            borderRadius: 5,
            marginY: 10,
            margin: 'auto',
          }}
        >
          <Box
            component={'img'}
            src={result.image}
            alt='rick-and-morty'
            sx={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginY: 10,
            width: { xs: '80%', md: '50%' },
            margin: 'auto',
            flexWrap: 'wrap',
          }}
        >
          {details &&
            details.map((detail) => {
              return (
                <Box
                  key={detail.key}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    my: 1,
                  }}
                >
                  <Typography sx={{ textAlign: 'left', display: 'flex' }}>
                    {detail.key}:
                  </Typography>
                  <Typography sx={{ textAlign: 'right', display: 'flex' }}>
                    {detail.value === undefined || detail.value === ''
                      ? '---'
                      : detail.value}
                  </Typography>
                </Box>
              );
            })}
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: '80%', md: '100%' },
          overflow: 'auto',
          display: 'flex',
          borderBottom: '2px solid gray',
          my: 10,
          p: 0,
        }}
      >
        {result &&
          result?.episode?.map((detail, index) => {
            return (
              <Box key={detail}>
                <Button
                  onClick={() => setEpisodeUrl(detail)}
                  variant='outlined'
                  sx={{
                    p: 2,
                    width: 150,
                    color: 'gray',
                    borderColor: 'gray',
                    '&:hover': { borderColor: 'gray' },
                  }}
                >
                  Episode {index + 1}
                </Button>
              </Box>
            );
          })}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginY: 5,
          width: { xs: '80%', md: '45%' },
          margin: 'auto',
          flexWrap: 'wrap',
        }}
      >
        {episodeDetails &&
          episodeDetails.map((detail) => {
            return (
              <Box
                key={detail.key}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  my: 1,
                }}
              >
                <Typography sx={{ textAlign: 'left', display: 'flex' }}>
                  {detail.key}:
                </Typography>
                <Typography sx={{ textAlign: 'right', display: 'flex' }}>
                  {detail.value === undefined || detail.value === ''
                    ? '---'
                    : detail.value}
                </Typography>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};
export default CharacterDetailsComp;