import { Box } from "@chakra-ui/react";
import GridRoute from "../components/GridRoute";
import ProductCardStack from "../components/Home/ProductCard";
import RouteShowCase from "../components/RouteShowCase";
import data from "../data.json";
import { Link } from "react-router-dom";

const Speakers = () => {
  const speakers = data.products.filter(
    (product) => product.category == "speakers"
  );
  return (
    <>
      <RouteShowCase />
      <Box className="space-y-36 px-8 py-16 max-w-[75rem] m-auto text-center md:text-left">
        {speakers.map((speaker) => (
          <GridRoute data={speaker} image={speaker.mainImage.src}>
            <Link
              to={speaker.slug}
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

export default Speakers;
