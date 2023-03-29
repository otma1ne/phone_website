import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { ReactComponent as CloseIcon } from "../../../../assets/icons/cross.svg";
import ProductCard from "../ProductCard/ProductCard";
import ProductContext from "../../../../store/ProductContext";

const Cart = ({ showCart, handleShowCart }) => {
  const productContext = useContext(ProductContext);
  const productCart = productContext.state.cart;
  return (
    <>
      <div
        className={
          showCart ? `${styles.overlay} ${styles.active}` : styles.overlay
        }
        onClick={() => {
          handleShowCart(false);
        }}
      ></div>
      <div
        className={showCart ? `${styles.cart} ${styles.active}` : styles.cart}
      >
        <div className={styles.header}>
          <div className={styles.title}>
            <h4>Shoping Cart</h4>
          </div>
          <div
            className={styles.close}
            onClick={() => {
              handleShowCart(false);
            }}
          >
            <CloseIcon width={18} />
          </div>
        </div>
        {productCart.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default Cart;
