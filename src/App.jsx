import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [product, setProduct] = useState([]);

  async function getProduct() {
    const response = await axios.get("http://localhost:5000/product");
    setProduct(response.data);
    console.log(response.data);
  }

  getProduct();

  return (
    <div className='container'>
      {
        product.map((products) => (
          <div className='card' key={products._id}>
            <h2>{products.title}</h2>
            <img src={products.image} alt="" />
            <h3>{products.category}</h3>
            <h4>{products.price}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default App
