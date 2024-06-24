"use client"


import React, { useEffect } from 'react'

import { FetchProduct } from "@/redux/golSlice";

import { useAppSelector, useAppDispatch } from "@/redux/store";

export default function page()  {

    // const {data}=useGetGolQuery()

    // console.log("DATA =====>  " , data)


    const dispatch = useAppDispatch();

    const Goli =useAppSelector((state) => state.Gol.data);

    console.log("Goli ===>  ", Goli)

    console.log("Goli 333 ===>  ", Object.values(Goli).map((x)=>x))


    useEffect(()=>{

      dispatch(FetchProduct())

    },[])

  return (
    <div>page</div>
  )
}
