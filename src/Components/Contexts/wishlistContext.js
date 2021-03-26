import React, { useContext, useReducer } from "react";

const WishlistContext = React.createContext();

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        itemsInWishlist: [...state.itemsInWishlist, { ...action.payload }]
      };
    case "REMOVE":
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.filter(
          (item) => item.id !== action.payload
        )
      };
    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, {
    itemsInWishlist: []
  });
  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
