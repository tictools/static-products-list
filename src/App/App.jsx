import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Item from "../components/Item/Item";
import List from "../components/List/List";
import { products } from "../common/products";
import "./App.css";

// https://barcelonacodeschool.com/files/reactB1products.json')

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("https://barcelonacodeschool.com/files/reactB1products.json")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data.products }));
  }

  render() {
    const { products } = this.state;
    const bestSellers = products.filter((product) => product.bestSeller);

    return (
      <div className="app__wrapper">
        <Header />
        {products ? (
          <main className="app__main">
            <div className="products__container">
              <List label="products" products={products} />
              <List label="best-sellers" products={bestSellers} />
            </div>
          </main>
        ) : null}
        <Footer />
      </div>
    );
  }
}
