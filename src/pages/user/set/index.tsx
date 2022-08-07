import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "components/navbar";
import "./index.scss";
import useAuth from "utils/useAuth";

const UserSet = () => {
  const navigate = useNavigate();
  const { userInfo, dispatch } = useAuth();

  const onLogout = () => {
    dispatch({
      type: "logout",
    });
    navigate("/");
  };

  if (!userInfo?.loginStatus) {
    navigate("/home");
    return <></>;
  }
  return (
    <div>
      <Navbar center="设置" />
      <div className="set-container">
        <button
          className="loginout-btn"
          style={{ background: "#c0b9b9" }}
          onClick={onLogout}
        >
          退&nbsp;&nbsp;出
        </button>
      </div>
    </div>
  );
};

export default UserSet;
