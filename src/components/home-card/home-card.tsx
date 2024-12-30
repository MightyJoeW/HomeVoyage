import { FC } from 'react';
import { Link, useLocation } from 'react-router';
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
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <Link to={`homes/${photo?.id}`}>
        <img
          className='img'
          alt='photo.description'
          src={
            location?.pathname === '/'
              ? photo?.urls?.small
              : photo?.urls?.regular
          }
          style={location.pathname === '/' ? enabledLink : disabledLink}
        />
      </Link>
      <a
        className='credit'
        target='_blank'
        rel='noreferrer noopener'
        href={`https://unsplash.com/@${photo?.user?.username}`}
        style={{
          display: 'block',
          marginTop: '8px',
          textDecoration: 'none',
          color: '#000',
        }}
      >
        <strong>Photographer:</strong> {photo?.user?.name}
      </a>
    </div>
  );
};

export default HomeCard;
