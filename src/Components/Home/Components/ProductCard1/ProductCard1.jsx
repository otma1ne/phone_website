import React from "react";
import styles from "./ProductCard1.module.css";

const ProductCard1 = ({ productImg }) => {
  return (
    <div className={styles.product}>
      <div className={styles.container}>
        <div className={styles.discount}></div>
        <img src={productImg} alt="product image" />
      </div>
    </div>
  );
};

export default ProductCard1;
