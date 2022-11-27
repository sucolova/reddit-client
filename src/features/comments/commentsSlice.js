import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (permalink) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json`);
    const json = await response.json();
    console.log(json);
    return json;
  }
)

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    status: 'nothing',
    comments: {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.status = 'idle';
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export default commentsSlice.reducer;
export const selectComments = (state) => state.comments.comments;
// export const selectCommentsStatus = (state) => state.comments.status;
