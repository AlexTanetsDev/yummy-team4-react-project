import { createSlice } from '@reduxjs/toolkit';
import {
  signIn,
  logOut,
  refreshUser,
  updateSubscription,
  categoryList,
  updateUser,
  verify,
  register,
} from './operations';

const initialState = {
  user: { name: null, email: null, avatarURl: '', verify: false },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  categoryList: [],
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(verify.pending, state => {
        state.isLoading = true;
      })
      .addCase(verify.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(verify.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, avatarURL: '' };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(updateSubscription.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateSubscription.fulfilled, (state, action) => {
        state.user.subscription = action.payload.subscription;
        state.error = null;
      })
      .addCase(updateSubscription.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(categoryList.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(categoryList.fulfilled, (state, action) => {
        state.categoryList = action.payload;
        state.error = null;
      })
      .addCase(categoryList.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
        state.user.name = action.payload.name;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
