import React from "react";
import style from "./earthbanner.module.css";

const EarthBanner = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.rHiding}>
            Unlocking Blockchain <br />
            Services for you to <br />
            Explore and Enjoy
          </p>
          <p className={style.detail}>
            Inspiring the next wave of technology and people with borderless
            experiences, powered through decentralized solutions.
          </p>
        </div>
        <div className={style.subCard}>
          <p className={style.subDetail}>The Future Is Now</p>
        </div>
      </div>
    </div>
  );
};

export default EarthBanner;
