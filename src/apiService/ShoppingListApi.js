import axios from 'axios';
import { toast } from 'react-hot-toast';
export const baseUrl = 'https://yummy-team4-nodejs-project.onrender.com/';

export async function fetchShoppingList() {
  const response = await axios.get('/api/shopping-list');

  return response;
}

export async function deleteShoppingListItem(id) {
  try {
    const response = await axios.delete(`/api/shopping-list/${id}`);
    return response;
  } catch (error) {
    toast.error('Something went wrong, try again');
  }
}

export const addToShoppingList = async list => {
  const response = await axios.post(
    'api/shopping-list',
    { products: list },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  if (!response) return;

  return response;
};
