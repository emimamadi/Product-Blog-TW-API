"use client";

import { Provider } from "react-redux";

import { makeStore } from "@/redux/store";
// import { Provider } from "react";


export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={makeStore}>{children}</Provider>;
}
