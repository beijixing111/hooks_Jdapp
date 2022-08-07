import React, { useEffect, useState } from "react";
import Navbar from "components/navbar";
// import Util from '../../util';
import { Toast } from "antd-mobile";
import style from "./index.module.scss";

const Findpw = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     account: '',
  //     focused: false
  //   };
  // }
  const [account, setAccount] = useState("");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    document.getElementById("account")?.focus();
  });

  const onSubmit = () => {
    if (!account) {
      return Toast.show("请先填写账号！");
    }
  };

  return (
    <div className={style.findpw}>
      <Navbar center="忘记密码" />
      <div className="findpw-container">
        <div className={focused ? "findpw-item focused" : "findpw-item"}>
          <label htmlFor="account" className="label">
            账号
          </label>
          <input
            id="account"
            type="text"
            value={account}
            placeholder="用户名/邮箱/手机号"
            onChange={(e) => setAccount(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <i
            className="clear"
            style={{ display: account.length > 0 ? "flex" : "none" }}
            onClick={() => setAccount("")}
          >
            ×
          </i>
        </div>
        <button type="button" className="find-btn" onClick={onSubmit}>
          点击完成验证
        </button>
      </div>
    </div>
  );
};

export default Findpw;
