import axios from 'axios';

async function AddRecipe(recipe) {
  try {
    const response = await axios.post('/api/ownRecipes', recipe, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function FetchRecipes(page = 1, limit = 4) {
  try {
    const params = {
      page: page,
      limit: limit,
    };
    const response = await axios.get('/api/ownRecipes', { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function DeleteRecipe(id) {
  try {
    const response = await axios.delete(`/api/ownRecipes/${id}`);

  return response.data;
  } catch (error) {
    console.error(error);
  }
}

const api = {
  AddRecipe,
  FetchRecipes,
  DeleteRecipe,
};

export default api;
