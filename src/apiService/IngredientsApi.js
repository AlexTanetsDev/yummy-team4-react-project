import axios from 'axios';

export async function fetchIngredientsList() {
  try {
    const response = await axios.get('/api/ingredients/list');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const api = {
  fetchIngredientsList,
};

export default api;
