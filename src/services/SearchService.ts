import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Country, GeoEntity } from '../types';
import { getCountries, searchGeo } from '../api';

export const searchAPI = createApi({
  reducerPath: 'countriesAPI',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Countries'],
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
      providesTags: () => ['Countries']
    }),
    fetchGeo: builder.query<GeoEntity[], string>({
      queryFn: async (query: string) => {
        try {
          const response = await searchGeo(query);
          const json = await response.json();
          const geoArray: GeoEntity[] = Object.values(json);
          return { data: geoArray }
        } catch (error) {
          return { error: error as Error };
        }
      },
      providesTags: () => ['Countries']
    }),
  }),
})