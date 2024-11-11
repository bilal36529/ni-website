import React from "react";
import style from "./banner3.module.css";
import block4 from "../../../assets/block4.png";

const Banner3 = () => {

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <img src={block4} alt="img" className={style.img2} />
        </div>
        <div className={style.right}>
          <p className={style.rHiding}>
          Build Your Crypto Portfolio
          </p>
          <p className={style.rDetail}>
          Easily buy, sell, and trade a variety of cryptocurrencies on nuBlock. Grow and manage your portfolio with confidence, all within a secure and user-friendly consortium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
