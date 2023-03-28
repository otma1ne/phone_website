import { createContext, useReducer } from "react";
import data from "../assets/data/products.json";

export const ProductContext = createContext(null);

export const ACTIONS = {
  GET_ALL_PRODUCTS: "get-all-products",
  ADD_TO_CART: "add-to-cart",
  REMOVE_FROM_CART: "remove-from-cart",
};

export const ProductContextProvider = ({ children }) => {
  let initState = data;

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ADD_TO_CART:
        addToCart(action.payload.product);
        break;
    }
  }

  /*  function getAllProducts(state) {
    fetch("http://localhost:3004/products")
      .then((response) => {
        return response.json().then((data) => {
          state = data;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } */

  function addToCart(product) {
    fetch("http://localhost:3004/products", {
      Method: "POST",
      Body: product,
    });
  }

  const [state, dispatch] = useReducer(reducer, initState);

  const value = {
    state,
    dispatch,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
