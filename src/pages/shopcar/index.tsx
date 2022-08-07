import Navbar from "components/navbar";
import EmptyCar from "./EmptyCar";
import Recommend from "./Recommend";
import CarGoods from "./CarGoods";
import "./index.scss";
import useAuth from "utils/useAuth";

const ShopCar = () => {
  const { userInfo, carNum } = useAuth();

  return (
    <div className="car-container">
      <Navbar left=" " center="购物车" />
      <div
        className="car-content"
        style={{
          paddingBottom: carNum !== 0 && userInfo.loginStatus ? "1rem" : 0,
        }}
      >
        {!userInfo.loginStatus ? (
          <EmptyCar islogin={userInfo.loginStatus} />
        ) : (
          <CarGoods />
        )}
        <Recommend />
      </div>
    </div>
  );
};

export default ShopCar;
