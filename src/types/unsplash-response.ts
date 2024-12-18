export type Photo = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

export type ApiResponse = {
  originalResponse: object;
  response: {
    total: number;
    total_pages: number;
    results: Photo[];
  };
  status: number;
  type: string;
  errors?: string[];
};
