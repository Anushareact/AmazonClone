import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import Slider from "../../Components/Slider/Slider";
import Products from "../../Components/Products/Products";
import axios from "axios";
import { HeaderItems } from "../../Components/Utils";
// const HeaderItems = [
//   "All",
//   "Mobile",
//   "SmartHome",
//   "Computers&Tablets",
//   "Furniture",
//   "GiftWrapping",
//   "Books",
//   "Groceries",
//   "Laguage",
//   "Home&Kitchen",
// ];
const Home = () => {
  const [ProductsData, setProductsData] = useState();
  const GettingProductsData = () => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProductsData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    GettingProductsData()



  }, []);


  return (
    <div>
      <div className={styles.header_items}>
        {HeaderItems &&
          HeaderItems.map((HeaderItem, index) => <p>{HeaderItem}</p>)}
      </div>

      <div className="home">
        <div className="home-container">
          {/* Slider */}
          <Slider />

          <div>
            
            {ProductsData?.map((Product) => (
              
              <Products id={Product.id} title={Product.title} image={Product.image} price={Product.price} rating={Product.rating}></Products>
            ))}
            <Products/>
          </div>
          <div className="pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
