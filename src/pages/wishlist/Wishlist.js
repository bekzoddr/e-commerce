import React, { memo } from "react";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
const Wishlist = () => {
  const wishes = useSelector((state) => state.wishlist.value);
  console.log(wishes);
  return (
    <div>
      <Product data={wishes} />
    </div>
  );
};

export default memo(Wishlist);
