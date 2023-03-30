import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <section className={styles.notfound}>
      <div className="max_width">
        <div className={styles.container}>
          <div className={styles.title}>Oops!</div>
          <div className={styles.sub_title}>404 Page not found</div>
          <div className={styles.text}>
            This page could'nt be found! Back to homepage if you like. Please
            use search for help!
          </div>
          <button className="secondary_btn" onClick={handleBackHome}>
            Back to home
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
