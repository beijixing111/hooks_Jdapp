// import React, { Component } from 'react';
import { Link } from "react-router-dom";
import submenuPic from "static/images/submenu.png";

const submenu = [
  {
    id: 1,
    icon: submenuPic,
    title: "京东超市",
  },
  {
    id: 2,
    icon: submenuPic,
    title: "海囤全球",
  },
  {
    id: 3,
    icon: submenuPic,
    title: "京东服饰",
  },
  {
    id: 4,
    icon: submenuPic,
    title: "京东生鲜",
  },
  {
    id: 5,
    icon: submenuPic,
    title: "京东到家",
  },
  {
    id: 6,
    icon: submenuPic,
    title: "充值缴费",
  },
  {
    id: 7,
    icon: submenuPic,
    title: "9.9元拼",
  },
  {
    id: 8,
    icon: submenuPic,
    title: "领卷",
  },
  {
    id: 9,
    icon: submenuPic,
    title: "赚钱",
  },
  {
    id: 10,
    icon: submenuPic,
    title: "全部",
  },
];

const Submenu = () => {
  return (
    <div className="submenu">
      <ul className="wrapper">
        {submenu.map((item) => (
          <li key={item.id}>
            <Link to="/submenu">
              <div className="imgbox">
                <img src={item.icon} alt="子菜单" />
              </div>
              <div className="title">{item.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
