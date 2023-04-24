import { useState } from "react";
import styles from "./Home.scss";
import { animated, useSpring } from "react-spring";
////Img clock
import home_clock_1 from "./img/Home_clock_1.png";
import home_clock_2 from "./img/Home_clock_2.png";
import home_clock_3 from "./img/Home_clock_3.png";
// Img background //

import bg1 from "./img/bg_1.png";
import bg2 from "./img/bg_2.png";
import bg3 from "./img/bg_3.png";
export default function Home() {
  //Img Clock
  let imgClock = [home_clock_1, home_clock_2, home_clock_3];
  //
  // bg (background) //
  let ImgBg = [bg1, bg2, bg3];
  let clocks = [
    ["CLASSIC SERIES-45MM", "BLACK/WHITE", "$100.00 usd"],
    ["CLASSIC SERIES-35MM", "BROWN/WHITE", "$175.00 usd"],
    ["CLASSIC SERIES-55MM", "BLACK/BLUE", "$150.00 usd"],
  ];
  //////
  const [currentClock, setCurrentClock] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);

  const handleNextClick = () => {
    if (currentClock === clocks.length - 1) {
      setCurrentClock(0);
      setCurrentImage(0);
      setCurrentBg(0);
    } else {
      setCurrentClock(currentClock + 1);
      setCurrentImage(currentImage + 1);
      setCurrentBg(currentBg + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentClock === 0) {
      setCurrentClock(clocks.length - 1);
      setCurrentImage(imgClock.length - 1);
      setCurrentBg(ImgBg.length - 1);
    } else {
      setCurrentClock(currentClock - 1);
      setCurrentImage(currentImage - 1);
      setCurrentBg(currentBg - 1);
    }
  };
  return (
    <main>
      <div className="main__block">
        <div className="left__block">
          <img className="background" src={ImgBg[currentBg]} alt="Bg" />
          <img src={imgClock[currentImage]} alt="Clock" />
        </div>

        <div className="right__block">
          <h3>{clocks[currentClock][0]}</h3>
          <h3>{clocks[currentClock][1]}</h3>
          <h3>{clocks[currentClock][2]}</h3>
          <p>
            MVMT watch for men, this watch is part of the Classic collection.
            The dial of this watch measures 45mm of diameter. The movement of
            this watch works with a quartz battery. This watch is water
            resistant up to 30 meters.
          </p>
          <div className="button__block">
            <button onClick={handlePrevClick}>PREV</button>
            <button onClick={handleNextClick}>NEXT</button>
          </div>
        </div>
      </div>
    </main>
  );
}
