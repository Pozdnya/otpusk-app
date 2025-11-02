import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  isOpened: boolean;
  query: string;
  countryId: string | null;
  error: string;
  loading: boolean;
  hasSearched?: boolean
}

const initialState: SearchState = {
  isOpened: false,
  query: '',
  countryId: null,
  error: '',
  loading: false,
  hasSearched: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    openDropdown: (state, action: PayloadAction<boolean>) => {
      state.isOpened = action.payload;
    },
    setQueryValue: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setCountryId: (state, action: PayloadAction<string>) => {
      state.countryId = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setHasSearched: (state, action: PayloadAction<boolean>) => {
      state.hasSearched = action.payload;
    },
  },
});

export default searchSlice.reducer;