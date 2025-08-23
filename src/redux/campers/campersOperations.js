import { createAsyncThunk } from '@reduxjs/toolkit';
import campersApi from '../../api/campersAppi';

// GET /campers (з фільтрами)
export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (filters, thunkAPI) => {
    try {
      return await campersApi.getAllCampers(filters);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// GET /campers/:id
export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (id, thunkAPI) => {
    try {
      return await campersApi.getCamperById(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
