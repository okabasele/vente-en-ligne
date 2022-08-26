// components/layout.js

import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import React from "react";
import Cart, { CartProduct } from "./Cart";
import { getFormattedCost } from "../../utils/prices-format";
import styles from "../../styles/Layout.module.css";
import { Product } from "..";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = React.useState(Array<CartProduct>);

  React.useEffect(() => {
    if (window) {
      const cartJSON = localStorage.getItem("cart");
      // console.log(cartJSON);

      if (cartJSON) {
        let data: Array<CartProduct> = JSON.parse(cartJSON);
        setProducts(data);
      } else{
        setProducts([])
      }
    }
  }, []);

  // const product: CartProduct = {
  //   id: 1,
  //   title: "T-shirt blanc",
  //   price: 5.99,
  //   image:
  //     "https://static.webshopapp.com/shops/279311/files/315232457/60x60x2/image.jpg",
  //   quantity: 1,
  // };
  // const [products, setProducts] = React.useState([product]);
  const [showCart, setShowCart] = React.useState(false);
  
  const totalCost = products.reduce((acc, product) => {
    return acc += product.price * product.quantity;
    // const totalCost = acc.toString();
    // return getFormattedCost(totalCost);
  }, 0);

  console.log({ totalCost, products });
  
  const handleAddProduct = (id: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        product.quantity = product.quantity + 1;
      }
      return product;
    });

    setProducts([...updatedProducts]);
    localStorage.setItem("cart", JSON.stringify(products));
  };

  const handleSubProduct = (id: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        if (product.quantity - 1 >= 0) {
          product.quantity = product.quantity - 1;
        }
      }
      return product;
    });

    setProducts([...updatedProducts]);
    localStorage.setItem("cart", JSON.stringify(products));
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts([...updatedProducts]);
    localStorage.setItem("cart", JSON.stringify(products));
  };

  const handleCartButtonClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowCart(!showCart);
    console.log(showCart, "dd");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MyShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar handleCartButtonClick={handleCartButtonClick} />
      {showCart ? (
        <Cart
          showCart={showCart}
          products={products}
          handleAddProduct={handleAddProduct}
          totalCost={getFormattedCost(totalCost.toString())}
          handleSubProduct={handleSubProduct}
          handleDeleteProduct={handleDeleteProduct}
        />
      ) : null}
      <main className={styles.main}>
        <div className={styles.mainWrap}>{children}</div>
      </main>
      <Footer />
    </>
  );
}
