import React from "react";
import styles from "./UnderPrice.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard1 from "../ProductCard1/ProductCard1";
import productImg1 from "../../../../assets/images/samsung1.png";
import productImg2 from "../../../../assets/images/headphone6.png";

const UnderPrice = () => {
  return (
    <section className={styles.under_price}>
      <div className="max_width">
        <div className={styles.container}>
          <div className={styles.content}>
            <h3>Shop Under $399</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos aliquam dolores dolor optio at accusantium qui
              corporis beatae dolorem amet.
            </p>
            <button className="primary_btn">Shop Now</button>
          </div>
          <Swiper
            spaceBetween={80}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className={styles.swiper}
          >
            <SwiperSlide>
              <ProductCard1 productImg={productImg1} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard1 productImg={productImg2} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard1 productImg={productImg1} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard1 productImg={productImg2} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UnderPrice;
