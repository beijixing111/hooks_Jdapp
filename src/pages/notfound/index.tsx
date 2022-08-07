import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "components/navbar";
import style from "./index.module.scss";

const NotFound = () => {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);

  return (
    <div>
      <Navbar />
      <div className={style.notfound}>
        <div className="notfound-img"></div>
        <p>
          <i>页面失联了~休息一会儿吧，</i>
          {window.history.length > 1 ? (
            <span onClick={onBack}>返回上一页</span>
          ) : (
            <Link to="/home">返回首页</Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
