import React, { useState } from "react";
import style from "./header.module.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = window.location.pathname;
  const [activeLink, setActiveLink] = useState(`${currentPath}`); // State to track active link

  const menuOpener = () => {
    setIsOpen(true); // Setting the state variable isOpen to true
    document.body.style.overflow = "hidden"; // Setting the CSS style of the body to prevent scrolling
  };

  const closeHandler = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeHandler();
  };

  return (
    <div className={style.main}>
      <div className={style.header}>
        <div className={style.logoC} onClick={() => history("/")}>
          <img src={logo} alt="logo" className={style.logo} />
          <span className={style.title}>nu</span>
        </div>
        {!isOpen && <FiMenu onClick={menuOpener} className={style.menuIcon} />}
        {isOpen && (
          <IoClose onClick={closeHandler} className={style.menuIcon} />
        )}
        <div className={style.items}>
          <Link
            to="/"
            className={activeLink === "/" ? style.active : ""}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            to="/nublock"
            className={activeLink === "/nublock" ? style.active : ""}
            onClick={() => handleLinkClick("/nublock")}
          >
            nuBlock
          </Link>
          <Link
            to="/nuPayments"
            className={activeLink === "/nuPayments" ? style.active : ""}
            onClick={() => handleLinkClick("/nuPayments")}
          >
            nuPayments
          </Link>
          {/* <Link
            to="/nupayments"
            className={activeLink === "/nupayments" ? style.active : ""}
            onClick={() => handleLinkClick("/nupayments")}
          >
            nuPayments
          </Link> */}
          <a href="https://nu0-1.gitbook.io/nu-whitepaper" target="_BLANK" rel="noreferrer">
            Whitepaper
          </a>
          {/* <Link to="/whitepaper">Whitepaper</Link> */}
          <Link
            to="/nu"
            className={activeLink === "/nu" ? style.active : ""}
            onClick={() => handleLinkClick("/nu")}
          >
            NU
          </Link>
          <Link to="https://t.me/contact_nuconsortium">Contact Us</Link>
        </div>
      </div>
      <div className={isOpen ? style.open : style.mobileM}>
        <div className={style.links}>
          <Link
            to="/"
            className={activeLink === "/" ? style.active : ""}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            to="/nublock"
            className={activeLink === "/nublock" ? style.active : ""}
            onClick={() => handleLinkClick("/nublock")}
          >
            nuBlock
          </Link>
          {/* <Link
            to="/nupayments"
            className={activeLink === "/nupayments" ? style.active : ""}
            onClick={() => handleLinkClick("/nupayments")}
          >
            nuPayments
          </Link> */}
          <a href="https://nu0-1.gitbook.io/nu-whitepaper" target="_BLANK" rel="noreferrer">
            Whitepaper
          </a>
          <Link
            to="/nu"
            className={activeLink === "/nu" ? style.active : ""}
            onClick={() => handleLinkClick("/nu")}
          >
            NU
          </Link>
          <Link to="https://t.me/contact_nuconsortium" onClick={closeHandler}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
