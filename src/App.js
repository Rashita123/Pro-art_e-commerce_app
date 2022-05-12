import "./styles.css";
import { Cart } from "./Cart/Cart";
import { ProductsPage } from "./ProductsPage";
import { WishList } from "./WishList";
import { HomePage, Header } from "./HomePage";
import { EachProductPage } from "./EachProductPage";
import { CardDetails } from "./Cart/Checkout/CardDetails/CardDetails";
import { NoMatch } from "./NoMatch404";
import { useThemeContext } from "./AllContext";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { AddressManagement } from "./Cart/Checkout/AddressManagement/AddressManagement";
import { SignUpPage } from "./SignUpPage";
import { EachSellerPage } from "./EachSellerPage";
import { Coupons, Profile, Addresses } from "./ProfilePage";
export default function App() {
  const { theme } = useThemeContext();
  return (
    <div style={{ height: "100%" }} className={`App App-${theme}`}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <PrivateRoute path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductsPage />} />
        <PrivateRoute path="/wishlist" element={<WishList />} />
        <Route path="/products/:id" element={<EachProductPage />} />
        <PrivateRoute path="/card-details" element={<CardDetails />} />
        <Route path="/seller/:id" element={<EachSellerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <PrivateRoute
          path="/address-management"
          element={<AddressManagement />}
        />
        <Route path="/coupons" element={<Coupons />} />
        <PrivateRoute path="/profile/addresses" element={<Addresses />} />
        <PrivateRoute path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
