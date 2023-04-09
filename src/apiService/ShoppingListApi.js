import axios from 'axios';
export const baseUrl = 'https://yummy-team4-nodejs-project.onrender.com/';

export async function FetchShoppingList(baseUrl) {
    const response = await axios.get('/api/shopping-list');
    
  if (response.ok) {
    return response.json();
  }
}

const api = {
  FetchShoppingList,
};

export default api;
