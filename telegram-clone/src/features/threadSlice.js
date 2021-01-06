import { createSlice } from '@reduxjs/toolkit';

export const threadSlice = createSlice({
  name: 'thread',
  initialState: {
    threadId: null,
    threadName: null,
  },
  reducers: {
    setThread: (state, action) => {
      state.threadId = action.payload.threadId;
      state.threadName = action.payload.threadName;
    },
  },
});

export const { setThread } = threadSlice.actions;

export const selectThreadId = (state) => state.thread.threadId;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.user.value)`
export const selectThreadName = (state) => state.thread.threadName;

export default threadSlice.reducer;
