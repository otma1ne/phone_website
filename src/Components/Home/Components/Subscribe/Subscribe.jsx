import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <div className="max_width">
        <div className={styles.content}>
          <h1>40% Membership Discount</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore.
          </p>
          <div className={styles.input_button}>
            <input
              className="default_input"
              type="text"
              placeholder="Enter email address"
            />
            <button className="secondary_btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
