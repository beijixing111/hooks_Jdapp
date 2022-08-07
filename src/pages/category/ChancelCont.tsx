import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgsrc from "./images/1.png";
import mangoPic from "static/images/58b3cfe4N833584e7.jpg";

const category = [
  {
    id: 1,
    img: mangoPic,
    text: "芒果1",
  },
  {
    id: 2,
    img: mangoPic,
    text: "芒果2",
  },
  {
    id: 3,
    img: mangoPic,
    text: "芒果3",
  },
  {
    id: 4,
    img: imgsrc,
    text: "电热毯",
  },
  {
    id: 5,
    img: imgsrc,
    text: "电暖气",
  },
  {
    id: 6,
    img: imgsrc,
    text: "路由器",
  },
];

const CategoryList = () => (
  <ul>
    {category?.map((item, i) => (
      <li key={item.id}>
        <Link to={`/detail/${item.id}`}>
          <img src={item.img} alt="111" />
          <span>{item.text}</span>
        </Link>
      </li>
    ))}
  </ul>
);

const ChancelCont = ({ chancelId }: { chancelId: number }) => {
  if (chancelId !== 1) {
    return (
      <div className="category-wrapper" style={{ fontSize: 14, padding: 10 }}>
        菜单{chancelId}
      </div>
    );
  }
  return (
    <div className="category-wrapper">
      <div className="category-item">
        <div className="label">
          <span>热门分类</span>
          <em>
            <Link to="/paihang">排行榜{">"}</Link>
          </em>
        </div>
        <div className="wrapper-content">
          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default ChancelCont;
