import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { HouseApiResponse } from '../../types/house-types';
import HouseCard from '../house-card/house-card';
import { houseMockData } from '../../house-mock-data';

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

const HouseDisplay: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {Array.from(houseMockData).map((house: HouseApiResponse) => (
          <Grid key={house.id}>
            <Item>
              <HouseCard house={house} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const HouseFeed: FC = () => {
  return (
    <div style={{ margin: '3em' }}>
      <Typography
        variant='body2'
        color='text.secondary'
        style={{ marginBottom: '1em' }}
      >
        {houseMockData.length} Results{' '}
      </Typography>
      <HouseDisplay />
    </div>
  );
};

export default HouseFeed;
