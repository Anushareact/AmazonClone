import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector,useDispatch } from "react-redux";
import styles from "../ProductPage/productpage.module.css";
import {Link} from "react-router-dom";
import { removeFromCart } from "../../Redux/cartSlice";
const Checkout = () => {
  const numberFormat=  Intl.NumberFormat('en-In',{style:"currency",currency:"INR"})
  const selectedproducts=useSelector((state)=>state.cart.products);
  const TotalItem = useSelector((state) => state.cart.productsNumber);
    const subtotal = useSelector((state) =>
      state.cart.products.reduce(
        (subtotal, product) =>
          subtotal + (parseInt(product.price) * product.quantity),
        0
      )
    );
const dispatch = useDispatch();
  console.log(selectedproducts);
  return (
    <div>
      <div
        style={{ textAlign: "center", fontSize: "20px", fontWeight: "bolder" }}
      >
        Shopping Cart
      </div>
      <Box className={styles.ProductContainer}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {selectedproducts?.map((product, index) => (
            <>
              <Grid item xs={6} className={styles.Grid} key={index}>
                <Link to={`/products/${product.id}`}>
                  <img className={styles.Image} src={product?.image}></img>
                </Link>
              </Grid>
              <Grid item xs={6} className={styles.Grid}>
                <p>
                  <b>Name:</b>
                  {product?.title}
                </p>
                <p>
                  <b>Description:</b>
                  {product?.description}
                </p>
                <p>
                  <b>Category:</b>
                  {product?.category}
                </p>
                <button onClick={() => dispatch(removeFromCart(product.id))}>
                  Delete
                </button>
                {/* <div
                  style={{ display: "flex", fontSize: "20px", margin: "10px" }}
                >
                  <div>
                    <button>-</button>
                  </div>
                  <div>{product?.quantity}</div>
                  <div>
                    <button>+</button>
                  </div>
                </div> */}
                <div style={{ marginLeft: "70%", color: "pink" }}>
                  Price:{product?.price}
                </div>
                <div>
                  SubTotal {product?.quantity}Items:
                  <span style={{ border: "2px solid red" }}>{subtotal}</span>
                </div>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
      <div
        style={{
          border: "2px solid black",
          padding: "20px",
          borderRadius: "15px",
          marginLeft: "20%",
          marginRight: "30%",
          marginTop: "-14%",
        }}
      >
        <div>
          Your Order Qualifes for <span>FREE DELIVERY</span>
        </div>
        <div>
          No of Items {TotalItem}:<span> GrandToal:{subtotal}</span>
        </div>
        <Link to="/orders">
          <button style={{ marginLeft: "30%", padding: "10px" }}>
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
