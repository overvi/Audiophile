import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ResponsinveImage from "../ResponsinveImage";

const Header = () => {
  return (
    <Box className=" space-y-16 flex-col lg:flex-row  flex bg-[#191919] relative justify-evenly">
      <motion.div
        initial={{ opacity: 0, scale: 0, translateX: "-100%" }}
        animate={{ opacity: 1, scale: 1, translateX: "0%" }}
        transition={{ duration: 1.5 }}
        className="space-y-6 absolute lg:static self-center pt-[5rem] text-center lg:text-left "
      >
        <Heading
          letterSpacing={9}
          className="uppercase text-gray-500 !text-[.8rem] "
        >
          new product
        </Heading>
        <Text
          lineHeight={1}
          fontSize={{ base: " 2.5rem", md: "3.5rem" }}
          className="text-white font-semibold break-words lg:max-w-sm uppercase"
        >
          XX99 Mark II Headphones
        </Text>
        <Text className="text-gray-400 max-w-[23rem] m-auto lg:m-0">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Button color="white" bg="orange.400" className="inline-block !px-14">
          See Product
        </Button>
      </motion.div>
      <motion.picture
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        className="!mt-0  rounded-2xl "
      >
        <ResponsinveImage src="/home/image-hero.jpg" className="lg:w-[35rem]" />
      </motion.picture>
    </Box>
  );
};

export default Header;
