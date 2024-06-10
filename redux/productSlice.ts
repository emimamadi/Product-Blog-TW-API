import {
    createSlice,
    createAction,
    configureStore,
    createAsyncThunk,
    PayloadAction,
  } from "@reduxjs/toolkit";


  import { products } from "@/data/data"

  interface IssuesState {
    issues: {};
    loading: boolean;
    error: string | null;
    data: string[];
    category:[] | string[] | null
  }
  const initialState: IssuesState = {
    issues: {},
    loading: false,
    error: null,
    data: [],
    category:[]
  };



const productSlice = createSlice({
    name: "product",
    initialState:{
      data:products,
      issues:{},
      category:[]
    },
    reducers: {
      searchProduct: (state, action: PayloadAction<string[]>) => {
        console.log("state.data = ",state.data)
        console.log(action.payload);
 
  
        console.log(
          "taghi = ",
          state.data
            .filter((item: any) =>
              item.title.toLowerCase().includes(action.payload)
            )
            .map((x: any) => x.title)
        );

  
        state.issues = [
          ...state.data
            .filter((item: any) =>
              item.title.toLowerCase().includes(action.payload)
            )
            .map((x: any) => x),
        ];
  
        
  
        console.log(
          "taghi = ",
          state.data
            .filter((item: any) =>
              item.title.toLowerCase().includes(action.payload)
            )
            .map((x: any) => x.title)
        );
  
      
  
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
              (item: any) => action.payload[0] < item.price &&  item.price< action.payload[1]
            )
            .map((x: any) => x),
        ];
  
        // Object.values(state.issues).length >1 ? state.issues : "not Found"
      },

      categoryProduct:(state,action:PayloadAction<string[]>)=>{



        console.log(action.payload)



        state.issues = [
          ...state.data
            .filter((item: any) =>
              item.category.includes(action.payload)
            )
            .map((x: any) => x),
        ];


      }
  
  
      // increment: (state) => state + 1,
      // decrement: (state) => state - 1,
      // multiply: {
      //   reducer: (state, action: PayloadAction<number>) => state * action.payload,
      //   prepare: (value?: number) => ({ payload: value || 2 }), // fallback if the payload is a falsy value
      // },
    },

  });



export const { priceProduct, searchProduct , categoryProduct} = productSlice.actions;

export default productSlice.reducer;