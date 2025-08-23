import { createAsyncThunk } from '@reduxjs/toolkit';
import campersApi from '../../api/campersAppi';

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
