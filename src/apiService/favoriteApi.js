import axios from 'axios';


axios.defaults.baseURL = 'https://yummy-team4-nodejs-project.onrender.com/api';

export const getAllFavorite = async (page, limit) => {
  try {
    const { data } = await axios.get(`/favorite?page=${page}&limit=${limit}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addFavoriteById = async id => {
  try {
    const { data } = await axios.patch(`/favorite/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavoriteById = async id => {
  try {
    const { data } = await axios.delete(`/favorite/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
