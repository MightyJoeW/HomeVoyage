import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import HomeCard from '../home-card/home-card';
import { homesMockData } from '../../homes-mock-data';
import { useParams } from 'react-router';

const HomeInfo = () => {
  const params = useParams();
  console.log('params:', params);
  const id = params.id;
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    homesMockData.forEach(home => {
      if (home.id === id) {
        setHomeData(home);
      }
    });
  }, [id]);

  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h1>{homeData?.description}</h1>
      </header>
      <Box sx={{ margin: '0 auto' }}>
        <HomeCard photo={homeData} />
      </Box>
    </>
  );
};

export default HomeInfo;
