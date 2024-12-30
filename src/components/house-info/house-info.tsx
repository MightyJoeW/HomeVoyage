import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import HouseCard from '../house-card/house-card';
import { houseMockData } from '../../house-mock-data';
import { useParams } from 'react-router';
import { HouseApiResponse } from '../../types/house-types';
import Typography from '@mui/material/Typography';

const HouseInfo = () => {
  const params = useParams();
  const id = params.id;
  const [houseData, setHouseData] = useState<HouseApiResponse | null>(null);

  useEffect(() => {
    const house = houseMockData.find(house => house.id === id);
    if (house) {
      setHouseData(house);
    }
  }, [id]);

  return (
    <>
      <Box sx={{ maxWidth: 345, margin: '3em auto' }}>
        {houseData && <HouseCard house={houseData} />}
      </Box>
      <section style={{ textAlign: 'center' }}>
        <Typography variant='body1' color='text.secondary'>
          {houseData?.details.description}
        </Typography>
      </section>
    </>
  );
};

export default HouseInfo;
