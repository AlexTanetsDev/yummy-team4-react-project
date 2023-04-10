import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-team4-nodejs-project.onrender.com/api';

export const getRecipesByCategory = async (category, token) => {
  try {
    const respons = await axios.get(`/recipes/category/${category}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return respons.data;
  } catch (error) {
    return error.message;
  }
};

export const getCategoryList = async token => {
  try {
    const respons = await axios.get(`/category-list`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return respons.data;
  } catch (error) {
    return error.message;
  }
};
