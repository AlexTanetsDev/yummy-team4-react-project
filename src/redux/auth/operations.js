import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

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
      const response = await axios.post('api/users/register', credentials);
      if (response) {
        toast.success('Verification letter sent on your email adress', {
          duration: 2000,
          style: {
            width: '300px',
            height: '150px',
            backgroundColor: '#8BAA36',
            color: '#fff',
            fontSize: '20px',
            marginTop: '20%',
            marginRight: 'auto',
            marginLeft: 'auto',
          },
        });
      }
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#DD4F4F',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const verify = createAsyncThunk(
  'auth/verify',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`api/users/verify/${credentials}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resend = createAsyncThunk(
  'auth/resend',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('api/users/verify/', credentials);
      toast.success(response.data.message, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#8BAA36',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#DD4F4F',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const verifyReset = createAsyncThunk(
  'auth/verifyReset',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`api/users/reset/${credentials}`);
      toast.success(response.data.message, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#8BAA36',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#DD4F4F',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await axios.post('api/users/reset', credentials);
      toast.success(response.data.message, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#8BAA36',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#DD4F4F',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const forgot = createAsyncThunk(
  'auth/forgot',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('api/users/forgot', credentials);
      toast.success(response.data.message, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#8BAA36',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#DD4F4F',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#DD4F4F',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const categoryList = createAsyncThunk(
  'auth/categoryList',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`/api/category-list`, credentials);
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      return response.data;
    } catch (error) {
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
      const res = await axios.get('api/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateSubscription = createAsyncThunk(
  'auth/subscription',
  async (cred, thunkAPI) => {
    try {
      const { data } = await axios.patch('/api/subscribe', cred);
      toast.success('You have successfully subscribed', {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#8BAA36',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return data;
    } catch (error) {
      toast.error(`Something went wrong. Try again...`, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#DD4F4F',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch('api/users/update', credentials, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        style: {
          width: '300px',
          height: '150px',
          backgroundColor: '#DD4F4F',
          color: '#fff',
          fontSize: '20px',
          marginTop: '20%',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
