import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import HomeCard from '../home-card/home-card';
import { homesMockData } from '../../homes-mock-data';
import { useParams } from 'react-router';
import { HomeApiResponse } from '../../types/homes-types';
import Typography from '@mui/material/Typography';

const HomeInfo = () => {
  const params = useParams();
  const id = params.id;
  const [homeData, setHomeData] = useState<HomeApiResponse | null>(null);

  useEffect(() => {
    const home = homesMockData.find(home => home.id === id);
    if (home) {
      setHomeData(home);
    }
  }, [id]);

  return (
    <>
      <Box sx={{ maxWidth: 345, margin: '3em auto' }}>
        {homeData && <HomeCard photo={homeData} />}
      </Box>
      <section style={{ textAlign: 'center' }}>
        <Typography variant='body1' color='text.secondary'>
          {homeData?.description}
        </Typography>
      </section>
    </>
  );
};

export default HomeInfo;
