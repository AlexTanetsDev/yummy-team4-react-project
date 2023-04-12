import axios from 'axios';

export async function fetchPopularList() {
  try {
    const response = await axios.get('/api/popular-recipe');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const api = {
  fetchPopularList,
};

export default api;
