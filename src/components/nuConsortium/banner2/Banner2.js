import React from "react";
import style from "./banner2.module.css";
import home3 from "../../../assets/Multidimensionblob.png"

const Banner2 = () => {
  return (
    <div className={style.main}>
    <div className={style.card}>
      <div className={style.left}>
        <p className={style.haiding}>
        Borderless Decentralized Ecosystems
        </p>
        <p className={style.detail}>
        nu is building a comprehensive infrastructure that integrates social engagement, payment processing, gaming, and API solutions into one seamless ecosystem.
        </p>
      </div>
      <div className={style.right}>
        <div className={style.image2}>
          <img src={home3} alt="img" className={style.img2} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner2;
