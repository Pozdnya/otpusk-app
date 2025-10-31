import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface DropdownState {
  isOpened: boolean;
  query: string;
}

const initialState: DropdownState = {
  isOpened: false,
  query: '',
};

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    openDropdown: (state, action: PayloadAction<boolean>) => {
      state.isOpened = action.payload;
    },
    setQueryValue: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export default dropdownSlice.reducer;