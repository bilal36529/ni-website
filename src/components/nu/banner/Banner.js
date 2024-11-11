import React from "react";
import style from "./banner.module.css";
import JC from "../../../assets/JC.png";
import vishnu from "../../../assets/Vishnu.png";
import Jon from "../../../assets/Jon.png";
import Keshav from "../../../assets/Keshav.png";
import DownloadButtons from "../../common/DownloadButtons/DownloadButtons";

const Banner = () => {

 const users = [
  {
    name: "JC",
    image: JC,
    title: "Founder",
    link: "https://nublock.page.link/WPJAoAsKGx8pvGKR9"
  },
  {
    name: "Vishnu",
    image: vishnu,
    title: "CTO"
  }
  ,
  {
    name: "Jon",
    image: Jon,
    title: "Operations",
    link: "https://nublock.page.link/2p4ukfwCBybHZKPw6"
  },
  {
    name: "Keshav",
    image: Keshav,
    title: "Strategist"
  }

 ]

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.left}>
          <p className={style.haiding}>What is NU?</p>
          <p className={style.detail}>
          NU is the native digital asset of Nu, a decentralized consortium that aims to revolutionize social engagement on nuBlock and borderless payments for Individuals and businesses.
          </p>
        </div>
        <div className={style.right}>
          <p className={style.rHiding}>Join Us</p>
         <div className={style.users}>
         {users.map(user => (
            <a href={user.link} target="_BLANK"  key={user.name} className={style.horizontalUser} rel="noreferrer" >
              <img src={user.image} alt={user.name} className={style.horizontalUserImage} />
              <div className={style.horizontalUserInfo}>
                <p className={style.userTitle}>{user.title}</p>
                <p className={style.userName}>{user.name}</p>
              </div>
            </a>
          ))}

         </div>
        
          <div className={style["download-buttons-container"]}>
            <DownloadButtons />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
