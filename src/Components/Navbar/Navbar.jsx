import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.jpg";
import { ReactComponent as HeartIcon } from "../../assets/icons/search_outline.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/user.svg";
import { ReactComponent as BagIcon } from "../../assets/icons/shopping bag 1.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="max_width">
        <div className={styles.nav_container}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <ul className={styles.menu}>
            <li>Home</li>
            <li>Categories</li>
            <li>New in</li>
            <li>Trending</li>
            <li>Sale off</li>
            <li>Contact</li>
          </ul>
          <div className={styles.icons}>
            <HeartIcon fill="black" width={18} />
            <PersonIcon fill="black" width={16} />
            <BagIcon fill="black" width={18} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
