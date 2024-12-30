import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import HomeCard from '../home-card/home-card';
import { homesMockData } from '../../homes-mock-data';
import { useParams } from 'react-router';
import { HomeApiResponse } from '../../types/homes-types';

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
      <header style={{ textAlign: 'center' }}>
        <h2>{homeData?.description}</h2>
      </header>
      <Box sx={{ margin: '0 auto' }}>
        {homeData && <HomeCard photo={homeData} />}
      </Box>
    </>
  );
};

export default HomeInfo;
