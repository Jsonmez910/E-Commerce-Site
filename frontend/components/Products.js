import { ProductStyle } from "../styles/ProductStyle.js";
import Link from "next/link.js";

export default function Product({ product }) {
  //export info from props
  const { title, price, image,slug } = product.attributes;
  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.small.url} alt="" />
        </div>
      </Link>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyle>
  );
}
