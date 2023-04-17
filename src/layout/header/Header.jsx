import React from "react";
import { Link } from "react-router-dom";
//Styles//
import Styles from "./Header.scss";
//Img//
import account from "./img/Person.svg";
import searchIco from "./img/Vector.svg";
import logo from "./img/logo.png";
///
export default function Header() {
  function search() {
    const InputSearch = document.querySelector("input").values;
    console.log("Search");
    InputSearch.style.display = "block";
  }
  return (
    <header>
      <div className="logo">
        <Link to="/">Logo{/* <img src={logo} alt="logo" /> */}</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact us</Link>
        <div className="search">
          <input type="search" />
          <img src={searchIco} alt="search" onClick={search} />
        </div>
        <Link to="/signUp">
          <img src={account} alt="account" />
        </Link>
      </nav>
    </header>
  );
}
