import React from 'react';

const Cart = ({ cart , deleteFromCart }) => {
    const handleRedirect = () => {
        window.location.href = 'index copy.html';
      };
    const handleDeleteFromCart = (product) =>{deleteFromCart(product)}
    const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div id="cart">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map(item => (
              <div  id='cardItems' key={item.id}>
                <h6>{item.title}</h6>
                <img id='image' src={item.image} alt={item.title} />
                <p id="price">Price: {item.price} USD</p>
                <button onClick={()=>handleDeleteFromCart(item)}>Eliminar</button>
              </div>
            ))}
            <p id="total">Total: {total.toFixed(2)} USD</p>
            <button onClick={handleRedirect}>Finalizar compra</button>
        </ul>
        
      )}
    </div>
  );
};

export default Cart;
