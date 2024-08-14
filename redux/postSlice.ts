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

//

// jsonplaceholder.typicode.com/posts

///

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9", {
    method: "GET",
  });

  const data = response.json();

  return data;

  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //   // var userid = JSON.parse(data);
  //   var posts = data.posts;
  //   console.log(
  //     "posts = ",
  //     posts.map((item: any) => item.body)
  //   );
  //   return posts;
});

// console.log("POST =====> ", getPosts());

// export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
//   const res = await fetch("https://dummyjson.com/posts").then(
//     (x) => console.log(x)
//   ).then((f)=>console.log(f))
//   ;
//   return res;
// });

// console.log("POST =====> ", getPosts.fulfilled);

export const postSlice = createSlice({
  name: "Posts",
  initialState: {
    data: [""],
    info: [""],
    cat: [],
  },
  reducers: {
    searchPost: (state, action: PayloadAction<string[]>) => {
      console.log("state.data = ==>  ", state.data);

      console.log("POSTS === > ", action.payload);

      // state.info = [
      //   ...state.data
      //     .filter((item: any) =>
      //       item.title.toLowerCase().includes(action.payload)
      //     )
      //     .map((x: any) => x),
      // ];
    },

    // categoryPost: (state, action: PayloadAction<string[]>) => {
    //   state.info = [
    //     ...state.data
    //       .filter((item: any) => item.category.includes(action.payload))
    //       .map((x: any) => x),
    //   ];
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        // state.loading = false;

        state.data = Object.values(action.payload);
      }
    );
  },
});

export const { searchPost } = postSlice.actions;

export const postReducer = postSlice.reducer;
