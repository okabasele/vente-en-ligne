import Image from "next/image";
import { useEffect, useState } from "react";
import { useSupabase } from "../utils/useSupabase";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  type: string;
  color: string;
  category: string;
};

export type Size = {
  id: number;
  name: string;
};

export type Color = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
};

export type TypeClothes = {
  id: number;
  name: string;
  categoryID: number;
};

export default function Home() {
  const supabaseClient = useSupabase();

  const [products, setProducts] = useState<Product[]>([]);
  const [size, setSize] = useState<Size[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [typeClothes, setTypeClothes] = useState<TypeClothes[]>([]);
  const carousel = [
    "https://images.unsplash.com/photo-1603252109360-909baaf261c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  ];
  useEffect(() => {
    async function readProducts() {
      // Reading
      const { data, error } = await supabaseClient.from("Product").select("*");

      if (data) {
        const productsToSave = data.map((element) => {
          const typeProd = typeClothes.find((e) => e.id === element.typeID);
          
          const colorProd = colors.find((e) => e.id === element.colorID);
          const categoryProd = categories.find(
            (e) => e.id === typeProd?.categoryID
          );
          
          return {
            id: element.id,
            title: element.title,
            description: element.description,
            price: element.price,
            image: element.image,
            type: typeProd?.name || "",
            category: categoryProd?.name || "",
            color: colorProd?.name || "",
          }
        });
        
        setProducts([...productsToSave]);

        localStorage.setItem("products", JSON.stringify(productsToSave));
        
        if (!localStorage.getItem("cart")) {
          localStorage.setItem("cart", "");
        }
      }
    }

    async function readSize() {
      // Reading
      let { data, error } = await supabaseClient
        .from("Size")
        .select("id, name");
      if (data) {
        setSize(data);
      }
    }
    async function readColors() {
      // Reading
      let { data, error } = await supabaseClient
        .from("Color")
        .select("id, name");
      if (data) {
        setColors(data);
      }
    }
    async function readTypeClothes() {
      // Reading
      let { data, error } = await supabaseClient
        .from("Type")
        .select("id, name,categoryID");
      if (data) {
        setTypeClothes(data);
      }
    }

    async function readCategories() {
      // Reading
      let { data, error } = await supabaseClient
        .from("Category")
        .select("id, name");
      if (data) {
        setCategories(data);
      }
    }

    readColors();
    readSize();
    readTypeClothes();
    readCategories();
    readProducts();
  }, []);

  return (
    <>
      <div className={styles.containerHome}>
        <div
          id={styles.carouselHome}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner h-100">
            {carousel.map((imageUrl, id) => {
              if (id != 0) {
                return (
                  <div key={id} className="carousel-item h-100">
                    <div className="prod-image d-block w-100 ">
                      <Image src={imageUrl} objectFit="cover" layout="fill" />
                    </div>
                  </div>
                );
              }
              return (
                <div key={id} className="carousel-item active h-100">
                  <div className="prod-image d-block w-100">
                    <Image src={imageUrl} objectFit="cover" layout="fill" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.homeButton}>
            <Link href="/shop">
              <a className="btn btn-pink">SHOPPER</a>
            </Link>
          </div>
        </div>
        <div className="bg-secondary p-3"></div>
        <div className={styles.type}>
          <div className={styles.typeWrap}>
            <div className={styles.typeContent}>
              <div className="prod-image d-block w-100">
                <Image
                  src="https://images.unsplash.com/photo-1568251723346-462c2abfd420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBkcmVzc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className={styles.homeButton}>
                <Link href="#">
                  <a className="btn btn-pink">ROBES</a>
                </Link>
              </div>
            </div>
            <div className={styles.typeContent}>
              <div className="prod-image d-block w-100">
                <Image
                  src="https://images.unsplash.com/photo-1568251723346-462c2abfd420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBkcmVzc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className={styles.homeButton}>
                <Link href="#">
                  <a className="btn btn-pink">JUPES</a>
                </Link>
              </div>
            </div>
            <div className={styles.typeContent}>
              <div className="prod-image d-block w-100">
                <Image
                  src="https://images.unsplash.com/photo-1568251723346-462c2abfd420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBkcmVzc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className={styles.homeButton}>
                <Link href="#">
                  <a className="btn btn-pink">T-SHIRT</a>
                </Link>
              </div>
            </div>
            <div className={styles.typeContent}>
              <div className="prod-image d-block w-100">
                <Image
                  src="https://images.unsplash.com/photo-1568251723346-462c2abfd420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBkcmVzc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className={styles.homeButton}>
                <Link href="#">
                  <a className="btn btn-pink">CHEMISES</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
