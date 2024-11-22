import React from "react";
import "../scss/ProfileInfo.scss";
import PenSvg from "../ui-kit/PenSvg";
import WalletSvg from "../ui-kit/WalletSvg";
import CopySvg from "../ui-kit/CopySvg";
const ProfileInfo = () => {
  return (
    <section className="profile-info-container">
      <div className="profile-image-container">
        <img src="./ProfileInfo/avatar.jpg" className="profile-avatar" />
      </div>
      <div className="profile-container">
        <div className="login-container">
          <span className="login ">Harry Brasko</span>
          <PenSvg />
        </div>
        <div className="address-container">
          <WalletSvg />
          <span className="address">0xe32b....542d</span>
          <CopySvg />
        </div>
        <div className="email-container">
          <span className="header-email">E-mail</span>
          <span className="email">HarryBrasko@gmail.com</span>
          <PenSvg />
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
