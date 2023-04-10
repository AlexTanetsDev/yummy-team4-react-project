import axios from 'axios';
axios.defaults.baseURL = 'https://yummy-team4-nodejs-project.onrender.com/api/';

export async function fetchIngredientsList() {
  const response = await axios.get('/ingredients/list');
  return response.data;
}

const api = {
  fetchIngredientsList,
};

export default api;
