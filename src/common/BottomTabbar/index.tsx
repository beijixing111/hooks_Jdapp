import React, { useEffect, useState } from "react";

import Tabbar, { ITabItem } from "components/tabbar";
import useAuth from "utils/useAuth";

const BottomTabbar = () => {
  const { carNum } = useAuth();

  const tabs: ITabItem[] = [
    {
      iconName: "icon-home",
      text: "首页",
      path: "/home",
    },
    {
      iconName: "icon-fenlei",
      text: "分类",
      path: "/category",
    },
    {
      iconName: "icon-gouwuche",
      text: "购物车",
      path: "/shopcar",
      badge: carNum,
    },
    {
      iconName: "icon-yonghu",
      text: "我的",
      path: "/user",
    },
  ];

  return <Tabbar tabs={tabs} />;
};

export default BottomTabbar;
