import { React, useState } from "react";
import "@vtmn/icons/dist/vitamix/font/vitamix.css";
import { VtmnIcon } from "@vtmn/react";
import { FaBoxOpen } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { GiFox } from "react-icons/gi";
import "./ShippingPage.css";
import DeliveryResultCard from "../../component/DeliveryResultCard/DeliveryResultCard";

const DELIVERY_TYPES = [
  {
    icon: FaBoxOpen,
    iconSize: 24,
    packageSizeName: "MPL (kisméretű csomagok + kerók)",
    deliveryDate: "10/19",
    packageSize: "small",
    courier: "MPL",
    option: 0,
  },
  {
    icon: FaBoxOpen,
    iconSize: 30,
    packageSizeName: "DPD (közepes méretű csomagok)",
    deliveryDate: "10/19",
    packageSize: "medium",
    courier: "DPD",
    option: 0,
  },
  {
    icon: FaBoxOpen,
    iconSize: 36,
    packageSizeName: "Royal (nagyméretű csomagok)",
    deliveryDate: "7/16",
    packageSize: "big",
    courier: "Royal",
    option: 0,
  },
  {
    icon: GiFox,
    iconSize: 36,
    packageSizeName: "FoxPost Pup",
    deliveryDate: "11/20",
    packageSize: "unknown",
    courier: "Foxpost",
    option: 0,
  },
  {
    icon: GiWorld,
    iconSize: 36,
    packageSizeName: "Hagyományos áruházi átvétel",
    deliveryDate: "13/21",
    packageSize: "unknown",
    courier: "unknownCourier",
    option: 1,
  },
  {
    icon: GiWorld,
    iconSize: 36,
    packageSizeName: "1 órás áruházi átvétel",
    deliveryDate: "24",
    packageSize: "unknown",
    courier: "unknownCourier",
    option: 2,
  },
  {
    icon: GiWorld,
    iconSize: 36,
    packageSizeName: "Aznapi kiszállítás (Budapest only)",
    deliveryDate: "23",
    packageSize: "unknown",
    courier: "unknownCourier",
    option: 3,
  },
  {
    icon: GiWorld,
    iconSize: 36,
    packageSizeName: "1 munkanapos kiszállítás",
    deliveryDate: "20",
    packageSize: "unknown",
    courier: "unknownCourier",
    option: 4,
  },
];

export default function ShippingPage() {

  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedPackageSize, setSelectedPackageSize] = useState("unknown");
  const [selectedCourier, setSelectedCourier] = useState("unknownCourier");

  const handleOption = (id) => {
    // I used Number because our state is number not a string.
    setSelectedOption(Number(id));
  };

  const handlePackageSize = (packageSizeName) => {
    setSelectedPackageSize(packageSizeName);
  };

  const handleCourier = (courier) => {
    setSelectedCourier(courier);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  let month = months[currentDate.getMonth()];


  // FROM OLD TASK FUNCTIONS

  // const showTheDate = () => {
  // const currentDate = new Date();
  // console.log(currentDate);
  // return currentDate
  // };
  // showTheDate()

  // //We check the size of the Cart
  // let productsTotalSize = 0;
  // products.forEach((product) => {
  //   productsTotalSize += product.size;
  // });

  // //We check, how long shipping takes according to size of Cart
  // const checkShipping = (totalShippingSize) => {
  //   let shippingDay = 0;
  //   if (totalShippingSize < 15) {
  //     return shippingDay + 2;
  //   } else if (15 <= totalShippingSize && totalShippingSize <= 20) {
  //     return shippingDay + 4;
  //   } else {
  //     return shippingDay + 6;
  //   }
  // };

  // //We found how long it takes shipping
  // let finalShippingAmount = checkShipping(productsTotalSize);

  // const christmasDate = new Date("December 24, 2022 00:00:00");
  // //24 december - finalShippingAmount gives us the last Day Of Order.
  // const compareForChristmas = (finalShippingAmount) => {
  //   const christmasDate = new Date("December 24, 2022 00:00:00");

  //   return christmasDate.getDate() - finalShippingAmount;
  // };

  const filterByOption = (deliveryType) =>
    deliveryType.option === selectedOption;

  const filterByPackageSize = (deliveryType) => {
    if (selectedPackageSize === "unknown") {
      return deliveryType;
    } else {
      return deliveryType.packageSize === selectedPackageSize;
    }
  };

  const filterByCourier = (deliveryType) => {
    if (selectedCourier === "unknownCourier") {
      return deliveryType;
    } else {
      return deliveryType.courier === selectedCourier;
    }
  };

  return (
    <div className="shippingPageContainer">
      <div className="headerRow">
        <h3>Szállítási Információk</h3>
        <p>
          Meddig add le a rendelésed, hogy biztosan megérkezzen karácsonyig?
          Segitünk eligazodni!
        </p>
      </div>
      <div className="dropdown">
        <div>
          <select
            onChange={(e) => handleOption(e.target.value)}
            value={selectedOption}
          >
            <option value={0}>Házhozszállítás</option>
            <option value={1}>Hagyományos áruházi átvétel</option>
            <option value={2}>1 órás áruházi átvétel</option>
            <option value={3}>Aznapi kiszállítás (Budapest only)</option>
            <option value={4}>1 munkanapos kiszállítás</option>
          </select>
        </div>
        <div>
          <select onChange={(e) => handlePackageSize(e.target.value)}>
            <option value="unknown">---</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="big">Big</option>
          </select>
        </div>
        <div>
          <select onChange={(e) => handleCourier(e.target.value)}>
            <option value="unknownCourier">---</option>
            <option value="MPL">MPL</option>
            <option value="DPD">DPD</option>
            <option value="Royal">Royal</option>
            <option value="Foxpost">Foxpost</option>
          </select>
        </div>
      </div>
      <div className="currentDate">
        <span>{currentDate.getDate()}</span>/<span>{month.toUpperCase()}</span>/
        <span>{currentDate.getFullYear()}</span>
      </div>
      <div className="options">
        <div
          className={`option ${selectedOption === 0 ? "selectedOption" : ""}`}
          onClick={() => handleOption(0)}
        >
          <VtmnIcon size={24} value="truck-line" variant="default" />
          <span>Házhozszállítás</span>
        </div>

        <div
          className={`option ${selectedOption === 1 ? "selectedOption" : ""}`}
          onClick={() => handleOption(1)}
        >
          <VtmnIcon size={24} value="store-line" variant="default" />
          <span>Hagyományos áruházi átvétel</span>
        </div>

        <div
          className={`option ${selectedOption === 2 ? "selectedOption" : ""}`}
          onClick={() => handleOption(2)}
        >
          <VtmnIcon size={24} value="flashlight-line" variant="default" />
          <span>1 órás áruházi átvétel</span>
        </div>

        <div
          className={`option ${selectedOption === 3 ? "selectedOption" : ""}`}
          onClick={() => handleOption(3)}
        >
          <VtmnIcon size={24} value="truck-fill" variant="default" />
          <span>Aznapi kisátílás</span>
        </div>

        <div
          className={`option ${selectedOption === 4 ? "selectedOption" : ""}`}
          onClick={() => handleOption(4)}
        >
          <VtmnIcon size={24} value="store-fill" variant="default" />
          <span>1 munkanapos kisátílás</span>
        </div>
      </div>
      <div className="textCard">
        <div className="textCardBody">
          <VtmnIcon size={24} value="error-warning-fill" variant="default" />
          <span className="warningText">
            Az itt feltüntetett dátumok tájékoztató jellegűek, szállító
            partnereink kapacitásától függően változhatnak.
          </span>
        </div>
      </div>
      <div className="deliveryOptions">
        {DELIVERY_TYPES.filter(filterByOption)
          .filter(filterByPackageSize)
          .filter(filterByCourier)
          .map((deliveryType, i) => (
            <DeliveryResultCard
              Icon={deliveryType.icon}
              iconSize={deliveryType.iconSize}
              packageSizeName={deliveryType.packageSizeName}
              deliveryDate={deliveryType.deliveryDate}
              key={i}
            />
          ))}
      </div>
    </div>
  );
}