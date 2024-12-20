import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";

// create the base react element
const App = () => {
  const cartHook = useState([]);

  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

// get the root element in the DOM
const root = document.getElementById("root");

// create the root container in React DOM
const container = createRoot(root);

// render the App component in the root container
container.render(<App />);
