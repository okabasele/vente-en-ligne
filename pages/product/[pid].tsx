import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSupabase } from "../../utils/useSupabase";

import Breadcrumb from "../components/Breadcrumb";
import { Product } from "..";
import styles from "../../styles/ProductDetails.module.css";
import { CartProduct } from "../components/Cart";
import { GetStaticProps, GetStaticPropsContext } from "next";

export default function ProductDetails() {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState<Product | null>(null)

  const addToCart = (id:number) => {
      if (window) {
        const cartJSON = localStorage.getItem("cart");
        console.log(cartJSON);

        if (cartJSON && product) {
          const data: Array<CartProduct> = JSON.parse(cartJSON);
          const newProduct : CartProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity:1
          }
          if(!data.find((productToCompare) => productToCompare.id === product.id)) {
            data.push(newProduct)
            localStorage.setItem("cart",JSON.stringify(data))
          }
          
        } else if(product) {
          const data : CartProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity:1
          }
          localStorage.setItem("cart",JSON.stringify([data]))
        }
      }
  };

  useEffect(() => {
    if (window) {
      const productsJSON = localStorage.getItem("products");

      if (productsJSON) {
        const data: Array<Product> = JSON.parse(productsJSON);
        const productToFind = data.find(e=>e.id.toString()===pid)
        
        if (productToFind) {
          setProduct(productToFind);
        }
      }
    }

  }, [pid]);

  if(!product) return <h1>Loading...</h1>

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
        <div className="prod-info ms-3 w-50">
          <div className="title h3">{product.title}</div>
          <div className="price h3">{product.price}€</div>
          <div className="color">
            <p className="fw-bold">Couleur: {product.color}</p>
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
            <button className="btn btn-pink" onClick={() => addToCart(product.id)}>Ajouter au panier</button>
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