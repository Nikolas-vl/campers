import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import campersReducer from './campers/campersSlice';
import filtersReducer from './filters/filtersSlice';
import favoriteReducer from './favorite/favoriteSlice';
import catalogUiReducer from './ui/catalogUiSlice';

const persistConfig = {
  key: 'TravelTrucks',
  storage,
  blacklist: ['filters', 'campers'],
};

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
  favorite: favoriteReducer,
  catalogUi: catalogUiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
