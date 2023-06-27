import React ,{useState}from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./product.module.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/cartSlice";
import {useDispatch} from "react-redux"





const Products = ({id,title,image,price,rating}) => {
  const dispatch=useDispatch();
 
  return (
    <>
      <Stack
        direction="row"
        display={"inline-flex"}
        sx={{ border: "2px solid green" }}
        className={styles.productsContainer}
      >
        <Box>
          <Link to={`/product/${id}`}>
            <div>
              <img src={image} className={styles.productImage}></img>
            </div>
          </Link>

          <div className={styles.title}>Nmae:{title}</div>
          <div className={styles.title}>rating</div>
          <div className={styles.title}> Price:Rs.{price}</div>
          <Link to="/checkout">
            <button
              onClick={() => dispatch(addToCart())}
              className={styles.cartButton}
            >
              Add to Cart
            </button>
          </Link>
        </Box>
      </Stack>
    </>
  );
};

export default Products;
