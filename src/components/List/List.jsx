import React from "react";
import Item from "../Item/Item";
import "./List.css";

export default class List extends React.Component {
  render() {
    const { label, products } = this.props;
    const productsList =
      products &&
      products.map((product, index) => <Item key={index} product={product} />);
    return (
      <section className="products-section">
        <h2 className="products-section__header">{label}</h2>
        <div className="product__grid">{productsList}</div>
      </section>
    );
  }
}
