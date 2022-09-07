import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Context from "./context/shopContext";
import Home from "./pages/home";
import Product from "./pages/product";
import Shop from "./pages/shop";
import CheckOut from "./pages/checkout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>
          <Context>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="category/:category"
                  element={<Shop test={"test"} />}
                />
                <Route path="product/:id" element={<Product />} />
                <Route path="checkOut" element={<CheckOut />} />
              </Routes>
            </Layout>
          </Context>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
