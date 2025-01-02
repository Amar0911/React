import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home"
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails'
import NotFound from './components/NotFound'

function App() {
  

  return (
    <>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Products'>Products</Link>
          <Link to='/Cart'>Cart</Link>
        </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/products/:id" element={<ProductDetails/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>

      </Router>
    </>
  )
}

export default App
