import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { incCart, decCart, removeFromCard } from "../../context/cartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  console.log(cart);
  let items = cart?.map((el) => (
    <>
      <div className="cart__box">
        <div className="title">
          <img src={el.images[0]} alt="" />
          <h3>{el.title}</h3>
        </div>
        <h3>${el.price}</h3>
        <div className="quantity">
          <h3>
            <span>{el.price}</span>
            {el.quantity}
            <span>=</span>
          </h3>
          <div className="calculator">
            <button
              disabled={el.quantity <= 1}
              onClick={() => dispatch(decCart(el))}
            >
              -
            </button>
            <button onClick={() => dispatch(incCart(el))}>+</button>
          </div>
        </div>
        <h3>${el.price * el.quantity}</h3>
        <button onClick={() => dispatch(removeFromCard(el))}>
          <FaTrashAlt />
        </button>
      </div>
    </>
  ));
  return (
    <div className="cart__boxes container">
      <br />
      <br />
      <br />
      <br />
      <div className="cart__box">
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Subtotal</h3>
        <button>
          <FaTrashAlt />
        </button>
      </div>
      <br />
      <br />
      <br />
      {items}
    </div>
  );
};

export default Cart;
