import React from "react";
import styles from "./Cart.module.css";
import { ReactComponent as RightIcon } from "../../assets/icons/chevron right 1.svg";
import { useContext } from "react";
import ProductContext from "../../store/ProductContext";
import { ReactComponent as EmptyCartIcon } from "../../assets/icons/empty_cart.svg";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../../store/Actions";
import axios from "axios";
import { url } from "../../const";

const Cart = () => {
  const productContext = useContext(ProductContext);
  const cart = productContext.state.cart;
  const navigate = useNavigate();

  const totalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].quantity * cart[i].price;
    }
    return totalPrice;
  };

  const handleChangeQuantity = (type, product) => {
    console.log(product.quantity);
    if (
      (type === "add" && product.quantity > 0) ||
      (type === "remove" && product.quantity > 1)
    ) {
      const updateProduct = {
        ...product,
        quantity: type === "add" ? product.quantity + 1 : product.quantity - 1,
      };
      axios
        .put(url + "/cart/" + product.id, updateProduct)
        .then((response) => {
          productContext.dispatch({
            type: ACTIONS.ADD_TO_CART,
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleToHome = () => {
    navigate("/");
  };
  return (
    <section className={styles.cart}>
      <div className={styles.breadcrumb}>
        <div className="max_width">
          <ul>
            <li>
              Cart <RightIcon height={20} />
            </li>
          </ul>
        </div>
      </div>
      <div className="max_width">
        {cart.length > 0 ? (
          <div className={styles.cart_body}>
            <div className={styles.products_container}>
              <div className={styles.products_header}>
                <div className={styles.title}>
                  <h4>Product</h4>
                </div>
                <div className={styles.quantity}>
                  <h4>Quantity</h4>
                </div>
              </div>
              <div className={styles.products_body}>
                {cart.map((product) => {
                  return (
                    <div className={styles.product} key={product.id}>
                      <div className={styles.product_details}>
                        <div className={styles.product_img}>
                          <img src={"./assets" + product.image} alt="" />
                        </div>
                        <div className={styles.product_info}>
                          <div className={styles.title}>{product.title}</div>
                          <div className={styles.price}>${product.price}</div>
                        </div>
                      </div>
                      <div className={styles.quantity}>
                        <div className={styles.control}>
                          <button
                            className="primary_btn"
                            onClick={() => {
                              handleChangeQuantity("remove", product);
                            }}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            readOnly
                            value={product.quantity}
                          />
                          <button
                            className="primary_btn"
                            onClick={() => {
                              handleChangeQuantity("add", product);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.total}>
              <div className={styles.title}>
                <h4>Total</h4>
              </div>
              <div className={styles.total_container}>
                <div className={styles.item}>
                  <div className={styles.name}>Subtotal</div>
                  <div className={styles.value}>${totalPrice()}</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.name}>Shipping</div>
                  <div className={styles.value}>$0</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.name}>Total</div>
                  <div className={styles.value}>${totalPrice()}</div>
                </div>
                <button className="primary_btn">Proceed to Chekout</button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.empty}>
            <EmptyCartIcon width={150} height={150} />
            <div className={styles.title}>Your cart is currently empty.</div>
            <button className="secondary_btn" onClick={handleToHome}>
              Return to shop
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
