import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ProductPage from "./components/ProductPage";
import EarPhones from "./pages/EarPhones";
import HeadPhones from "./pages/HeadPhones";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import CheckOut from "./pages/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/headphones", element: <HeadPhones /> },
      { path: "/speakers", element: <Speakers /> },
      { path: "/earphones", element: <EarPhones /> },
    ],
  },
  { path: "/checkout", element: <CheckOut /> },
  { path: "/headphones/:headphone", element: <ProductPage /> },
  { path: "/speakers/:headphone", element: <ProductPage /> },
  { path: "/earphones/:headphone", element: <ProductPage /> },
]);

export default router;
