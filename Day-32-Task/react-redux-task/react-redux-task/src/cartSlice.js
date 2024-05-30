import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './api';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.items.find(item => item.id === itemToAdd.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({...itemToAdd, quantity: 1});
      }
      state.totalQuantity++;
      state.totalPrice += itemToAdd.price;
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      const existingItem = state.items.find(item => item.id === itemIdToRemove);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== itemIdToRemove);
        } else {
          existingItem.quantity--;
        }
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);
      if (existingItem) {
        state.totalQuantity += (quantity - existingItem.quantity);
        state.totalPrice += (quantity - existingItem.quantity) * existingItem.price;
        existingItem.quantity = quantity;
      }
    },
    setProducts: (state, action) => {
      state.items = action.payload; // Update items array with fetched products
    },
  },
});

export const { addItem, removeItem, updateQuantity, setProducts } = cartSlice.actions;

export const fetchProductsAndInitializeState = () => async (dispatch) => {
  try {
    const products = await fetchProducts();
    dispatch(setProducts(products));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export default cartSlice.reducer;