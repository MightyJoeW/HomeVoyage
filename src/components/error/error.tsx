import {
  Backdrop,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { Link } from 'react-router';

const Error = () => {
  return (
    <Backdrop open={true}>
      <Card sx={{ maxWidth: 500, minHeight: 200 }}>
        <CardMedia
          component='img'
          height='340'
          image='https://image.freepik.com/free-vector/404-error-page-found_24908-59517.jpg'
          alt='Cartoon with a speech bubble that reads 404 Error'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Oops! This page doesn't exist
          </Typography>
          <Typography variant='body2' color='text.secondary' component='div'>
            The page you're trying to open may not be available or the link is
            incorrect.
          </Typography>
        </CardContent>
        <CardActions>
          <Box maxWidth='sm' m='auto'>
            <Link to='/'>Go to homepage</Link>
          </Box>
        </CardActions>
      </Card>
    </Backdrop>
  );
};

export default Error;
