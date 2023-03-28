import React, { useContext, useEffect, useState } from "react";
import styles from "./Details.module.css";
import { ReactComponent as RightIcon } from "../../assets/icons/chevron right 1.svg";
import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import ProductContext from "../ProductContext";

const Details = () => {
  const productContext = useContext(ProductContext);
  let { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  let product = productContext.products.filter((product) => {
    return product.id == id;
  });

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
              {product[0].category}
              <RightIcon height={20} />
            </li>
            <li>{product[0].title}</li>
          </ul>
        </div>
      </div>
      <div className="max_width">
        <div className={styles.container}>
          <div className={styles.product_imgs}>
            <img src={"/assets" + product[0].image} alt="Product image" />
          </div>
          <div className={styles.product_info}>
            <h2 className={styles.title}>{product[0].title}</h2>
            <Rating readonly size={15} initialValue={3.5} />
            <p className={styles.description}>
              Nam velit eius dolor sunt iure minima molestiae. Nisi laborum
              repellendus maxime repellendus architecto aut. Molestiae non
              voluptatibus aut sint rerum provident.
            </p>
            <h2 className={styles.price}>${product[0].price}</h2>
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
            <button className="secondary_btn">Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
