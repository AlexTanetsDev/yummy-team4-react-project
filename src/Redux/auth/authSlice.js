import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isGettingCurrent: false,
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
