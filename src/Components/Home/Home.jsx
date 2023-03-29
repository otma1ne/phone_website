import React from "react";
import Brands from "./Components/Brands/Brands";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import ProdcutModal from "./Components/ProductModal/ProdcutModal";
import Pub1 from "./Components/Pub1/Pub1";
import Subscribe from "./Components/Subscribe/Subscribe";
import TrendingProducts from "./Components/TrendingProducts/TrendingProducts";
import UnderPrice from "./Components/UnderPrice/UnderPrice";

const Home = () => {
  return (
    <>
      <Hero />
      <UnderPrice />
      <Brands />
      <Pub1 />
      <TrendingProducts />
      <ProdcutModal />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
