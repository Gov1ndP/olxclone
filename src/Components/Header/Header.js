import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../store/Context";

function Header() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to="/">
            <OlxLogo></OlxLogo>
          </Link>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={handleClick}>{user ? user.displayName : `Login`}</span>
          <hr />
        </div>
        {user && (
          <span
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  navigate("/");
                });
            }}
          >
            Logout
          </span>
        )}
        <div className="sellMenu">
          <Link to="/create">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
