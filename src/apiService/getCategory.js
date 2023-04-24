import axios from 'axios';

export const getRecipesByCategory = async (
  category,
  token,
  page = 1,
  limit = 8
) => {
  try {
    const respons = await axios.get(
      `/api/recipes/category/${category}?page=${page}&limit=${limit}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
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
