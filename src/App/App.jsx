import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  const products = [
    {
      product: "flash t-shirt",
      price: 27.5,
      category: "t-shirts",
      bestSeller: false,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
      onSale: true,
    },
    {
      product: "batman t-shirt",
      price: 22.5,
      category: "t-shirts",
      bestSeller: true,
      image:
        "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
      onSale: false,
    },
    {
      product: "superman hat",
      price: 13.9,
      category: "hats",
      bestSeller: true,
      image:
        "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
      onSale: false,
    },
  ];

  const bestSellers = products.filter((product) => product.bestSeller);

  const getProductOnSaleClassName = (product) =>
    product.onSale ? "product__name--sale" : "product__name--nosale";

  const generalContent = products.map((product) => {
    const onSaleClassName = getProductOnSaleClassName(product);
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
  });

  const bestSellersContent = bestSellers.map((bestSeller) => {
    const onSaleClassName = getProductOnSaleClassName(bestSeller);
    return (
      <article className="product__card">
        <img className="product__image" src={bestSeller.image} loading="lazy" />
        <p className="product__name">
          {bestSeller.product}
          <span className={onSaleClassName}></span>
        </p>
        <p className="product__category">{bestSeller.category}</p>
        <p className="product__price">${bestSeller.price}€</p>
      </article>
    );
  });

  return (
    <div className="app__wrapper">
      <Header />
      <main className="app__main">
        <div className="products__container">
          <section className="products-section">
            <h2 className="products-section__header">products</h2>
            <div className="product__grid">{generalContent}</div>
          </section>
          <section className="products-section">
            <h2 className="products-section__header">best sellers</h2>
            <div className="product__grid">{bestSellersContent}</div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
