import {
  createSlice,
  createAction,
  configureStore,
  createAsyncThunk,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";


import _ from "lodash";

export const SrcData = createAsyncThunk<
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

// console.log("CART Redux  DATA == > ", data )

interface IssuesState {
  data: string[];
}
const initialState: IssuesState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    content: [""],
    loading: false,
    error: null,
    //   issues:{},
    //   cart:[{}]
    cart:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cart") || "[{}]").map(
            (item: any) => item
          )
        : [{ id: 0, qty: 0, price: 0 }],
  },
  reducers: {
    AddCart: (state, action: PayloadAction<number>) => {

      console.log("Content == > ",state.content)
      const x = state.content.find((item: any) => item.id == action.payload);

      state.cart.push({
        Title: x,
        qty: 1,
      });

      let j = state.cart;

      localStorage.setItem("cart", JSON.stringify(j)); //11111111111111111111111111111111111111

      console.log("local Storage. cart ", localStorage.getItem("cart"));
    },

    increaseCart: (state, action: PayloadAction<number>) => {
      let qw = _.cloneDeep(state.cart);

      for (let mo = 1; mo < qw.length; mo++) {
        qw[mo]["Title"]["id"] == action.payload
          ? (qw[mo]["qty"] = qw[mo]["qty"] + 1)
          : 0;

        console.log("STATE-CART ===>  ", state.cart);

        console.log("QTY + ID ==> ", qw[mo]["Title"]["qty"]);
      }

      state.cart = qw;

      localStorage.removeItem("cart");

      localStorage.setItem("cart", JSON.stringify(state.cart));

      console.log("CART ====> ", localStorage.getItem("cart"));
    },

    removeCart: (state, action: PayloadAction<number>) => {
      console.log(action.payload);

      var qw = _.cloneDeep(state.cart);

      console.log("qw = > CLONE  ", qw);

      for (let mo = 1; mo < qw.length; mo++) {
        if (qw[mo]["Title"]["id"] == action.payload && qw[mo]["qty"] > 0) {
          qw[mo]["qty"]--;
        }
        if (qw[mo]["qty"] == 0) {
          console.log("QW 11211 == > ", qw);

          qw = qw.filter((qw: any) => qw.Title?.id != action.payload);

          console.log("QW 22222 == > ", qw);
        }

        console.log("STATE-CART ===>  ", state.cart);
      }

      state.cart = qw;

      localStorage.removeItem("cart");

      localStorage.setItem("cart", JSON.stringify(state.cart));

      console.log("CART ====> ", localStorage.getItem("cart"));
    },

    QTYcart: (state, action: PayloadAction<{ id: number; value: number }>) => {
      console.log("PAYLOAD . ID ===>", action.payload.id);
      console.log("PAYLOAD . VALUE ===>", action.payload.value);

      const item = Object.values(state.cart).flatMap((mk: any) => mk);

      for (let mo = 1; mo < Object.values(item).length; mo++) {
        if (Object.values(item)[mo]["id"] == action.payload.id) {
          var QTY = [];
          if (Number(action.payload.value) > 0) {
            Object.values(item)[mo]["qty"] = Number(action.payload.value);
            QTY.push(Object.values(item)[mo]["qty"]);
          }
          if (Number(action.payload.value) == 0) {
            state.cart = [...state.cart].filter(
              (item: any) => item.id != Number(action.payload.id)
            );
          }
        }

        console.log("STATE-CART CHECKOUT ===>  ", state.cart);
      }

      localStorage.removeItem("cart");

      localStorage.setItem("cart", JSON.stringify(state.cart));

      console.log("CART CHECKOUT ====> ", localStorage.getItem("cart"));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SrcData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      SrcData.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.loading = false;

        state.content = Object.values(action.payload);
      }
    );
  },
});

export const { AddCart, removeCart, increaseCart, QTYcart } = cartSlice.actions;

export default cartSlice.reducer;
