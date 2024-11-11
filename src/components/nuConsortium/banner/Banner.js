import React from "react";
import style from "./banner.module.css";
import home2 from "../../../assets/Multidimensionbox.png";

const Banner = () => {

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <img src={home2} alt="img" className={style.img2} />
        </div>
        <div className={style.right}>
          <p className={style.rHiding}>
          The nu Consortium Is Community-Operated, Empowering You To Control Your Experience
          </p>
          <p className={style.rDetail}>
          The nu Consortium is entirely community-operated, putting the power in your hands to shape your experience. With full control over your interactions, payments, and privacy, nu empowers you to engage on your terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
