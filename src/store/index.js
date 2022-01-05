import { configureStore } from '@reduxjs/toolkit';

import userReducer from 'containers/App/slice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
