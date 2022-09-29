import React from "react";
import "./DeliveryResultCard.css";

export default function DeliveryResultCard({
  Icon,
  iconSize,
  packageSizeName,
  deliveryDate,
}) {
  return (
    <div className="deliveryOption">
      <div className={"deliveryOptionHeaderChristmas"}>
        <Icon size={iconSize} />
        <span>{packageSizeName}</span>
      </div>
      <div className={"deliveryOptionDateChristmas"}>
        <span className="deliveryOptionDateFirstSpan">{deliveryDate}</span>
        <span>DEC</span>
      </div>
    </div>
  );
}