import { Toast } from "antd-mobile";
import { Dispatch } from "types/common";
import { Igoods, IShopCar } from "types/shopCar";

const doShopCar = (shopCar: IShopCar) => {
  return JSON.parse(JSON.stringify(shopCar));
};

const doTotal = (list: Igoods[]) => {
  let total = list.reduce((total, item) => total + item.goodsNum, 0);
  let totalPrice = list.reduce(
    (totalPrice, item) => totalPrice + item.goodsNum * item.price,
    0
  );
  return [total, totalPrice];
};

const updateShopCar = (shopCar: IShopCar, dispatch: Dispatch) => {
  shopCar.allchecked = shopCar.shopList.every((shop) => shop.checked);

  let [total, totalPrice] = doTotal(shopCar.checkedList);

  shopCar.total = total;
  shopCar.totalPrice = totalPrice;

  dispatch({
    type: "updateShopCar",
    shopCar,
  });
};

// 店铺勾选
export const doShopCheck = (
  shopCar: IShopCar,
  shopId: number,
  index: number,
  dispatch: Dispatch
) => {
  shopCar = doShopCar(shopCar);
  let checked = !shopCar.shopList[index].checked;
  shopCar.shopList[index].checked = checked;
  shopCar.shopList[index].goodsList.forEach((goods) => {
    goods.checked = checked;
  });
  if (checked) {
    shopCar.checkedList = shopCar.checkedList.concat(
      shopCar.shopList[index].goodsList
    );
  } else {
    shopCar.checkedList = shopCar.checkedList.filter(
      (goods) => goods.shopId !== shopId
    );
  }

  updateShopCar(shopCar, dispatch);
};

// 物品勾选
export const doGoodsCheck = (
  shopCar: IShopCar,
  index: number,
  goodsIndex: number,
  dispatch: Dispatch
) => {
  shopCar = doShopCar(shopCar);
  let curGoodsList = shopCar.shopList[index].goodsList;
  curGoodsList[goodsIndex].checked = !curGoodsList[goodsIndex].checked;
  shopCar.shopList[index].goodsList = curGoodsList;

  if (curGoodsList[goodsIndex].checked) {
    shopCar.checkedList.push(curGoodsList[goodsIndex]);
  } else {
    shopCar.checkedList = shopCar.checkedList.filter(
      (goods) => goods.goodsId !== curGoodsList[goodsIndex].goodsId
    );
  }
  shopCar.shopList[index].checked = curGoodsList.every(
    (goods) => goods.checked === true
  );

  updateShopCar(shopCar, dispatch);
};

// 编辑物品数量
export const doGoodsNum = (
  shopCar: IShopCar,
  index: number,
  goodsIndex: number,
  changeNum: number,
  dispatch: Dispatch
) => {
  shopCar = doShopCar(shopCar);
  let curGoodsList = shopCar.shopList[index].goodsList;
  if (changeNum < 1) {
    return Toast.show("亲，不能再少了哦！");
  }
  if (changeNum > 200) {
    Toast.show("亲，该商品最多可购买200件哦！");
    changeNum = 200;
  }
  curGoodsList[goodsIndex].goodsNum = changeNum;
  shopCar.shopList[index].goodsList = curGoodsList;
  let hasIndex = shopCar.checkedList.findIndex(
    (goods) => goods.goodsId === curGoodsList[goodsIndex].goodsId
  );
  if (hasIndex > -1) {
    shopCar.checkedList[hasIndex].goodsNum = changeNum;
  }
  updateShopCar(shopCar, dispatch);
};

// 移除物品
export const doRemoveGoods = (
  shopCar: IShopCar,
  index: number,
  goodsIndex: number,
  goodsId: number,
  dispatch: Dispatch
) => {
  shopCar = doShopCar(shopCar);
  let curGoodsList = shopCar.shopList[index].goodsList.filter(
    (goods, i) => i !== goodsIndex
  );
  shopCar.shopList[index].goodsList = curGoodsList;
  shopCar.checkedList = shopCar.checkedList.filter(
    (goods) => goods.goodsId !== goodsId
  );
  if (curGoodsList.length === 0) {
    shopCar.shopList = shopCar.shopList.filter(
      (shoop, shopIndex) => shopIndex !== index
    );
  }
  updateShopCar(shopCar, dispatch);
};

export const doClear = (dispatch: Dispatch) => {
  dispatch({
    type: "clearAll",
  });
};
