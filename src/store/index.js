import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from 'containers/HomePage/slice';
import userReducer from 'containers/App/slice';

export default configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});
