import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (sub) => {
    const response = await fetch(`https://www.reddit.com/${sub}/.json`);
    const json = await response.json();
    return json.data.children;
  }
) 


export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    status: "nothing",
    posts: {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = 'rejected';
      });
  },

});

export default postsSlice.reducer;
export const selectPosts = (state) => state.posts.posts;
//export const selectPostsStatus = (state) => state.posts.status;
