import React from "react";
import { motion } from "framer-motion";
// Animation //
import { AnimImg, AnimRight, AnimText } from "../home/Anim";
import { useState } from "react";
import home_clock_1 from "../home/img/Home_clock_1.png";
import home_clock_2 from "../home/img/Home_clock_2.png";
import home_clock_3 from "../home/img/Home_clock_3.png";
import home_clock_4 from "../home/img/Home_clock_4.jpg";
import home_clock_5 from "../home/img/Home_clock_5.png";
import home_clock_6 from "../home/img/Home_clock_6.png";
import home_clock_7 from "../home/img/Home_clock_7.jpg";
import home_clock_8 from "../home/img/Home_clock_8.png";
import home_clock_9 from "../home/img/Home_clock_9.jpg";
import bag2 from "../../layout/header/img/Shopping_bag.svg";
import bag3 from "../../layout/header/img/plus.png";
import "../gallery/Gallery.scss";
export default function Gallery() {
  let photoGalleryBag = bag2;
  const galleryBag = (event) => {
    const clickedElement = event.currentTarget;
    if (clickedElement.src == bag3) {
      clickedElement.src = bag2;
    } else {
      clickedElement.src = bag3;
    }
  };

  return (
    <motion.div
      className="mainGallery"
      variants={AnimImg}
      initial="hidden"
      whileInView="visible"
    >
      <div>
        <div className="galleryBlock ">
          <img src={home_clock_1} alt="" />
          <p>CLASSIC SERIES-45MM</p>
          <div className="priceLess">
            <p>$100.00 </p>
            <strike>$150.00</strike>
            <img
              src={photoGalleryBag}
              className="galleryBag"
              onClick={galleryBag}
            />
          </div>
        </div>
        <div className="galleryBlock">
          <img src={home_clock_9} alt="" />
          <p>CLASSIC SERIES-31MM</p>
          <div className="priceLess">
            <p>$100.00 </p>
            <strike>$115.00</strike>
            <img src={bag2} className="galleryBag" onClick={galleryBag} />
          </div>
        </div>
        <div className="galleryBlock">
          <img src={home_clock_3} alt="" />
          <p>CLASSIC SERIES-55MM</p>
          <div className="priceLess">
            <p>$150.00 </p>
            <img src={bag2} className="galleryBag" onClick={galleryBag} />
          </div>
        </div>
        <br />
      </div>
      <div>
        <div className="galleryBlock">
          <img src={home_clock_4} alt="" />
          <p>CLASSIC SERIES-998MM</p>
          <div className="priceLess">
            <p>$150.00 </p>
            <img src={bag2} className="galleryBag" onClick={galleryBag} />
          </div>
        </div>
        <div className="galleryBlock">
          <img src={home_clock_5} alt="" />
          <p>CLASSIC SERIES-65MM</p>
          <div className="priceLess">
            <p>$320.00 </p>
            <strike>$380.00</strike>
            <img src={bag2} className="galleryBag" onClick={galleryBag} />
          </div>
        </div>
        <div className="galleryBlock">
          <img src={home_clock_6} alt="" />
          <p>CLASSIC SERIES-98MM</p>
          <div className="priceLess">
            <p>$1500.00 </p>
            <img src={bag2} className="galleryBag" onClick={galleryBag} />
          </div>
        </div>
        <br />
      </div>
      <div>
        <div className="galleryBlock">
          <img src={home_clock_7} alt="" />
          <p>CLASSIC SERIES-77MM</p>
          <div className="priceLess">
            <p>$430.00 </p>
            <img src={bag2} className="galleryBag" onClick={galleryBag} />
          </div>
        </div>
        <div className="galleryBlock">
          <img src={home_clock_8} alt="" />
          <p>CLASSIC SERIES-12MM</p>
          <div className="priceLess">
            <p>$130.00 </p>
            <strike>$150.00</strike>
            <img src={bag2} className="galleryBag" onClick={galleryBag} />
          </div>
        </div>
        <div className="galleryBlock">
          <img src={home_clock_2} alt="" />
          <p>CLASSIC SERIES-35MM</p>
          <div className="priceLess">
            <p>$175.00 </p>
            <strike>$200.00</strike>
            <img src={bag2} className="galleryBag" onClick={galleryBag} />
          </div>
        </div>
        <br />
      </div>
    </motion.div>
  );
}
