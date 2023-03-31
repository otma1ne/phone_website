import React, { useEffect, useState } from "react";
import styles from "./ScrollTop.module.css";
import { ReactComponent as ChevronUpIcon } from "../../../../assets/icons/chevron up.svg";

const ScrollTop = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 200);
    });
  }, []);

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.scroll_top} ${scroll ? styles.active : ""}`}
      onClick={scrolltoTop}
    >
      <ChevronUpIcon />
    </div>
  );
};

export default ScrollTop;
