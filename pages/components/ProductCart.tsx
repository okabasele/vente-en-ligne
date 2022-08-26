import Image from "next/image";
import { CartProduct } from "./Cart";
import { useState, useEffect } from 'react';

export type ProductCartProps = {
    product: CartProduct;
    handleAddProduct: (id: number) => void;
    handleSubProduct: (id: number) => void;
    handleDeleteProduct: (id: number) => void;
};

export default function ProductCart({
  product,
  handleAddProduct,
  handleSubProduct,
  handleDeleteProduct,
}: ProductCartProps) {
  const [productQuantity, setProductQuantity] = useState(0)
  const [productId, setProductId] = useState(0)
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)

  useEffect(() => {
    if(product) {
      setProductQuantity(product.quantity)
      setProductId(product.id)
      setTitle(product.title)
      setImage(product.image)
      setPrice(product.price)
    }
  }, [])
  

  return (
    <>
      <li className="p-0 list-group-item bg-transparent">
        <div className="prod-wrap d-flex">
          <div className="prod-image position-relative w-25">
            {image && <Image src={image} layout="fill" />}
          </div>
          <div className="prod-details mx-3">
            <p>{product.title}</p>
            <p>{product.price}€</p>
          </div>
          <div className="prod-quantity d-flex align-items-center">
            <button onClick={() => handleSubProduct(productId)}>-</button>
            <p className="mb-0 mx-1">{productQuantity}</p>
            <button
              className="me-3"
              onClick={() => handleAddProduct(productId)}
            >
              +
            </button>
            <button onClick={() => handleDeleteProduct(productId)}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
        <hr />
      </li>
    </>
  );
}
