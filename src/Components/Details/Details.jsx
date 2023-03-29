import React, { useContext, useEffect, useState } from "react";
import styles from "./Details.module.css";
import { ReactComponent as RightIcon } from "../../assets/icons/chevron right 1.svg";
import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../const";
import ProductContext from "../../store/ProductContext";
import { ACTIONS } from "../../store/Actions";

const Details = () => {
  let { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState();
  const productContext = useContext(ProductContext);

  useEffect(() => {
    axios
      .get(url + "/products/" + id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddToCart = () => {
    productContext.dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
  };

  return (
    <section className={styles.details}>
      <div className={styles.breadcrumb}>
        <div className="max_width">
          <ul>
            <li>
              Home <RightIcon height={20} />
            </li>
            <li>
              Shop
              <RightIcon height={20} />
            </li>
            <li>
              {product?.category ?? ""}
              <RightIcon height={20} />
            </li>
            <li>{product?.title ?? ""}</li>
          </ul>
        </div>
      </div>
      <div className="max_width">
        <div className={styles.container}>
          <div className={styles.product_imgs}>
            <img src={"/assets" + product?.image ?? ""} alt={"Product"} />
          </div>
          <div className={styles.product_info}>
            <h2 className={styles.title}>{product?.title ?? ""}</h2>
            <Rating readonly size={15} initialValue={3.5} />
            <p className={styles.description}>
              Nam velit eius dolor sunt iure minima molestiae. Nisi laborum
              repellendus maxime repellendus architecto aut. Molestiae non
              voluptatibus aut sint rerum provident.
            </p>
            <h2 className={styles.price}>${product?.price ?? ""}</h2>
            <div className={styles.colors}>
              <h5>Colors</h5>
              <div className={styles.colors_container}>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
              </div>
            </div>
            <div className={styles.capacity}>
              <h5>Capacity</h5>
              <div className={styles.capacity_container}>
                <div className={styles.cap}>64GB</div>
                <div className={styles.cap}>128GB</div>
                <div className={styles.cap}>256GB</div>
              </div>
            </div>
            <div className={styles.quantity}>
              <h5>Quantity</h5>
              <div className={styles.control}>
                <button
                  className="primary_btn"
                  onClick={() => {
                    quantity > 0
                      ? setQuantity(quantity - 1)
                      : setQuantity(quantity);
                  }}
                >
                  -
                </button>
                <input type="text" readOnly value={quantity} />
                <button
                  className="primary_btn"
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <button className="secondary_btn" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
