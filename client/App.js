import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { getCrypto } from "./api";

import Exchanges from "./components/Exchanges";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
import NavBar from "./components/Navbar";

function App() {
  // const [stuff, setStuff] = useState("");
  // useEffect(() => {
  //   getCrypto()
  //     .then((res) => {
  //       setStuff(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err.message);
  //     });
  // });

  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
