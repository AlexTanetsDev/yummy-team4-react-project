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
    const { data } = await axios.get(
      `/api/ownRecipes?page=${page}&limit=${limit}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function DeleteRecipe(id) {
  try {
    const { data } = await axios.delete(`/api/ownRecipes/${id}`);

    return data;
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
