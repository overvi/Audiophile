import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import BuyModal from "../components/BuyModal";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { schema, schemaType } from "../components/validations";
import { useCheckout } from "../zuatand/product";
import deliveryIcon from "/images/checkout/icon-cash-on-delivery.svg";

interface Props {
  label: string;
  placeHolder: string;
  className?: string;
  children?: ReactNode;
  registerOption: any;
}

const CheckOut = () => {
  const [payPath, setPayPath] = useState("e-Money");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<schemaType>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const { checkOut } = useCheckout();

  const uniqueCheckOut = new Set(checkOut);

  return (
    <Box className="bg-gray-50">
      <NavBar />
      <Box className="max-w-[70rem] px-8  m-auto py-12">
        <Link to="/" className="text-gray-500 hover:underline font-semibold">
          Go Back
        </Link>

        <SimpleGrid
          className="py-8 grid-cols-1 lg:grid-cols-[66%_34%] gap-7"
          alignItems="start"
        >
          <Box className="bg-white p-9 space-y-6 rounded-xl">
            <Heading fontWeight="600" className="uppercase !text-3xl">
              checkout
            </Heading>
            <Text className="uppercase tracking-widest text-[.81rem] text-[#d87d4a] font-bold">
              billing details
            </Text>
            <form
              id="form"
              action=""
              className="space-y-10"
              onSubmit={handleSubmit(() => {
                (
                  document.getElementById("my_modal_form") as HTMLDialogElement
                ).showModal();
              })}
            >
              <Flex gap={7} className="flex-col md:flex-row">
                <InputField
                  registerOption={register("name")}
                  label="Name"
                  placeHolder="Alext Wine"
                >
                  {errors.name && <p>{errors.name.message}</p>}
                </InputField>

                <InputField
                  registerOption={register("email")}
                  label="Email Address"
                  placeHolder="alesxmi@gmail.com"
                >
                  {errors.email && <p>{errors.email.message}</p>}
                </InputField>
              </Flex>
              <InputField
                registerOption={register("phone", { valueAsNumber: true })}
                label="Phone Number "
                placeHolder="+1 202-555-0136"
              >
                {errors.phone && <p>{errors.phone.message}</p>}
              </InputField>

              <Text className="uppercase tracking-widest text-[.81rem] text-[#d87d4a] font-bold">
                shipping info
              </Text>
              <Flex direction="column" className="space-y-7 ">
                <InputField
                  registerOption={register("address")}
                  label="Your Address"
                  placeHolder="1117 Viliam Evenure"
                  className="!w-full"
                >
                  {errors.address && <p>{errors.address.message}</p>}
                </InputField>

                <Flex gap={8}>
                  <InputField
                    registerOption={register("zip", { valueAsNumber: true })}
                    label="ZIP code"
                    placeHolder="10001"
                  >
                    {errors.zip && <p>{errors.zip.message}</p>}
                  </InputField>

                  <InputField
                    registerOption={register("city")}
                    placeHolder="New Yourk"
                    label="City"
                  >
                    {errors.city && <p>{errors.city.message}</p>}
                  </InputField>
                </Flex>

                <InputField
                  registerOption={register("country")}
                  placeHolder="United State"
                  label="Country"
                >
                  {errors.country && <p>{errors.country.message}</p>}
                </InputField>
              </Flex>
              <Text className="uppercase tracking-widest text-[.81rem] text-[#d87d4a] font-bold">
                Payment Details
              </Text>
              <Flex
                justify="space-between "
                className="flex-col md:flex-row gap-4"
              >
                <Text className="block text-[.80rem] font-bold basis-1/2">
                  Payment Method
                </Text>
                <Box className="flex gap-5 flex-col md:w-1/2">
                  <Box className="flex gap-5 border rounded-lg p-4 ">
                    <input
                      onChange={() => setPayPath("e-Money")}
                      className="rounded-full"
                      name="ra"
                      id="e-m"
                      type="radio"
                      value=""
                      autoComplete="false"
                      checked={payPath == "e-Money"}
                    />
                    <label className="font-semibold" htmlFor="e-m">
                      e-Money
                    </label>
                  </Box>
                  <Box className="flex gap-2 border rounded-lg p-4 ">
                    <input
                      name="ra"
                      id="e-m"
                      type="radio"
                      onChange={() => {
                        setPayPath("delivery");
                      }}
                    />
                    <label
                      className="font-semibold checked:bg-red-500"
                      htmlFor="e-m"
                    >
                      Cash on Delivery
                    </label>
                  </Box>
                </Box>
              </Flex>

              <Flex
                gap={8}
                display={payPath == "e-Money" ? "flex" : "none"}
                className=" flex-col md:flex-row"
              >
                <InputField
                  registerOption={register("eNumber", {
                    valueAsNumber: true,
                    disabled: payPath !== "e-Money",
                  })}
                  label="e-Money Number"
                  placeHolder="238521993"
                >
                  {errors.eNumber && <p>{errors.eNumber.message}</p>}
                </InputField>

                <InputField
                  registerOption={register("ePin", {
                    valueAsNumber: true,
                    disabled: payPath !== "e-Money",
                  })}
                  label="e-Money PIN"
                  placeHolder="6891"
                >
                  {errors.ePin && <p>{errors.ePin.message}</p>}
                </InputField>
              </Flex>

              {payPath !== "e-Money" && (
                <Flex gap={5}>
                  <Image src={deliveryIcon} />
                  <Text className="text-gray-400">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </Text>
                </Flex>
              )}
              <BuyModal />
            </form>
          </Box>
          <Box className="bg-white rounded-lg p-8 " fontFamily="Manrope">
            <Heading size="md" fontWeight="600" textTransform="uppercase">
              Summary
            </Heading>
            <Flex className="items-center justify-between py-5  flex-col gap-5">
              {!checkOut.length && (
                <Text className="uppercase font-semibold text-gray-400 font-[Manrope]">
                  Nothing Here
                </Text>
              )}
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
                  </Box>
                </>
              ))}
            </Flex>
            <Flex justify="space-between">
              <Text className="uppercase text-gray-400">Total</Text>
              <Text className="font-bold text-xl text-[1.125rem]">
                $
                {checkOut.length
                  ? checkOut.map((item) => item.price).reduce((a, b) => a + b)
                  : 0}
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text className="uppercase text-gray-400">shipping</Text>
              <Text className="font-bold text-xl text-[1.125rem]">$ 50</Text>
            </Flex>
            <Flex justify="space-between">
              <Text className="uppercase text-gray-400">vat (included)</Text>
              <Text className="font-bold text-xl text-[1.125rem]">
                $ 5,819.4
              </Text>
            </Flex>
            <Flex justify="space-between" className="mt-8">
              <Text className="uppercase  text-gray-400">grand total</Text>
              <Text className="font-bold text-xl text-orange-700 text-[1.125rem]">
                $
                {checkOut.length
                  ? checkOut.map((item) => item.price).reduce((a, b) => a + b) +
                    50 +
                    5.816
                  : 0}
              </Text>
            </Flex>

            <button
              form="form"
              type="submit"
              disabled={!checkOut.length}
              style={{ background: "rgb(216, 125, 74)" }}
              className="mt-10 disabled:opacity-35 disabled:cursor-not-allowed uppercase hover:opacity-55 w-full p-2   text-white"
            >
              Continue & Pay
            </button>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
};

const InputField = ({
  registerOption,
  label,
  placeHolder,
  className,
  children,
}: Props) => {
  return (
    <Box className={`space-y-2  ${className} w-full md:w-1/2`}>
      <Flex justify="space-between ">
        <label htmlFor="name" className="block text-[.80rem] font-bold">
          {label}
        </label>
        <Text className="text-red-500 font-normal text-[.75rem]">
          {children}
        </Text>
      </Flex>
      <input
        {...registerOption}
        className="border  border-gray-300 w-full placeholder:font-bold placeholder:text-gray-300 placeholder:text-[.85rem]  focus:outline focus:border-white outline-none focus:shadow-input  transition-all focus:outline-2 p-[1rem]  rounded-lg "
        id="name"
        type="text"
        placeholder={placeHolder}
      />
    </Box>
  );
};

export default CheckOut;
