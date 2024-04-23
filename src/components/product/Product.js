import React, { memo } from "react";
import { FaRegHeart, FaRegEye, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { Link } from "react-router-dom";
const Product = ({ data }) => {
  const dispatch = useDispatch();

  let products = data?.map((el) => (
    <div key={el.id} className="card">
      <div className="card__img">
        <Link to={`/single/${el.id}`}>
          <img src={el.thumbnail} alt="" />
        </Link>
        <div className="click">
          <button onClick={() => dispatch(toggleToWishes(el))}>
            <FaRegHeart />
          </button>
          <button>
            <FaRegEye />
          </button>
        </div>
      </div>
      <div className="card__info">
        <h2>{el.title}</h2>
        <div className="price">
          <h3 className="new__price">${el.price}</h3>
          <h3 className="old__price">$360</h3>
        </div>
        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <h3>(65)</h3>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="product__title container">
        <div className="frame">
          <div className="box"></div>
          <h2>This Month</h2>
        </div>
        <div className="title">
          <h1>Best Selling Products</h1>
          <button>View All</button>
        </div>
      </div>
      <div className="products container">{products}</div>
    </>
  );
};

export default memo(Product);
