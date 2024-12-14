import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";

// create the base react element
const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Padre Ginos</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

// get the root element in the DOM
const root = document.getElementById("root");

// create the root container in React DOM
const container = createRoot(root);

// render the App component in the root container
container.render(<App />);
