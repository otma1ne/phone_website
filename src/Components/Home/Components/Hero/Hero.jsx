import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import image1 from "../../../../assets/images/VR-Pitfalls.png";
import image2 from "../../../../assets/images/iphone-13.webp";
import image3 from "../../../../assets/images/banner-disco-pro.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper_custom.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation, Autoplay } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles.hero}>
      <Swiper
        slidesPerView={1}
        onSlideChangeTransitionStart={() => {
          $(".sub_title").hide(0);
          $(".sub_title").removeClass("aos-init").removeClass("aos-animate");
          $(".title").hide(0);
          $(".title").removeClass("aos-init").removeClass("aos-animate");
        }}
        onSlideChangeTransitionEnd={() => {
          $(".title").show(0);
          $(".sub_title").show(0);
          AOS.init();
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 5000,
        }}
        effect={"fade"}
        className={styles.swiper}
      >
        <SwiperSlide
          className={styles.swiper_item}
          style={{ background: `url(${image1})` }}
        >
          <div className="max_width">
            <div className={styles.swiper_content}>
              <div
                className={`${styles.sub_title} sub_title`}
                data-aos="fade-up"
              >
                Latest Collection 2023
              </div>
              <div
                className={`${styles.title} title`}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Gearbox VR 300
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={styles.swiper_item}
          style={{ background: `url(${image2})` }}
        >
          <div className={styles.swiper_content}>
            <div className={`${styles.sub_title} sub_title`} data-aos="fade-up">
              Latest Collection 2023
            </div>
            <div
              className={`${styles.title} title`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Iphone 13 Pro
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={styles.swiper_item}
          style={{ background: `url(${image3})` }}
        >
          <div className={styles.swiper_content}>
            <div className={`${styles.sub_title} sub_title`} data-aos="fade-up">
              Latest Collection 2023
            </div>
            <div
              className={`${styles.title} title`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Best Headphone
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
