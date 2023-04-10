import axios from 'axios';

export const getAllFavorite = async () => {
  try {
    const { data } = await axios.get(`/api/favorite`);
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
