import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.items.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>
          {cart.items.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} width="50" />
              <h3>{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${cart.totalPrice}</h3>
      <button>Checkout (Coming Soon)</button>
    </div>
  );
};

export default Cart;
