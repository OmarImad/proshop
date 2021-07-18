import {
  FlexRow,
  InnerSection,
  SpinnerContainer,
  Typography,
} from "../../../Global.Styles";
import {
  ErrorMessage,
  OrderDetail,
  OrderDetails,
  Shipping,
  ShippingAddress,
  Order as StyledOrder,
  SuccessMessage,
} from "../Payment/Payment.Styles";
import OrderCard from "../../../Components/OrderCard/OrderCard";
import { connect } from "react-redux";
import { Component } from "react";
import { getOrderById, payOrder } from "../../../Redux/Orders/ordersActions";
import { PayPalButton } from "react-paypal-button-v2";

class Order extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (
      this.props?.orders?.payOrder?.success !=
      nextProps.orders?.payOrder?.success
    ) {
      this.props.getOrderById(this.props.match.params.id);
      return false;
    }
    return true;
  }

  componentDidMount() {
    this.props.getOrderById(this.props.match.params.id);
  }

  render() {
    return this.props.orders.userOrder.isLoading ? (
      <SpinnerContainer />
    ) : this.props.orders.userOrder.error ? (
      <ErrorMessage>{this.props.orders.userOrder.error}</ErrorMessage>
    ) : (
      <InnerSection style={{ margin: "44px 0 60px", alignItems: "flex-start" }}>
        <Typography
          style={{ justifyContent: "start" }}
          fontSize="32"
          color="#242424"
          fontWeight="700"
        >
          Review Order
        </Typography>
        <FlexRow
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: "60px",
          }}
        >
          {/* Shipping and payment content */}
          {/* Left Side */}
          <Shipping>
            <ShippingAddress>
              <FlexRow style={{ justifyContent: "space-between" }}>
                <Typography
                  style={{ justifyContent: "start" }}
                  fontSize="24"
                  fontWeight="bold"
                  color="#242424"
                >
                  Shipping Address
                </Typography>
              </FlexRow>
              <Typography
                style={{ justifyContent: "start" }}
                fontSize={"22"}
                color={"#242424"}
              >
                {this.props.userDetails.user.name}
              </Typography>
              <Typography
                fontSize={"16"}
                color={"#242424"}
                fontWeigh={"light"}
                style={{
                  maxWidth: "290px",
                  lineHeight: "2",
                  justifyContent: "start",
                }}
              >
                {this.props.orders.userOrder.order.shippingAddress.country}-
                {this.props.orders.userOrder.order.shippingAddress.city}
              </Typography>
              {this.props.orders.userOrder.order.isPaid ? (
                <SuccessMessage>Paid!</SuccessMessage>
              ) : (
                <ErrorMessage>Not Paid</ErrorMessage>
              )}
              {this.props.orders.userOrder.order.isDelivered ? (
                <SuccessMessage>Delivered!</SuccessMessage>
              ) : (
                <ErrorMessage>Not Delivered</ErrorMessage>
              )}
            </ShippingAddress>
            <OrderDetail>
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
              </FlexRow>
              {/* Order Items */}
              {this.props.orders?.userOrder?.order?.orderItems?.map((i) => (
                <OrderCard
                  key={i._id}
                  src={"https://proshop-ms.herokuapp.com/" + i.image}
                  orderName={i.name}
                  orderNumber={i.qty}
                  subTotal={i.price * i.qty}
                  price={i.price}
                />
              ))}
            </OrderDetail>
          </Shipping>

          {/* Right Side */}
          <StyledOrder>
            <OrderDetails>
              <Typography
                fontSize={"32"}
                color={"#242424"}
                fontWeight={"bold"}
                style={{ marginBottom: "30px", justifyContent: "start" }}
              >
                Order Details
              </Typography>
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
                  $
                  {this.props.orders?.userOrder?.order?.orderItems
                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                    .toFixed(2)}
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
                  $0
                </Typography>
              </FlexRow>
              <FlexRow style={{ justifyContent: "space-between" }}>
                <Typography
                  style={{ justifyContent: "start" }}
                  color={"#242424"}
                  fontWeight={"bold"}
                >
                  Shipping
                </Typography>
                <Typography
                  style={{ justifyContent: "start" }}
                  color={"#242424"}
                  fontWeight={"bold"}
                >
                  $
                  {this.props.orders?.userOrder?.order?.orderItems
                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                    .toFixed(2)}
                </Typography>
              </FlexRow>
            </OrderDetails>
            {!this.props.orders.userOrder.order.isPaid && (
              <FlexRow style={{ width: "100%", margin: "40px auto" }}>
                <PayPalButton
                  amount={this.props.orders?.userOrder?.order?.orderItems
                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                    .toFixed(2)}
                  // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                  onSuccess={(details, data) => {
                    alert(
                      "Transaction completed by " +
                        details.payer.name.given_name
                    );

                    // OPTIONAL: Call your server to save the transaction
                    this.props.payOrder(this.props.match.params.id, {
                      email_address: details.payer.email_address,
                      status: details.status,
                      create_time: details.create_time,
                      update_time: details.update_time,
                      id: details.id,
                    });
                  }}
                  onError={(error) => {
                    console.log(error);
                  }}
                  options={{
                    clientId:
                      "ATx8Na-9swFrVwvoIGlZWfw7-CJoXi4QaatMLp7pMMv0y8fEu49zwf6AYBnmdNLxS3G7i2gAhx5g4l0K",
                  }}
                />
              </FlexRow>
            )}
          </StyledOrder>
          {/* Place an order content */}
        </FlexRow>
      </InnerSection>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
  userDetails: state.userDetails,
});

const mapDispatchToProps = (dispatch) => ({
  payOrder: (id, paymentDetails) => {
    dispatch(payOrder(id, paymentDetails));
  },
  getOrderById: (params) => {
    dispatch(getOrderById(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
