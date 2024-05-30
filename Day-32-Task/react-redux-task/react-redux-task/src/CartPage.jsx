import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ itemId, quantity: newQuantity }));
  };

  return (
    <div>
      {/* Render cart items */}
      {cart.items.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <span>{item.price}</span>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      {/* Render total quantity and total amount */}
      <div>
        <span>Total Quantity: {cart.totalQuantity}</span>
        <span>Total Amount: {cart.totalPrice}</span>
      </div>
    </div>
  );
};

export default CartPage;