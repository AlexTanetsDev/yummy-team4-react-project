import axios from 'axios';

export const getRecipesByCategory = async (category, token) => {
  try {
    const respons = await axios.get(`/api/recipes/category/${category}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return respons.data;
  } catch (error) {
    return error.message;
  }
};

export const getCategoryList = async token => {
  try {
    const respons = await axios.get(`/api/category-list`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return respons.data;
  } catch (error) {
    return error.message;
  }
};
