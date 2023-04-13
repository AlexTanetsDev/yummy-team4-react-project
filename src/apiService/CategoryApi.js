import axios from 'axios';

export async function fetchCategoryList() {
  try {
    const response = await axios.get('/api/category-list');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const api = {
  fetchCategoryList,
};

export default api;
