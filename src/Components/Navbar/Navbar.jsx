import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.jpg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search_outline.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/user.svg";
import { ReactComponent as BagIcon } from "../../assets/icons/shopping bag 1.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/burger_menu.svg";
import Cart from "./components/Cart/Cart";
import Search from "./components/Search/Search";
import { Link } from "react-router-dom";
import ProductContext from "../../store/ProductContext";

const Navbar = () => {
  const productContext = useContext(ProductContext);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const cartCount = productContext.state.cart.length;

  const handleShowCart = (value) => {
    setShowCart(value);
  };

  const handleShowMenu = (value) => {
    setShowMenu(value);
  };

  const handleShowSearch = (value) => {
    setShowSearch(value);
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
          <Link className={styles.logo} to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
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
            <div
              className={styles.icon_container}
              onClick={() => {
                handleShowSearch(true);
              }}
            >
              <SearchIcon fill="black" width={18} />
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
              <div className={styles.number_container}>{cartCount}</div>
            </div>
          </div>
        </div>
      </div>
      <Cart showCart={showCart} handleShowCart={handleShowCart} />
      <Search showSearch={showSearch} handleShowSearch={handleShowSearch} />
    </nav>
  );
};

export default Navbar;
