import React, { lazy } from "react";
import { Route } from "react-router";

const ProfileScreen = lazy(() =>
  import("../Screens/User/ProfileScreen/ProfileScreen")
);
const Order = lazy(() => import("../Screens/User/Order/Order"));
const Orders = lazy(() => import("../Screens/User/Orders/Orders"));
const Payment = lazy(() => import("../Screens/User/Payment/Payment"));
const UpdateProfileScreen = lazy(() =>
  import("../Screens/User/UpdateProfileScreen/UpdateProfileScreen")
);

function UserRouter(props) {
  return [
    <Route key={50} path={"/order/:id"} exact={true} component={Order} />,
    <Route key={2} path={"/orders"} exact={true} component={Orders} />,
    <Route key={4} path={"/profile"} exact={true} component={ProfileScreen} />,
    <Route
      path={"/proceed-checkout/shipping-address"}
      exact={true}
      key={405}
      component={Payment}
    />,
    <Route
      key={402}
      path={"/proceed-checkout/place-order"}
      exact={true}
      component={Payment}
    />,
    <Route
      key={6}
      path={"/update-profile"}
      exact={true}
      component={UpdateProfileScreen}
    />,
  ];
}

export default UserRouter;
