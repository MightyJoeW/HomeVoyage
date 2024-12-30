import { FC } from 'react';
import { Link, useLocation } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { HomeApiResponse } from '../../types/homes-types';

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

const HomeCard: FC<{ photo: HomeApiResponse }> = ({ photo }) => {
  const location = useLocation();
  const isLinkEnabled = location.pathname === '/' ? enabledLink : disabledLink;

  return (
    <Card sx={{ maxWidth: 345, textAlign: 'center', marginBottom: '4px' }}>
      <Link to={`homes/${photo?.id}`} style={isLinkEnabled}>
        <CardMedia
          component='img'
          image={photo.urls.regular}
          alt={`${photo.alt_description}`}
        />
      </Link>
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          123 Main St
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {'Allen, TX 75013'}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          3 Beds | 2 Baths | 1,200 Sq Ft | 66 Days on Market
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          color='text.secondary'
        >
          {`For Sale ${'$474,900'}`}
        </Typography>
        {location.pathname === '/' && (
          <Typography gutterBottom variant='body1' component='div'>
            <Link
              style={{
                ...isLinkEnabled,
                textDecoration: 'none',
                color: '#0000EE',
              }}
              to={`homes/${photo?.id}`}
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
            href={`https://unsplash.com/@${photo?.user?.username}`}
            style={{
              textDecoration: 'none',
              color: '#00000099',
            }}
          >
            {photo.user.name}
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
