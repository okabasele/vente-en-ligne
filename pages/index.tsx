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
  typeID: number;
  colorID: number;
};

export type HomeProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  type: string;
};

export default function Home() {
  const supabaseClient = useSupabase();

  const product: HomeProduct = {
    id: 1,
    title: "T-shirt blanc",
    price: 5.99,
    image:
      "https://static.webshopapp.com/shops/279311/files/315232457/60x60x2/image.jpg",
    type: "Robes",
  };
  const [products, setProducts] = useState(Array(2).fill(product));
  const carousel = [
    // "https://cdn-media.prettylittlething.com/bms/media/2022/08/08/NTYtB6wDRjVFXe8VLpTnZtyD2UOr7DNdxrIkM9UB.jpg?imwidth=2048",
    "https://images.unsplash.com/photo-1603252109360-909baaf261c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    "",
  ];
  useEffect(() => {
    async function readSize() {
      // Reading
      let { data, error } = await supabaseClient
        .from("Size")
        .select("id, name");

      // console.log(data,error);
    }

    readSize();
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
                  <div className="carousel-item h-100">
                    <div className="prod-image d-block w-100 ">
                      <Image src={imageUrl} objectFit="cover" layout="fill" />
                    </div>
                  </div>
                );
              }
              return (
                <div className="carousel-item active h-100">
                  <div className="prod-image d-block w-100">
                    <Image src={imageUrl} objectFit="cover" layout="fill" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.homeButton}>
            <Link href="#">
              <a className="btn btn-pink">SHOP</a>
            </Link>
          </div>
        </div>
        <hr />
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
                <a className="btn btn-pink">ROBES</a>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
