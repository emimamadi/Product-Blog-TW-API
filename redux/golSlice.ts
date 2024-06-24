import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// var cors = require('cors')

export const FetchProduct = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("gol/FetchProduct", async (_, thunkAPI) => {
    const response = await fetch("https://fakestoreapi.com/products",{method:"GET"});

    const data= response.json();

    return data

//   const response = await fetch("https://fakestoreapi.com/products")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // var userid = JSON.parse(data);
//       var posts = data.posts;
//       console.log(
//         "posts = ",
//         posts.map((item: any) => item.body)
//       );
//       return posts;
//     });

  //   const data = response.json()

  //   return data

//   return response;

  //    return fetch("https://dummyjson.com/products?limit=10")
  //       .then(function (response) {
  //         return response.json();
  //       })
  //       .then(function (data) {
  //         // var userid = JSON.parse(data);
  //         var posts = data.products;
  //         console.log(
  //           "posts = ",
  //           posts.map((item: any) => item.body)
  //         );
  //         return posts;
  //       });

  // const data = await response.json();
  // const data=
  // const issues = data.map((issue: { title: string,price:string }) => [issue] );

  // const issues =Object.values(data)
  // return issues;

  // const response = await fetch("https://dummyjson.com/products")

  // const data= response.json();

  // var posts= data.then((products)=>products)

  // return posts
});

interface IssuesState {
  issues: {};
  loading: boolean;
  error: string | null;
  data: string[];
}
const initialState: IssuesState = {
  issues: {},
  loading: false,
  error: null,
  data: [],
};

const golSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchProduct: (state, action: PayloadAction<string[]>) => {
      console.log(action.payload);
      // console.log("mamad = ",(state.data).map(item=>item))

      // console.log("jafar = ", (state.data).filter((item:any)=>item.title.toLowerCase().includes(action.payload)))

      // console.log("taghi = ", (state.data).map((item:any)=>item.title) )

      console.log(
        "taghi = ",
        state.data
          .filter((item: any) =>
            item.title.toLowerCase().includes(action.payload)
          )
          .map((x: any) => x.title)
      );

      // action.payload="" ? state.data :

      state.issues = [
        ...state.data
          .filter((item: any) =>
            item.title.toLowerCase().includes(action.payload)
          )
          .map((x: any) => x),
      ];

      // state.issues =state.data.filter((item:any)=> item.title.toLowerCase().includes(action.payload).map((x:any)=>x))

      console.log(
        "taghi = ",
        state.data
          .filter((item: any) =>
            item.title.toLowerCase().includes(action.payload)
          )
          .map((x: any) => x.title)
      );

      //  state.issues.flatMap(state.data.filter((item:any)=> item.title.toLowerCase().includes(action.payload).map((x:any)=>x)))

      // state.issues.push((state.data).filter((item:any)=> item.title.toLowerCase().includes(action.payload)).map((x)=>x))

      // console.log("issues = " , state.issues.map((b:any)=>[b.title,b.price,b.image]))

      console.log("issues = ", Object.values(state.issues));

      const items = Object.values(state.issues);

      console.log(
        "item = ",
        items.map((item: any) => item.title)
      );

      console.log("Asghar = ", 1);
    },

    priceProduct: (state, action: PayloadAction<number[]>) => {
      console.log("action.payload 0 = ", action.payload[0]);
      console.log("action.payload  1 = ", action.payload[1]);

      state.issues = [
        ...state.data
          .filter(
            (item: any) =>
              action.payload[0] < item.price && item.price < action.payload[1]
          )
          .map((x: any) => x),
      ];

      // Object.values(state.issues).length >1 ? state.issues : "not Found"
    },

    // increment: (state) => state + 1,
    // decrement: (state) => state - 1,
    // multiply: {
    //   reducer: (state, action: PayloadAction<number>) => state * action.payload,
    //   prepare: (value?: number) => ({ payload: value || 2 }), // fallback if the payload is a falsy value
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchProduct.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      FetchProduct.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.loading = false;

        state.data = Object.values(action.payload);
        //  state.data = JSON.parse(action.payload)
      }
    );
  },
});

export const { priceProduct, searchProduct } = golSlice.actions;

export default golSlice.reducer;
