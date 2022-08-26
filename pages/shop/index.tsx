import Breadcrumb from "../components/Breadcrumb";
import styles from "../../styles/Shop.module.css";
import Link from "next/link";
import Select from "../components/Select";
import Filter from "../components/Filter";
import { useState, useEffect } from "react";
import ProductShop from "../components/ProductShop";
import { Product } from "..";

export type ShopProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  // const optionsTemplate = ["Tops", "Jupes", "Pantalon"];

  useEffect(() => {
    if (window) {
      const productsJSON = localStorage.getItem("products");
      // console.log(productsJSON);

      if (productsJSON) {
        const data: Array<Product> = JSON.parse(productsJSON);
        console.log({ data })

        setProducts(data);
      }
    }

  }, []);
  
  console.log(products);
  return (
    <>
      <Breadcrumb links={[{ link: "/", name: "Accueil" }]} activePage="Shop" />
      <div className="shop-body px-4">
        <div className="my-3 d-flex justify-content-end">
          <Select
            name="sort"
            label="TRIER PAR:"
            options={["NOUVEAUTÉS", "PRIX CROISSANT", "PRIX DÉCROISSANT"]}
          />
        </div>
        <div className="product-list d-flex">
          <div className="side-filter">
            {/* <Filter name={"Catégorie"} options={optionsTemplate} />
            <Filter name={"Type de produit"} options={optionsTemplate} />
            <Filter name={"Couleur"} options={optionsTemplate} />
            <Filter name={"Taille"} options={optionsTemplate} />
            <div className="price"></div> */}
          </div>
          <div className="product-list-container row row-cols-3">
            {(products || []).map((product: ShopProduct) => (
              <ProductShop key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
