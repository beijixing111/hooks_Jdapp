import React from "react";
import { Swiper } from "antd-mobile";

import sliderPic from "static/images/58b3cfe4N833584e7.jpg";

const TopSwiper = () => {
  return (
    <Swiper autoplay>
      {[1, 2, 3, 4].map((item) => {
        return (
          <Swiper.Item
            key={item}
            style={{ display: "block", width: "100%", height: "100%" }}
            onClick={() => {}}
          >
            <img
              src={sliderPic}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
            />
          </Swiper.Item>
        );
      })}
    </Swiper>
  );
};

export default TopSwiper;
