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

export const addToShoppingList = async () => {
  const response = await axios.post('api/shopping-list', {
    title: 'Title',
    quantity: '2',
    thumb:
      'https://res.cloudinary.com/dkkt8rmcn/image/upload/v1680464746/ndlcqobhy7tsrh5fgjoi.jpg',
  });
  console.log(response);
};
