import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import data from "../data.json";
import ResponsinveImage from "./ResponsinveImage";

export interface Props {
  data: (typeof data.products)[0];
  className?: string;
  image: string;
  children?: ReactNode;
}

const GridRoute = ({ image, data, className, children }: Props) => {
  return (
    <>
      <SimpleGrid className="gap-9 grid-cols-1 md:grid-cols-2  place-items-center">
        <picture className={className}>
          <ResponsinveImage className="object-cover h-full" src={image} />
        </picture>
        <Box className="space-y-7 max-w-[30rem]">
          <Heading
            letterSpacing={6}
            fontWeight={300}
            size="xs"
            className="text-orange-600 uppercase  "
          >
            {data.new && "New Product"}
          </Heading>
          <Text className="text-4xl font-semibold lg:max-w-[20ch]">
            {data.name}
          </Text>
          <Text className="text-gray-500">{data.description}</Text>
          {children}
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GridRoute;
