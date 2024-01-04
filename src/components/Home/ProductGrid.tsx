import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import ResponsinveImage from "../ResponsinveImage";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductGrid = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex bg-[#d87d4a] items-center overflow-hidden flex-col lg:flex-row pt-16  pattern rounded-lg gap-28 "
      >
        <picture className="relative top-6  px-24 max-w-lg  ">
          <ResponsinveImage className="" src="/home/image-speaker-zx9.png" />
        </picture>
        <Stack
          spacing={6}
          className="max-w-[25rem] px-7 items-center lg:items-start lg:pr-16 pb-5 pt-12  text-center lg:text-left"
        >
          <Heading
            size="3xl"
            className=" text-white max-w-[10ch] uppercase tracking-[7px] "
          >
            ZX9 Speaker
          </Heading>
          <Text className="text-gray-200 font-thin">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
          <Button
            onClick={() => navigate("/speakers/zx9-speaker")}
            className="uppercase"
            color="white"
            maxW="10rem"
            borderRadius={0}
            bg="black"
          >
            See Product
          </Button>
        </Stack>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex items-center"
      >
        <picture className="rounded-lg w-full">
          <ResponsinveImage
            src="/home/image-speaker-zx7.jpg"
            className="rounded-lg w-full"
          />
        </picture>
        <Stack className="absolute px-16" spacing={6}>
          <Heading>ZX7 Speaker</Heading>
          <Button
            onClick={() => navigate("/speakers/zx7-speaker")}
            borderRadius={0}
            variant="unstyled"
            className="border border-black"
          >
            See Product
          </Button>
        </Stack>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-9 sm:grid-cols-2"
      >
        <picture>
          <ResponsinveImage
            src="/home/image-earphones-yx1.jpg"
            className="rounded-lg"
          />
        </picture>
        <Stack spacing={7} className=" bg-gray-100 p-7 rounded-lg ">
          <Box className="m-auto">
            <Heading fontWeight="600" size={{ base: "xl", lg: "xl" }}>
              YX1 Earphones
            </Heading>
            <Button
              onClick={() => navigate("/earphones/yx1-earphones")}
              borderRadius={0}
              className="border border-black mt-7"
            >
              See Product
            </Button>
          </Box>
        </Stack>
      </motion.div>
    </>
  );
};

export default ProductGrid;
