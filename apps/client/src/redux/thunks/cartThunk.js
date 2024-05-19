import { createAsyncThunk } from '@reduxjs/toolkit';
import { userRequest } from '../../network/RequestMethod';
import { addOrUpdateProduct, clearCart } from '../cartRedux';

export const addProductAsync = createAsyncThunk(
  'cart/addProductAsync',
  async (cartData, { rejectWithValue, dispatch }) => {
    try {
      const { userId, products } = cartData;
      let updatedCartData = { userId, products: [], total: 0, items: 0 };

      const existingItem = localStorage.getItem('cartData');
      if (existingItem) {
        const existingCartData = JSON.parse(existingItem);
        updatedCartData = {
          ...existingCartData,
          userId,
          products: existingCartData.products || [],
        };

        // Update quantities or add new products
        products.forEach((product) => {
          const existingProduct = updatedCartData.products.find(
            (p) => p._id === product._id
          );
          if (existingProduct) {
            existingProduct.quantity += product.quantity;
          } else {
            updatedCartData.products.push({ ...product });
          }
        });
      } else {
        updatedCartData.products = products;
      }

      // Calculate total price and item count
      updatedCartData.total = updatedCartData.products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
      updatedCartData.items = updatedCartData.products.length;

      // If user is logged in, send cart data to server
      if (userId) {
        const response = await userRequest.post('/cart', updatedCartData);
        return response.data;
      } else {
        localStorage.setItem('cartData', JSON.stringify(updatedCartData));
        dispatch(addOrUpdateProduct({ products: updatedCartData.products }));
        return updatedCartData;
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const clearCartAsync = createAsyncThunk(
  'cart/clearCartAsync',
  async (userId, { rejectWithValue, dispatch }) => {
    try {
      const res = await userRequest.delete(`/cart/clear-cart/${userId}`);
      if (res.status === 200) {
        dispatch(clearCart());
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateProductQuantity = createAsyncThunk(
  'cart/upateProductAsync',
  async ({ rejectWithValue, dispatch }) => {
    try {
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
