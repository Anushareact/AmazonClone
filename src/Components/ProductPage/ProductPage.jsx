import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./productpage.module.css"
import { addToCart } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
const ProductPage = () => {
  const { id } = useParams();
  const [SingleProductData, setSingleProductData] = useState();
 const [quantity, setQuantity] = useState("1");  
   const dispatch = useDispatch();
  const GettingSingleProductDetails = () => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response)=>{
        setSingleProductData(response.data)

      })
      .catch((err) => {});
  };

  
  useEffect(()=>{
    GettingSingleProductDetails()

  },[])
  const addQantityToProduct=()=>{
    console.log(quantity);
setSingleProductData((SingleProductData.quantity=quantity));
return SingleProductData


  }
  console.log("data", SingleProductData);
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={styles.ProductContainer}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4} className={styles.Grid}>
            <img src={SingleProductData?.image} className={styles.Image}></img>
          </Grid>
          <Grid item xs={2} sm={4} md={4} className={styles.Grid}>
            <p>
              <b>Name:</b>
              {SingleProductData?.title}
            </p>
            <p>
              <b>Description:</b>
              {SingleProductData?.description}
            </p>
            <p>
              <b>Category:</b>
              {SingleProductData?.category}
            </p>
          </Grid>
          <Grid item xs={2} sm={4} md={4} className={styles.Grid}>
            <p>Price:{SingleProductData?.price}</p>
            <p>Free Delivery</p>
            <p>Easy Returns</p>
            <p>Instock</p>
            <div>
              Quantity
              <select onChange={(e) => setQuantity(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <Link to="/checkout">
              <button
                onClick={() => dispatch(addToCart(addQantityToProduct()))}
                className={styles.cartButton}
              >
                Add to Cart
              </button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductPage;
