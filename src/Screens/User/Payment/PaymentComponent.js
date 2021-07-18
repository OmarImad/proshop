import React from "react";
import { FlexColumn, FlexRow, Typography } from "../../../Global.Styles";
import {
  ChangeBtn,
  OrderDetails,
  OrderReview,
  ShippingAddressForm,
  ShippingForm,
} from "./Payment.Styles";
import { Form, Formik } from "formik";
import { ShippingSchema } from "../../../Valedation";
import {
  ErrorMsg,
  Input,
} from "../../../Components/FormInput/FormInput.Styles";
import Button from "../../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addShippingAddress } from "../../../Redux/Cart/cartActions";
import { useHistory } from "react-router";

function PaymentComponent(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  const handleSaveShipping = (value) => {
    dispatch(addShippingAddress(value));
    history.push("/proceed-checkout/place-order");
  };

  return (
    <FlexRow
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: "60px",
      }}
    >
      {/* Form one fields */}
      <Formik
        initialValues={{
          country: state.cart.shippingAddress.country || "",
          city: state.cart.shippingAddress.city || "",
          address: state.cart.shippingAddress.address || "",
          postalCode: state.cart.shippingAddress.postalCode || "",
        }}
        validationSchema={ShippingSchema()}
        onSubmit={handleSaveShipping}
      >
        {({ errors, touched }) => {
          return (
            <Form
              style={{
                width: "100%",
                // height: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: "row",
              }}
            >
              {/* Shipping and payment content */}
              {/* Left Side */}
              <ShippingForm>
                <ShippingAddressForm>
                  <FlexRow style={{ justifyContent: "space-between" }}>
                    <Typography
                      fontSize="32"
                      fontWeight="bold"
                      style={{ justifyContent: "start", marginBottom: "16px" }}
                    >
                      Shipping Address
                    </Typography>
                  </FlexRow>

                  <FlexRow
                    style={{
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <FlexColumn
                      style={{
                        width: "360px",
                        alignItems: "flex-start",
                        marginBottom: "40px",
                      }}
                    >
                      <Typography
                        fontSize="22"
                        color={"#707070"}
                        style={{
                          marginBottom: "10px",
                          justifyContent: "start",
                        }}
                      >
                        Country
                      </Typography>

                      <Input
                        style={{ width: "360px" }}
                        name={"country"}
                        type={"text"}
                        placeholder={"Enter your country"}
                      />
                      {errors.country && touched.country ? (
                        <ErrorMsg>{errors.country}</ErrorMsg>
                      ) : null}
                    </FlexColumn>
                    <FlexColumn
                      style={{
                        width: "360px",
                        alignItems: "flex-start",
                        marginBottom: "40px",
                      }}
                    >
                      <Typography
                        fontSize="22"
                        color={"#707070"}
                        style={{
                          marginBottom: "10px",
                          justifyContent: "start",
                        }}
                      >
                        City
                      </Typography>

                      <Input
                        style={{ width: "360px" }}
                        name={"city"}
                        type={"text"}
                        placeholder={"Enter your city"}
                      />
                      {errors.city && touched.city ? (
                        <ErrorMsg>{errors.city}</ErrorMsg>
                      ) : null}
                    </FlexColumn>
                    <FlexColumn
                      style={{
                        width: "360px",
                        alignItems: "flex-start",
                        marginBottom: "40px",
                      }}
                    >
                      <Typography
                        fontSize="22"
                        color={"#707070"}
                        style={{
                          marginBottom: "10px",
                          justifyContent: "start",
                        }}
                      >
                        Zip Code
                      </Typography>

                      <Input
                        style={{ width: "360px" }}
                        name={"postalCode"}
                        type={"number"}
                        placeholder={"Zip code"}
                      />
                      {errors.postalCode && touched.postalCode ? (
                        <ErrorMsg>{errors.postalCode}</ErrorMsg>
                      ) : null}
                    </FlexColumn>
                    <FlexColumn
                      style={{
                        width: "360px",
                        alignItems: "flex-start",
                        marginBottom: "40px",
                      }}
                    >
                      <Typography
                        fontSize="22"
                        color={"#707070"}
                        style={{
                          marginBottom: "10px",
                          justifyContent: "start",
                        }}
                      >
                        Street Address
                      </Typography>

                      <Input
                        style={{ width: "360px" }}
                        name={"address"}
                        type={"text"}
                        placeholder={"Your Address"}
                      />
                      {errors.address && touched.address ? (
                        <ErrorMsg>{errors.address}</ErrorMsg>
                      ) : null}
                    </FlexColumn>
                  </FlexRow>
                  {/* <Button
                      type="submit"
                      text={"login"}
                      width={"398px"}
                      borderRadius={"6"}
                    ></Button> */}
                </ShippingAddressForm>
              </ShippingForm>

              {/* Right Side */}
              <OrderReview>
                <OrderDetails>
                  <FlexRow
                    style={{
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <Typography
                      style={{ justifyContent: "start" }}
                      fontSize="24"
                      fontWeight="bold"
                      color="#242424"
                    >
                      Order Details
                    </Typography>
                    <ChangeBtn>Change</ChangeBtn>
                  </FlexRow>
                  <FlexRow style={{ justifyContent: "space-between" }}>
                    <Typography
                      style={{ justifyContent: "start" }}
                      color={"#707070"}
                    >
                      Subtotal
                    </Typography>
                    <Typography
                      style={{ justifyContent: "start" }}
                      color={"#707070"}
                    >
                      $589.98
                    </Typography>
                  </FlexRow>
                  <FlexRow style={{ justifyContent: "space-between" }}>
                    <Typography
                      style={{ justifyContent: "start" }}
                      color={"#707070"}
                    >
                      Tax
                    </Typography>
                    <Typography
                      style={{ justifyContent: "start" }}
                      color={"#707070"}
                    >
                      $2.53
                    </Typography>
                  </FlexRow>
                  <FlexRow style={{ justifyContent: "space-between" }}>
                    <Typography
                      style={{ justifyContent: "start" }}
                      color={"#707070"}
                    >
                      Shipping
                    </Typography>
                    <Typography
                      style={{ justifyContent: "start" }}
                      color={"#707070"}
                    >
                      $0.00
                    </Typography>
                  </FlexRow>
                  <FlexRow style={{ justifyContent: "space-between" }}>
                    <Typography
                      style={{ justifyContent: "start" }}
                      color={"#242424"}
                      fontWeight={"bold"}
                    >
                      Total
                    </Typography>
                    <Typography
                      style={{ justifyContent: "start" }}
                      color={"#242424"}
                      fontWeight={"bold"}
                    >
                      $592.51
                    </Typography>
                  </FlexRow>
                </OrderDetails>
                <Button
                  link={""}
                  text={"Review Order"}
                  width={"324px"}
                  style={{
                    height: "62px",
                    alignSelf: "flex-end",
                    marginTop: "30px",
                  }}
                />
              </OrderReview>
            </Form>
          );
        }}
      </Formik>
    </FlexRow>
  );
}

export default PaymentComponent;
