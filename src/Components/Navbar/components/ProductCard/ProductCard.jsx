import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
import { ReactComponent as CloseIcon } from "../../../../assets/icons/cross.svg";
import ProductContext from "../../../../store/ProductContext";
import { ACTIONS } from "../../../../store/Actions";

const ProductCard = ({ product }) => {
  const productContext = useContext(ProductContext);

  const handleRemoveClick = () => {
    productContext.dispatch({
      type: ACTIONS.REMOVE_FROM_CART,
      payload: product.id,
    });
  };
  return (
    <div className={styles.card}>
      <div className={styles.close} onClick={handleRemoveClick}>
        <CloseIcon width={12} />
      </div>
      <div className={styles.product_img}>
        <img src={"./assets" + product.image} alt="product" />
      </div>
      <div className={styles.product_info}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          ${product.price} <span>x</span> {product.quantity}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
