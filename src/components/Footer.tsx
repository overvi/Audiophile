import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import faceBook from "/images/shared/desktop/icon-facebook.svg";
import instagram from "/images/shared/desktop/icon-instagram.svg";
import twitter from "/images/shared/desktop/icon-twitter.svg";

import logo from "/images/shared/desktop/logo.svg";
import { NavLinks } from "./NavBar";

const Footer = () => {
  return (
    <SimpleGrid className="bg-[#191919] px-8 lg:px-20 grid-cols-1 gap-8 lg:grid-cols-2 mt-36 pb-11 text-center lg:text-left">
      <Stack className="space-y-12 ">
        <Box className="w-16 h-1 bg-orange-500"></Box>
        <Image className="m-auto lg:m-0" width="135px" src={logo} />

        <NavLinks className="flex flex-col lg:hidden" />
        <Text className="text-gray-400">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Text>
        <Text className="text-gray-400">
          Copyright 2021. All Rights Reserved
        </Text>
      </Stack>
      <Box className="mt-14 flex items-center justify-evenly  flex-col">
        <NavLinks className=" hidden lg:flex" />
        <Flex className="space-x-5 items-center   ">
          <Image src={faceBook} />
          <Image src={instagram} />
          <Image src={twitter} />
        </Flex>
      </Box>
    </SimpleGrid>
  );
};

export default Footer;
