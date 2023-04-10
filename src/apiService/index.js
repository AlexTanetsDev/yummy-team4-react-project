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

export {
  getAllFavorite,
  addFavoriteById,
  deleteFavoriteById,
  OwnRecipeApi,
  getRecipeById,
  IngredientsApi,
  CategoryApi,
  PopularApi,
};
