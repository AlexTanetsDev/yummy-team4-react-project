import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-team4-nodejs-project.onrender.com/api/';

async function FetchAddRecipe(recipe) {
  try {
    const response = await axios.post('/ownRecipes', recipe, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    return error.message;
  }
}

const api = {
  FetchAddRecipe,
};

export default api;
