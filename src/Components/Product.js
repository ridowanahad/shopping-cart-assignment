import React from "react";
import "../index.css";

const Product = (props) => {
  const { image, title, price, rating, description } = props.productItem;

  return (
    <article className="product">
      <img className="product__img" src={image} alt={title} />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p>Price: ${price}</p>
        <p>Rating: {rating.rate}/5</p>
        <p className="product__desc">{description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
