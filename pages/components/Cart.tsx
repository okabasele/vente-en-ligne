import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../../styles/Cart.module.css";
import ProductCart from "./ProductCart";

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
  showCart:boolean,
  products: Array<CartProduct>;
  totalCost: string;
  handleAddProduct: (id: number) => void;
  handleSubProduct: (id: number) => void;
  handleDeleteProduct: (id: number) => void;
};

export default function Cart({
  showCart,
  products,
  handleAddProduct,
  handleSubProduct,
  handleDeleteProduct,
  totalCost,
}: CartProps) {
  const [showing, setShowing] = useState(true);

  useEffect(()=>{setShowing(showCart)},[showCart])

  return (
    <>
      {showing ? (
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
                <ul className="list-group list-group-flush">
                  {products.length === 0 ? (
                    <p className="fst-italic">
                      Aucun produit n’a été trouvé...
                    </p>
                  ) : (
                    products.map((product) => (
                      <ProductCart
                        product={product}
                        handleAddProduct={handleAddProduct}
                        handleDeleteProduct={handleDeleteProduct}
                        handleSubProduct={handleSubProduct}
                      />
                    ))
                  )}
                </ul>
              </div>
              <div className={styles.footerCart}>
                <div className="cart-total d-flex align-items-center justify-content-center">
                  <p className="mb-0  fw-bold">Sous-total: </p>
                  <p className=" mb-0 ms-1">{totalCost} €</p>
                </div>
                <div className="cart-buttons d-flex flex-column">
                  <button
                    onClick={() => setShowing(!showing)}
                    className="mb-2 btn btn-secondary"
                  >
                    Continuer les achats
                  </button>

                  <Link href="#">
                    <a className="btn btn-success">Paiement</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
