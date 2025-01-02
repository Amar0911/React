import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';



const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
      const fetchProductDetails = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data)
      };
    
      fetchProductDetails();
    }, [id]);
    

  return (
    <div>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <h3>{product.price}</h3>
    </div>
  )
}
export default ProductDetails