import axios from 'axios';

export async function fetchCategoryList() {
  const response = await axios.get('/api/category-list');
  return response.data;
}

const api = {
  fetchCategoryList,
};

export default api;
