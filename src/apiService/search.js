import axios from 'axios';

const BASE_URL = 'https://yummy-team4-nodejs-project.onrender.com/api';
// const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMxY2RjOTcwZDM1MjJkYWU0YjlkODYiLCJpYXQiOjE2ODExNDU4NTcsImV4cCI6MTY4MTIyODY1N30.GuqYIRCC2a8FNVf2E8xBLVI7vS5gQ4TXivo9STsAMCY';


axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

export const getSearchedRecipes = async (requestType, query) => {
    try {
        const response = await axios.get(`/search/${requestType}/query=${query}?limit=12`);
        return response.data;
    } catch (error){
        console.log(error);
    }
};