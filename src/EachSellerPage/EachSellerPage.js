import "./EachSellerPage.css";
import { ProductCard } from "../Cards";
import { useParams } from "react-router-dom";
import { ProductsDatabase } from "../ProductsPage";
export const EachSellerPage = () => {
  const backupBannerImage =
    "https://image.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg";
  const { id } = useParams();
  const sellerProducts = ProductsDatabase.filter(
    (product) => product.seller.shopId === Number(id)
  );
  const { seller } = sellerProducts[0];
  return (
    <div className="shop-page">
      <img
        className="banner-image"
        src={seller.bannerImage !== "" ? seller.bannerImage : backupBannerImage}
        alt="bannerImage"
      />
      <div className="shop-container">
        <div className="shop-details">
          <img className="logo-image" src={seller.logoImage} alt="logoImage" />
          <div className="shop-details-div">
            <span className="seller-name">{seller.shopName}</span>
            <span>{seller.tagLine}</span>
            <span>
              <b>{seller.salesCount} Sales</b>
            </span>
          </div>
        </div>
        <div className="featured-section">
          <span className="featured-heading">Featured items</span>
          <div className="featured-products">
            {sellerProducts.map((product) => (
              <span className="each-featured-product">
                <ProductCard {...product} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
