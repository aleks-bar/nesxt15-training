"use client"

import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Корзина</h1>
      <ul>
        {cart?.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} шт.
          </li>
        ))}
      </ul>
    </div>
  );
}