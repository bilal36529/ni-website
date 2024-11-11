import React from "react";
import ios from "../../../assets/ios.png";
import android from "../../../assets/android.png";
import style from "./DownloadButtons.module.css";

const DownloadButtons = () => {
  return (
    <div className={style.action}>
      <img src={ios} className={style.imgBtn} />
      <a
        href="https://play.google.com/store/apps/details?id=com.nuBlock&pcampaignid=web_share"
        target="_BLANK"
      >
        <img
          src={android}
          className={style.imgBtn}
          onClick={() => console.log("android")}
        />
      </a>
    </div>
  );
};

export default DownloadButtons;
