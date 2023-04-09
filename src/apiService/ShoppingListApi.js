import axios from 'axios';
export const baseUrl = 'https://yummy-team4-nodejs-project.onrender.com/';

export async function fetchShoppingList() {
  const response = await axios.get('/api/shopping-list');

  return response;
}

export async function deleteShoppingListItem(id) {
  const response = await axios.delete(`/api/shopping-list/${id}`);
  return response;
}
