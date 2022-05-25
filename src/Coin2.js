import React from "react";
import "./Coin2.css";

const Coin2 = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <>
      <div className="row">
        <div className="first-line">
          <div className="logo-name">
            <img className="" src={image} alt="" />
            <h1 className="">{name}</h1>
          </div>
          <div className="symbol-price">
            <p className="symbol">{symbol}</p>
            <p className="">₹{price.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className=" red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="green">{priceChange.toFixed(2)}%</p>
            )}
          </div>
        </div>

        <div className="second-line">
          <p className="">
            Vol {(volume / 10 ** 8).toFixed(2).toLocaleString()} Cr
          </p>
          <p className="">
            Mkt Cap: ₹{(marketcap / 10 ** 8).toFixed(2).toLocaleString()} Cr
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Coin2;
