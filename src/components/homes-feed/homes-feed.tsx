import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { HomeApiResponse } from '../../types/homes-types';
import HomeCard from '../home-card/home-card';
import { homesMockData } from '../../homes-mock-data';

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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {Array.from(homesMockData).map(
          (photo: HomeApiResponse, index: number) => (
            <Grid key={photo.id}>
              <Item>
                <HomeCard photo={photo} />
              </Item>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
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
