import axios from 'axios';
axios.defaults.baseURL = 'https://yummy-team4-nodejs-project.onrender.com/api/';

export async function fetchCategoryList() {
  const response = await axios.get('/category-list');
  return response.data;
}

const api = {
  fetchCategoryList,
};

export default api;
