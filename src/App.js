import React from "react";
import "./styles.css";
import HomePage from "./Components/HomePage/homePage";
import { useRoute } from "./Components/Contexts/routeContext";
import BooksPage from "./Components/BooksPage/booksPage";
import Cart from "./Components/Cart/cart";
import WishList from "./Components/wishlist/wishlist";

export default function App() {
  const { route } = useRoute();
  return (
    <div className="site-layout">
      {route === "home" && <HomePage />}
      {route === "self-improvement" && <BooksPage category={route} />}
      {route === "psychology" && <BooksPage category={route} />}
      {route === "philosophy" && <BooksPage category={route} />}
      {route === "fiction" && <BooksPage category={route} />}
      {route === "business & management" && <BooksPage category={route} />}
      {route === "money & investing" && <BooksPage category={route} />}
      {route === "cart" && <Cart />}
      {route === "wishlist" && <WishList />}
    </div>
  );
}
