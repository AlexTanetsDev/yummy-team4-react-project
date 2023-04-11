import axios from 'axios';

export const subscribeUser = async body => {
  const { data } = await axios.post('/api/subscribe', body);
  return data;
};
