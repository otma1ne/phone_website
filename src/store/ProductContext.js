import { createContext, useReducer } from "react";
import { ACTIONS } from "./Actions";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  let initState = {
    products: [],
    selectedProduct: {
      id: 6,
      title: "Apple iPhone 11",
      image: "/images/products/iphone/iphone3.png",
      price: 760,
      category: "Featured Products",
    },
    showProductModal: false,
    cart: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.GET_ALL_PRODUCTS:
        return (state = { ...state, products: action.payload });
      case ACTIONS.ADD_TO_CART:
        const existingProductIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        if (existingProductIndex !== -1) {
          const updatedCart = [...state.cart];
          updatedCart[existingProductIndex].quantity += 1;
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
          const newCartItem = {
            ...action.payload,
            quantity: 1,
          };
          return {
            ...state,
            cart: [...state.cart, newCartItem],
          };
        }

      case ACTIONS.REMOVE_FROM_CART:
        return (state = {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        });
      case ACTIONS.SHOW_MODAL:
        return (state = {
          ...state,
          showProductModal: action.payload.isShowing,
          selectedProduct: action.payload.product,
        });
      default:
        return state;
    }
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
