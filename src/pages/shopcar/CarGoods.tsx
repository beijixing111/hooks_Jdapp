import { useState } from "react";
import { Link } from "react-router-dom";
import sliderPic from "static/images/58b3cfe4N833584e7.jpg";
import EmptyCar from "./EmptyCar";
import useAuth from "utils/useAuth";
import {
  doShopCheck,
  doGoodsCheck,
  doGoodsNum,
  doRemoveGoods,
  doClear,
} from "./tools/index";
import { Toast } from "antd-mobile";

const CarGoods = () => {
  const { shopCar, carNum, dispatch } = useAuth();
  const { shopList, allchecked, total, totalPrice } = shopCar;

  const [val, setVal] = useState("");
  const [isfocus, setIsfocus] = useState(false);

  const goPay = () => {
    Toast.show("开发中，敬请期待...");
  };

  const shoplistWarp = shopList.map((shop, shopIndex) => {
    if (!shop) {
      return <></>;
    }
    let shopId = shop.shopId;
    const shopgoods = shop.goodsList.map((item, goodsIndex) => (
      <div className="goods-info" key={item.goodsId}>
        <i
          onClick={() => doGoodsCheck(shopCar, shopIndex, goodsIndex, dispatch)}
          className={"select " + (item.checked ? "active" : "")}
        ></i>
        <Link className="goods-img" to={`/detail/${item.goodsId}`}>
          <img src={item.imgsrc || sliderPic} alt="商品图片" />
        </Link>
        <div className="box-info">
          <div className="name">
            <i className="mark">生鲜</i>
            {item.text}
          </div>
          <div className="iddist">{item.desc}</div>
          <div className="goods-line">
            <p className="price">￥{item.price}</p>
            <div className="num-more">
              <span
                className={"minus " + (item.goodsNum <= 1 ? "disabled" : "")}
                onClick={() =>
                  doGoodsNum(
                    shopCar,
                    shopIndex,
                    goodsIndex,
                    item.goodsNum - 1,
                    dispatch
                  )
                }
              ></span>
              <div className="input-wrap">
                <input
                  type="tel"
                  value={isfocus ? val : item.goodsNum}
                  max="200"
                  onFocus={() => {
                    setIsfocus(true);
                    setVal(String(item.goodsNum));
                  }}
                  onChange={(e) => setVal(e.target.value)}
                  onBlur={(e) => {
                    let num = Number(e.target.value);
                    num = !num ? 1 : num;
                    doGoodsNum(shopCar, shopIndex, goodsIndex, num, dispatch);
                    setVal("");
                    setIsfocus(false);
                  }}
                />
              </div>
              <span
                className={"plus " + (item.goodsNum >= 200 ? "disabled" : "")}
                onClick={() =>
                  doGoodsNum(
                    shopCar,
                    shopIndex,
                    goodsIndex,
                    item.goodsNum + 1,
                    dispatch
                  )
                }
              ></span>
            </div>
          </div>
          <div className="sub-line">
            {/* <span className="m_action_item" onClick={() => 1}>移入关注</span> */}
            <span
              className="del"
              onClick={() =>
                doRemoveGoods(
                  shopCar,
                  shopIndex,
                  goodsIndex,
                  item.goodsId,
                  dispatch
                )
              }
            >
              删除
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="goods-item" key={shopId}>
        <div className="shop-line">
          <i
            className={"select shop-active " + (shop.checked ? "active" : "")}
            onClick={() => doShopCheck(shopCar, shopId, shopIndex, dispatch)}
          ></i>
          <div className="shop-name">
            <i>YJ</i>
            <span className="name-text">{shop.shopName}</span>
          </div>
          <div className="tip-txt">
            <p>
              <span>还差9.3元免运费</span>
              <Link to="/10000">去凑单</Link>
            </p>
          </div>
        </div>
        {shopgoods}
      </div>
    );
  });
  return (
    <div>
      {totalPrice > 0 ? (
        // <ModalWarp>
        <div className="bottom-nav" style={{ bottom: 50 }}>
          <div className="all-check" onClick={() => 1}>
            <i
              className={"active-icon select " + (allchecked ? "active" : "")}
            ></i>
            <span>全选</span>
          </div>
          {allchecked ? (
            <div className="clearcar" onClick={() => doClear(dispatch)}>
              清空
            </div>
          ) : null}
          <div className="total-box">
            <div className="total-wrapper">
              <p className="total-ji">
                <b>总计：</b>￥{totalPrice.toFixed(2)}元
              </p>
              <p>总额￥{totalPrice.toFixed(2)}元 立减￥0.00元</p>
            </div>
            <div className="go-pay" onClick={goPay}>
              去结算({total})
            </div>
          </div>
        </div>
      ) : null}

      <div className="goods-wrapper">
        {carNum !== 0 ? shoplistWarp : <EmptyCar islogin={true} />}
      </div>
    </div>
  );
};

export default CarGoods;
