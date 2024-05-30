import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { fetchProductsAndInitializeState } from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(fetchProductsAndInitializeState());