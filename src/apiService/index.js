import OwnRecipeApi from './OwnRecipeApi';
import IngredientsApi from './IngredientsApi';
import CategoryApi from './CategoryApi';
import PopularApi from './popularApi';
import {
  getAllFavorite,
  addFavoriteById,
  deleteFavoriteById,
} from './favoriteApi';
import { getRecipeById } from './getRecipeById';
import { getCategoryList, getRecipesByCategory } from './getCategory';
import { getSearchedRecipes } from './search.js';
import { getMainPageRecipes } from './MainPageRecipesApi';

export {
  getAllFavorite,
  addFavoriteById,
  deleteFavoriteById,
  OwnRecipeApi,
  getRecipeById,
  getCategoryList,
  getRecipesByCategory,
  IngredientsApi,
  CategoryApi,
  getSearchedRecipes,
  PopularApi,
  getMainPageRecipes,
};
