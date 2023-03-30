import React, { useContext } from "react";
import styles from "./ProductCard2.module.css";
import { Rating } from "react-simple-star-rating";
import { ReactComponent as EyeIcon } from "../../../../assets/icons/eye.svg";
import { ReactComponent as CompareIcon } from "../../../../assets/icons/refresh.svg";
import { ReactComponent as FavoriteIcon } from "../../../../assets/icons/favorite.svg";
import { Link } from "react-router-dom";
import ProductContext from "../../../../store/ProductContext";
import { ACTIONS } from "../../../../store/Actions";
import axios from "axios";
import { url } from "../../../../const";

const ProductCard2 = ({ product }) => {
  const productContext = useContext(ProductContext);

  const handleAddToCart = (quantity) => {
    const existingProductIndex = productContext.state.cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      const updatedCart = [...productContext.state.cart];
      updatedCart[existingProductIndex].quantity += quantity;
      axios
        .put(url + "/cart/" + product.id, updatedCart[existingProductIndex])
        .then((response) => {
          productContext.dispatch({
            type: ACTIONS.ADD_TO_CART,
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const newCartItem = {
        ...product,
        quantity: quantity,
      };
      axios
        .post(url + "/cart", newCartItem)
        .then((response) => {
          productContext.dispatch({
            type: ACTIONS.ADD_TO_CART,
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClickQuickView = (value) => {
    productContext.dispatch({
      type: ACTIONS.SHOW_MODAL,
      payload: { isShowing: value, product },
    });
  };

  return (
    <div className={styles.product_card}>
      <div className={styles.img_container}>
        <Link to={"/details/" + product.id}>
          <img src={"/assets" + product.image} alt="Product" />
        </Link>
        <div className={styles.icons}>
          <div
            className={styles.icon_container}
            onClick={() => {
              handleClickQuickView(true);
            }}
          >
            <EyeIcon width={20} />
            <p>Quick View</p>
          </div>
          <div className={styles.icon_container}>
            <CompareIcon width={20} />
            <p>Compare</p>
          </div>
          <div className={styles.icon_container}>
            <FavoriteIcon width={16} />
            <p>Wishlist</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <p>{product.title}</p>
        <h5>${product.price}</h5>
        <Rating readonly size={15} initialValue={3.5} />
        <button
          className="secondary_btn"
          onClick={() => {
            handleAddToCart(1);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard2;
