export interface Photo {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
}

interface Results {
  results: Photo[];
}

export interface HomeApiResponse {
  total: number;
  total_pages: number;
  response: Results;
  results: Photo[];
  errors?: string[];
}
