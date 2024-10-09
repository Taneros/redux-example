import { configureStore, createSelector } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemon/pokemonSlice';
import cartReducer from '../features/cart/cartSlice';
import searchReducer from '../features/search/searchSlice';
import filtersReducer from '../features/filters/filtersSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    cart: cartReducer,
    search: searchReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const createAppSelector = createSelector.withTypes<RootState>();
