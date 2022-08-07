import { useReducer } from "react";
import { Dispatch } from "types/common";
import { IShopCar } from "types/shopCar";
import { User } from "types/user";

interface IState {
  userInfo: User;
  carNum: number;
  shopCar: IShopCar;
}

const initUserInfo: User = {
  loginStatus: false,
  mobile: null,
  userName: "",
  nickName: "",
  avatar: "",
};

const initShopCar: IShopCar = {
  shopList: [],
  checkedList: [],
  allchecked: false,
  total: 0,
  totalPrice: 0,
};

const ininState: IState = {
  userInfo: initUserInfo,
  carNum: 0,
  shopCar: initShopCar,
};

const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        userInfo: action.data,
      };
    case "logout":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          loginStatus: false,
        },
      };
    case "sureAddGoods":
      return {
        ...state,
        carNum: action.data.carNum,
        shopCar: action.data.shopCar,
      };
    case "updateShopCar":
      return {
        ...state,
        shopCar: action.shopCar,
        carNum: action.shopCar.shopList.length === 0 ? 0 : state.carNum,
      };
    case "clearAll": {
      return {
        ...state,
        shopCar: initShopCar,
        carNum: 0,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

const useLocalReducer = () => {
  const [state, dispatch]: [state: IState, dispatch: Dispatch] = useReducer(
    reducer,
    ininState
  );
  return [state, dispatch] as const;
};

export default useLocalReducer;
