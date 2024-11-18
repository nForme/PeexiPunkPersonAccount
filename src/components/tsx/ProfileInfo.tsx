import React from "react";
import "../scss/ProfileInfo.scss";
import PenSvg from "../ui-kit/PenSvg";
const ProfileInfo = () => {
  return (
    <section className="profile-info-container">
      <div className="profile-image-container">
        <img src="/ProfileInfo/avatar.jpg" className="profile-avatar" />
      </div>
      <div className="profile-info-container">
        <div className="login-container">
          <span>login</span>
          <PenSvg />
        </div>
        <div className="address-container"></div>
        <div className="email-container"></div>
      </div>
    </section>
  );
};

export default ProfileInfo;
