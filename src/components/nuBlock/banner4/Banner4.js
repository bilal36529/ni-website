import React, { useEffect } from "react";
import style from "./banner4.module.css";
import nu3 from "../../../assets/nu3.png";
import DownloadButtons from "../../../components/common/DownloadButtons/DownloadButtons";

const Banner4 = () => {
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
            Socialize,Discover, Earn Rewards Send Cross-Border Payments on The
            Block
          </p>
          <p className={style.detail}>
            nuBlock is a next-generation blockchain platform designed to
            seamlessly integrate social engagement with global financial
            services.
          </p>

          <div className={style.action}>
            <DownloadButtons />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.image2}>
            <img src={nu3} alt="img" className={style.img2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner4;
