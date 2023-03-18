import { configureStore } from '@reduxjs/toolkit';

import menu from '../reducers/menu';
import user from '../reducers/user';

export const store = configureStore({
  reducer: {
    menu,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
