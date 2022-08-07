import React, { Component, useEffect, useState } from "react";
import style from "./index.module.scss";

// console.log(styles);

// 左侧导航
import submenu from "./submenu";
// 右侧内容
import ChancelCont from "./ChancelCont";

const Category = () => {
  const [chancelId, setChanceId] = useState(1);

  useEffect(() => {
    let appEl: HTMLDivElement = document.querySelector(".App")!;
    appEl.style.paddingBottom = "0";
    return () => {
      appEl.style.paddingBottom = "50px";
    };
  });

  return (
    <div className={style.category}>
      <div className="search-wrapper">
        <div className="search-box">
          <em className="iconfont icon-sousuo-copy"></em>
          <input
            type="text"
            name="keyword"
            className="search"
            autoComplete="off"
            placeholder="萝卜"
          />
        </div>
      </div>
      <div className="category-content">
        <div className="submenu">
          <ul>
            {submenu?.map((item, i) => (
              <li key={item?.id}>
                <span
                  className={chancelId === item?.id ? "active" : ""}
                  onClick={() => setChanceId(item?.id || 0)}
                >
                  {item?.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-wrapper">
          {/*{this.props.children}*/}
          <ChancelCont chancelId={chancelId} />
        </div>
      </div>
    </div>
  );
};

export default Category;
