import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  const Instagram = "https://www.instagram.com/";
  const Twitter = "https://twitter.com/";
  const Facebook = "https://www.facebook.com/";
  const Youtube = "https://www.youtube.com/";
  const GitHub = "https://github.com/Olehovych/team_project";
  return (
    <>
      <footer>
        <nav>
          <ul>
            <li>
              <Link to={Instagram}>Instagram</Link>
            </li>
            <li>
              <Link to={Twitter}>Twitter</Link>
            </li>
            <li>
              <Link to={Facebook}>Facebook</Link>
            </li>
            <li>
              <Link to={Youtube}>Youtube</Link>
            </li>
            <li>
              <Link to={GitHub}>GitHub</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
