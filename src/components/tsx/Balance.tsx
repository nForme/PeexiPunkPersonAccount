import React from "react";
import "../scss/Balance.scss";

const data = [
  {
    quantity: "100,000",
    type: "Peexi coin",
  },
  {
    quantity: "1000",
    type: "Peexi token",
  },
];

const Balance = () => {
  return (
    <div className="balance-container">
      <p className="balance-title">Balance</p>
      {data.map((item, index) => (
        <p key={index} className="balance-item">
          <span className="balance-amount">{item.quantity}</span> {item.type}
        </p>
      ))}
    </div>
  );
};

export default Balance;
