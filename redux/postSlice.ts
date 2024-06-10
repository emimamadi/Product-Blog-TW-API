import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { posts } from "@/data/data";

// export interface PostState {
//   entities: [{}];

//   loading: boolean;
//   status: "idle" | "loading" | "failed";
// }

// const initialState: PostState = {
//   entities: [{}],
//   loading: false,
//   status:"idle"
// };

// export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
//     (data) => data.json()
//   );
//   return res;
// });

export const postSlice = createSlice({
  name: "Posts",
  initialState: {
    data: posts,
    info: {},
    cat: [],
  },
  reducers: {
    searchPost: (state, action: PayloadAction<string[]>) => {
      console.log("state.data = ", state.data);
      console.log(action.payload);

      state.info = [
        ...state.data
          .filter((item: any) =>
            item.title.toLowerCase().includes(action.payload)
          )
          .map((x: any) => x),
      ];
    },

    categoryPost: (state, action: PayloadAction<string[]>) => {
      state.info = [
        ...state.data
          .filter((item: any) => item.category.includes(action.payload))
          .map((x: any) => x),
      ];
    },
  },

});

export const {  searchPost , categoryPost } = postSlice.actions;

export const postReducer = postSlice.reducer;
