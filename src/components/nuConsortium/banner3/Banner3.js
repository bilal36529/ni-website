import React, { useEffect } from "react";
import style from "./banner3.module.css";
import home1 from "../../../assets/decentralandhomeimg.png";

const Banner3 = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>
            Powering Decentralized Social Connections
          </p>
          <p className={style.detail}>
            nu enables users to seamlessly interact, share, and transact within
            a secure ecosystem, creating a unified experience where payments and
            social interactions thrive together.
          </p>
        </div>
        <div className={style.right}>
          <div className={style.image2}>
            <img src={home1} alt="img" className={style.img2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
