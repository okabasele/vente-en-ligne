import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../../styles/Cart.module.css";
import { getFormattedCost } from "../../utils/prices-format";
import ProductCart from "./ProductCart";

export type CartProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartProps = {
  showCart:boolean,
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>,
};

export default function Cart({ showCart, setShowCart }: CartProps) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const totalCost = products.reduce((acc, product) => acc += product.price * product.quantity, 0);

  useEffect(() => {
    if (window) {
      const cartJSON = localStorage.getItem("cart");
      
      if (cartJSON) {
        let data: Array<CartProduct> = JSON.parse(cartJSON);
        setProducts(data);
      }
    }
  }, []);

  

  
  const handleAddProduct = (id: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        product.quantity = product.quantity + 1;
      }
      return product;
    });

    setProducts([...updatedProducts]);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
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
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts([...updatedProducts]);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };



  return (
    <>
      {showCart ? (
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
                    products.map((product : CartProduct) => (
                      <ProductCart
                      key={product.id}
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
                  <p className=" mb-0 ms-1">{getFormattedCost(totalCost.toString())} €</p>
                </div>
                <div className="cart-buttons d-flex flex-column">
                  <button
                    onClick={() => setShowCart((prevShowCart) => !prevShowCart)}
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
