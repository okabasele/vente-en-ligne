// components/layout.js

import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import React from "react";
import Cart, { CartProduct } from "./Cart";
import styles from "../../styles/Layout.module.css";
import { Product } from "..";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showCart, setShowCart] = React.useState(false);
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MyShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar handleCartButtonClick={() => setShowCart((prevShowCart) => !prevShowCart)} />

      {showCart ? <Cart showCart={showCart} setShowCart={setShowCart} /> : null}

      <main className={styles.main}>
        <div className={styles.mainWrap}>{children}</div>
      </main>
      <Footer />
    </>
  );
}
