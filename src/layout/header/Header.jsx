import React, { useState } from "react";

import { Link } from "react-router-dom";

//Styles//
import Styles from "./Header.scss";
//Img//
import bag from "./img/Shopping_bag.svg";
import account from "./img/Person.svg";
import searchIco from "./img/Vector.svg";
import logo from "./img/logo.png";
///
export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link to="/">MVMT</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact us</Link>
        {/* Modal Window */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <input type="search" />
              <button onClick={() => setIsModalOpen(false)}>Закрити</button>
            </div>
          </div>
        )}
        {/* /Modal Window */}
        <div className="search" onClick={() => setIsModalOpen(true)}>
          <img src={searchIco} alt="search" />
        </div>
        <Link to="/login">
          <img src={account} alt="account" />
        </Link>
        <Link to="/bag">
          <img src={bag} alt="bag" />
        </Link>
      </nav>
    </header>
  );
}
