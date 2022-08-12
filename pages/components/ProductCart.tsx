import Image from "next/image";
import { CartProduct } from "./Cart";


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
  return (
    <>
      <li key={product.id} className="p-0 list-group-item bg-transparent">
        <div className="prod-wrap d-flex">
          <div className="prod-image position-relative w-25">
            <Image src={product.image} layout="fill" />
          </div>
          <div className="prod-details mx-3">
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
          <div className="prod-quantity d-flex align-items-center">
            <button onClick={() => handleSubProduct(product.id)}>-</button>
            <p className="mb-0 mx-1">{product.quantity}</p>
            <button
              className="me-3"
              onClick={() => handleAddProduct(product.id)}
            >
              +
            </button>
            <button onClick={() => handleDeleteProduct(product.id)}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
        <hr />
      </li>
    </>
  );
}
