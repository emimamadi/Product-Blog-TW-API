import {
    createSlice,
    createAction,
    configureStore,
    createAsyncThunk,
    PayloadAction,
    current,
  } from "@reduxjs/toolkit";
  
  import { products } from "@/data/data";
  
  // if (typeof window !== "undefined") {
  
  // let zx=localStorage.getItem("cart") || "0"
  
  // console.log("ZX =====> ", JSON.parse(zx).map((item:any)=>item.item))
  
  // const fz=JSON.parse(zx).map((item:any)=>item.item)
  
  // }
  
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
  
        // state.cart=[localStorage.getItem("Cart")]
  
        // console.log("...STATE . CART   1   ",Object.values(state.cart))
  
        // const x = state.akbar.find((item) => item.id == action.payload);
  
        // state.cart.push(...state.cart,{x, qty:1})
  
        //
        //
  
        const x = state.akbar.find((item) => item.id == action.payload);
  
        // let m = { id: x?.id, title: x?.title };
  
        // state.cart.push({ item: m, qty: 1 });
  
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
        state.cart.push({
          id: x?.id,
          title: x?.title,
          price: x?.price,
          category: x?.category,
          brand: x?.brand,
          qty: 1,
        });
  
        //+++++++++++++++++++++++++++++++++++++++++++
  
        //
  
        //
  
        // state.cart.push([...state.cart],{"title":x, qty:1})
  
        //   state.cart = [ [...state.cart] ,  [title: x, qty: 1 ]];
  
        // [...state.cart,{title:x , qty:1}]
  
        // console.log("state.cart = " ,state.cart)
  
        // state.cart.map((i)=>console.log("I",i))
  
        // JSON.parse(JSON.stringify(state.cart))
  
        console.log(
          "STATE.CART = ",
          Array.from(state.cart).map((s) => s)
        );
  
        console.log(
          "STATE.CART 200= ",
          JSON.parse(JSON.stringify(state.cart)).map((x: any) => x)
        );
  
        // let j = JSON.parse(JSON.stringify(state.cart));//222222222222222222222222222222222222222222222222222
  
        let j = state.cart;
  
        // Object.keys(j).forEach(function(key, index) {
        // //  console.log("State . CART  52122 = " , j )
        // });
  
        console.log("J =============== ", j);
  
        localStorage.setItem("cart", JSON.stringify(j)); //11111111111111111111111111111111111111
  
        // let p  =localStorage.getItem("cart")
  
        // Object.values(p).forEach(e => console.log(e + ' = ' + p[e]));
  
        console.log("local Storage. cart ", localStorage.getItem("cart"));
  
        // const x= state.data.filter((item)=>item.id==action.payload).map((y)=>y.title)
  
        // let f =[...state.cart,{"id":x,"qty":1}]
  
        // let  w= localStorage.setItem("Cart",[{id:x,"qty":1}])
  
        // state.cart=[...state.cart,{"title":x,qty:1}]
  
        // state.cart.push(...state.cart ,{"id":x,qty:1} )
  
        // console.log("state . cart = ",Object.values(state.cart))
  
        // console.log("state . cart = ",Object.values(w))
  
        // localStorage.setItem("mamad" ,f)
  
        // localStorage.setItem("prCart",car)
  
        // console.log("f = " ,f)
  
        // console.log("Mamad" , localStorage.getItem("mamad") )
  
        // console.log("State.cart = " , Object.values(state.cart) )
  
        // console.log("mamad = ",(state.data).map(item=>item))
  
        // console.log("jafar = ", (state.data).filter((item:any)=>item.title.toLowerCase().includes(action.payload)))
  
        // console.log("taghi = ", (state.data).map((item:any)=>item.title) )
  
        // console.log(
        //   "taghi = ",
        //   state.data
        //     .filter((item: any) =>
        //       item.title.toLowerCase().includes(action.payload)
        //     )
        //     .map((x: any) => x.title)
        // );
  
        // action.payload="" ? state.data :
  
        // state.issues = [
        //   ...state.data
        //     .filter((item: any) =>
        //       item.title.toLowerCase().includes(action.payload)
        //     )
        //     .map((x: any) => x),
        // ];
  
        // state.issues =state.data.filter((item:any)=> item.title.toLowerCase().includes(action.payload).map((x:any)=>x))
  
        // console.log(
        //   "taghi = ",
        //   state.data
        //     .filter((item: any) =>
        //       item.title.toLowerCase().includes(action.payload)
        //     )
        //     .map((x: any) => x.title)
        // );
  
        //  state.issues.flatMap(state.data.filter((item:any)=> item.title.toLowerCase().includes(action.payload).map((x:any)=>x)))
  
        // state.issues.push((state.data).filter((item:any)=> item.title.toLowerCase().includes(action.payload)).map((x)=>x))
  
        // console.log("issues = " , state.issues.map((b:any)=>[b.title,b.price,b.image]))
  
        // console.log("issues = ", Object.values(state.issues));
  
        // const items = Object.values(state.issues);
  
        // console.log(
        //   "item = ",
        //   items.map((item: any) => item.title)
        // );
  
        // console.log("Asghar = ", 1);
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
  
          // let j = state.cart;
  
          // localStorage.removeItem("cart");
  
          // localStorage.setItem("cart", JSON.stringify(iop));
  
          // console.log("CART ====> ", localStorage.getItem("cart"));
  
          // Object.values(golab)[mo]["id"]==action.payload ?  Object.values(golab)[mo]["qty"]++ :  null
          // Object.values(golab)[mo]["title"]
          // Object.values(cart)[mo]["qty"]
  
          // console.log("HHHHHHH====>",JSON.parse(localStorage.getItem("cart")[mo]["qty"] || '[{}]'))
  
          console.log("QTY + ID ==> ", Object.values(item)[mo]["qty"]);
        }
  
        // state.cart=iop
  
        localStorage.removeItem("cart");
  
        localStorage.setItem("cart", JSON.stringify(state.cart));
  
        console.log("CART ====> ", localStorage.getItem("cart"));
  
        // console.log(localStorage.getItem(cart || ))
  
        // for(let q=1;q<Object.values(state.cart).length;q++){
  
        //  console.log("ID======>", Object.values(state.cart).flatMap((lo:any)=>lo))
        // }
  
        // console.log("action.payload  1 = ", action.payload[1]);
  
        // state.issues = [
        //   ...state.data
        //     .filter(
        //       (item: any) => action.payload[0] < item.price &&  item.price< action.payload[1]
        //     )
        //     .map((x: any) => x),
        // ];
  
        // Object.values(state.issues).length >1 ? state.issues : "not Found"
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
  
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
        // state.cart = [
        //   ...state.cart
        //     .filter((item: any) =>
        //       item.title.toLowerCase().includes(action.payload)
        //     )
        //     .map((x: any) => x),
        // ];
  
        localStorage.removeItem("cart");
  
        localStorage.setItem("cart", JSON.stringify(state.cart));
  
        console.log("CART ====> ", localStorage.getItem("cart"));
  
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
        // state.category=[]
  
        // state.category.
  
        // state.issues = [
        //   ...state.data
        //     .filter((item: any) =>
        //       item.category.includes(action.payload)
        //     )
        //     .map((x: any) => x),
        // ];
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
  
      // increment: (state) => state + 1,
      // decrement: (state) => state - 1,
      // multiply: {
      //   reducer: (state, action: PayloadAction<number>) => state * action.payload,
      //   prepare: (value?: number) => ({ payload: value || 2 }), // fallback if the payload is a falsy value
      // },
    },
  });
  
  export const { AddCart, removeCart, increaseCart, QTYcart } = cartSlice.actions;
  
  export default cartSlice.reducer;
  