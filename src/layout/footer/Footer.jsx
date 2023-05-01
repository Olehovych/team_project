import React from "react";
import { motion } from "framer-motion";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  const Instagram = "https://www.instagram.com/";
  const Twitter = "https://twitter.com/";
  const Facebook = "https://www.facebook.com/";
  const Youtube = "https://www.youtube.com/";
  const GitHub = "https://github.com/Olehovych/team_project";

  const AnimImg = {
    hidden: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <motion.footer variants={AnimImg} initial="hidden" whileInView="visible">
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
      </motion.footer>
    </>
  );
};

export default Footer;
