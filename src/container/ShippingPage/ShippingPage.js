import { React, useState } from "react";
import "@vtmn/icons/dist/vitamix/font/vitamix.css";
import { VtmnIcon } from "@vtmn/react";
import { FaBoxOpen } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import "./ShippingPage.css";
//import products from "../../products.json";
import DeliveryResultCard from "../../component/DeliveryResultCard/DeliveryResultCard";

export default function ShippingPage() {
  
  const [selectedOption, setSelectedOption] = useState(0);

  const [deliveryDays, setDeliveryDays] = useState({
    royalCard: "7/16",
    mplCard: "10/19",
    dpdCard: "10/19",
    foxCard: "11/20",
    generalStoreCard: "13/21",
    otherCard: "24",
  });

  const handleOption = (id) => {
    // I used Number because our state is number not a string.
    setSelectedOption(Number(id));
  };

  const handlePackageSize = (packageSizeName) => {
    console.log("packageSizeName: ", packageSizeName);
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

  const firstDeliveryMethod = () => {
    setDeliveryDays({
      ...deliveryDays,
      royalCard: "7/16",
      mplCard: "10/19",
      dpdCard: "10/19",
      foxCard: "11/20",
    });
  };

  const secDeliveryMethod = () => {
    setDeliveryDays({
      ...deliveryDays,
      generalStoreCard: "13/21",
    });
  };

  const thirdDeliveryMethod = () => {
    setDeliveryDays({
      ...deliveryDays,
      otherCard: "24",
    });
  };

  const fourthDeliveryMethod = () => {
    setDeliveryDays({ ...deliveryDays, otherCard: "23" });
  };

  const fifthDeliveryMethod = () => {
    setDeliveryDays({ ...deliveryDays, otherCard: "20" });
  };

  const deliveryCards = () => {
    switch (selectedOption) {
      case 0:
        return (
          <>
            <DeliveryResultCard
              Icon={FaBoxOpen}
              iconSize={24}
              packageSizeName="MPL (kisméretű csomagok + kerók)"
              deliveryDate={deliveryDays?.mplCard}
            />

            <DeliveryResultCard
              Icon={FaBoxOpen}
              iconSize={30}
              packageSizeName="DPD (közepes méretű csomagok)"
              deliveryDate={deliveryDays?.dpdCard}
            />

            <DeliveryResultCard
              Icon={FaBoxOpen}
              iconSize={36}
              packageSizeName="Royal (nagyméretű csomagok)"
              deliveryDate={deliveryDays?.royalCard}
            />

            <DeliveryResultCard
              Icon={FaBoxOpen}
              iconSize={36}
              packageSizeName="FoxPost Pup"
              deliveryDate={deliveryDays?.foxCard}
            />
          </>
        );
      case 1:
        return (
          <DeliveryResultCard
            Icon={GiWorld}
            iconSize={36}
            packageSizeName="Hagyományos áruházi átvétel"
            deliveryDate={deliveryDays?.generalStoreCard}
          />
        );
      case 2:
        return (
          <DeliveryResultCard
            Icon={GiWorld}
            iconSize={36}
            packageSizeName="1 órás áruházi átvétel"
            deliveryDate={deliveryDays?.otherCard}
          />
        );
      case 3:
        return (
          <DeliveryResultCard
            Icon={GiWorld}
            iconSize={36}
            packageSizeName="Aznapi kiszállítás (Budapest only)"
            deliveryDate={deliveryDays?.otherCard}
          />
        );
      case 4:
        return (
          <DeliveryResultCard
            Icon={GiWorld}
            iconSize={36}
            packageSizeName="1 munkanapos kiszállítás"
            deliveryDate={deliveryDays?.otherCard}
          />
        );
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
            <option value="empty">---</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="big">Big</option>
          </select>
        </div>
        <div>
          <select>
            <option value="meat">---</option>
            <option value="vegetable">MPL</option>
            <option value="meat">DPD</option>
            <option value="fruit">Royal</option>
            <option value="meat">Foxpost</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "4rem",
        }}
      >
        <span>{currentDate.getDate()}</span>/<span>{month.toUpperCase()}</span>/
        <span>{currentDate.getFullYear()}</span>
      </div>
      <div className="options">
        <div
          className={`option ${selectedOption === 0 ? "selectedOption" : ""}`}
          onClick={() => {
            handleOption(0);
            firstDeliveryMethod();
          }}
        >
          <VtmnIcon size={24} value="truck-line" variant="default" />
          <span>Házhozszállítás</span>
        </div>

        <div
          className={`option ${selectedOption === 1 ? "selectedOption" : ""}`}
          onClick={() => {
            handleOption(1);
            secDeliveryMethod();
          }}
        >
          <VtmnIcon size={24} value="store-line" variant="default" />
          <span>Hagyományos áruházi átvétel</span>
        </div>

        <div
          className={`option ${selectedOption === 2 ? "selectedOption" : ""}`}
          onClick={() => {
            handleOption(2);
            thirdDeliveryMethod();
          }}
        >
          <VtmnIcon size={24} value="flashlight-line" variant="default" />
          <span>1 órás áruházi átvétel</span>
        </div>

        <div
          className={`option ${selectedOption === 3 ? "selectedOption" : ""}`}
          onClick={() => {
            handleOption(3);
            fourthDeliveryMethod();
          }}
        >
          <VtmnIcon size={24} value="truck-fill" variant="default" />
          <span>Aznapi kisátílás</span>
        </div>

        <div
          className={`option ${selectedOption === 4 ? "selectedOption" : ""}`}
          onClick={() => {
            handleOption(4);
            fifthDeliveryMethod();
          }}
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

      <div className="deliveryOptions">{deliveryCards()}</div>
    </div>
  );
}