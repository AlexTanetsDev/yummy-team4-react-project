import { createSlice } from '@reduxjs/toolkit';
import {
  signIn,
  logOut,
  refreshUser,
  updateSubscription,
  categoryList,
  updateUser,
  verify,
} from './operations';

const initialState = {
  user: { name: null, email: null, avatarURl: '', verify: false },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  categoryList: [],
  isVerified: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(verify.fulfilled, state => {
        state.isVerified = true;
      })
      .addCase(verify.rejected, state => {
        state.isVerified = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, state => {
        state.user = { name: null, email: null, avatarURL: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, avatarURL: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateSubscription.fulfilled, (state, action) => {
        state.user.subscription = action.payload.subscription;
      })
      .addCase(categoryList.fulfilled, (state, action) => {
        state.categoryList = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
        state.user.name = action.payload.name;
      }),
});

export const authReducer = authSlice.reducer;
