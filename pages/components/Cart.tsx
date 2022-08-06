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

export default function Cart({ products, handleAddProduct,handleSubProduct, handleDeleteProduct, totalCost }: CartProps) {
  return (
    <>
      <div className={styles.cartContainer}>
        <div className="header">
          <h3>
            Panier{" "}
            <span className="badge rounded-pill bg-success">
              {products.length}
            </span>
          </h3>
        </div>
        <div className="cart-body">
          <ul>
            {
              products.length === 0 ? <p className="fst-italic">Aucun produit n’a été trouvé...</p> :
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
                    <button onClick={() => handleSubProduct(product.id)}>-</button>
                    <p className="mx-1">{product.quantity}</p>
                    <button onClick={() => handleAddProduct(product.id)}>+</button>
                  </div>
                  <button onClick={() => handleDeleteProduct(product.id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                </li>
              ))
            }
          </ul>
          <div className="cart-total">
            <h4>Sous-total:</h4>
            <p>{totalCost} €</p>
          </div>
          <div className="cart-buttons d-flex flex-column">
            <button>Continuer les achats</button>
            <button>Paiement</button>
          </div>
        </div>
      </div>
    </>
  );
}
