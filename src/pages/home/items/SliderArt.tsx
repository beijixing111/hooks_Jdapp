import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper } from "antd-mobile";
import sliderPic from "static/images/huandengpic_01.jpg";

const sty: React.CSSProperties = {
  height: "100%",
  color: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 48,
  userSelect: "none",
};

const items = [1, 2, 3, 4].map((item) => (
  <Swiper.Item key={item}>
    <div
      style={sty}
      onClick={() => {
        // Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      <Link
        to="/home"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <img
          src={sliderPic}
          alt=""
          style={{ width: "100%", verticalAlign: "top" }}
        />
      </Link>
    </div>
  </Swiper.Item>
));

const SliderArt = () => {
  return (
    <div className="huandengpic">
      <Swiper autoplay>{items}</Swiper>
    </div>
  );
};

export default SliderArt;
