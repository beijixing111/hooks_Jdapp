import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "utils/useAuth";
import Toptip from "../toptip";
import { Toast } from "antd-mobile";
import style from "./index.module.scss";

interface IProps {
  showTip: boolean;
  topVal: number;
  onClose: () => void;
}

const TopHeader = ({ showTip, topVal, onClose }: IProps) => {
  const { userInfo } = useAuth();

  return (
    <div className={style.myheader}>
      {showTip ? <Toptip closeToptip={onClose} /> : null}
      <div
        className={"header" + (showTip ? "" : " after")}
        id="homeHeader"
        style={{ top: showTip ? topVal : 0 }}
      >
        <div className="fenlei">
          <Link to="/category" className="iconfont icon-fenlei1"></Link>
        </div>

        <div className="search-container">
          <Link to="/search" className="search-box">
            <i className="jd-icon-logo">JD</i>
            <i className="iconfont icon-sousuo-copy jd-icon-search"></i>
            <div className="jd-header">
              <div className="placlholder">海澜之家</div>
            </div>
          </Link>
        </div>
        <div className="login-btn">
          {!userInfo?.loginStatus ? (
            <Link className="login-text" to="/login">
              登录
            </Link>
          ) : (
            <Link className="login-text" to="/user">
              <i
                className="iconfont icon-yonghu"
                style={{ fontSize: "0.34rem" }}
              ></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
