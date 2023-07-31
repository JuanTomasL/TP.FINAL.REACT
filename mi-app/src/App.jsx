import React, { useState, useEffect } from 'react';
import Product from './Product';
import Cart from './Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const deleteFromCart = (product) => {
    setCart(prevCart => prevCart.filter(item=>item.id !== product.id));
  };

  return (
    <div>
      <h1>Tienda "FAKE STORE API"</h1>
      <Cart cart={cart} deleteFromCart={deleteFromCart}/>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default App;
