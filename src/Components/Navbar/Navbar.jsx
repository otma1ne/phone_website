import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.jpg";
import { ReactComponent as HeartIcon } from "../../assets/icons/search_outline.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/user.svg";
import { ReactComponent as BagIcon } from "../../assets/icons/shopping bag 1.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/burger_menu.svg";
import Cart from "./components/Cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowCart = (value) => {
    setShowCart(value);
  };

  const handleShowMenu = (value) => {
    setShowMenu(value);
  };

  return (
    <nav className={styles.nav}>
      <div
        className={
          showMenu ? `${styles.overlay} ${styles.active}` : styles.overlay
        }
        onClick={() => {
          handleShowMenu(false);
        }}
      ></div>
      <div className="max_width">
        <div className={styles.nav_container}>
          <div
            className={styles.menu_icon}
            onClick={() => {
              handleShowMenu(true);
            }}
          >
            <MenuIcon stroke="black" />
          </div>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <ul
            className={
              showMenu ? `${styles.menu} ${styles.active}` : styles.menu
            }
          >
            <li>Home</li>
            <li>Categories</li>
            <li>New in</li>
            <li>Trending</li>
            <li>Sale off</li>
            <li>Contact</li>
          </ul>
          <div className={styles.icons}>
            <div className={styles.icon_container}>
              <HeartIcon fill="black" width={18} />
            </div>
            <div className={styles.icon_container}>
              <PersonIcon fill="black" width={16} />
            </div>
            <div
              className={styles.icon_container}
              onClick={() => {
                handleShowCart(true);
              }}
            >
              <BagIcon fill="black" width={18} />
              <div className={styles.number_container}>2</div>
            </div>
          </div>
        </div>
      </div>
      <Cart showCart={showCart} handleShowCart={handleShowCart} />
    </nav>
  );
};

export default Navbar;
