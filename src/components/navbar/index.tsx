import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";

const Navbar = ({
  left,
  center,
  right,
  id,
}: {
  left?: string | JSX.Element;
  center?: string | JSX.Element;
  right?: string | JSX.Element;
  id?: string;
}) => {
  const navigate = useNavigate();

  const onBack = () => {
    if (window.history.length < 2) {
      return navigate("/", { replace: true });
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={style.navbar} id={id}>
      <div className="left" onClick={onBack}>
        {!left ? (
          <>
            <i className="iconfont icon-fanhui"></i>返回
          </>
        ) : (
          left
        )}
      </div>
      <div className="center">{center}</div>
      <div className="right">{right}</div>
    </div>
  );
};

export default Navbar;
