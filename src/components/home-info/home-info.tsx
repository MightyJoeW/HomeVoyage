import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import HomeCard from '../home-card/home-card';
import { useParams } from 'react-router';

/**
 * This file needs access to the photo api data. Will likely need to save in global state to access. https://react.dev/learn/scaling-up-with-reducer-and-context
 */

const HomeInfo = () => {
  const params = useParams();
  console.log('params:', params);
  // const id = params.photo.id;
  // const [homeData, setHomeData] = useState({});

  // useEffect(() => {
  //   photos.forEach(photo => {
  //     if (photo.id === id) {
  //       setHomeData(photo);
  //     }
  //   });
  // }, [id]);

  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h1>Home info placeholder</h1>
      </header>
      <Box sx={{ maxWidth: 345, margin: '0 auto' }}>
        {/* <HomeCard photo={homeData} /> */}
      </Box>
    </>
  );
};

export default HomeInfo;
