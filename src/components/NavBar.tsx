import {
  Container,
  Flex,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import cart from "/images/shared/desktop/icon-cart.svg";
import dropDown from "/images/shared/tablet/icon-hamburger.svg";
import logo from "/images/shared/desktop/logo.svg";
import { links } from "../props";
import { useState } from "react";
import Cart from "./Cart";
import { useCheckout } from "../zuatand/product";
import DropDown from "./DropDown";

const NavBar = () => {
  const [showCart, setShowCart] = useState(false);
  const { checkOut } = useCheckout();

  return (
    <>
      <nav className="p-8 pb-0 flex justify-between bg-[#191919] ">
        <Container maxW="70rem " className="border-b pb-9 border-b-gray-800">
          <Flex align="center" justify="space-between" gap={5}>
            <Flex align="center" gap={5}>
              <label htmlFor="my_modal_mobile">
                <Image
                  className="block lg:hidden "
                  src={dropDown}
                  cursor="pointer"
                />
              </label>
              <Image cursor="pointer" src={logo} />
            </Flex>
            <NavLinks className="hidden lg:flex" />

            <label htmlFor="my_modal_7" className="relative">
              <Image
                onClick={() => setShowCart(true)}
                cursor="pointer"
                src={cart}
              />
              {!!checkOut.length && (
                <span className="flex  font-semibold   justify-center items-center w-4 h-4 absolute p-[.6rem] text-white bg-[#d87d4a] rounded-full text-[.8rem] -top-2 left-3">
                  {checkOut.length}
                </span>
              )}
            </label>
          </Flex>
        </Container>
      </nav>
      {showCart && <Cart />}
      <DropDown />
    </>
  );
};

export default NavBar;

export const NavLinks = ({ className }: { className: string }) => {
  const currentRoute = useLocation();
  return (
    <>
      <UnorderedList
        listStyleType="none"
        gap={6}
        className={`navItem  ${className}`}
      >
        {links.map((link) => (
          <ListItem
            letterSpacing={2}
            className={`font-bold text-sm `}
            _hover={{ opacity: ".5", color: "orange" }}
            color={currentRoute.pathname == link.herf ? "orange.500" : "#fff"}
          >
            <Link to={link.herf}>{link.label}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
};
