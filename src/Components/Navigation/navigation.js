import React from "react";
import "../../../src/styles.css";
import { useRoute } from "../Contexts/routeContext";
import Cart from "../../Assets/cart.svg";
import { useCart } from "../Contexts/cartContext";
import Wishlist from "../../Assets/wishlist.svg";
import { useWishlist } from "../Contexts/wishlistContext";

export default function Navigation() {
  const { setRoute } = useRoute();
  const { state } = useCart();
  const { state: wishlistState } = useWishlist();

  return (
    <nav
      style={{
        backgroundColor: "#FFEB40",
        gridArea: "navigation",
        textAlign: "center",
        fontFamily: "font-family: 'Yellowtail', cursive"
      }}
    >
      <h1
        style={{
          color: "#FB0066",
          fontSize: "3rem",
          cursor: "pointer"
        }}
        className={"navigation-h1"}
        onClick={() => setRoute("home")}
      >
        {" "}
        Bookstore{" "}
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div onClick={() => setRoute("cart")}>
          <img
            src={Cart}
            style={{ width: "48px", height: "48px" }}
            alt={"cart svg"}
          />
          <div
            style={{
              width: "24px",
              height: "24px",
              textAlign: "center",
              color: "#FFFEFA",
              backgroundColor: "#FB0066",
              margin: "auto",
              borderRadius: "4px",
              position: "relative",
              bottom: "66px",
              left: "16px"
            }}
          >
            {state.itemsInCart.length}
          </div>
        </div>

        <div onClick={() => setRoute("wishlist")}>
          <img
            src={Wishlist}
            style={{ width: "48px", height: "48px" }}
            alt={"wishlist svg"}
          />
          <div
            style={{
              width: "24px",
              height: "24px",
              textAlign: "center",
              color: "#FFFEFA",
              backgroundColor: "#FB0066",
              margin: "auto",
              borderRadius: "4px",
              position: "relative",
              bottom: "66px",
              left: "16px"
            }}
          >
            {wishlistState.itemsInWishlist.length}
          </div>
        </div>
      </div>
    </nav>
  );
}
