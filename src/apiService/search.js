import axios from 'axios';

export const getSearchedRecipes = async (requestType, query, page) => {
  try {
    const response = await axios.get(
      `/api/search/${requestType}/${query}?page=${page ?? 1}&limit=12`
    );
    return response.data;
  } catch (error) {
    return;
  }
};
