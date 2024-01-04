import { Box } from "@chakra-ui/react";

import ProductCardStack from "../components/Home/ProductCard";
import ProductGrid from "../components/Home/ProductGrid";
import Header from "../components/Home/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Box className="pt-52 m-auto px-6 space-y-20" maxW="72rem">
        <ProductCardStack />
        <ProductGrid />
      </Box>
    </>
  );
};

export default Home;
