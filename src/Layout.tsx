import { Box } from "@chakra-ui/react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Testemonial from "./components/Testemonial";

const Layout = () => {
  return (
    <>
      <Box className="bg-[#191919]">
        <NavBar />
      </Box>

      <Box id="main">
        <ScrollRestoration />
        <Outlet />
        <Testemonial />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
