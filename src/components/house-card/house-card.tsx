import { FC } from 'react';
import { Link, useLocation } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { HouseApiResponse } from '../../types/house-types';

interface PhotoProps {
  pointerEvents: React.CSSProperties['pointerEvents'];
}

enum PhotoPropsEnum {
  auto = 'auto',
  none = 'none',
}

const disabledLink: PhotoProps = {
  pointerEvents: PhotoPropsEnum.none,
};

const enabledLink: PhotoProps = {
  pointerEvents: PhotoPropsEnum.auto,
};

const HouseCard: FC<{ house: HouseApiResponse }> = ({ house }) => {
  const location = useLocation();
  const isLinkEnabled = location.pathname === '/' ? enabledLink : disabledLink;

  return (
    <Card sx={{ maxWidth: 345, textAlign: 'center', marginBottom: '4px' }}>
      <Link to={house?.id} style={isLinkEnabled}>
        <CardMedia
          component='img'
          image={house.photo.url}
          alt={`${house.photo.alt_description}`}
        />
      </Link>
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {house.address.line1}
        </Typography>
        {house.address.line2 && (
          <Typography variant='body2' color='text.secondary'>
            {house.address.line2}
          </Typography>
        )}
        <Typography variant='body2' color='text.secondary'>
          {house.address.city}, {house.address.state} {house.address.zip}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {`${house.details.beds} Beds | ${house.details.baths} Baths | ${house.details.sqft} Sq Ft | ${house.details.daysOnMarket} Days on Market`}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          color='text.secondary'
        >
          {`For Sale $${house.price.amount}`}
        </Typography>
        {location.pathname === '/' && (
          <Typography gutterBottom variant='body1' component='div'>
            <Link
              style={{
                ...isLinkEnabled,
                textDecoration: 'none',
                color: '#0000EE',
              }}
              to={house?.id}
            >
              {'Show details >'}
            </Link>
          </Typography>
        )}
        <Typography variant='subtitle2' color='text.secondary'>
          Photo courtesy of{' '}
          <a
            target='_blank'
            rel='noreferrer noopener'
            href={`https://unsplash.com/@${house.photo?.username}`}
            style={{
              textDecoration: 'none',
              color: '#00000099',
            }}
          >
            {house.photo.name}
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HouseCard;
