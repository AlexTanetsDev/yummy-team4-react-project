import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from './operations';

const initialState = {
  user: { name: '', email: '' },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjOGU1NmY3M2E0YmE5ZDlhNzk4MTYiLCJpYXQiOjE2ODA4MTI5NDMsImV4cCI6MTY4MDg5NTc0M30.Nul-iAWztQqWS7NC-UD6qFtvox0bsLT5E24rfQlr6QE',
  isLoggedIn: true,
  isGettingCurrent: true,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    renewError(state) {
      state.error = null;
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [login.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [logout.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.pending]: state => {
      state.isGettingCurrent = true;
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isGettingCurrent = false;
    },
    [getCurrentUser.rejected]: (state, action) => {
      state.isGettingCurrent = false;
      state.error = action.payload;
    },
  },
});

export const { renewError } = authSlice.actions;
