import React, { useContext, useReducer } from "react";

const cartContext = React.createContext();

export function useCart() {
  return useContext(cartContext);
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, { ...action.payload, quantity: 1 }]
      };

    case "REMOVE":
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (item) => item.id !== action.payload
        )
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
      };
    default:
      return state;
  }
}
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    itemsInCart: []
  });

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}
