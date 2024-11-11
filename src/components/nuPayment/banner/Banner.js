import React from "react";
import style from "./banner.module.css";
import nu2 from "../../../assets/nuPayment2.png";

const Banner = () => {
  const navigateToLogin = () => {
    const local = "http://localhost:3000/auth-signup.html";
    const live = "https://www.auth.nuconsortium.xyz/auth-signup.html";
    window.open(`${live}?type=business`, "_blank");
  };

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
        <img src={nu2} alt="img" className={style.img2} />
        </div>
        <div className={style.right}>
          <p className={style.rHiding}>
            Got a Business? Join NuPayments Blockchain Invoice Management &
            Payment Service
          </p>
          <p className={style.rDetail}>
            {" "}
            nuPayments is for companies of all sizes to process digital
            transactions, accept payments, send payouts, and Invoicing, to help
            companies reach their maximum potential. .
          </p>
          <div className={style.action}>
            <button onClick={navigateToLogin} className={style.action1}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
