import React, { useContext } from "react";
import localContext from "./localContext";

const useAuth = () => {
  const context = useContext(localContext());
  if (!context) {
    throw new Error("useAuth必须在Provider中使用！");
  }
  return context;
};

export default useAuth;
