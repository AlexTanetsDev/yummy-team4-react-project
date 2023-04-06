import { createSlice } from '@reduxjs/toolkit';
import { mainPageRecipes } from './recipesOperation';

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: { entities: [], isLoading: false, error: null },

  extraReducers: {
    [mainPageRecipes.pending]: (state, action) => {
      state.isLoading = true;
    },
    [mainPageRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.entities = action.payload;
    },

    [mainPageRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
