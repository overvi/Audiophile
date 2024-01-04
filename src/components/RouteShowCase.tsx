import { Box, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const RouteShowCase = () => {
  const route = useLocation();
  return (
    <Box className="bg-[#191919] p-16 lg:p-28 grid place-items-center">
      <Heading className="uppercase font-bold text-white">
        {route.pathname.slice(1)}
      </Heading>
    </Box>
  );
};

export default RouteShowCase;
