import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import iconArrowRight from "/images/shared/desktop/icon-arrow-right.svg";
import { useNavigate } from "react-router-dom";
import { showCase } from "../../images";

interface Props {
  image: string;
  name: string;
}

const ProductCard = ({ image, name }: Props) => {
  const navigate = useNavigate();
  console.log(name);
  return (
    <>
      <Card
        bg="gray.50"
        className="w-full mt-16 group cursor-pointer mb-7 text-center flex items-center "
        onClick={() => navigate(`/${name}`)}
      >
        <CardBody className="relative !pt-20 ">
          <Image
            width="130px"
            className="absolute inset-0 m-auto !-top-36"
            src={image}
          />
          <Stack spacing={5}>
            <Heading
              size={{ base: "sm", md: "md" }}
              className="uppercase group "
              fontFamily="Manrope"
              letterSpacing={2}
            >
              {name}
            </Heading>

            <Box className="flex items-center justify-center gap-5">
              <Text className="uppercase  text-gray-400 cursor-pointer font-semibold group-hover:text-orange-400  ">
                Shop
              </Text>
              <Image src={iconArrowRight} />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

const ProductCardStack = () => {
  const cards = [
    { img: showCase.headphone, label: "headphones" },
    { img: showCase.earphone, label: "earphones" },
    { img: showCase.speaker, label: "speakers" },
  ];

  return (
    <>
      <Flex className="gap-9 flex-col sm:flex-row">
        {cards.map((card) => (
          <ProductCard image={card.img} name={card.label} />
        ))}
      </Flex>
    </>
  );
};

export default ProductCardStack;
