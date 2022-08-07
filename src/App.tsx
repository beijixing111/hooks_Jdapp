import React, { useEffect, useState } from "react";
import "static/font/iconfont.css";
import "./App.scss";
import BottomTabbar from "common/BottomTabbar";
import Router from "routes/index";

import localContext from "utils/localContext";
import useLocalReducer from "utils/useLocalReducer";

function App() {
  const Context = localContext();
  const [state, dispatch] = useLocalReducer();

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      <div className="App">
        <Router isLogin={state.userInfo.loginStatus}>
          <BottomTabbar />
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
