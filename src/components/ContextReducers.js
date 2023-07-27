import React, { createContext, useContext, useReducer } from "react";


const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "DROP":
            let empArray = []
            return empArray
        case "UPDATE":
            let arr = [...state]
            arr.find((cloth, index) => {
                if (cloth.id === action.id) {
                    console.log(cloth.qty, parseInt(action.qty), action.price + cloth.price)
                    arr[index] = { ...cloth, qty: parseInt(action.qty) + cloth.qty, price: action.price + cloth.price }
                }
                return arr
            })
            return arr
        default:
            console.log("Error in Reducer")
            break;
    }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);