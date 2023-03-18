import { createSlice } from '@reduxjs/toolkit';

export interface IMenuState {
  menu: {
    isMenuOpen: boolean;
  }
}

const initialState = {
  isMenuOpen: false,
};

export const menuSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setIsMenuOpen: (state, action) => {
      if (window.innerWidth <= 768) {
        if (action.payload) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
      }

      state.isMenuOpen = action.payload;
    }
  },
});

export const { setIsMenuOpen } = menuSlice.actions;
export default menuSlice.reducer;
