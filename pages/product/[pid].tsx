import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Breadcrumb from "../components/Breadcrumb";
import { Product } from "..";
import styles from "../../styles/ProductDetails.module.css";

export default function ProductDetails() {
  const product: Product = {
    id: 1,
    title: "T-shirt blanc Stranger Things",
    price: 5.99,
    typeID: 1,
    colorID: 1,
    description: "Très beau",
    image:
      "https://images.unsplash.com/photo-1599900554895-5e0fc7bbc9c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  };
  const router = useRouter();
  const { pid } = router.query;

  if (!pid) {
    return "loading...";
  }

  return (
    <>
      <Breadcrumb
        links={[
          { link: "/", name: "Accueil" },
          { link: "/shop", name: "Shop" },
        ]}
        activePage={product.title}
      />

      <div className="product-details mt-2 d-flex justify-content-center">
        <div className={styles.productImage}>
          <div className="image-wrap position-relative w-100 h-100">
            <Image src={product.image} objectFit="cover" layout="fill" />
          </div>
        </div>
        <div className="prod-info ms-3">
          <div className="title h3">{product.title}</div>
          <div className="price h3">{product.price}€</div>
          <div className="color">
            <p className="fw-bold">Couleur:</p>
          </div>
          <div className="size">
            <p className="fw-bold">Taille:</p>
            <div className={styles.sizeOption}>S</div>
            <div className={styles.sizeOption}>M</div>
            <div className={styles.sizeOption}>L</div>
            <div className={styles.sizeOption}>XL</div>
          </div>
          <div className="add-to-cart my-3">
            {" "}
            <button className="btn btn-pink">Ajouter au panier</button>
          </div>
          <div className="description">
            <p className="fw-bold">{product.title}</p>
            {product.description}
            <ul className="mt-1">
              <li>Le mannequin porte une taille S</li>
              <li>
                Longueur environ 52 cm (Basé sur une taille échantillon S)
              </li>
              <li>Taille du mannequin - 165 cm</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
