import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

const products = [
  { id: 1, name: 'Aloe Vera', price: 15, image: 'aloe.jpg' },
  { id: 2, name: 'Snake Plant', price: 20, image: 'snake.jpg' },
  { id: 3, name: 'Peace Lily', price: 25, image: 'peace.jpg' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Available Plants</h2>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} width="100" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
