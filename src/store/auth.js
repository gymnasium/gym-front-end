/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    displayName: undefined,
    email: undefined,
  },
  loading: false,
  loaded: true,
  isLoggedIn: false,
};

const loggedInState = {
  user: {
    displayName: 'MikeBifulco',
    email: 'mbifulco@aquent.com',
  },
  loading: true,
  loaded: true,
  isLoggedIn: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: loggedInState,
  reducers: {
    logOut: () => initialState,
  },
});

const { actions, reducer } = authSlice;

export default reducer;
export const { logOut } = actions;
