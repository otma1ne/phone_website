import React from "react";
import styles from "./Hero.module.css";
import image1 from "../../../../assets/images/VR-Pitfalls.png";
import image2 from "../../../../assets/images/iphone.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper_custom.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation } from "swiper";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[EffectFade, Navigation]}
        navigation={true}
        effect={"fade"}
        className={styles.swiper}
      >
        <SwiperSlide
          className={styles.swiper_item}
          style={{ background: `url(${image1})` }}
        >
          <div className={styles.swiper_content}>
            <div className={styles.sub_title}>Latest Collection 2023</div>
            <div className={styles.title}>Gearbox VR 300</div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={styles.swiper_item}
          style={{ background: `url(${image2})` }}
        >
          <div className={styles.swiper_content}>
            <div className={styles.sub_title}>Latest Collection 2023</div>
            <div className={styles.title}>Iphone 12</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
