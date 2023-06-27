import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products:[],
    productsNumber:0
}
export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
          //check product already exist or not
          let addProductExists=state.products.find((product)=>product.id===action.payload.id);
          if(addProductExists){
            addProductExists+=parseInt(action.payload.quantity);
          }

          else{
            state.products.push({...action.payload,quantity:parseInt(action.payload.quantity)})
          }
state.productsNumber=state.productsNumber+parseInt(action.payload.quantity)


        },removeFromCart:(state,action)=>{
          //find the product removing from the Array
          const productToRemove=state.products.find((product)=>product.id===action.payload);
          //remove the qantity from product number
          state.productsNumber=state.productsNumber-productToRemove.quantity
          //finding index of the product removing
          const index=state.products.findIndex((product)=>product.id===action.payload)
          //remove from the arry
          state.products.splice(index,1)
          



        }

    }











})
export const{addToCart,removeFromCart}=cartSlice.actions;

export default cartSlice.reducer;