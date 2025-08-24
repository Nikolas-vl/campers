// redux/campers/campersSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './campersOperations';

const initialState = {
  items: [],
  total: 0,
  selectedCamper: null,
  loading: false,
  error: null,
  loadedPages: {}, // <— тут тримаємо, які сторінки вже підвантажили
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
      state.loadedPages = {}; // <— не забудь скинути
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

        const { items = [], total } = action.payload || {};
        const page = action.meta?.arg?.page ?? 1;

        // Якщо цю сторінку вже вантажили — просто ігноруємо (нічого не додаємо вдруге)
        if (state.loadedPages[page]) {
          if (typeof total === 'number') state.total = total;
          return;
        }

        if (page === 1 && Object.keys(state.loadedPages).length === 0) {
          // Перше завантаження каталогу
          state.items = items;
        } else {
          // Додаємо тільки унікальні id (захист від дублікатів)
          const seen = new Set(state.items.map(i => i.id));
          const unique = items.filter(i => !seen.has(i.id));
          state.items.push(...unique);
        }

        state.loadedPages[page] = true;
        if (typeof total === 'number') state.total = total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load campers'; // <— виправив синтаксис
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
        state.error = action.payload || 'Failed to load camper'; // <— виправив синтаксис
      });
  },
});

export const { clearSelectedCamper, clearCampers } = campersSlice.actions;
export default campersSlice.reducer;
