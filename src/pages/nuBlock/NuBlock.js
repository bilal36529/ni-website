import React, { useEffect } from "react";
import style from "./nuBlock.module.css";
import nu41 from "../../assets/nu42.png";
import Banner2 from "../../components/nuBlock/banner2/Banner2";
import Banner from "../../components/nuBlock/banner/Banner";
import Banner3 from "../../components/nuBlock/banner3/Banner3";
import { Helmet } from "react-helmet";
import Banner4 from "../../components/nuBlock/banner4/Banner4";

const NuBlock = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={style.main}>
          <Helmet>
        <title>nuBlock</title>
        <meta
          name="description"
          content="Socialize, send payments, and trade crypto on the block"
        />
        <meta
          name="keywords"
          content="social, payments, crypto, nu, nublock, nuconsortium"
        />
        <meta name="author" content="nu" />
        <meta property="og:title" content="nu" />
        <meta
          property="og:description"
          content=" Socialialize, send payments, and trade crypto on the block"
        />
        <meta property="og:url" content="https://www.nuconsortium.xyz/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={"%PUBLIC_URL%/nu3.png"}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:width" content="200" />
        <meta name="twitter:title" content="nu" />
        <meta
          name="twitter:description"
          content="nu is a decentralized social blockchain consortium where you socialize, send payments, and trade crypto."
        />
        <meta
          name="twitter:image"
          content={"%PUBLIC_URL%/nu3.png"}
        />
        <meta name="twitter:site" content="@joinnu_" />
      </Helmet>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>
          nuBlock Is The Next Gen 
          Social Blockchain Super dApp
          </p>
          <p className={style.detail}>
          Socialize, send payments, and trade crypto.
          </p>
        </div>
        <div className={style.right}>
          <div className={style.image2}>
            <img src={nu41} alt="img" className={style.img2} />
          </div>
        </div>
      </div>
      <Banner4 />
      <Banner />
      <Banner2 />
      <Banner3 />
    </div>
  );
};

export default NuBlock;
