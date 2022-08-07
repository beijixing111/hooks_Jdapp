import React from "react";
import { Dispatch } from "types/common";
import { IShopCar } from "types/shopCar";
import { User } from "types/user";

export interface IContext {
  userInfo: User;
  carNum: number;
  shopCar: IShopCar;
  dispatch: Dispatch;
}

const LocalContext = () => {
  let context: React.Context<IContext | null>;
  return () => {
    if (!context) {
      context = React.createContext<IContext | null>(null);
    }
    return context;
  };
};

export default LocalContext();
