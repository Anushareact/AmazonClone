import React from 'react';
import styles from "./order.module.css"
import TextField from "@mui/material/TextField";
import { useState } from 'react';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {  useNavigate } from 'react-router-dom';

const Orderdetails = () => {
  const [FirstName ,setFirstName] = useState("");
  const [LastNmae,setLastName] = useState();
  const [Email,setEmail] = useState();
  const [Phone,setPhone] = useState();
  const [HomeandPlotno,SetHomeandPlotno] = useState();
  const [Address,setAddress] = useState();
  const [Pincode,setPincode] = useState();
  const [State,setState] = useState();
  const[PaymentMod,setPaymentMode]=useState();
  


  const HandleSubmit=(e)=>{
    e.preventDefault()
    navigate('/')

   
  }
  const navigate=useNavigate()






  return (
    <>
      {/* <div
        style={{
          border: "2px solid black",
          padding: "40px",
          borderRadius: "15px",
          marginLeft: "20%",
          marginRight: "30%",
          marginTop: "20px",
        }}
      >
        <h2>Your Order Has Been Placed SuccessFully</h2>
        </div> */}
      <div className={styles.orderContainer}>
        <div className={styles.title}>Address Details</div>
        <form className={styles.formStyles} onSubmit={HandleSubmit}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="FirstName"
            fullWidth
            variant="filled"
            value={FirstName}
            name="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="LastNmae"
            fullWidth
            variant="filled"
            value={LastNmae}
            name="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="Email"
            fullWidth
            variant="filled"
            value={Email}
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="Phone"
            fullWidth
            variant="filled"
            value={Phone}
            name="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="Home & Floor /Plot No"
            variant="filled"
            fullWidth
            value={HomeandPlotno}
            name="HomeandPlotno"
            onChange={(e) => SetHomeandPlotno(e.target.value)}
          />
          <TextField
            id="filled-multiline-flexible"
            defaultValue="Address"
            multiline
            maxRows={4}
            variant="filled"
            fullWidth
            className={styles.textField}
            value={Address}
            name="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="Pincode"
            variant="filled"
            fullWidth
            value={Pincode}
            name="Pincode"
            onChange={(e) => setPincode(e.target.value)}
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="State"
            variant="filled"
            fullWidth
            value={State}
            name="State"
            onChange={(e) => setState(e.target.value)}
          />
          <InputLabel id="demo-simple-select-standard-label">
            Payment
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="PaymentMod"
            value={PaymentMod}
            onChange={(e) => setPaymentMode(e.target.value)}
            label="Payment"
            fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"upi"}>UPI</MenuItem>
            <MenuItem value={"cc"} >Crdit Card</MenuItem>
            <MenuItem value={"cod"}>COD</MenuItem>
          </Select>
          <div className={styles.buttonContainer}>
            <button variant="contained" className={styles.submitbtn}>
              PlaceOrder
            </button>
            <button variant="contained" className={styles.cancelbtn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Orderdetails