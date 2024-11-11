import React , {useEffect} from "react";
import style from "./nu.module.css";
import nu from "../../assets/nu3.png";
import Banner2 from "../../components/nu/banner2/Banner2";
import Banner from "../../components/nu/banner/Banner";

const Nu = () => {

  useEffect(() => {
    window.scroll(0, 0); 
}, []);

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>NU Powers Social and Retail Payments</p>
          <p className={style.detail}>
          NU is the native digital asset of nu.
          <br/> Join The revolution To streamline Digital Assets
          </p>
          <div className={style.action}>
            <a className={style.action1} href="https://docs.google.com/forms/d/1978tNCeiSVkX7VztPbzIkjtwq0vXHpiwfDSaGZNXN0c/edit" target="_BLANK">Buy NU</a>
          </div>
        </div>
        <div className={style.right}>
        <div className={style.image2} >
         <img  src={nu} alt='img' className={style.img2} />
         </div>

        </div>
      </div>
     <Banner/>
     <Banner2/>
    </div>
  );
};

export default Nu;
