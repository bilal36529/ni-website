import React from "react";
import style from "./banner2.module.css";
import currency1 from "../../../assets/currency1.png";
import currency2 from "../.././../assets/currency2.png";
import currency3 from "../../../assets/nu3.png";

const Banner2 = () => {
  const navigateToLogin = () => {
    const local = 'http://localhost:3000/auth-signup.html'
    const live = 'https://www.auth.nuconsortium.xyz/auth-signup.html'
    window.open(`${live}?type=individual`, '_blank');
  }

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>Zero Monthly Cost</p>
          <p className={style.haiding2}>1.7% Fee</p>
          <p className={style.detail}>
            nuPayments has no monthly fees. We process a 1.7% transaction fee +
            20 cents. No hidden fees! Sign up to get started today!
          </p>
          <div className={style.action}>
            <button onClick={navigateToLogin} className={style.action1}>Sign Up</button>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.inner}>
            <div className={style.image1}>
              <img alt="img" src={currency1} className={style.img1} />
            </div>
            <div className={style.image3}>
              <img alt="img" src={currency3} className={style.img3} />
            </div>
          </div>

          <div className={style.image2}>
            <img src={currency2} alt="img" className={style.img2} />
          </div>
          <p className={style.bottomT}>Our partners are your partners!</p>
          {/* <p className={style.bottomT}>Our partners are your partners!</p> */}
        </div>
      </div>
      <div className={style.coloredline}></div>

    </div>
  );
};

export default Banner2;
