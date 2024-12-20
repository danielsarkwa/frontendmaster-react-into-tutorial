import { createContext } from "react";

// we need to define the shape of the context (what we are going to store in the context)
// we also need to define a hook, which means a state we can modify

// an array with first item being an array and next being a function

export const CartContext = createContext([[], function () {}]);
