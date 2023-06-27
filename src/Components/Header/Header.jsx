import React from "react";
import styles from "../../Components/Header/header.module.css";
import { LuMapPin } from "react-icons/lu";

import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
const Header = () => {
const cart=useSelector((state)=>state.cart.productsNumber)
  return (
    <div>
      <div className={styles.headercontainer}>
        <Link to="/">
          <div>
            <img
              className={styles.amazon_logo}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon-logo"
            ></img>
          </div>
        </Link>
        <div className={styles.address}>
          <p>
            Deliver to Anu<br></br>
            <LuMapPin /> Hyderabad 500032
          </p>
        </div>
       
        <Search/>
        <div className={styles.profile}>
          Hello,M.Anusha<br></br>Accounts&Lists
        </div>

        <Link to="/myorders" className={styles.Link}>
          <div className={styles.returnandorder}>
            Returns &<br></br>
            <span>Orders</span>
          </div>
        </Link>
        <Link to="/checkout" className={styles.Link}>
          <div className={styles.cart}>
            <div>{cart}</div>
            <BsCart4 className={styles.cartIcon} size={30}></BsCart4>
            Cart
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
