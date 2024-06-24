import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
///------

// import ProductReducer from "@/redux/productSlice";

//----
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { postSlice } from "@/redux/postSlice";
import productSlice from "@/redux/productSlice";
import cartSlice from "@/redux/cartSlice";
// import { golSlice } from "./golSlice";
import  golSlice  from "./golSlice";


export const makeStore = configureStore({
  reducer: {
    // Products: ProductReducer,
    Post: postSlice.reducer,
    Product: productSlice,
    Cart: cartSlice,
    Gol:golSlice
  },

  // middleware: (getDefaultMiddleware) => 
  //   getDefaultMiddleware().concat(golSlice.middleware)
});

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;