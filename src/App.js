import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Checkout from "./Components/CheckOut/Checkout";
import SearchResults from "./Components/SearchResults/SearchResults";
import ProductPage from "./Components/ProductPage/ProductPage";
import Orderdetails from "./Components/OederDetails/Orderdetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<SearchResults/>}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/orders" element={<Orderdetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
