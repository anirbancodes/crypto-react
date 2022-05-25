import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin2 from "./Coin2";
import img2 from "./icons/block.png";
import imgArrow from "./icons/next2.png";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert("Sorry, come back soon.."));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="header">
        <div className="head-left">
          <img className="logo" src={img2} alt="" />
          <p className="logo-caption">cryptoTrack.</p>
        </div>
        <a href="https://quantcap.tech" className="btn">
          <div className="space-between">
            <span>Quantum | Capital</span>
            <span>
              <img
                className="qc-arrow"
                src={imgArrow}
                alt="Go to Quantum Capital"
              />
            </span>
          </div>
        </a>
      </div>
      <div className="coin-app">
        <div className="coin-search">
          {/* <h1 className="coin-text">Search</h1> */}
          <form>
            <input
              type="text"
              placeholder="Search for eg: bitcoin, solana"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <Coin2
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </>
  );
}

export default App;
