import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); 
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
           <img src={product.image} alt="" />
          <Link to={`products/${product.id}`}></Link>
        </div>
      ))} 
    </div>
  );
};

export default Products;
