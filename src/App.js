import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Layout, Typography, Space } from "antd";

import Exchanges from "./components/Exchanges";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import NavBar from "./components/NavBar";
import News from "./components/News";

import "./App.css";

const App = () => (
  <div className="app">
    <div className="NavBar">
      <NavBar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/exchanges/" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="//crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/News" element={<News />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
