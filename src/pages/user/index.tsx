import React, { Component, useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import style from "./index.module.scss";
import Navbar from "components/navbar";

import avatarImg from "static/images/avatar.png";
import useAuth from "utils/useAuth";

const User = () => {
  const { userInfo } = useAuth();
  // const navigate = useNavigate();
  // const location = useLocation();

  return (
    <div className={style.mine}>
      <Navbar
        left=" "
        center={"我的"}
        right={
          <div className={style.myright}>
            <Link to="/userset">设置</Link>
            <Link to="/message" className="iconfont icon-buoumaotubiao14">
              <em className="num">99</em>
            </Link>
          </div>
        }
      />
      <div className="mine-content">
        <div className="header-con">
          <div className="topinfo">
            <div className="headimg">
              <Link to="/userset" className="avatar">
                <img src={userInfo.avatar || avatarImg} alt="" />
              </Link>
            </div>
            <div className="userinfo">
              <div className="mobile">{userInfo.mobile}</div>
              <div className="username">用户名：{userInfo.userName}</div>
              <div className="lab clearfix">
                <Link to="/jdxiangzhi" className="link-item">
                  京享值2837<i className="iconfont icon-jiantou_up"></i>
                </Link>
                <Link to="/jdxiaobai" className="link-item">
                  小白信用90.1<i className="iconfont icon-jiantou_up"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="order-menu">
          <div className="line-box">
            <Link to="/order/1">
              <div className="icon"></div>
              <div className="text">待付款</div>
            </Link>
          </div>
          <div className="line-box">
            <Link to="/order/2">
              <div className="icon"></div>
              <div className="text">待收货</div>
            </Link>
          </div>
          <div className="line-box">
            <Link to="/order/3">
              <div className="icon"></div>
              <div className="text">退换／售后</div>
            </Link>
          </div>
          <div className="line-box">
            <Link to="/order/0">
              <div className="icon"></div>
              <div className="text">全部订单</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
