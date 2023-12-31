import { createSlice } from '@reduxjs/toolkit';

const savedCartData = localStorage.getItem('cartData');
const initialState = savedCartData
  ? JSON.parse(savedCartData)
  : {
      products: [],
      quantity: 0,
      total: 0,
    };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item._id === newItem._id
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity;

      localStorage.setItem('cartData', JSON.stringify(state));
    },
    updateProductQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const productToUpdate = state.products.find((item) => item._id === _id);

      if (productToUpdate) {
        const diffInQuantity = quantity - productToUpdate.quantity;
        productToUpdate.quantity = quantity;
        state.total += diffInQuantity * productToUpdate.price;
        localStorage.setItem('cartData', JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;

      localStorage.removeItem('cartData');
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const index = state.products.findIndex((item) => item._id === productId);

      if (index !== -1) {
        const removedProduct = state.products[index];
        const removedQuantity = removedProduct.quantity;
        state.quantity -= 1;
        state.total -= removedProduct.price * removedQuantity;
        state.products.splice(index, 1);
        localStorage.setItem('cartData', JSON.stringify(state));
      }
    },
  },
});

export const { addProduct, clearCart, updateProductQuantity, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
