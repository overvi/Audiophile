import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Container,
} from "@chakra-ui/react";
import { useCheckout } from "../zuatand/product";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const { checkOut } = useCheckout();

  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box  max-w-sm font-[Manrope]">
          {!checkOut.length ? <EmptyCard /> : <CheckOutItems />}
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

const EmptyCard = () => {
  return (
    <Container className="text-center">
      <Heading size="md" fontFamily="Manrope">
        Your Cart Is Empty
      </Heading>
    </Container>
  );
};

const CheckOutItems = () => {
  const { checkOut, reset, append, remove } = useCheckout();
  const navigate = useNavigate();
  const uniqueCheckout = new Set(checkOut);
  console.log(checkOut);
  return (
    <>
      <Flex justify="space-between">
        <Heading fontFamily="Manrope" size="md">
          CART ( {checkOut.length} )
        </Heading>
        <Text
          onClick={() => {
            reset();
            toast.success("Successfully Deleted All!");
          }}
          className="text-gray-400 hover:underline cursor-pointer"
        >
          Remove All
        </Text>
      </Flex>

      <Flex className="items-center justify-between flex-col gap-5 py-7 ">
        {[...uniqueCheckout].map((product) => (
          <>
            <Box className="flex  gap-3 justify-between  w-full items-start">
              <Box className="flex gap-5">
                <Image
                  className="rounded-md"
                  width="65px"
                  src={product.image.desktop}
                />

                <Box>
                  <Text className="font-bold">{product.shortName}</Text>
                  <Text className="text-gray-400 font-bold text-[.8rem] tracking-widest">
                    ${product.price.toLocaleString()}
                  </Text>
                </Box>
              </Box>

              <Flex bg="gray.100" borderRadius={15}>
                <Button onClick={() => append(product)}>+</Button>
                <Button variant="unstyled" bg="transparent">
                  {checkOut.filter((item) => item == product).length}
                </Button>
                <Button
                  onClick={() => {
                    remove(product);
                  }}
                >
                  -
                </Button>
              </Flex>
            </Box>
          </>
        ))}
      </Flex>
      <Flex justify="space-between">
        <Text className="text-gray-400">TOTAL</Text>
        <Text className="font-bold">
          $
          {checkOut
            .map((a) => a.price)
            .reduce((a, b) => a + b)
            .toLocaleString()}
        </Text>
      </Flex>
      <Button
        color="white"
        fontSize="0.8125rem"
        className="inline-block mt-5"
        borderRadius={0}
        width="100%"
        bg="#d87d4a"
        fontWeight="bold"
        onClick={() => navigate("/checkout")}
      >
        CHECKOUT
      </Button>
    </>
  );
};

export default Cart;
