import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

// import Util from '../../util';
import TopHeader from "./items/header";
import SliderArt from "./items/SliderArt";
import Boutique from "./items/Boutique";
import Submenu from "./items/Submenu";
import Floor from "./items/Floor";

const Home = () => {
  const heightVal = useRef(0);
  const [topVal, setTopVal] = useState(0);

  const [showTip, setShowTip] = useState(true);

  const onScroll = (e: Event) => {
    let target = e.target as HTMLElement;
    if (target.scrollTop > heightVal.current / 2) {
      setShowTip(false);
      setTopVal(0);
    } else {
      setShowTip(true);
      setTopVal(heightVal.current);
    }
  };

  useEffect(() => {
    // console.log(heightVal.current);
    let headerEl = document.querySelector("#homeHeader") as HTMLElement;
    let headerTop = headerEl.offsetHeight;
    if (heightVal.current === 0) {
      heightVal.current = headerEl.offsetHeight;
    }
    setTopVal(headerTop);
  });

  useEffect(() => {
    let pageScroll = document.querySelector("body")!;
    pageScroll.addEventListener("scroll", onScroll);
    return () => {
      pageScroll.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onClose = () => setShowTip(false);

  return (
    <>
      <TopHeader showTip={showTip} topVal={topVal} onClose={onClose} />
      <div className={style.home}>
        <SliderArt />
        <Boutique />
        {/*子导航栏*/}
        <Submenu />
        <Floor />
        <Floor />
      </div>
    </>
  );
};

export default Home;
