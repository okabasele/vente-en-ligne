import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../styles/Cart.module.css";
export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  typeID: number;
  colorID: number;
};
export type CartProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartProps = {
  products: Array<CartProduct>;
  totalCost: string;
  handleAddProduct: (id: number) => void;
  handleSubProduct: (id: number) => void;
  handleDeleteProduct: (id: number) => void;
};

export default function Cart({
  products,
  handleAddProduct,
  handleSubProduct,
  handleDeleteProduct,
  totalCost,
}: CartProps) {
  return (
    <>
      <div className={styles.cartPopUp}>
        <div className={styles.cartContainer}>
          <div className="cart-wrap position-relative h-100">
            <div className={styles.headerCart}>
              <div className="title-qty d-flex align-items-center">
                <h3>Panier</h3>
                <span className="ms-2 badge rounded-pill bg-success">
                  {products.length}
                </span>
              </div>
            </div>
         
              <div className={styles.productsWrap}>
                <ul>
                  {products.length === 0 ? (
                    <p className="fst-italic">
                      Aucun produit n’a été trouvé...
                    </p>
                  ) : (
                    products.map((product) => (
                      <li key={product.id} className="d-flex">
                        <div className="prod-image position-relative w-25">
                          <Image src={product.image} layout="fill" />
                        </div>
                        <div className="prod-details mx-3">
                          <p>{product.title}</p>
                          <p>{product.price}</p>
                        </div>
                        <div className="prod-quantity me-3 d-flex">
                          <button onClick={() => handleSubProduct(product.id)}>
                            -
                          </button>
                          <p className="mx-1">{product.quantity}</p>
                          <button onClick={() => handleAddProduct(product.id)}>
                            +
                          </button>
                        </div>
                        <button onClick={() => handleDeleteProduct(product.id)}>
                          <i className="bi bi-trash"></i>
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              </div>
              <div className={styles.footerCart}>
                <div className="cart-total d-flex align-items-center justify-content-center">
                  <p className="mb-0  fw-bold">
                    Sous-total:{" "}
                  </p>
                    <p className=" mb-0 ms-1">{totalCost} €</p>
                </div>
                <div className="cart-buttons d-flex flex-column">
                  <button className="mb-2 btn btn-secondary">Continuer les achats</button>
                  <button className="btn btn-success">Paiement</button>
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
