import React, { useState } from "react";
import styles from "./Buying.scss";
import home_clock_1 from "../home/img/Home_clock_1.png";

const Buying = () => {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formInputs = Array.from(event.target.elements).map(
      (element) => element.value
    );
    setFormData(formInputs);
  };

  return (
    <>
      <div className="buying__section">
        <div className="left__block">
          <img src={home_clock_1} alt="Firs clock" />
        </div>
        <div className="form__block">
          <form onSubmit={handleFormSubmit}>
            <legend>Enter your phone number</legend>
            <input type="text" minlength="10" maxlength="10" />
            <legend>Enter your name</legend>
            <input type="text" />
            <legend>Enter your last name</legend>
            <input type="text" />
            <legend>Enter your email"</legend>
            <input type="email" />
            <button type="submit">Send</button>
            <p>Send{JSON.stringify(formData)}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Buying;
