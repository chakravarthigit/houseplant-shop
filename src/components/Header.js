import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/products">Shop</Link> | 
      <Link to="/cart">Cart ({totalQuantity})</Link>
    </nav>
  );
};

export default Header;

