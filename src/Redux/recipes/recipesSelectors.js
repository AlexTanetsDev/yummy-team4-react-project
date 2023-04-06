// import { createSelector } from '@reduxjs/toolkit';

export const selectRecipes = state => {
  return state.recipes.entities;
  //     .filter(item =>
  // item.name.toLowerCase().includes(filteredValue)
};
