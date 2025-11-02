import type { HotelWithPrice } from '../../types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


interface ToursState {
  hotelsWithPrice: HotelWithPrice[]
}

const initialState: ToursState = {
  hotelsWithPrice: [],
}

export const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    setHotelsWithPrice: (state, action: PayloadAction<HotelWithPrice[]>) => {
      state.hotelsWithPrice = action.payload
    },
  }
})

export default toursSlice.reducer