import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './reducers/DropdownSlice';
import { searchAPI } from '../services/SearchService';

const rootReducer = combineReducers({
  dropdownReducer,
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