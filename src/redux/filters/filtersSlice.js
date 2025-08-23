import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  vehicleType: '',
  equipment: {
    ac: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    toggleEquipment: (state, action) => {
      const key = action.payload;
      state.equipment[key] = !state.equipment[key];
    },
    resetFilters: () => initialState,
  },
});

export const { setLocation, setVehicleType, toggleEquipment, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
