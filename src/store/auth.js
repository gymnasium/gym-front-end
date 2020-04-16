/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    displayName: undefined,
    email: undefined,
    id: undefined,
  },
  loading: false,
  loaded: true,
  isLoggedIn: false,
};

const loggedInState = {
  user: {
    displayName: 'MikeBifulco',
    email: 'mbifulco@aquent.com',
    twitter: '@irreverentmike',
    id: 'mikebifulco',
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

const selectors = {
  displayNameselector: state => state.auth.user.displayName,
  emailSelector: state => state.auth.user.email,
  authLoadingSelector: state => state.auth.loading,
  authLoadedSelector: state => state.auth.loaded,
  isLoggedInSelector: state => state.auth.isLoggedIn,
};

export default reducer;
export const { logOut } = actions;
export { selectors };
