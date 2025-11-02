import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  isOpened: boolean;
  query: string;
  countryId: string | null;
}

const initialState: SearchState = {
  isOpened: false,
  query: '',
  countryId: null,
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
  },
});

export default searchSlice.reducer;