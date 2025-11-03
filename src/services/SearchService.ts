import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Country, FullHotel, GeoEntity, GetSearchPricesResponse, Hotel, PriceOffer, StartSearchResponse, StopSearchResponse } from '../types';
import { getCountries, getHotel, getHotels, getPrice, getSearchPrices, searchGeo, startSearchPrices, stopSearchPrices } from '../api';

export const searchAPI = createApi({
  reducerPath: 'countriesAPI',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Countries', 'Geo', 'Prices', 'StartSearchPrices', 'Hotels', 'Price', 'Hotel', 'StopSearch'],
  endpoints: (builder) => ({
    fetchCountries: builder.query<(Country & { type: 'country' })[], void>({
      queryFn: async () => {
        try {
          const response = await getCountries();
          const json = await response.json();
          const countriesArray = Object.values(json).map((c) => ({
            ...(c as Country),
            type: 'country' as const,
          }));

          return { data: countriesArray };
        } catch (error) {
          return { error: error as Error };
        }
      },
      providesTags: () => [{ type: 'Countries' }]
    }),
    fetchGeo: builder.query<GeoEntity[], string>({
      queryFn: async (query: string) => {
        try {
          const formattedQuery = query.charAt(0).toUpperCase() + query.slice(1);
          const response = await searchGeo(formattedQuery);
          const json = await response.json();
          const geoArray: GeoEntity[] = Object.values(json);
          return { data: geoArray }
        } catch (error) {
          return { error: error as Error };
        }
      },
      providesTags: () => [{ type: 'Geo' }]
    }),
    fetchStartSearchPrices: builder.query<StartSearchResponse, string>({
      queryFn: async (countryId: string) => {
        try {
          const response = await startSearchPrices(countryId);
          const json = await response.json();
          return { data: json };
        } catch (error) {
          return { error: error as Error };
        }
      },
      providesTags: () => [{ type: 'StartSearchPrices' }],
    }),
    fetchGetSearchPrices: builder.query<GetSearchPricesResponse, string>({
      queryFn: async (token: string) => {
        try {
          const response = await getSearchPrices(token);
          const json = await response.json();
          const pricesArray = Object.values(json.prices || {});
          const transformed = {
            ...json,
            prices: pricesArray,
          };

          return { data: transformed };
        } catch (error) {
          return { error: error as Error };
        }
      },
      providesTags: () => [{ type: 'Prices' }],
    }),
    fetchHotels: builder.query<Hotel[], string>({
      queryFn: async(countryId: string) => {
        try {
          const response = await getHotels(countryId);
          const json = await response.json();
          const transformed: Hotel[] = Object.values(json || {});

          return { data: transformed };
        } catch (error) {
          return { error: error as Error };
        }
      },
      providesTags: () => [{ type: 'Hotels' }]
    }),
    fetchPrice: builder.query<PriceOffer, string>({
      queryFn: async (priceId: string) => {
        try {
          const price = await getPrice(priceId);
          const json = await price.json();

          return { data: json };
        } catch (error) {
          return { error: error as Error };
        }
      },
      providesTags: () => [{ type: 'Price' }]
    }),
    fetchHotel: builder.query<FullHotel, number>({
      queryFn: async (hotelId) => {
        try {
          const hotel = await getHotel(hotelId);
          const json = await hotel.json();

          return { data: json };
        } catch (error) {
          return { error: error as Error };
        }
      },
      providesTags: () => [{ type: 'Hotel' }]
    }),
    stopSearchPrices: builder.query<StopSearchResponse, string>({
      queryFn: async (token: string) => {
        try {
         const response = await stopSearchPrices(token);

          return { data: await response.json() };
        } catch (error) {
          return { error: error as Error };
        }
      },
      providesTags: () => [{ type: 'StopSearch' }]
    })
  }),
})