import { React, useState } from "react";
import "@vtmn/icons/dist/vitamix/font/vitamix.css";
import Alert from 'react-bootstrap/Alert';
import { VtmnIcon } from "@vtmn/react";
import { FaBoxOpen } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import "./ShippingPage.css";
import products from "../../products.json";

export default function ShippingPage() {



  const [selectedOption, setSelectedOption] = useState(0);

  const handleOption = (id) => {
    setSelectedOption(id);
  };

  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  // const currentDate = new Date();
  // let month = months[currentDate.getMonth()];

  // const showTheDate = () => {
  // const currentDate = new Date();
  // console.log(currentDate);
  // };


  //We check the size of the Cart
  let productsTotalSize = 0;
  products.forEach((product) => {
    productsTotalSize += product.size;
  });

  //We check, how long shipping takes according to size of Cart
  const checkShipping = (totalShippingSize) => {
    let shippingDay = 0;
    if (totalShippingSize < 15) {
      return shippingDay + 2;
    } else if (15 <= totalShippingSize && totalShippingSize <= 20) {
      return shippingDay + 4;
    } else {
      return shippingDay + 6;
    }
  };

  //We found how long it takes shipping
  let finalShippingAmount = checkShipping(productsTotalSize);

  const christmasDate = new Date("December 24, 2022 00:00:00");
  //24 december - finalShippingAmount gives us the last Day Of Order.
  const compareForChristmas = (finalShippingAmount) => {
    const christmasDate = new Date("December 24, 2022 00:00:00");


    return christmasDate.getDate() - finalShippingAmount;
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
          <span>Áruházi átvétel</span>
        </div>

        <div
          className={`option ${selectedOption === 2 ? "selectedOption" : ""}`}
          onClick={() => handleOption(2)}
        >
          <VtmnIcon size={24} value="flashlight-line" variant="default" />
          <span>Aznapi kisátílás</span>
        </div>

        <div
          className={`option ${selectedOption === 3 ? "selectedOption" : ""}`}
          onClick={() => handleOption(3)}
        >
          <VtmnIcon size={24} value="truck-fill" variant="default" />
          <span>1 munkanapos kisátílás</span>
        </div>

        <div
          className={`option ${selectedOption === 4 ? "selectedOption" : ""}`}
          onClick={() => handleOption(4)}
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
        <div className="deliveryOption" style={{ opacity: '0.6' }}>
          <div className="deliveryOptionHeader">
            <GiWorld size={36} />
            <span>KÜLFÖLDI KÉSZLETBŐL</span>
          </div>
          <div className="deliveryOptionDate">
            <span className="deliveryOptionDateFirstSpan">18</span>
            <span>DEC</span>
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
            <span>DEC</span>
            {/* <span>{month.substring(0, 3).toUpperCase()}</span> */}
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
            <span>DEC</span>
          </div>
        </div>

        <div className="deliveryOption">
          <div className="deliveryOptionHeaderChristmas">
            <HiShoppingCart size={36} />
            <span>YOUR FINAL ORDER</span>
          </div>
          <div className="deliveryOptionDateChristmas">
            <span className="deliveryOptionDateFirstSpan">
              {compareForChristmas(finalShippingAmount)}
            </span>
            <span>DEC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
