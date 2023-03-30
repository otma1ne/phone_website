import { createContext, useReducer } from "react";
import { ACTIONS } from "./Actions";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  let initState = {
    products: [],
    selectedProduct: {},
    showProductModal: false,
    cart: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.GET_ALL_PRODUCTS:
        return (state = { ...state, products: action.payload });
      case ACTIONS.GET_ALL_PRODUCTS_CART:
        return (state = { ...state, cart: action.payload });
      case ACTIONS.ADD_TO_CART:
        const itemIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        if (itemIndex >= 0) {
          const updatedCart = [...state.cart];
          updatedCart[itemIndex] = {
            ...updatedCart[itemIndex],
            quantity: action.payload.quantity,
          };
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, action.payload],
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
