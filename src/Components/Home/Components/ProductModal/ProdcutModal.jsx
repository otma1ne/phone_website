import React from "react";
import { useContext } from "react";
import ProductContext from "../../../../store/ProductContext";
import styles from "./ProductModal.module.css";
import { Rating } from "react-simple-star-rating";
import { ReactComponent as CloseIcon } from "../../../../assets/icons/cross.svg";
import { ACTIONS } from "../../../../store/Actions";

const ProdcutModal = () => {
  const productContext = useContext(ProductContext);
  const product = productContext.state.selectedProduct;
  const showModal = productContext.state.showProductModal;

  const handleClickQuickView = (value) => {
    productContext.dispatch({
      type: ACTIONS.SHOW_MODAL,
      payload: { isShowing: value, product },
    });
  };

  const handleAddToCart = () => {
    productContext.dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: { product, quantity: 1 },
    });
  };
  return (
    <div
      className={`${styles.product_modal} ${showModal ? styles.active : ""} `}
    >
      <div
        className={styles.overlay}
        onClick={() => {
          handleClickQuickView(false);
        }}
      ></div>
      <div className={styles.container}>
        <div
          className={styles.close}
          onClick={() => {
            handleClickQuickView(false);
          }}
        >
          <CloseIcon width={20} />
        </div>
        <div className={styles.image_container}>
          <img src={"/assets" + product.image} alt="" />
        </div>
        <div className={styles.product_info}>
          <div className={styles.title}>{product.title}</div>
          <Rating readonly size={18} initialValue={3.5} />
          <div className={styles.price}>${product.price}</div>
          <div className={styles.desc}>
            Nam velit eius dolor sunt iure minima molestiae. Nisi laborum
            repellendus maxime repellendus architecto aut. Molestiae non
            voluptatibus aut sint rerum provident.
          </div>
          <div className={styles.colors}>
            <h5>Colors</h5>
            <div className={styles.colors_container}>
              <div className={styles.color}></div>
              <div className={styles.color}></div>
              <div className={styles.color}></div>
              <div className={styles.color}></div>
            </div>
          </div>
          <button className="secondary_btn" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdcutModal;
