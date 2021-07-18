import { Route } from "react-router";
import { lazy } from "react";

const Login = lazy(() => import("../Screens/Auth/Login/Login"));
const Register = lazy(() => import("../Screens/Auth/Register/Register"));

function AuthRouter(props) {
  return [
    <Route
      key={4563}
      path={"/login"}
      component={() => {
        return <Login />;
      }}
    />,
    <Route
      key={20}
      path={"/register"}
      component={() => {
        return <Register />;
      }}
    />,
  ];
}

export default AuthRouter;
