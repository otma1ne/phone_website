import React from "react";
import styles from "./Pub1.module.css";

const Pub1 = () => {
  return (
    <section className={styles.pub1}>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.content}>
            <div className={styles.sub_title}>For new customer only</div>
            <div className={styles.title}>50% flat - Mobile</div>
          </div>
        </div>
        <div className={`${styles.item} ${styles.item_two}`}>
          <div className={styles.content}>
            <div className={styles.sub_title}>For Subscribed User only</div>
            <div className={styles.title}>70% flat - Television</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pub1;
