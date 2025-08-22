import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers } from '../api/campersAPI';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (cfg = {}, { rejectWithValue }) => {
    try {
      const data = await getCampers(cfg);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearCampers: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCampers } = campersSlice.actions;
export default campersSlice.reducer;
