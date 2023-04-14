import axios from 'axios';

export const getAllFavorite = async (page = 1, limit = 4) => {
  try {
    const { data } = await axios.get(
      `/api/favorite?page=${page}&limit=${limit}`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addFavoriteById = async id => {
  try {
    const { data } = await axios.patch(`/api/favorite/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavoriteById = async id => {
  try {
    const { data } = await axios.delete(`/api/favorite/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
