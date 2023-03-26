import React from "react";
import styles from "./Cart.module.css";
import { ReactComponent as CloseIcon } from "../../../assets/icons/cross.svg";

const Cart = ({ showCart, handleShowCart }) => {
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
      </div>
    </>
  );
};

export default Cart;
