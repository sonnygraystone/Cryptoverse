import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Typography.Title level={2} className="logo">
          {/* <Link to="/">Cryptoverse</Link> */}
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>{/* <Link></Link> */}</Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
