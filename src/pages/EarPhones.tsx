import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import GridRoute from "../components/GridRoute";
import ProductCardStack from "../components/Home/ProductCard";
import RouteShowCase from "../components/RouteShowCase";
import data from "../data.json";

const EarPhones = () => {
  const earphones = data.products.filter(
    (product) => product.category == "earphones"
  );

  return (
    <>
      <RouteShowCase />
      <Box className="space-y-36 px-8 py-16 max-w-[75rem] m-auto text-center md:text-left">
        {earphones.map((earphone) => (
          <GridRoute data={earphone} image={earphone.mainImage.src}>
            <Link
              to={earphone.slug}
              className="uppercase hover:opacity-50 transition-all text-white font-semibold inline-block bg-[#d87d4a] p-2 px-6"
            >
              see product
            </Link>
          </GridRoute>
        ))}

        <ProductCardStack />
      </Box>
    </>
  );
};

export default EarPhones;
