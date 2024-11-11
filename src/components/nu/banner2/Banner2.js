import React from "react";
import style from "./banner2.module.css";

const Banner2 = () => {

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>Roadmap</p>
          <div className={style.pinkDivLeft}>
            <p className={style.itemList}>
              2024 <br />
              nu social dApp Beta launch
              <br />
              Development of user-friendly interface.
              <br />
              Testing and user feedback.
              <br />
              Smart Contract Integration
              <br />
              Comprehensive security audits
              <br />
              Payments Services
              <br />
              DEX Services  <br />
              </p>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.pinkDivRight}>
            <p className={style.itemList}>
              2025 <br />
              POS Terminals <br />
              Integrate gaming Services <br />
              API Solutions  <br />
              Development Global Partnerships <br/>
              Regulatory and Compliance <br />
              MarketPlace <br />
              Continue Building <br />
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
