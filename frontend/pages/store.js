import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Product from "../components/Products";
import { Gallery } from "../styles/Gallery";

export default function Store() {
  //fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>still loading</p>;
  if (error) return <p>big error</p>;
  const products = data.products.data;

  return (
    <div>
      <Gallery>
        {products.map((product) => (
          <Product key={product.attributes.slug} product={product} />
        ))}
      </Gallery>
    </div>
  );
}
