import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RouteProvider } from "./Components/Contexts/routeContext";
import App from "./App";
import { CartProvider } from "./Components/Contexts/cartContext";
import { WishlistProvider } from "./Components/Contexts/wishlistContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <WishlistProvider>
      <RouteProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </RouteProvider>
    </WishlistProvider>
  </StrictMode>,
  rootElement
);
