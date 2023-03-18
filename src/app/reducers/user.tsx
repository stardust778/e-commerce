import { createSlice } from '@reduxjs/toolkit';

export interface IUserState {
  user: {
    isUserAuthenticated: boolean;
  }
}

const initialState = {
  isUserAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsUserAuthenticated: (state, action) => {
      state.isUserAuthenticated = action.payload;
    }
  },
});

export const { setIsUserAuthenticated } = userSlice.actions;
export default userSlice.reducer;
