import { Routes,Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Product from "./Pages/Product/Product";
import Shop from "./Pages/Shop/Shop";
import Layout from "./layout/Layout";
import Category from "./Pages/Category/Category";
import Setting from "./Pages/Setting/Setting";
import Supplier from "./Pages/Supplier/Supplier";
import Login from "./Pages/Auth/Login";
import Units from "./Pages/Units/Units";
import Debits from "./Pages/Debit/Debits";
import AddProduct from "./Pages/Product/AddProduct";
import EditProduct from "./Pages/Product/EditProduct";
import ProductList from "./Pages/Product/ProductList";


function App() {
  // localStorage.setItem("auth", true);
  const auth = localStorage.getItem("auth")
  console.log(auth)
  return (
    <>
    <Layout>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element ={<Dashboard/>}/>
          <Route path="/dashboard" element ={<Dashboard/>}/>

          <Route path="/products" element={<ProductList/>}/>
          <Route path="/product/add" element ={<AddProduct/>}/>
          <Route path="/product/edit" element ={<EditProduct/>}/>

          <Route path="/shop" element={<Shop/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/supplier" element={<Supplier/>}/>
          <Route path="/unit" element={<Units/>}/>
          <Route path="/debit" element={<Debits/>}/>
      </Routes>
    </Layout>
    </>
  );
}

export default App;
