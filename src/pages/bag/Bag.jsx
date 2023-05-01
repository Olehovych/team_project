import React, { useState } from "react";
import home_clock_1 from "../home/img/Home_clock_1.png";
import "./Bag.scss";

export default function Bag() {
  const money1 = 100;
  const [count1, setCount1] = useState(1);
  const [price1, setPrice1] = useState(count1 * money1);

  const handleMinusClick = () => {
    if (count1 > 1) {
      setCount1(count1 - 1);
      setPrice1((count1 - 1) * money1);
    }
  };

  const handlePlusClick = () => {
    setCount1(count1 + 1);
    setPrice1((count1 + 1) * money1);
  };
  const Buy = () => {
    alert("Succesful!");
  };
  return (
    <div className="main">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>QTY</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={home_clock_1} className="photoBag" />
            </td>
            <td>${price1}</td>
            <td>
              <button className="minus1" onClick={handleMinusClick}>
                -
              </button>
              {count1}
              <button className="plus1" onClick={handlePlusClick}>
                +
              </button>
            </td>
            <td>${money1}</td>
          </tr>
        </tbody>
      </table>
      <button
        className="buy"
        onClick={() =>
          (document.querySelector("#buyPage").style.display = "flex")
        }
      >
        Buy
      </button>
      <div id="buyPage">
        <h1>Make payment</h1>
        <form className="formBuy" action="">
          <div id="leftFormBuy">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Email Address" />
            <select>
              <option>Credit Card Or Debit</option>
              <option>Paypal</option>
              <option>Bank Transfer</option>
            </select>
          </div>
          <div id="rightFormBuy">
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Address for Delivery" />
            <input type="text" placeholder="Mobile Phone" />
          </div>
        </form>
        <button onClick={Buy}>Go to Payment</button>
        <button
          onClick={() =>
            (document.querySelector("#buyPage").style.display = "none")
          }
        >
          Go to Back
        </button>
      </div>
    </div>
  );
}
