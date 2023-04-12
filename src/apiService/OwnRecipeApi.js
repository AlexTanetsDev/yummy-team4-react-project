import axios from 'axios';

async function AddRecipe(recipe) {
  const response = await axios.post('/api/ownRecipes', recipe, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}

async function FetchRecipes(page = 1, limit = 4) {
  const params = {
    page: page,
    limit: limit,
  };
  const response = await axios.get('/api/ownRecipes', { params });
  return response.data;
}

async function DeleteRecipe({ recipeId }) {
  const response = await axios.delete('/api/ownRecipes', {
    params: { recipeId },
  });
  return response.data;
}

const api = {
  AddRecipe,
  FetchRecipes,
  DeleteRecipe,
};

export default api;
