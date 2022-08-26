import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ShopProduct } from "../shop/index";
import styles from "../../styles/ProductShop.module.css";

export type ProductCartProps = {
  product: ShopProduct;
};

export default function ProductShop({ product }: ProductCartProps) {
  const [link, setLink] = useState('')
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)

  useEffect(() => {
    if(product) {
      setLink("/product/"+product.id)
      setTitle(product.title)
      setImage(product.image)
      setPrice(product.price)
    }
  }, [])

  return (
    <>
    <div className="col text-center">

      <Link href={link}>
        <a>
          <div className={styles.productImageBlock}>
            <div className="image-wrap position-relative w-100 h-100">
                
            <Image src={image} objectFit="cover" layout="fill"/>
            </div>
          </div>
          <div className="product-info-block">
            <div className="product-title">{title}</div>
            <div className="product-price fw-semibold">{price}€</div>
          </div>
        </a>
      </Link>
    </div>
    </>
  );
}
