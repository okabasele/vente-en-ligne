// components/layout.js

import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import React from "react";
import Cart, { CartProduct } from "./Cart";
import { getFormattedCost } from "../../utils/prices-format";

export default function Layout({ children }: { children: React.ReactNode }) {
  const product: CartProduct = {
    id: 1,
    title: "T-shirt blanc",
    price: 5.99,
    image:
      "https://static.webshopapp.com/shops/279311/files/315232457/60x60x2/image.jpg",
    quantity: 1,
  };
  const [products, setProducts] = React.useState([product]);
  const [showCart, setShowCart] = React.useState(false);
  const totalCost = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    const totalCost = acc.toString();
    return getFormattedCost(totalCost);
  }, "0");

  const handleAddProduct = (id: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        product.quantity = product.quantity + 1;
      }
      return product;
    });

    setProducts([...updatedProducts]);
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
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts([...updatedProducts]);
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
          totalCost={totalCost}
          handleSubProduct={handleSubProduct}
          handleDeleteProduct={handleDeleteProduct}
        />
      ) : null}
      <main>{children}</main>
      <Footer />
    </>
  );
}
