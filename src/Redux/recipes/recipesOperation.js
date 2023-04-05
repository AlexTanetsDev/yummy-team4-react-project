import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const mainPageRecipes = createAsyncThunk(
  'pesipes/maimPageRecipes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://connections-api.herokuapp.com/pecipes/main'
      );
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
