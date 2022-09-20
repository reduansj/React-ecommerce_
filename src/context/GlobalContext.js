import { AuthProvider } from "../auth/context/AuthProvider";
import { CartProvider } from "../pages/cart/context/CartContext";

const GlobalProvider = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </>
  );
};

export default GlobalProvider;
