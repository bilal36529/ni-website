import React , {useEffect} from "react";
import style from "./nuPayment.module.css";
import nu from "../../assets/nu2.png";
import Banner2 from "../../components/nuPayment/banner2/Banner2";
import Banner from "../../components/nuPayment/banner/Banner";
import EarthBanner from "../../components/nuBlockBanner/nuBlockBanner";

const NuPayment = () => {

  useEffect(() => {
    window.scroll(0, 0); 
}, []);

  const navigateToLogin = (type) => {
    // const local = 'http://localhost:3000/auth-signup.html'
    const live = 'https://www.auth.nuconsortium.xyz/auth-signup.html'
    window.open(`${live}?type=${type}`, '_blank');
  }
  

  return (
    <div className={style.main}>
            <EarthBanner />
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>Borderless Digital Payments on nuPayments</p>
          <p className={style.detail}>
            Zero knowledge payments that provide cross-borders solutions
          </p>
          <div className={style.action}>
            <button onClick={()=>navigateToLogin('individual')} className={style.action1}>Individual</button>
            <button onClick={()=>navigateToLogin('business')} className={style.action2}>Business</button>
          </div>
        </div>
        <div className={style.right}>
        <div className={style.image2}>
            <img src={nu} alt="img" className={style.img2} />
          </div>
        </div>
      </div>
     <Banner/>
     <Banner2/>
    </div>
  );
};

export default NuPayment;
