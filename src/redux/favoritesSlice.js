import { createSlice } from '@reduxjs/toolkit';

const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: savedFavorites,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      if (state.items.includes(action.payload)) {
        state.items = state.items.filter(id => id !== action.payload);
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
