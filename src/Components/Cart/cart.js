import React from "react";
import Navigation from "../Navigation/navigation";
import Heading from "../Heading/heading";
import { useCart } from "../Contexts/cartContext";
import CartItems from "./CartItems/cartItems";
import CartTotalAmount from "../Cart-total-amount/cartTotalAmount";

export default function Cart() {
  const { state } = useCart();

  return (
    <>
      <Navigation />
      <Heading text={"Cart"} />
      <CartItems items={state.itemsInCart} />
      <CartTotalAmount />
    </>
  );
}
