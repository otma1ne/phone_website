import React from "react";
import styles from "./ProductCard2.module.css";
import { Rating } from "react-simple-star-rating";
import { ReactComponent as EyeIcon } from "../../../../assets/icons/eye.svg";
import { ReactComponent as CompareIcon } from "../../../../assets/icons/refresh.svg";
import { ReactComponent as FavoriteIcon } from "../../../../assets/icons/favorite.svg";

const ProductCard2 = ({ productImg }) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.img_container}>
        <img src={productImg} alt="Product image" />
        <div className={styles.icons}>
          <div
            className={styles.icon_container}
            onClick={() => {
              alert("quick view");
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
        <p>Samsung Galaxy S20</p>
        <h5>$29.50</h5>
        <Rating readonly size={15} initialValue={3.5} />
        <button className="secondary_btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard2;
