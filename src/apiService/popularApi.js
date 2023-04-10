import axios from 'axios';

export async function fetchPopularList() {
  const response = await axios.get('/api/popular-recipe');
  return response.data;
}

const api = {
  fetchPopularList,
};

export default api;
