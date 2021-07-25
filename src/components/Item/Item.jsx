import React from "react";
import "./Item.css";

export default class Item extends React.Component {
  getProductOnSaleClassName(product) {
    return product && product.onSale
      ? "product__name--sale"
      : "product__name--nosale";
  }

  render() {
    const { product } = this.props;
    const onSaleClassName = this.getProductOnSaleClassName(product);
    return (
      <article className="product__card">
        <img className="product__image" src={product.image} loading="lazy" />
        <p className="product__name">
          {product.product}
          <span className={onSaleClassName}></span>
        </p>
        <p className="product__category">{product.category}</p>
        <p className="product__price">${product.price}€</p>
      </article>
    );
  }
}
