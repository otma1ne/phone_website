import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { url } from "../../../../const";
import ProductCard2 from "../../../Home/Components/ProductCard2/ProductCard2";
import styles from "./Search.module.css";

const Search = ({ showSearch, handleShowSearch }) => {
  const [filtredProducts, setFiltredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    if (searchQuery !== "") {
      axios
        .get(url + "/products/?q=" + searchQuery)
        .then((response) => {
          setFiltredProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setFiltredProducts([]);
    }
  }, [searchQuery]);

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
          <div className={styles.container}>
            <div className={styles.input_btn}>
              <input
                type="text"
                placeholder="Search products"
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
              <button className="primary_btn">Search</button>
            </div>
            <div className={styles.products_container}>
              {filtredProducts.length > 0 &&
                filtredProducts.map((product) => {
                  return <ProductCard2 product={product} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
