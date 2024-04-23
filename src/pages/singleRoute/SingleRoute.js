import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api";
import mainUrl from "../../api";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
function SingleRoute() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${mainUrl}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1>loading......</h1>;
  }
  return (
    <div className="single container">
      <br />
      <br />
      <div className="images">
        <div className="thumbnails">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <img src="" alt="" />
      </div>
      <div className="infos">
        <h2>Havic HV G-92 Gamepad</h2>
        <div className="rating">
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h3>(150 Reviews)</h3>
          <hr />
          <h3>In Stock</h3>
        </div>
        <h2 className="price">$192.00</h2>
        <p className="description">
          PlayStation 5 Controller Skin High quality vinyl with air <br />{" "}
          channel adhesive for easy bubble free install & mess <br /> free
          removal Pressure sensitive.
        </p>
        <hr />
        <div className="color">
          <h3>Colours:</h3>
          <input type="color" defaultValue="#ff0000" />
          <input type="color" defaultValue="#ff0000" />
        </div>
        <div className="size">
          <h3>Sizes:</h3>
          <h2>XS</h2>
          <h2>S</h2>
          <h2>M</h2>
          <h2>L</h2>
          <h2>Xl</h2>
        </div>
        <div className="prices">
          <div className="counter">
            <button>-</button>
            <div className="text">2</div>
            <button>+</button>
          </div>
          <button>Buy</button>
          <button className="like">
            <FaRegHeart />
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default memo(SingleRoute);
