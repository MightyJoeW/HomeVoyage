import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { fetchPhotos } from '../../api/photos-api';
import { Photo, ApiResponse } from '../../types/unsplash-response';
import PhotoComp from '../photo-comp/photo-comp';

const HomesDisplay: FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetchPhotos('house')
      .then(result => {
        setData(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
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
          {data.response.results.map((photo: Photo) => (
            <Grid item key={photo.id}>
              <PhotoComp photo={photo} />
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
