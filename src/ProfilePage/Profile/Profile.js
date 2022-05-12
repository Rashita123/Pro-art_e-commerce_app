import "./Profile.css";
import { Image, Button } from "forkui-lib";
import { RiUserLocationLine } from "react-icons/ri";
import { GrFormNext } from "react-icons/gr";
import { MdLocalOffer } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../AllContext";

export const Profile = () => {
  const { user } = useLoginContext();
  return (
    <div className="profile-page">
      <div className="profile-card">
        <Image src="https://bit.ly/3qZAJqc" size="sm" />
        <p>{user.username}</p>
      </div>
      <div className="profile__additional-cards">
        <Link to="/profile/addresses">
          <div className="add-card">
            <div className="card__left-div">
              <RiUserLocationLine color="#6B7280" size={30} />
              <div className="add-card__content">
                <span className="card__bold-text">Addresses</span>
                <span className="card__grey-text">
                  Save addresses for hassle-free checkout
                </span>
              </div>
            </div>
            <GrFormNext />
          </div>
        </Link>

        <Link to="/coupons">
          <div className="add-card">
            <div className="card__left-div">
              <MdLocalOffer color="#6B7280" size={30} />
              <div className="add-card__content">
                <span className="card__bold-text">Coupons</span>
                <span className="card__grey-text">
                  Manage Coupons for additional Discounts
                </span>
              </div>
            </div>
            <GrFormNext />
          </div>
        </Link>

        <Link to="/profile">
          <div className="add-card">
            <div className="card__left-div">
              <ImProfile color="#6B7280" size={30} />
              <div className="add-card__content">
                <span className="card__bold-text">Profile Details</span>
                <span className="card__grey-text">
                  Change Your Profile Details
                </span>
              </div>
            </div>
            <GrFormNext />
          </div>
        </Link>
        <Link to="/login">
          <Button text="Logout" />
        </Link>
      </div>
    </div>
  );
};
