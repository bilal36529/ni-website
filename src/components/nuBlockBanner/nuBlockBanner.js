import React from "react";
import style from "./nublockbanner.module.css";

const nuBlockBanner = () => {

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
        <p className={style.haiding}>
        nuBlock Is The Next Gen <br/>
        Social Blockchain Super dApp
          </p>
          <p className={style.detail}>
          Socialize, send payments, and trade crypto.
          </p>
        </div>
        </div>
     
    </div>
  );
};

export default nuBlockBanner;
