import { Dispatch } from "types/common";
import { IShopCar } from "types/shopCar";

const goSure = (
  shopCar: IShopCar,
  carNum: number,
  dispatch: Dispatch,
  data: any
) => {
  shopCar = JSON.parse(JSON.stringify(shopCar));
  if (shopCar.shopList.length === 0) {
    carNum += 1;
    let shopData = {
      shopId: data.shopId,
      shopName: data.shopName,
      checked: true,
      goodsList: [data],
    };
    shopCar.shopList.push(shopData);
  } else {
    let shopIndex = shopCar.shopList.findIndex((shop) => {
      return shop.shopId === data.shopId;
    });
    if (shopIndex > -1) {
      let shop = shopCar.shopList[shopIndex];
      let goodsIndex = shop.goodsList.findIndex(
        (goods) => goods.goodsId === data.goodsId
      );
      if (goodsIndex > -1) {
        shopCar.shopList[shopIndex].goodsList[goodsIndex].goodsNum +=
          data.goodsNum;
      } else {
        shopCar.shopList[shopIndex].goodsList.push(data);
        carNum += 1;
      }
    } else {
      carNum += 1;
      shopCar.shopList.push({
        shopId: data.shopId,
        shopName: data.shopName,
        checked: true,
        goodsList: [data],
      });
    }
  }
  let hasIndex = shopCar.checkedList.findIndex(
    (goods) => goods.goodsId === data.goodsId
  );
  if (hasIndex > -1) {
    shopCar.checkedList[hasIndex].goodsNum += data.goodsNum;
  } else {
    shopCar.checkedList.push(data);
  }
  shopCar.allchecked = shopCar.shopList.every((shop) => shop.checked);

  shopCar.total = shopCar.checkedList.reduce(
    (total, item) => total + item.goodsNum,
    0
  );
  shopCar.totalPrice = shopCar.checkedList.reduce(
    (totalPrice, item) => totalPrice + item.goodsNum * item.price,
    0
  );

  dispatch({
    type: "sureAddGoods",
    data: {
      carNum: carNum,
      shopCar,
    },
  });
};

export default goSure;
