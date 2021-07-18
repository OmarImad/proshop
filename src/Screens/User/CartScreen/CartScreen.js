import {
  FlexRow,
  Hr,
  InnerSection,
  SpinnerContainer,
  Typography,
} from "../../../Global.Styles";
import Navigator from "../../../Components/Navigator/Navigator";
import { CartList, ProceedBox } from "./CartScreen.Styles";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CartItem from "../../../Components/CartItem/CartItem";
import Button from "../../../Components/Button/Button";
import {
  addCartItem,
  decreaseCartItemQty,
  deleteCartItem,
} from "../../../Redux/Cart/cartActions";
import Meta from "../../../Components/Meta/Meta";

function CartScreen(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Meta title={"Proshop-Cart"} />
      <InnerSection style={{ marginTop: 32 }}>
        <Navigator name={"Shopping Cart"} />
        <FlexRow style={{ justifyContent: "start", alignItems: "start" }}>
          <CartList>
            {state.cart.cart.map((item) => (
              <CartItem
                increaseCounter={() => {
                  if (item.quantity < item.countInStock)
                    dispatch(addCartItem(item, 1));
                }}
                decreaseCounter={() => {
                  if (item.quantity > 1) dispatch(decreaseCartItemQty(item, 1));
                }}
                key={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                counter={item.quantity}
                handleDelete={() => dispatch(deleteCartItem(item._id))}
              />
            ))}
          </CartList>
          <ProceedBox>
            <Typography
              fontSize={32}
              fontWeight={700}
              style={{ marginBottom: 80 }}
            >
              Subtotal ({state.cart.cart.length}) items
            </Typography>
            <Typography
              fontSize={32}
              fontWeight={700}
              style={{ marginBottom: 80 }}
            >
              Total (
              {state.cart.cart.reduce((acc, item) => {
                return acc + item.quantity;
              }, 0)}
              ) items
            </Typography>
            <Typography
              fontSize={38}
              fontWeight={700}
              style={{ marginBottom: 30, justifyContent: "start" }}
            >
              Total Price $
              {state.cart.cart
                .reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)
                .toFixed(2)}
            </Typography>
            <Hr />

            <Button
              text={"Proceed to checkout"}
              link={
                state.userDetails.user._id
                  ? "/proceed-checkout/shipping-address"
                  : "/login"
              }
              borderRadius={10}
              width={"100%"}
            />
          </ProceedBox>
        </FlexRow>
      </InnerSection>
    </>
  );
}

export default CartScreen;
