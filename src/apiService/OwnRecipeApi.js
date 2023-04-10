import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-team4-nodejs-project.onrender.com/api/';

async function AddRecipe(recipe) {
  const response = await axios.post('/ownRecipes', recipe, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}

async function FetchRecipes() {
  const response = await axios.get('/ownRecipes');
  return response.data;
}

async function DeleteRecipe({ recipeId }) {
  const response = await axios.delete('/ownRecipes', {
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
