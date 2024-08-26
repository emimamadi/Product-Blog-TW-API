import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { postSlice } from "@/redux/postSlice";
import productSlice from "@/redux/productSlice";
import cartSlice from "@/redux/cartSlice";

export const makeStore = configureStore({
  reducer: {
    Post: postSlice.reducer,
    Product: productSlice,
    Cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
