import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Country } from '../types';
import { getCountries } from '../api';

export const countriesAPI = createApi({
  reducerPath: 'countriesAPI',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Countries'],
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      queryFn: async() => {
        try {
          const response = await getCountries();
          const json = await response.json();
          const countriesArray: Country[] = Object.values(json);
          console.log('json', countriesArray)
          return { data: countriesArray };
        } catch (error) {
          return { error: error as Error };
        }
      },
      providesTags: () => ['Countries']
    }),
  }),
})