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

const handleIsLoadingPending = state => {
  state.isLoading = true;
};

const handleIsRefreshingPending = state => {
  state.isRefreshing = false;
};

const handleIsLoadingRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleIsRefreshingRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(verify.pending, handleIsLoadingPending)
      .addCase(verify.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(verify.rejected, handleIsLoadingRejected)
      .addCase(register.pending, handleIsLoadingPending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, handleIsLoadingRejected)
      .addCase(signIn.pending, handleIsLoadingPending)
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
      .addCase(logOut.pending, handleIsLoadingPending)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, avatarURL: '' };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, handleIsLoadingRejected)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, handleIsRefreshingRejected)
      .addCase(updateSubscription.pending, handleIsRefreshingPending)
      .addCase(updateSubscription.fulfilled, (state, action) => {
        state.user.subscription = action.payload.subscription;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(updateSubscription.rejected, handleIsRefreshingRejected)
      .addCase(categoryList.pending, handleIsRefreshingPending)
      .addCase(categoryList.fulfilled, (state, action) => {
        state.categoryList = action.payload;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(categoryList.rejected, handleIsRefreshingRejected)
      .addCase(updateUser.pending, handleIsRefreshingPending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
        state.user.name = action.payload.name;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(updateUser.rejected, handleIsRefreshingRejected),
});

export const authReducer = authSlice.reducer;
