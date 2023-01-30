import React from "react";
import Product from "./Product";

export default function Products(props) {
  const { productt } = props;
  return (
    <div>
      {productt.map((item) => (
        <Product key={item.id} productItem={item} />
      ))}
    </div>
  );
}
