import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSubreddits = createAsyncThunk(
  'subReddits/getSubreddits',
  async () => {
    const response = await fetch('https://www.reddit.com/subreddits/.json');
    const json = await response.json();
    return json.data.children;
  }
);

export const subRedditsSlice = createSlice({
  name: 'subReddits',
  initialState: {
    status: 'nothing',
    subReddits: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubreddits.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getSubreddits.fulfilled, (state, action) => {
        state.status = 'idle';
        state.subReddits = action.payload;
      })
      .addCase(getSubreddits.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export default subRedditsSlice.reducer;
export const selectSubReddits = (state) => state.subReddits.subReddits;
export const selectSubRedditsStatus = (state) => state.subReddits.status;
