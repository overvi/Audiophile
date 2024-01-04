import { ScrollRestoration, useParams } from "react-router-dom";
import data from "../data.json";
import ProductDetails from "./ProductDetails";
const ProductPage = () => {
  const currentHeadPhone = useParams();
  const targetHeadPhone = data.products.find(
    (product) => product.slug == currentHeadPhone.headphone
  );

  if (targetHeadPhone)
    return (
      <>
        <ScrollRestoration />
        <ProductDetails items={targetHeadPhone} />
      </>
    );
};

export default ProductPage;
