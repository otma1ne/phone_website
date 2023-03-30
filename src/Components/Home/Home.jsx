import axios from "axios";
import React, { useContext, useEffect } from "react";
import { url } from "../../const";
import { ACTIONS } from "../../store/Actions";
import ProductContext from "../../store/ProductContext";
import Brands from "./Components/Brands/Brands";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import ProdcutModal from "./Components/ProductModal/ProdcutModal";
import Pub1 from "./Components/Pub1/Pub1";
import Subscribe from "./Components/Subscribe/Subscribe";
import TrendingProducts from "./Components/TrendingProducts/TrendingProducts";
import UnderPrice from "./Components/UnderPrice/UnderPrice";

const Home = () => {
  const productContext = useContext(ProductContext);
  useEffect(() => {
    axios
      .get(url + "/cart")
      .then((response) => {
        productContext.dispatch({
          type: ACTIONS.GET_ALL_PRODUCTS_CART,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(url + "/products")
      .then((response) => {
        productContext.dispatch({
          type: ACTIONS.GET_ALL_PRODUCTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
