import React, { useState } from "react";
import home_clock_1 from "../home/img/Home_clock_1.png";
import "./Bag.scss";
import { Link } from "react-router-dom";

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
      <Link to="/buying">
        <button className="buy">Buy</button>
      </Link>
    </div>
  );
}
