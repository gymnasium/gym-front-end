/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = 10;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    notifyDataLoaded: state => state,
    increment: state => state + 1,
    decrement: state => state - 1,
    reset: () => initialState,
  },
});

const { actions, reducer } = counterSlice;

export const { increment, decrement, reset } = actions;
export default reducer;

export const fetchJSONfromURl = url => async dispatch => {
  const data = await fetch(url);
  const JSON = await data.json();
  // eslint-disable-next-line no-console
  console.log(JSON);

  dispatch(actions.notifyDataLoaded());
};
