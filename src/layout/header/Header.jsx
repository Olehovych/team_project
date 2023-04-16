import React from "react";
import { Link } from "react-router-dom";
//Styles//
import Styles from "./Header.scss";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">NO</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/download">About us</Link>
        <Link to="/prices">Gallery</Link>
        <Link to="/support">E-Store </Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/signUp">
          <img src="#" alt="account" />
        </Link>
      </nav>
    </header>
  );
}
