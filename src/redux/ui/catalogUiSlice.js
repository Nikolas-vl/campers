import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  appliedFilters: {},
};

const catalogUiSlice = createSlice({
  name: 'catalogUi',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setAppliedFilters: (state, action) => {
      state.appliedFilters = action.payload || {};
    },
    resetUi: () => initialState,
  },
});

export const { setPage, setAppliedFilters, resetUi } = catalogUiSlice.actions;
export default catalogUiSlice.reducer;
