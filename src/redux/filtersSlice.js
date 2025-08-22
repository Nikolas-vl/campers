import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    type: '',
    options: [],
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setOptions: (state, action) => {
      state.options = action.payload;
    },
    resetFilters: state => {
      state.location = '';
      state.type = '';
      state.options = [];
    },
  },
});

export const { setLocation, setType, setOptions, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
