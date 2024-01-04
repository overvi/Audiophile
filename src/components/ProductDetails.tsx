import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import data from "../data.json";
import useProduct, { useCheckout } from "../zuatand/product";
import Footer from "./Footer";
import GridRoute from "./GridRoute";
import ProductCardStack from "./Home/ProductCard";
import NavBar from "./NavBar";
import Testemonial from "./Testemonial";

interface Props {
  items: (typeof data.products)[0];
}
const ProductDetails = ({ items }: Props) => {
  const { count, increment, decrement, reset } = useProduct();
  const { append } = useCheckout();

  const handleCheckOut = (item: (typeof data.products)[0]) => {
    for (let i = count; i !== 0; i--) {
      append(item);
      reset();
    }
  };

  return (
    <>
      <NavBar />
      <Box className="space-y-36 px-8 py-16 max-w-[75rem] m-auto  ">
        <Link
          to={"/" + items.category}
          className="text-gray-500 font-semibold hover:underline"
        >
          Go Back
        </Link>
        <GridRoute data={items} className=" h-full" image={items.mainImage.src}>
          <Text className="text-2xl font-semibold font-[Manrope]">
            ${items.price.toLocaleString("en-US")}
          </Text>
          <Flex gap={5}>
            <Flex bg="gray.100" borderRadius={15}>
              <Button color="gray.500" onClick={increment}>
                +
              </Button>
              <Button variant="unstyled" bg="transparent">
                {count}
              </Button>
              <Button color="gray.500" onClick={decrement}>
                -
              </Button>
            </Flex>
            <Button
              onClick={() => {
                handleCheckOut(items);
                toast.success("Successfully  Added To Cart");
              }}
              bg="orange.500"
              p={5}
              px={12}
              color="white"
              borderRadius={7}
              className="uppercase"
            >
              Add To Cart
            </Button>
          </Flex>
        </GridRoute>

        <Flex gap="9rem" className="flex-col lg:flex-row">
          <Box className="space-y-6 basis-[60%]">
            <Heading className="uppercase">Features</Heading>
            <Text className="text-gray-500">
              {items.features.substring(0, items.features.length / 2)}
            </Text>
            <Text className="text-gray-500">
              {items.features.substring(items.features.length / 2)}
            </Text>
          </Box>
          <Box className="space-y-6">
            <Heading className="uppercase ">IN the Box</Heading>
            <Box className="space-y-3">
              {items.includedItems.map((item) => (
                <Flex gap={8}>
                  <Text className="text-orange-600">{item.quantity}x</Text>
                  <Text className="text-gray-500">{item.item}</Text>
                </Flex>
              ))}
            </Box>
          </Box>
        </Flex>

        <SimpleGrid
          gap="2rem"
          templateAreas={{
            base: `
          "one"
          "two "
          "three"
          "four"`,
            md: `
          "one two"
          "three two"
        `,
          }}
        >
          <Image className="rounded-xl" src={items.gallery.first.desktop} />
          <Image
            className="rounded-xl h-full"
            src={items.gallery.second.desktop}
          />
          <Image
            className="rounded-xl"
            gridArea="two"
            src={items.gallery.third.desktop}
          />
        </SimpleGrid>

        <Box className="text-center space-y-24">
          <Heading className="uppercase">You may also like</Heading>
          <Flex gap={7} className="flex-col md:flex-row">
            {items.others.map((item) => (
              <Box className="space-y-7">
                <Image className="rounded-xl" src={item.image.desktop} />
                <Text className="font-semibold text-2xl">{item.name}</Text>
                <Link
                  to={"/" + item.slug}
                  className="uppercase inline-block text-white p-2 px-5 font-semibold bg-orange-400  "
                >
                  See Product
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
        <ProductCardStack />
        <Testemonial />
      </Box>
      <Footer />
    </>
  );
};

export default ProductDetails;
