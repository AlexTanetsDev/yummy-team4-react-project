import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getRecipeById = async (id, token) => {
  setAuthHeader(token);
  try {
    const response = await axios.get(`/recipes/id/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
