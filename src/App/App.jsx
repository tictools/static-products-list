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

  const bestSellersContent = bestSellers.map((bestSeller) => {
    return (
      <article className="product__card">
        <img className="product__image" src={bestSeller.image} loading="lazy" />
        <p className="product__bame">{bestSeller.product}</p>
        <p className="product__category">{bestSeller.category}</p>
        <p className="product__price">${bestSeller.price}€</p>
      </article>
    );
  });

  return (
    <div className="app__wrapper">
      <Header />
      <main className="app__main">
        <div className="app__section">
          <h2>best sellers</h2>
          <div className="product__grid">{bestSellersContent}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
