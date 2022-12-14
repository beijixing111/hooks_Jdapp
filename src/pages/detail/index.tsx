import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "components/navbar";
import TopSwiper from "./items/TopSwiper";
import goSure from "./items/goSure";
import style from "./index.module.scss";

import sliderPic from "static/images/58b3cfe4N833584e7.jpg";

// import ModalWarp from 'components/modal/Modal';
import useAuth from "utils/useAuth";
import { Toast } from "antd-mobile";
import goodsData from "static/goodsData";

// import Util from '../../util';

const Detail = () => {
  const [navbarIndex, setNavbarIndex] = useState(0);
  const partsArr = ["item", "comment", "guess", "detail"];
  const shopgoods = goodsData[0];
  const goodsinfo = shopgoods.goods;

  const [show, setShow] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const [goodsNum, setGoodsNum] = useState("1");
  // const [curGoods, setCurGoods] = useState(initGood);

  const { shopCar, carNum, dispatch } = useAuth();

  const navigate = useNavigate();

  const handleSwitch = (i: number) => {
    setNavbarIndex(i);
    let navbar = document.querySelector("#goodsDetail") as HTMLElement;
    console.log(navbar);
    let navbarHei = navbar.offsetHeight;
    let scrollTop = document.getElementById(partsArr[i])!.offsetTop;
    let pageSrcoll = document.querySelector("body")!;
    pageSrcoll.scrollTop = scrollTop - (navbarHei - 1);
    console.log(document.getElementById(partsArr[i])!.offsetTop);
    // var offsetTop
  };

  const onScroll = (e: Event) => {
    let navbar = document.querySelector("#goodsDetail") as HTMLElement,
      curTarget = e.target as HTMLElement;
    let navbarHei = navbar.offsetHeight;
    let scrollTopArr = partsArr.map((item) => {
      let offsetTop = document.getElementById(item)!.offsetTop;
      return offsetTop - (navbarHei - 1);
    });
    let index = navbarIndex;
    let scrollTop = curTarget.scrollTop;
    // console.log(scrollTopArr);
    for (var i = 0; i < scrollTopArr.length; i++) {
      if (scrollTop >= scrollTopArr[i]) {
        if (scrollTopArr[i + 1] && scrollTop < scrollTopArr[i + 1]) {
          index = i;
        } else {
          index = scrollTopArr.length - 1;
        }
      }
    }
    setNavbarIndex(index);
  };

  useEffect(() => {
    const scrollEl = document.querySelector("body")!;
    scrollEl.style.scrollBehavior = "smooth";
    scrollEl.addEventListener("scroll", onScroll);
    return () => {
      scrollEl.removeEventListener("scroll", onScroll);
      scrollEl.style.scrollBehavior = "";
    };
  });

  const checkNum = (n: number | string) => {
    n = Number(n);
    if (!n) {
      return false;
    }
    if (n < 1) {
      Toast.show("???????????????????????????");
      return false;
    }
    if (n >= 200) {
      Toast.show("??????????????????????????????200?????????");
      return false;
    }
    return true;
  };

  const onBlur = (num: string) => {
    setGoodsNum(!checkNum(num) ? "1" : num + "");
  };

  const onMinuss = () => {
    let num = Number(goodsNum) - 1;
    if (!checkNum(num)) return;
    setGoodsNum(num + "");
  };
  const onAdd = () => {
    let num = Number(goodsNum) + 1;
    if (!checkNum(num)) return;
    setGoodsNum(num + "");
  };

  const onSure = () => {
    // shopgoods, curIndex
    let data = {
      shopId: shopgoods.shopid,
      shopName: shopgoods.shopname,
      goodsId: shopgoods.goods.id,
      goodsNum: Number(goodsNum),
      price: goodsinfo.price[0],
      imgsrc: "",
      text: goodsinfo.text,
      desc: goodsinfo.desc,
      checked: true,
    };
    goSure(shopCar, carNum, dispatch, data);

    Toast.show("????????????????????????");
    setShow(false);
  };

  const NarbarCenter = () => (
    <div className="center-item">
      {["??????", "??????", "??????", "??????"].map((item, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            padding: "0 0.2rem",
            fontSize: "0.32rem",
            color: index === navbarIndex ? "#e4393c" : "#333",
          }}
          onClick={() => handleSwitch(index)}
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className={style.goodsDetail}>
      <Navbar center={<NarbarCenter />} id="goodsDetail" />

      <div className="page-content">
        <div className="part part-main" id="item">
          <TopSwiper />
          <div className="goods-info">
            <div className="price">
              <div className="num">
                <i>???</i>
                {goodsinfo.price[0]}
              </div>
            </div>
            <div className="title after">{goodsinfo.text}</div>
            <div className="sect after">
              <div className="le">??????</div>
              <div className="info">
                <p>?????????????????? ??????????????????5???99???</p>
              </div>
            </div>
            <div className="sect after">
              <div className="le">??????</div>
              <div className="info">
                <span className="juan">???29???2</span>
                <span className="juan">???39???3</span>
              </div>
            </div>
            <div className="sect">
              <div className="le">??????</div>
              <div className="rig"></div>
              <div className="info">
                <p>?????????????????????????????????</p>
              </div>
            </div>
          </div>
        </div>
        <div className="part" style={{ padding: 0 }}>
          <div className="sect after" onClick={() => setShow(true)}>
            <div className="le">??????</div>
            <div className="rig">
              <i>??????</i>
            </div>
            <div className="info">
              <span>
                {goodsinfo.types[0]}???,{goodsNum}???
              </span>
            </div>
          </div>
          <div className="sect after">
            <div className="le">??????</div>
            <div className="rig">
              <i>??????</i>
            </div>
            <div className="info">
              <span>????????????????????????????????????</span>
            </div>
          </div>
          <div className="sect after">
            <div className="le">??????</div>
            <div className="rig">
              <i>??????</i>
            </div>
            <div className="info">
              <span>??????????????????10???</span>
            </div>
          </div>
        </div>
        <div className="part part-comment" id="comment">
          <p>??????</p>
        </div>
        <div className="part part-guess" id="guess">
          <p>??????</p>
          <p>
            <Link to="/detail/single"></Link>{" "}
          </p>
        </div>
        <div className="part part-detail" id="detail">
          {[1, 2, 3].map((item) => {
            return (
              <img
                src={sliderPic}
                key={item}
                alt=""
                style={{
                  width: "100%",
                  marginBottom: "0.1rem",
                  border: "1px solid #fafafafa",
                }}
              />
            );
          })}
        </div>
      </div>
      {/* <ModalWarp> */}
      <div
        className="detail-bottom-layer"
        onClick={() => setShow(false)}
        style={{ transform: show ? "translateY(0)" : "translateY(105%)" }}
      >
        <div className="layer-main" onClick={(e) => e.stopPropagation()}>
          <div className="layer-header">
            <img className="img" alt="" src={sliderPic} />
            <div className="info">
              <p>
                <i>???</i>
                {goodsinfo.price[0]}
              </p>
              <p>
                <em>??????</em>
                <span>
                  {goodsinfo.types[curIndex]}??????{goodsinfo.goodsNum}???
                </span>
              </p>
            </div>
          </div>
          <div className="layer-body">
            <div className="art">
              <p>??????</p>
              <ul className="ul">
                {goodsinfo.types.map((item, index) => (
                  <li
                    key={index}
                    className={curIndex === index ? "active" : ""}
                    onClick={() => setCurIndex(index)}
                  >
                    {item}???
                  </li>
                ))}
              </ul>
            </div>
            <div className="art">
              <p>??????</p>
              <div className="num-more">
                <span
                  className={Number(goodsNum) <= 1 ? "minus disabled" : "minus"}
                  onClick={onMinuss}
                ></span>
                <div className="input-wrap">
                  <input
                    type="tel"
                    value={goodsNum}
                    max="200"
                    onBlur={(e) => onBlur(e.target.value)}
                    onChange={(e) => setGoodsNum(e.target.value)}
                  />
                </div>
                <span
                  className={Number(goodsNum) >= 200 ? "plus disabled" : "plus"}
                  onClick={onAdd}
                ></span>
              </div>
            </div>
          </div>
          <div className="btns">
            <button className="btn" type="button" onClick={onSure}>
              ??????
            </button>
          </div>
        </div>
      </div>
      {/* </ModalWarp> */}
      {/* <ModalWarp>  */}
      <div className="detail-bottom-nav">
        <div className="left">
          <div className="col contact">????????????</div>
          <div className="col">??????</div>
          <div className="col">
            <Link to="/shopcar" style={{ color: "#e4393c" }}>
              {carNum !== 0 ? <i>{carNum}</i> : null}
              <p className="iconfont icon-gouwuche"></p>
              <p className="car">?????????</p>
            </Link>
          </div>
        </div>
        <div className="rig">
          <div className="btn addcar" onClick={() => setShow(true)}>
            ???????????????
          </div>
          <div className="btn like" onClick={() => setShow(true)}>
            ????????????
          </div>
        </div>
      </div>
      {/* </ModalWarp>      */}
    </div>
  );
};

// const mapState = state => ({
//   isShow: state.getIn(['detail', 'isShow']),
//   shopgoods: state.getIn(['detail', 'shopgoods']),
//   chooseArr: state.getIn(['detail', 'chooseArr']),
//   carNum: state.getIn(['car', 'carNum']),
//   loginStatus: state.getIn(['login', 'loginStatus'])
// });

// const mapDispatch = dispatch => ({
//   handleClickOpenChoose() {
//     dispatch(actionCreators.toggleChooseGoods(true));
//   },
//   handleClickCloseChoose() {
//     dispatch(actionCreators.toggleChooseGoods(false));
//   },
//   handleClickSureGoods(info) {
//     dispatch(carActionCreators.addGoods(info));
//     dispatch(actionCreators.toggleChooseGoods(false));
//     Toast.info('????????????????????????');
//   },
//   handleSwitchClick(index, value) {
//     dispatch(actionCreators.switchGuige(index, value));
//   },
//   handleChangeInput(shopid, id, value) {
//     value = value > 200 ? 200 : value;
//     value = value < 1 ? '' : value;
//     dispatch(actionCreators.changDetailValue(shopid, id, value));
//   },
//   handleInputBlur(shopid, id, value) {
//     value = parseInt(value) && !isNaN(value) ? parseInt(value) : 1;
//     dispatch(actionCreators.changDetailValue(shopid, id, value));
//     window.scroll(0, 0);
//   },
//   handleClickAdd(shopid, id, value) {
//     value = parseInt(value);
//     if (value >= 200) {
//       return Toast.info('??????????????????????????????200?????????');
//     } else {
//       dispatch(actionCreators.changDetailValue(shopid, id, value + 1));
//     }
//   },
// });

export default Detail;
