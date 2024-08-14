import {
  createSlice,
  createAction,
  configureStore,
  createAsyncThunk,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";

import { products } from "@/data/data";

interface IssuesState {
  data: string[];
}
const initialState: IssuesState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    akbar: products,
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
      console.log(
        "state.akbar = ",
        state.akbar.map((x) => x.title)
      );

      console.log("action . payload = ", action.payload);

      console.log(
        "State . cart =  ",
        state.cart.map((n: any) => n)
      );

      const x = state.akbar.find((item) => item.id == action.payload);

      state.cart.push({
        id: x?.id,
        title: x?.title,
        price: x?.price,
        category: x?.category,
        brand: x?.brand,
        qty: 1,
      });

      console.log(
        "STATE.CART = ",
        Array.from(state.cart).map((s) => s)
      );

      console.log(
        "STATE.CART 200= ",
        JSON.parse(JSON.stringify(state.cart)).map((x: any) => x)
      );

      let j = state.cart;

      console.log("J =============== ", j);

      localStorage.setItem("cart", JSON.stringify(j)); //11111111111111111111111111111111111111

      console.log("local Storage. cart ", localStorage.getItem("cart"));
    },

    increaseCart: (state, action: PayloadAction<number>) => {
      console.log("action.payload 0 = ", action.payload);

      console.log("Count ===> ", Object.values(state.cart).length);

      console.log(
        "State.cart ===>",
        Object.values(state.cart).flatMap((mk: any) => mk.item)
      );

      // const golab=Object.values(state.cart).flatMap((mk:any)=>mk.item)

      const item = Object.values(state.cart).flatMap((mk: any) => mk);

      console.log(
        "QTY ===> ",
        Object.values(state.cart).flatMap((mk: any) => mk)
      );

      for (let mo = 1; mo < Object.values(item).length; mo++) {
        console.log(
          "golab ===> ",
          Object.values(item)[mo]["title"],
          Object.values(item)[mo]["id"]
          // Object.values(cart)[mo]["qty"]
        );
      }

      for (let mo = 1; mo < Object.values(item).length; mo++) {
        Object.values(item)[mo]["id"] == action.payload
          ? Object.values(item)[mo]["qty"]++
          : 0;

        console.log("STATE-CART ===>  ", state.cart);

        console.log("QTY + ID ==> ", Object.values(item)[mo]["qty"]);
      }

      // state.cart=iop

      localStorage.removeItem("cart");

      localStorage.setItem("cart", JSON.stringify(state.cart));

      console.log("CART ====> ", localStorage.getItem("cart"));
    },

    removeCart: (state, action: PayloadAction<number>) => {
      console.log(action.payload);

      const item = Object.values(state.cart).flatMap((mk: any) => mk);

      for (let mo = 1; mo < Object.values(item).length; mo++) {
        if (
          Object.values(item)[mo]["id"] == action.payload &&
          Object.values(item)[mo]["qty"] > 0
        ) {
          Object.values(item)[mo]["qty"]--;
        }
        if (Object.values(item)[mo]["qty"] == 0) {
          state.cart = [...state.cart].filter(
            (item: any) => item.id != action.payload
          );
        }

        console.log("STATE-CART ===>  ", state.cart);
      }

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
});

export const { AddCart, removeCart, increaseCart, QTYcart } = cartSlice.actions;

export default cartSlice.reducer;
