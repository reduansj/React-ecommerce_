import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Product from "./pages/product";
import Shop from "./pages/shop";
import CheckOut from "./pages/checkout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import Cart from "./pages/cart";
import SignIn from "./pages/signIn";
import GlobalProvider from "./context/GlobalContext";
import { useContext } from "react";
import { AuthContext } from "./auth/context";
import Favorites from "./pages/favorites";

function App() {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <GlobalProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="category/:category"
                  element={<Shop test={"test"} />}
                />
                <Route path="product/:id" element={<Product />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<CheckOut />} />
                <Route path="signIn" element={<SignIn />} />
              </Routes>
            </Layout>
          </Router>
        </GlobalProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
