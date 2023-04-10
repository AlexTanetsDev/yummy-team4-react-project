import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMyODVjN2Q1MTc4MjVjZDQ4MzRlNzkiLCJpYXQiOjE2ODEwMzI3MzIsImV4cCI6MTY4MTExNTUzMn0.c5qYOeGF5OFGOH5jx1epKvxf7kxyGj1jmCIiLo-UQ5A';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getRecipeById = async id => {
  setAuthHeader(token);
  const response = await axios.get(`/api/recipes/id/${id}`);

  console.log(response.data);
};
