import React, { Component } from "react";
import { Link } from "react-router-dom";

import emptylogo from "../../static/images/car_empty.png";

const EmptyCar = ({ islogin }: { islogin: boolean }) => (
  <div className="empty-container">
    <div className="empty-logo">
      <img src={emptylogo} alt="空空如也" />
    </div>
    {islogin ? (
      <div className="without-tip">购物车空空如也，去逛逛吧~</div>
    ) : (
      <div>
        <p className="without-tip">登录后可同步购物车中商品</p>
        <Link to="/login">登录</Link>
      </div>
    )}
  </div>
);

export default EmptyCar;
