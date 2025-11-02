export type Country = { id: string; name: string; flag: string };
export type City = { id: number; name: string; countryId: string; };
export type Hotel = {
  id: number;
  name: string;
  img: string;
  cityId: number;
  cityName: string;
  countryId: string;
  countryName: string;
};

export type GeoEntity =
  | (Country & { type: "country" })
  | (City & { type: "city" })
  | (Hotel & { type: "hotel" });

export enum EntityTypes {
  COUNTRY = 'country',
  CITY = 'city',
  HOTEL = 'hotel',
}

export enum StatusEnums {
  READY = 'ready',
  PENDING = 'pending',
  ERROR = 'error',
}

export type StartSearchResponse = {
  token: string;
  waitUntil: string;
};

export type PriceOffer = {
  id: string;
  amount: number;
  currency: "usd";
  startDate: string;
  endDate: string;
  hotelID?: string;
};

// export type PricesMap = Record<string, PriceOffer>;

export type GetSearchPricesResponse = {
  prices: PriceOffer[];
};