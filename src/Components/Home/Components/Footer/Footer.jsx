import React from "react";
import styles from "./Footer.module.css";
import logo from "../../../../assets/images/logo.png";
import { ReactComponent as FbIcon } from "../../../../assets/icons/Facebook - Original.svg";
import { ReactComponent as TwitterIcon } from "../../../../assets/icons/Vector.svg";
import { ReactComponent as PintrestIcon } from "../../../../assets/icons/Pinterest - Original.svg";
import { ReactComponent as YoutubeIcon } from "../../../../assets/icons/YouTube - Original.svg";
import { ReactComponent as VisaIcon } from "../../../../assets/icons/visa.svg";
import { ReactComponent as IpayIcon } from "../../../../assets/icons/ipay.svg";
import { ReactComponent as MasterIcon } from "../../../../assets/icons/MasterCard.svg";

const Footer = () => {
  return (
    <footer>
      <div className="max_width">
        <div className={styles.sub_footer}>
          <div className={styles.item}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <ul>
              <li>
                <p>
                  <span>Phone :</span> +49 541 245 854
                </p>
              </li>
              <li>
                <p>
                  <span>Address :</span> 4500 Lorem ipsum dolor, sit amet
                  consectetur adipisicing.
                </p>
              </li>
            </ul>
            <div className={styles.payment_info}>
              <p>We Accept:</p>
              <div className={styles.icons}>
                <MasterIcon width={25} height={50} />
                <VisaIcon width={35} />
                <IpayIcon width={35} />
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <p>Delivery information</p>
              </li>
              <li>
                <p>Sale terms & condition</p>
              </li>
              <li>
                <p>Returns and refunds</p>
              </li>
              <li>
                <p>Privacy notice</p>
              </li>
              <li>
                <p>Shoping FAQs</p>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h5>Popular categories</h5>
            <ul>
              <li>
                <p>Accessories</p>
              </li>
              <li>
                <p>Mobile</p>
              </li>
              <li>
                <p>Headphone</p>
              </li>
              <li>
                <p>Laptop</p>
              </li>
              <li>
                <p>Television</p>
              </li>
              <li>
                <p>Smart watch</p>
              </li>
              <li>
                <p>Speaker</p>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h5>Subscription Offer</h5>
            <div className={styles.input_button}>
              <input type="text" placeholder="Enter email Id" />
              <button className="secondary_btn">Send</button>
            </div>
            <p className={styles.subscribe_info}>
              Sign up to recive updates, promotions, and sneak peaks of upcoming
              products.
            </p>
            <div className={styles.follow_us}>
              <p>Follow Us on:</p>
              <div className={styles.icons}>
                <FbIcon width={20} />
                <TwitterIcon width={20} />
                <PintrestIcon width={20} />
                <YoutubeIcon width={20} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p>© 2023, Made with pasion by Otmane</p>
          <p>All rights reserved by Otmane</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
