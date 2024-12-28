import React, { FC, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { fetchPhotos } from '../../api/photos-api';
import { Photo, HomeApiResponse } from '../../types/unsplash-response';
import HomeCard from '../home-card/home-card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const HomesDisplay: FC = () => {
  const [data, setData] = useState<HomeApiResponse | null>(null);

  useEffect(() => {
    fetchPhotos('house')
      .then(result => {
        setData(result);
      })
      .catch(() => {
        console.error('something went wrong!');
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data?.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data?.response.results.map((photo: Photo) => (
            <Grid key={photo.id}>
              <Item>
                <HomeCard photo={photo} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
};

const HomesFeed: FC = () => {
  return (
    <div style={{ margin: '3em' }}>
      <header>
        <h1>Feed</h1>
      </header>
      <HomesDisplay />
    </div>
  );
};

export default HomesFeed;
