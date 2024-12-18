import { createApi } from 'unsplash-js';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

if (!accessKey) {
  throw new Error('REACT_APP_UNSPLASH_ACCESS_KEY is not defined');
}

const api = createApi({
  accessKey,
});

export const fetchPhotos = async (query: string) => {
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
};
