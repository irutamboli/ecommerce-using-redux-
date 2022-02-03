import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

// First, create the thunk
export const getProducts = createAsyncThunk(
    'ecomm/getProducts',
    async (limit) => {
       const products= await axios.get(`https://fakestoreapi.com/products`)
      return products.data;
    }
  )