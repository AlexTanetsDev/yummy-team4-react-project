import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getMainPageRecipes = async token => {
  setAuthHeader(token);
  try {
    const response = await axios.get('api/recipes/main-page');
    return response;
  } catch (error) {
    console.log(error);
  }
};
