import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.querySelector("body")!;

let ModalWarp = ({ children }: { children: JSX.Element | string }) => {
  const el = document.createElement("div");
  useEffect(() => {
    console.log("isCreate", 111);
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [children, el]);

  return ReactDOM.createPortal(children, el);
};

export default ModalWarp;
