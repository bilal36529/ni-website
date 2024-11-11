import React from "react";
import style from "./banner.module.css";
import block2 from "../../../assets/communitiesapp.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <img src={block2} alt="img" className={style.img2} />
        </div>
        <div className={style.right}>
          <p className={style.rHiding}>
          Join Communities with Complete Privacy
          </p>
          <p className={style.rDetail}>
          Explore diverse communities and connect with like-minded individuals on your own terms. nuBlock ensures your privacy is fully in your control, giving you the freedom to socialize while protecting your data. Enjoy meaningful interactions in a secure, decentralized environment.
          </p>
          <p className={style.comingSoon} >
            Coming Soon!
          </p>
          <div className={style.action}>
            <button className={style.action1}>
              Launch PWA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
