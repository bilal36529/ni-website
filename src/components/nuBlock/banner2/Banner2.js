import React from "react";
import style from "./banner2.module.css";
import block3 from "../../../assets/block3.png";
import DownloadButtons from "../../common/DownloadButtons/DownloadButtons";


const Banner2 = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>P2P Payments,<br/> Seamless & Secure</p>
          <p className={style.detail}>
          Effortlessly send and receive P2P payments to friends, family, or businesses using crypto. With nuBlock, you can shop, pay for services, and manage transactions securely and instantly, all within a decentralized ecosystem. nuBlock offers fewer fees, faster transactions, and secure vault protection.


          </p>
          <div className={style.action}>
            <DownloadButtons />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.inner}>
            <div className={style.image3}>
              <img alt="img" src={block3} className={style.img3} />
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner2;
