import React from "react";
import "@vtmn/icons/dist/vitamix/font/vitamix.css";
import { VtmnIcon } from "@vtmn/react";
import { FaBoxOpen } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import "./ShippingPage.css";
import products from "../../products.json";

export default function ShippingPage() {
  const showTheDate = () => {
    const currentDate = new Date();
    console.log(currentDate);
  };

  showTheDate();

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

  let productstotal = 0;
  products.forEach((product) => {
    productstotal += product.size;
  });
  console.log(productstotal);

  const checkShipping = (total) => {
    let shippingDay = 0;
    if (total < 15) {
      return shippingDay + 2;
    } else if (15 <= total && total <= 20) {
      return shippingDay + 4;
    } else {
      return shippingDay + 6;
    }
  };

  let finalShippingDay = checkShipping(productstotal);
  console.log(finalShippingDay);
  console.log(checkShipping(productstotal));

  const christmasDate = new Date("December 24, 2022 00:00:00");
  //24 aralik - shippingDay bize en gec order vermesi gereken tarihi verir.
  const compareForChristmas = (finalShippingDay) => {
    const christmasDate = new Date("December 24, 2022 00:00:00");
    console.log(christmasDate.getDate() - finalShippingDay);

    return christmasDate.getDate() - finalShippingDay;
  };
  compareForChristmas(finalShippingDay);

  return (
    <div className="shippingPageContainer">
      <div className="headerRow">
        <h3>Szállítási Információk</h3>
        <p>
          Meddig add le a rendelésed, hogy biztosan megérkezzen karácsonyig?
          Segitünk eligazodni!
        </p>
      </div>
      <div className="options">
        <div
          className="option"
          onClick={() => {
            console.log("id: ", 0);
          }}
        >
          <VtmnIcon size={24} value="truck-line" variant="default" />
          <span>Házhozszállítás</span>
        </div>

        <div
          className="option"
          onClick={() => {
            console.log("id: ", 1);
          }}
        >
          <VtmnIcon size={24} value="store-line" variant="default" />
          <span>Áruházi átvétel</span>
        </div>

        <div
          className="option"
          onClick={() => {
            console.log("id: ", 2);
          }}
        >
          <VtmnIcon size={24} value="flashlight-line" variant="default" />
          <span>Aznapi kisátílás</span>
        </div>

        <div
          className="option"
          onClick={() => {
            console.log("id: ", 3);
          }}
        >
          <VtmnIcon size={24} value="truck-fill" variant="default" />
          <span>1 munkanapos kisátílás</span>
        </div>

        <div
          className="option"
          onClick={() => {
            console.log("id: ", 4);
          }}
        >
          <VtmnIcon size={24} value="store-fill" variant="default" />
          <span>1 órás áruházi átvétel</span>
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
        <div className="deliveryOption">
          <div className="deliveryOptionHeader">
            <GiWorld size={36} />
            <span>KÜLFÖLDI KÉSZLETBŐL</span>
          </div>
          <div className="deliveryOptionDate">
            <span className="deliveryOptionDateFirstSpan">18</span>
            <span>{month.substring(0, 3).toUpperCase()}</span>
          </div>
        </div>

        <div className="deliveryOption">
          <div className="deliveryOptionHeaderChristmas">
            <FaBoxOpen size={24} />
            <span>KISMÉRETŰ CSOMAG</span>
          </div>
          <div className="deliveryOptionDateChristmas">
            <span className="deliveryOptionDateFirstSpan">
              {christmasDate.getDate() - 2}
            </span>
            <span>{month.substring(0, 3).toUpperCase()}</span>
          </div>
        </div>

        <div className="deliveryOption">
          <div className="deliveryOptionHeaderChristmas">
            <FaBoxOpen size={30} />
            <span>KÖZEPES MÉRETŰ CSOMAG</span>
          </div>
          <div className="deliveryOptionDateChristmas">
            <span className="deliveryOptionDateFirstSpan">
              {christmasDate.getDate() - 4}
            </span>
            <span>DEC</span>
            {/* <span>{month.substring(0, 3).toUpperCase()}</span> */}
          </div>
        </div>

        <div className="deliveryOption">
          <div className="deliveryOptionHeaderChristmas">
            <FaBoxOpen size={36} />
            <span>NAGYMÉRETŰ CSOMAG</span>
          </div>
          <div className="deliveryOptionDateChristmas">
            <span className="deliveryOptionDateFirstSpan">
              {christmasDate.getDate() - 6}
            </span>
            <span>{month.substring(0, 3).toUpperCase()}</span>
          </div>
        </div>

        <div className="deliveryOption">
          <div className="deliveryOptionHeaderChristmas">
            <FaBoxOpen size={36} />
            <span>YOUR FINAL SHIPPING</span>
          </div>
          <div className="deliveryOptionDateChristmas">
            <span className="deliveryOptionDateFirstSpan">
              {compareForChristmas(finalShippingDay)}
            </span>
            <span>{month.substring(0, 3).toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
