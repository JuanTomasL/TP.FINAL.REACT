import React from 'react';

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product">
      <img src={product.image} alt="image Product"  />
      <h4>{product.title}</h4>
      <p id="price">{product.price} USD</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default Product;
