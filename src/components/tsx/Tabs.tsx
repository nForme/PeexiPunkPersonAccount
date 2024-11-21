import React, { useState } from "react";
import "../scss/Tabs.scss";
import CharacterContent from "./CharacterContent";
import ItemsContent from "./ItemsContent";
import NFTContent from "./NFTContent";
import AccountSettingsContent from "./AccountSettingsContent";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState<string>("Character");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Character":
        return <CharacterContent />;
      case "Items":
        return <ItemsContent />;
      case "NFT":
        return <NFTContent />;
      case "Account Settings":
        return <AccountSettingsContent />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li
            className={`navbar-item ${
              activeTab === "Character" ? "active" : ""
            }`}
          >
            <a href="#" onClick={() => handleTabClick("Character")}>
              Character <sup>(2)</sup>
            </a>
          </li>
          <li
            className={`navbar-item ${activeTab === "Items" ? "active" : ""}`}
          >
            <a href="#" onClick={() => handleTabClick("Items")}>
              Items <sup>(120)</sup>
            </a>
          </li>
          <li className={`navbar-item ${activeTab === "NFT" ? "active" : ""}`}>
            <a href="#" onClick={() => handleTabClick("NFT")}>
              NFT <sup>(10)</sup>
            </a>
          </li>
          <li
            className={`navbar-item ${
              activeTab === "Account Settings" ? "active" : ""
            }`}
          >
            <a href="#" onClick={() => handleTabClick("Account Settings")}>
              Account Settings
            </a>
          </li>
        </ul>
      </nav>
      <div className="tab-content">{renderContent()}</div>
    </>
  );
};

export default NavBar;
