import Breadcrumb from "../components/Breadcrumb";
import styles from "../../styles/Shop.module.css";
import Link from "next/link";
import Select from "../components/Select";
import Filter from "../components/Filter";
import { useState } from "react";
import ProductShop from "../components/ProductShop";

export type ShopProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Shop() {
  const product: ShopProduct = {
    id: 1,
    title: "T-shirt blanc Stranger Things",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1599900554895-5e0fc7bbc9c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  };
  const [products, setProducts] = useState(Array(10).fill(product));
  const optionsTemplate = ["Tops", "Jupes", "Pantalon"];
  return (
    <>
      <Breadcrumb />
      <div className="shop-body px-4">
        <div className="d-flex justify-content-end">
          <Select
            name="sort"
            label="TRIER PAR:"
            options={["NOUVEAUTÉS", "PRIX CROISSANT", "PRIX DÉCROISSANT"]}
          />
        </div>
        <div className="product-list d-flex">
          <div className="side-filter">
            <Filter name={"Catégorie"} options={optionsTemplate} />
            <Filter name={"Type de produit"} options={optionsTemplate} />
            <Filter name={"Couleur"} options={optionsTemplate} />
            <Filter name={"Taille"} options={optionsTemplate} />
            <div className="price"></div>
          </div>
          <div className="product-list-container">
            {products.map((product) => (
              <ProductShop product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
