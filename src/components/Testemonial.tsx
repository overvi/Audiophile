import { Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import bestGear from "/images/shared/desktop/image-best-gear.jpg";
import { motion } from "framer-motion";

const Testemonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 px-8 md:grid-cols-2 justify-center max-w-[70rem] m-auto mt-44 gap-7"
    >
      <Stack
        className=" self-center text-center md:text-left justify-self-center "
        spacing={8}
      >
        <Heading className="uppercase">
          Bringing you the
          <Text className="text-orange-700 inline px-3">best</Text>
          audio gear
        </Heading>
        <Text className="text-gray-400 max-w-lg">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </Stack>
      <Image className="rounded-lg -order-1 md:order-1 m-auto" src={bestGear} />
    </motion.div>
  );
};

export default Testemonial;
