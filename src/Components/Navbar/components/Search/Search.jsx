import React from "react";
import styles from "./Search.module.css";

const Search = ({ showSearch, handleShowSearch }) => {
  return (
    <>
      <div
        className={
          showSearch ? `${styles.overlay} ${styles.active}` : styles.overlay
        }
        onClick={() => {
          handleShowSearch(false);
        }}
      ></div>
      <div
        className={
          showSearch ? `${styles.search} ${styles.active}` : styles.search
        }
      >
        <div className="max_width">
          <div className={styles.input_btn}>
            <input type="text" placeholder="Search products" />
            <button className="primary_btn">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
