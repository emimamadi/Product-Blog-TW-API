import { getProducts } from "@/utils/lib";
import {
  createSlice,
  createAction,
  configureStore,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";

// import { products } from "@/data/data"

//----------------------------------------------------

export const FetchProduct = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("product/FetchProduct", async (_, thunkAPI) => {
  const response = await fetch("https://fakestoreapi.com/products?limit=15", {
    method: "GET",
  });

  const data = response.json();

  return data;
});

interface IssuesState {
  issues: {};
  loading: boolean;
  error: string | null;
  data: string[];
  category: [] | string[] | null;
}
const initialState: IssuesState = {
  issues: {},
  loading: false,
  error: null,
  data: [],
  category: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
    data: ["0"],
    issues: [""],
    category: [""],
  },
  reducers: {
    searchProduct: (state, action: PayloadAction<string[]>) => {
      console.log("state.data  = ", state.data);
      console.log(action.payload);

      state.issues = state.data.filter((item: any) =>
        item.title.includes(action.payload)
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
      console.log("action.payload 0 MIN  = ", action.payload[0]);
      console.log("action.payload  1  MAX = ", action.payload[1]);

      state.issues = state.data
        .filter(
          (item: any) =>
            Number(item.price) < Number(action.payload[1]) &&
            Number(action.payload[0]) < Number(item.price)
        )
        .map((x: any) => x);

      // Object.values(state.issues).length >1 ? state.issues : "not Found"
    },

    rateProduct: (state, action: PayloadAction<number[]>) => {
      console.log("action.payload 0 MIN RATE = ", action.payload[0]);
      console.log("action.payload  1  MAX RATE = ", action.payload[1]);

      state.issues = state.data
        .filter(
          (item: any) =>
            Number(item.rating.rate) < Number(action.payload[1]) &&
            Number(action.payload[0]) < Number(item.rating.rate)
        )
        .map((x: any) => x);
    },

    categoryProduct: (state, action: PayloadAction<string[]>) => {
      console.log(" CHECKED ===> ", action.payload[0]);
      console.log(" ITEM === >", action.payload[1]);

      action.payload[0]
        ? state.category.push(action.payload[1])
        : (state.category = state.category.filter(
            (x) => x !== action.payload[1]
          ));

      console.log("CATEGory  ====>  ", Object.values(state.category));

      state.issues = [
        ...state.data.filter((item: any) =>
          state.category.includes(item.category)
        ),
      ];

      console.log("ISSUES ====>  ", state.issues);
    },
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

        state.issues = Object.values(action.payload);
        state.data = Object.values(action.payload);
      }
    );
  },
});

export const { priceProduct, searchProduct, categoryProduct, rateProduct } =
  productSlice.actions;

export default productSlice.reducer;
