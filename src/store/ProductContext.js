import { createContext, useReducer } from "react";
import { ACTIONS } from "./Actions";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  let initState = {
    products: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.GET_ALL_PRODUCTS:
        return (state = { ...state, products: action.payload });
      default:
        return state;
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

  /* function addToCart(product) {
    fetch("http://localhost:3004/products", {
      Method: "POST",
      Body: product,
    });
  } */

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
