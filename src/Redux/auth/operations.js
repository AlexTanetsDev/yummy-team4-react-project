import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
// import { selectVerificationToken } from './selectors';

axios.defaults.baseURL = 'https://yummy-team4-nodejs-project.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/users/register', credentials);
      setAuthHeader(response.data.token);
      const result = response.data;
      console.log(result);
      return result;
    } catch (error) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const verifyEmail = createAsyncThunk(
//   'auth/verify',
//   async (_, thunkAPI) => {
//     try {
//       const verificationToken = useSelector(selectVerificationToken);
//       const response = await axios.get(`/verify/${verificationToken}`);
//       setAuthHeader(response.data.token);
//       const result = response.data;
//       console.log(result);
//       return result;
//     } catch (error) {
//       console.log(error.response.data.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const signIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
