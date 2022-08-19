import Image from "next/image";
import Link from "next/link";
import { ShopProduct } from "../shop/index";
import styles from "../../styles/ProductShop.module.css";

export type ProductCartProps = {
  product: ShopProduct;
};

export default function ProductCart({ product }: ProductCartProps) {
  return (
    <>
    <div className="col text-center">

      <Link href="#">
        <a>
          <div className={styles.productImageBlock}>
            <div className="image-wrap position-relative w-100 h-100">
                
            <Image src={product.image} objectFit="cover" layout="fill"/>
            </div>
          </div>
          <div className="product-info-block">
            <div className="product-title">{product.title}</div>
            <div className="product-price fw-semibold">{product.price}€</div>
          </div>
        </a>
      </Link>
    </div>
    </>
  );
}
