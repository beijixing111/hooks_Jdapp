import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./index.module.scss";

export type ITabItem = {
  iconName: string;
  text: string;
  path: string;
  badge?: number;
};

const Tabbar = ({ tabs }: { tabs: ITabItem[] }) => {
  const path = useLocation()["pathname"];
  const [show, setShow] = useState(true);
  const pathArr = ["/"].concat(tabs.map((item) => item.path));

  useEffect(() => {
    setShow(pathArr.some((item) => item === path));
  }, [path]);

  return (
    <div
      className={styles.tabbar}
      style={{ display: !show ? "none" : "block" }}
    >
      <div className="tabbar-content">
        {tabs.map((item, i) => (
          <NavLink to={item.path} key={i} className="tabbar-item">
            {item.badge ? <i>{item.badge}</i> : null}
            <div className={"iconfont " + item.iconName}></div>
            <div className="tabbar-text">{item.text}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Tabbar;
