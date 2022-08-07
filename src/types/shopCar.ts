export interface Igoods {
  shopId: number;
  goodsId: number;
  goodsNum: number;
  price: number;
  imgsrc: string;
  text: string;
  desc: string;
  checked: boolean;
}

export interface IShop {
  shopId: number;
  shopName: string;
  checked: boolean;
  goodsList: Igoods[];
}

export interface IShopCar {
  shopList: IShop[];
  checkedList: Igoods[];
  allchecked: boolean;
  total: number;
  totalPrice: number;
}
