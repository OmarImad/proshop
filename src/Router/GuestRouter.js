import { lazy } from "react";
import { Route } from "react-router";

const ProductScreen = lazy(() =>
  import("../Screens/Gust/ProductScreen/ProductScreen")
);
const HomeScreen = lazy(() => import("../Screens/Gust/HomeScreen/HomeScreen"));
const CartScreen = lazy(() => import("../Screens/User/CartScreen/CartScreen"));
const SearchScreen = lazy(() =>
  import("../Screens/Gust/SearchScreen/SearchScreen")
);

function GuestRouter(props) {
  return [
    <Route key={1} path={"/"} exact={true} component={HomeScreen} />,
    <Route
      path={"/product/:id/:name"}
      exact={true}
      component={ProductScreen}
    />,
    <Route key={3} path={"/cart"} exact={true} component={CartScreen} />,
    <Route key={9874} path={"/search"} exact={true} component={SearchScreen} />,
  ];
}

export default GuestRouter;
