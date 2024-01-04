import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";
import { useCheckout } from "../zuatand/product";
import { useNavigate } from "react-router-dom";
const BuyModal = () => {
  const { checkOut, reset } = useCheckout();
  const uniqueCheckOut = new Set(checkOut);
  const navigate = useNavigate();

  return (
    <dialog id="my_modal_form" className="modal">
      <div className="modal-box space-y-5 font-['Manrope']">
        <FaCircleCheck size="3.5rem" color="#D87D4A" />
        <Heading fontWeight="600" className="uppercase " size="xl">
          Thank you For your order
        </Heading>
        <Text className="text-gray-400">
          You will receive an email confirmation shortly.
        </Text>
        <Flex className="items-center justify-between py-5  flex-col gap-5">
          {[...uniqueCheckOut].map((product) => (
            <>
              <Box className="flex  gap-3 justify-between  w-full">
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
                <Text className="text-gray-400 font-bold">
                  {checkOut.filter((x) => x.name == product.name).length}x
                </Text>
                <Box>
                  <Text className="uppercase text-gray-400">Price</Text>
                  <Text className="font-bold text-xl text-orange-700 text-[1.125rem]">
                    $
                    {product.price *
                      checkOut.filter((x) => x.name == product.name).length}
                  </Text>
                </Box>
              </Box>
            </>
          ))}
        </Flex>
        <Button
          color="white"
          className="uppercase w-full"
          borderRadius={0}
          bg="orange.400"
          onClick={() => {
            navigate("/");
            reset();
          }}
        >
          back to home
        </Button>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => reset()}>close</button>
      </form>
    </dialog>
  );
};

export default BuyModal;
