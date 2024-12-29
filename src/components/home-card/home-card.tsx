import React, { FC } from 'react';
import { Link } from 'react-router';
import { Photo } from '../../types/unsplash-response';

const HomeCard: FC<{ photo: Photo }> = ({ photo }) => {
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <Link to={`homes/${photo.id}`}>
        <img
          className='img'
          alt='photo.description'
          src={photo.urls.small}
          style={{ borderRadius: '8px' }}
        />
      </Link>
      <a
        className='credit'
        target='_blank'
        rel='noreferrer noopener'
        href={`https://unsplash.com/@${photo.user.username}`}
        style={{
          display: 'block',
          marginTop: '8px',
          textDecoration: 'none',
          color: '#000',
        }}
      >
        {photo.user.name}
      </a>
    </div>
  );
};

export default HomeCard;
