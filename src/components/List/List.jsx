import React from "react";
import Item from "../Item/Item";
import "./List.css";

export default class List extends React.Component {
  render() {
    const { products } = this.props;
    const productsList =
      products && products.map((product) => <Item product={product} />);
    return (
      <section className="products-section">
        <h2 className="products-section__header">best sellers</h2>
        <div className="product__grid">{productsList}</div>
      </section>
    );
  }
}
