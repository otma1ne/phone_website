import React from "react";
import ProductCard2 from "../ProductCard2/ProductCard2";
import styles from "./TrendingProducts.module.css";
import img1 from "../../../../assets/images/samsung1.png";
import img2 from "../../../../assets/images/headphone3.png";
import img3 from "../../../../assets/images/iphone2.png";
import img4 from "../../../../assets/images/headphone6.png";

const TrendingProducts = () => {
  return (
    <section className={styles.trending_products}>
      <div className="max_width">
        <div className={styles.titles}>
          <h3>Trending Products</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.filtres}>
          <button className={`primary_btn ${styles.active}`}>
            All Products
          </button>
          <button className="primary_btn">Trending Products</button>
          <button className="primary_btn">Special Products</button>
          <button className="primary_btn">Featured Products</button>
        </div>
        <div className={styles.container}>
          <ProductCard2 productImg={img1} />
          <ProductCard2 productImg={img2} />
          <ProductCard2 productImg={img3} />
          <ProductCard2 productImg={img4} />
          <ProductCard2 productImg={img3} />
          <ProductCard2 productImg={img4} />
          <ProductCard2 productImg={img1} />
          <ProductCard2 productImg={img2} />
        </div>
        <div className={styles.view_all}>
          <button className="primary_btn">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
