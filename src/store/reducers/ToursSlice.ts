import type { PriceOffer } from '../../types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


interface ToursState {
  tours: PriceOffer[];
}

const initialState: ToursState = {
  tours: [],

}

export const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    setTours: (state, action: PayloadAction<PriceOffer[]>) => {
      state.tours = action.payload
    }
  }
})

export default toursSlice.reducer