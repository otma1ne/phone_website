import React, { useContext } from "react";
import styles from "./ProductCard2.module.css";
import { Rating } from "react-simple-star-rating";
import { ReactComponent as EyeIcon } from "../../../../assets/icons/eye.svg";
import { ReactComponent as CompareIcon } from "../../../../assets/icons/refresh.svg";
import { ReactComponent as FavoriteIcon } from "../../../../assets/icons/favorite.svg";
import { Link } from "react-router-dom";
import ProductContext, { ACTIONS } from "../../../ProductContext";

const ProductCard2 = ({ product }) => {
  const productContext = useContext(ProductContext);

  const handleAddToCart = () => {
    productContext.dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: { product: product },
    });
  };

  return (
    <div className={styles.product_card}>
      <div className={styles.img_container}>
        <Link to={"/details/" + product.id}>
          <img
            src={process.env.PUBLIC_URL + "assets" + product.image}
            alt="Product image"
          />
        </Link>
        <div className={styles.icons}>
          <div className={styles.icon_container} onClick={() => {}}>
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
        <button className="secondary_btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard2;
