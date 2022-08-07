import { Toast } from "antd-mobile";
import React, { Component, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "components/navbar";

import check from "utils/check";
import useAuth from "utils/useAuth";

import style from "./index.module.scss";

const Login = () => {
  const { dispatch } = useAuth();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 登录按钮是否高亮显示
  const highlight = useMemo(() => {
    return account.length > 0 && password.length > 0;
  }, [account, password]);

  const onBlur = () => {
    // IOS键盘收起后，页面滚动对应位置
    window.scroll(0, 0);
  };

  const onLogin = () => {
    if (!account && !password) {
      return; //Toast.info('请先填写信息哦！');
    } else {
      if (!check.checkPhone(account)) {
        return Toast.show("手机号码格式不正确！");
      }
      if (!password || password.length < 6) {
        return Toast.show("密码不能为空且长度不能小于6位！");
      }
      let data = {
        mobile: account,
        userName: "测试小酱油",
        nickName: "测试小酱油",
        avatar: "",
        loginStatus: true,
      };
      dispatch({ type: "login", data });
      navigate("/user");
    }
  };

  const onFill = () => {
    setAccount("18888888888");
    setPassword("123456");
  };

  useEffect(() => {
    document.getElementById("account")?.focus();
  });

  return (
    <div className={style.login}>
      <Navbar center="京东登录" />
      <div className="login-content">
        {/* <div className='title'>用户登录</div> */}
        <div className="login-item">
          <input
            type="text"
            id="account"
            placeholder="手机号码"
            value={account}
            autoComplete="new-pwd"
            onChange={(e) => setAccount(e.target.value)}
          />
          <div className="line"></div>
          <i
            className="clear"
            style={{ display: account.length > 0 ? "flex" : "none" }}
            onClick={() => setAccount("")}
          >
            ×
          </i>
        </div>
        <div className="login-item mar">
          <input
            type="password"
            placeholder="请输入密码"
            value={password}
            autoComplete="off"
            onBlur={onBlur}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="line"></div>
          <i
            className="clear rig"
            style={{ display: password.length > 0 ? "flex" : "none" }}
            onClick={() => setPassword("")}
          >
            ×
          </i>
          <Link to="/findpw" className="forget-pw">
            忘记密码
          </Link>
        </div>
        <button
          type="button"
          className={`login-btn${highlight ? " highlight" : ""}`}
          onClick={onLogin}
        >
          登&nbsp;&nbsp;录
        </button>
        <button
          type="button"
          className="login-btn test-btn"
          style={{ background: "#504b4b" }}
          onClick={onFill}
        >
          一键填充账号密码
        </button>
      </div>
      {/* <div className="test">
        <p><a href="sms:18688886666">发短信给18888886666</a></p>
        <p><a href="tel:186 8888 6666">打电话给188 8888 6666</a></p>
        <p><a href="mailto:815888888@qq.com">给815888888@qq.com发邮件</a></p>
        <p><a target="_blank" href="https://itunes.apple.com/cn/app/id1449805747?mt=8">去app store</a></p>
      </div> */}
    </div>
  );
};

export default Login;
