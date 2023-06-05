import axios from 'axios';

export const getAreasList = async () => {
  try {
    const res = await axios.get('/api/area-list');
    return res.data;
  } catch (error) {
    return;
  }
};
