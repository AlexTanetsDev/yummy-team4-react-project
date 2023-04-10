import axios from 'axios';

export const subscribeUser = async body => {
  const { data } = await axios.post('/subscribe', body);
  return data;
};
