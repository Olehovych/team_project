import styles from "./Contact.scss";
import { Link } from "react-router-dom";
import Footer from "../../layout/footer/Footer";
// Animation //
import { AnimSocial } from "../home/Anim";
import { motion } from "framer-motion";
// Img
import { ReactComponent as Instagram } from "./img/Instagram.svg";
// Social
const OlehInstagram = "https://www.instagram.com/_oleh33/";
const NazarInstagram = "https://www.instagram.com/__i_am_nazar__/";
export default function Contact() {
  return (
    <>
      <motion.div
        className="social"
        variants={AnimSocial}
        initial="hidden"
        whileInView="visible"
      >
        <div className="oleh__block">
          <Link to={OlehInstagram}>
            <h1>
              I am <span>Oleh</span>
            </h1>
            <Instagram alt="Instagram" className="social__icon" />
          </Link>
        </div>
        <div className="nazar__block">
          <Link to={NazarInstagram}>
            <h1>I am Nazar</h1>
            <Instagram alt="Instagram" className="social__icon" />
          </Link>
        </div>
      </motion.div>
    </>
  );
}
