import React from "react";
import styles from "./About.scss";
// Img //
import team from "./img/team.jpg";
export default function About() {
  return (
    <>
      <div className="about">
        <div className="left__block">
          <h2>Welcome to our watch store!</h2>
          <p>
            We are a team of professionals who have been working with watches
            for many years. We offer a wide range of watches from various
            manufacturers and models to meet the needs of every customer.
          </p>
          <br />
          <p>
            In our store, you will find watches of different styles and price
            ranges, from classic to sporty, from exclusive models to more
            affordable ones. We are proud to offer our customers a wide
            selection of watches from around the world.
          </p>
          <br />
          <p>
            Our team consists of watch experts who are always ready to help you
            choose a watch that suits your style and budget. We understand that
            buying a watch is an important decision, so we will do everything
            possible to provide you with the best service and help in the
            selection process.
          </p>
          <br />
          <p>
            Our store also offers professional watch repair and maintenance.
            Whether you need a battery replacement, mechanism repair or dial
            restoration, our watchmakers are ready to provide you with the best
            service.
          </p>
        </div>
        <div className="right__block">
          {" "}
          <img src={team} alt="team__photo" />
        </div>
      </div>
    </>
  );
}
