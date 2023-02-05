import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import ShoppingCart from "./components/Cart/ShoppingCart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const showCartHandler = () => {
    setCartIsOpen(true);
  };

  const hideCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <CartProvider>
      {cartIsOpen && <ShoppingCart onClose={hideCartHandler} />}
      <Header onOpenCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
