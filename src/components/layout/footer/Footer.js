import React from "react";
import style from "./footer.module.css";
import nlogo from "../../../assets/nlogo.png";
import insta from "../../../assets/instagram.png";
import twitter from "../../../assets/twitter.png";
import telegram from "../../../assets/telegram.png";
import linkedin from "../../../assets/linkedin.png";


const Footer = () => {

  return (
    <div className={style.main}>
      <div className={style.card}>
        {/* <div className={style.left}>
          <p className={style.haiding}>Get The nuBlock App</p>
          
          <DownloadButtons />
        
          <div className={style.image3}>
            <img alt="img" src={currency3} className={style.img3} />
          </div>

          <div className={style.image2}>
            <img src={currency2} alt="img" className={style.img2} />
          </div>
          <div className={style.image1}>
            <img src={currency1} alt="img" className={style.img1} />
          </div>
        </div> */}
        {/* <div className={style.right}>
          <p className={style.rhaiding}>Not a nuBlock app user?</p>
          <p className={style.rdetail}>
            Do not worry, you can still sign up to use nuPayments with a few
            easy steps. Send links, setup QR codes to send and receive payments.
          </p>
          <p className={style.rhaiding} >Individual </p>
          <p className={style.rdetail} >
            We make it simple. nu users automatically have direct access to
            nuPayments within the nu application. Don’t have nu mobile? You can
            still nuPayments to send and receive payments.
          </p>
        </div> */}
      </div>
      <div className={style.linktree}>
        <a
          href=" https://nublock.page.link/KATpZSWaZyQum3Gv8"
          target="_blank"
          rel="noopener noreferrer"
          className={style.nlogo}
        >
          <img alt="img" src={nlogo} className={style.nlogo} />
        </a>
        <a
          href="https://twitter.com/joinnu_ "
          target="_blank"
          rel="noopener noreferrer"
          className={style.twitter}
        >
          <img alt="img" src={twitter} className={style.twitter} />
        </a>
        <a
          href="https://t.me/joinnu"
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          <img alt="img" src={telegram} className={style.link} />
        </a>
        <a
          href="https://www.instagram.com/joinnu_/ "
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          <img alt="img" src={insta} className={style.link} />
        </a>
        <a
          href="https://www.linkedin.com/company/joinnu/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          <img alt="img" src={linkedin} className={style.link} />
        </a>
      </div>
        <h6 style={{color:'white'}}>
        © 2024 directoapp Inc. All Rights Reserved.  
        </h6>

    </div>
  );
};

export default Footer;
