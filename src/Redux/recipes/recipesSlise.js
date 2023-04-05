import { createSlice } from '@reduxjs/toolkit';
import { maimPageRecipes } from './recipesOperation';

export const recipesSlice = createSlice({
  name: 'recipes',
  instialState: { entities: [], isLoading: false, error: null },
  extraReducers: {
    [maimPageRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.entities = action.payload;
    },
    [maimPageRecipes.fulfilled]: state => (state.isLoading = true),
    [maimPageRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
