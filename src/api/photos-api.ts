import { createApi } from 'unsplash-js';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const isDev: boolean = process.env.NODE_ENV === 'development';

if (!accessKey) {
  throw new Error('REACT_APP_UNSPLASH_ACCESS_KEY is not defined');
}

const api = createApi({
  accessKey,
});

export const fetchPhotos = async (query: string) => {
  if (isDev) {
    const response = await fetch('http://localhost:8000/data');
    const result = await response.json();
    return result;
  } else {
    try {
      const result = await api.search.getPhotos({
        query,
        orientation: 'landscape',
      });
      return result;
    } catch (error) {
      console.error('Error fetching photos:', error);
      throw error;
    }
  }
};
