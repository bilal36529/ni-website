import React, { useEffect } from "react";
import style from "./nuConsortiumHome.module.css";
import pinkEarth from "../../assets/pinthearth2.png";
import Banner2 from "../../components/nuConsortium/banner2/Banner2";
import Banner from "../../components/nuConsortium/banner/Banner";
import { Helmet } from "react-helmet";
import EarthBanner from "../../components/earthBanner/EarthBanner";
import Banner3 from "../../components/nuConsortium/banner3/Banner3";
import FutureBanner from "../../components/nuConsortium/futureBanner/FutureBanner";



const NuConsortiumHome = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={style.main}>
      <Helmet>
        <title>nu</title>
        <meta
          name="description"
          content="nu is a decentralized social blockchain consortium where you socialize, send payments, and trade crypto."
        />
        <meta
          name="keywords"
          content="nu, Blockchain, crypto, web3, payments"
        />
        <meta name="author" content="nu" />
        <meta property="og:title" content="nu" />
        <meta
          property="og:description"
          content="nu is a decentralized social blockchain consortium where you socialize, send payments, and trade crypto."
        />
        <meta property="og:url" content="https://www.nuconsortium.xyz/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${window.location.origin}/logo.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:width" content="200" />
        <meta name="twitter:title" content="nu" />
        <meta name="twitter:title" content="nu" />
        <meta
          name="twitter:description"
          content="nu is a decentralized social blockchain consortium where you socialize, send payments, and trade crypto."
        />
        <meta
          name="twitter:image"
          content={`${window.location.origin}/logo.png`}
        />
        <meta name="twitter:site" content="@joinnu_" />
      </Helmet>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>
          Unlocking Blockchain 
Services for you to 
Explore and Enjoy
          </p>
          <p className={style.detail}>
          Inspiring the next wave of technology and people with borderless experiences, powered through decentralized solutions.
          </p>
        </div>
        <div className={style.right}>
          <div className={style.image2}>
            <img src={pinkEarth} alt="img" className={style.img2} />
          </div>
        </div>
      </div>
      <FutureBanner />
      <Banner3 />
      <Banner />
      <Banner2 />
    </div>
  );
};

export default NuConsortiumHome;
