import React, { Suspense } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import routeList from "./routes";
import Loading from "components/loading";

const router = ({
  children,
  isLogin,
}: {
  children: JSX.Element;
  isLogin: boolean;
}) => {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routeList.map((item) => {
            const CurComponent =
              item.isAuth && !isLogin ? (
                <Navigate to={"/login"} replace />
              ) : (
                <item.element />
              );
            return (
              <Route key={item.path} path={item.path} element={CurComponent} />
            );
          })}
        </Routes>
      </Suspense>
      {children}
    </HashRouter>
  );
};

export default router;
