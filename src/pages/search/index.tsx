import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";

const Search = () => {
  // const [focused, setFocused] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchVal(e.target.value);

  const onSearch = () => {
    Toast.show("暂不支持搜索内容！");
  };

  useEffect(() => {
    let keywordIpt: HTMLInputElement = document.querySelector("#keyword")!;
    keywordIpt.focus();
  }, []);

  return (
    <div className={style.search}>
      <div className="header">
        <div className="fenlei">
          <i className="iconfont icon-fanhui" onClick={() => navigate(-1)}></i>
        </div>
        <div className="search-container">
          <div className="search-box">
            <i className="jd-icon-logo">JD</i>
            <i className="iconfont icon-sousuo-copy jd-icon-search"></i>
            <div className="jd-header-input">
              <input
                type="text"
                maxLength={20}
                id="keyword"
                name="keyword"
                autoComplete="off"
                value={searchVal}
                placeholder="海澜之家，男人的衣柜"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="login-btn">
          <button type="button" className="btn" onClick={onSearch}>
            搜索
          </button>
        </div>
      </div>
      <div className="res-warper">
        <div className="res-list">
          <p>搜索结果展示</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
