import { lazy } from "react";
import Home from "pages/home";
import Search from "pages/search";

// const lazyFunc = (path: string) => {
//   console.log(path);
//   return lazy(() => import(path));
// }

const Category = lazy(() => import("pages/category"));
const Detail = lazy(() => import("pages/detail"));
const ShopCar = lazy(() => import("pages/shopcar"));
const User = lazy(() => import("pages/user"));
const Login = lazy(() => import("pages/login"));
const UserSet = lazy(() => import("pages/user/set"));
const Findpw = lazy(() => import("pages/findpw"));
const Notfound = lazy(() => import("pages/notfound"));

const routeList = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/home",
    element: Home,
  },
  {
    path: "/search",
    element: Search,
  },
  {
    path: "/category",
    element: Category,
  },
  {
    path: "/detail/:id",
    element: Detail,
  },
  {
    path: "/shopcar",
    element: ShopCar,
  },
  {
    path: "/user",
    element: User,
    isAuth: true,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/userset",
    element: UserSet,
  },
  {
    path: "/findpw",
    element: Findpw,
  },
  {
    path: "*",
    element: Notfound,
  },
];

export default routeList;
