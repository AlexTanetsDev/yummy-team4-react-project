import axios from 'axios';

export async function fetchIngredientsList() {
  const response = await axios.get('/api/ingredients/list');
  return response.data;
}

const api = {
  fetchIngredientsList,
};

export default api;
