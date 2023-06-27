import React from 'react';
import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Products from "../Products/Products"


const SearchResults = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const [products, setProducts] = useState(null);
const getSearchResults=async ()=>{
    const searchval=searchParams.get("searchval");
    const category=searchParams.get("Category")


     await axios.get("http://localhost:3000/products") .then((searchResults) => {
        console.log("Search Results",searchResults)
      const categoryResults = searchResults.data;
      console.log();
      if (searchval) {
        const results = categoryResults.filter((product) =>
          product.category.toLowerCase().includes(searchval.toLowerCase())
        );
        console.log("Results",results);
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };
  console.log("ProductsResult",products);
    useEffect(() => {
      getSearchResults();
    }, [searchParams]);



    return(
      <div>
        {
          products?.map((product,index)=>(

<Products id={product.id} image={product.image} title={product.title} price={product.price}/>




          ))
        }


      </div>





    )



  }
   


export default SearchResults