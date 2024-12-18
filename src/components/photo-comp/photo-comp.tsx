import React, { FC } from 'react';
import { Photo } from '../../types/unsplash-response';

const PhotoComp: FC<{ photo: Photo }> = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <img
        className='img'
        alt='photo.description'
        src={urls.small}
        style={{ borderRadius: '8px' }}
      />
      <a
        className='credit'
        target='_blank'
        rel='noreferrer noopener'
        href={`https://unsplash.com/@${user.username}`}
        style={{
          display: 'block',
          marginTop: '8px',
          textDecoration: 'none',
          color: '#000',
        }}
      >
        {user.name}
      </a>
    </div>
  );
};

export default PhotoComp;
