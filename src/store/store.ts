import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import userReducer from './reducers/UserSlice';
// import { postAPI } from '../services/PostService';
import dropdownReducer from './reducers/DropdownSlice';

const rootReducer = combineReducers({
  dropdownReducer,
  // [postAPI.reducerPath]: postAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];