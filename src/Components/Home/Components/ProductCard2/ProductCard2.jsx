import React from "react";
import styles from "./ProductCard2.module.css";

const ProductCard2 = ({productImg}) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.img_container}>
        <img src={productImg} alt="Product image" />
      </div>
      <div className={styles.content}>
        <p>Samsung Galaxy S20</p>
        <h5>$29.50</h5>
      </div>
    </div>
  );
};

export default ProductCard2;
