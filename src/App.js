import "./styles.css";
import { Cart } from "./Cart/Cart";
import { ProductsPage } from "./ProductsPage/ProductsPage";
import { WishList } from "./WishList/WishList";
import { HomePage } from "./HomePage/HomePage";
import { Header } from "./HomePage/Header/Header";
import { OneProductPage } from "./OneProductPage/OneProductPage";
import { CardDetails } from "./Cart/Checkout/CardDetails/CardDetails";
import { NoMatch } from "./NoMatch404/NoMatch";
import { useThemeContext } from "./AllContext/themeContext";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./LoginPage/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { AddressManagement } from "./Cart/Checkout/AddressManagement/AddressManagement";
import { Addresses } from "./ProfilePage/Addresses/Addresses";
import { SignUpPage } from "./SignUpPage/SignUpPage";
import { EachSellerPage } from "./EachSellerPage/EachSellerPage";
import { Profile } from "./ProfilePage/Profile/Profile";
import { Coupons } from "./ProfilePage/Coupons/Coupons";
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
        <Route path="/products/:id" element={<OneProductPage />} />
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
