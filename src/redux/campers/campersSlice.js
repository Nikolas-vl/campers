import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './campersOperations';

const initialState = {
  items: [],
  total: 0,
  selectedCamper: null,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearSelectedCamper: state => {
      state.selectedCamper = null;
    },
    clearCampers: state => {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;

        const { items, total } = action.payload;
        const page = Number(action.meta.arg?.page || 1);

        if (page === 1) {
          state.items = items;
        } else {
          state.items = [...state.items, ...items];
        }

        state.total = total ?? state.items.length;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load campers';
      })
      .addCase(fetchCamperById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load camper';
      });
  },
});

export const { clearSelectedCamper, clearCampers } = campersSlice.actions;
export default campersSlice.reducer;
