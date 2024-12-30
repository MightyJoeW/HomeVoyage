interface Photo {
  username: string;
  name: string;
  description: string;
  alt_description: string;
  url: string;
}

interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
}

interface Price {
  amount: string;
  currency: string;
}

interface Details {
  beds: number;
  baths: number;
  sqft: number;
  daysOnMarket: number;
  description: string;
}

export interface HouseApiResponse {
  id: string;
  address: Address;
  price: Price;
  details: Details;
  photo: Photo;
}
