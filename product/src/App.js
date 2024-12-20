import React, { useState, useEffect } from 'react';
import './App.css';
import { Rating } from 'react-simple-star-rating'

const App = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProductList(data.products));
  }, []);

  return (
    <div class="container">
      <h2>Öne Çıkan Ürünler ({productList.length})</h2>
      <div div class="product-grid">
        {
          productList.map(product => (
            <div class="product-item">
              <img height={300} width={300} src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>₺{product.price}</p>
              <Rating size={20} initialValue={product.rating} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default App;