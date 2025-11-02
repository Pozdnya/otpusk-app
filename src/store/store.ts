import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './reducers/SearchSlice';
import { searchAPI } from '../services/SearchService';
import { toursSlice } from './reducers/ToursSlice';

const rootReducer = combineReducers({
  searchReducer: searchSlice.reducer,
  toursReducer: toursSlice.reducer,
  [searchAPI.reducerPath]: searchAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchAPI.middleware)
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];