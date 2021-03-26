import React from "react";
import Navigation from "../Navigation/navigation";
import Heading from "../Heading/heading";
import { useWishlist } from "../Contexts/wishlistContext";
import WishlistItems from "./wishlist-items/wishlistItems";

export default function Cart() {
  const { state } = useWishlist();

  return (
    <>
      <Navigation />
      <Heading text={"Wishlist"} />
      <WishlistItems items={state.itemsInWishlist} />
    </>
  );
}
