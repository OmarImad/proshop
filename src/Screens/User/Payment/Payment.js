import {
  FlexRow,
  InnerSection,
  Line,
  Typography,
} from "../../../Global.Styles";
import { Num } from "./Payment.Styles";
import PaymentComponent from "./PaymentComponent";
import PlaceOrderComponent from "./PlaceOrderComponent";
import { useLocation } from "react-router";

function Payment(props) {
  const location = useLocation();
  const isShippingPage = location.pathname.includes("shipping-address");

  //const isShippingPage = props.location.pathname.includes("shipping-address");

  return (
    <InnerSection style={{ margin: "44px 0 60px", alignItems: "flex-start" }}>
      <Typography
        style={{ justifyContent: "start" }}
        fontSize="32"
        color="#242424"
        fontWeight="700"
      >
        Review Order
      </Typography>
      <FlexRow style={{ width: "682px", height: "40px" }}>
        <Typography
          style={{ justifyContent: "start" }}
          fontSize={22}
          color={"#242424"}
        >
          <Num>&nbsp; 1 &nbsp;</Num> Shipping and Payment
        </Typography>
        <Line width={180} style={{ marginLeft: 10 }} />
        <Typography
          style={{ justifyContent: "start" }}
          fontSize={22}
          color={"#707070"}
        >
          <Num isGray={isShippingPage}>&nbsp; 2 &nbsp;</Num> Place an Order
        </Typography>
      </FlexRow>

      {isShippingPage ? <PaymentComponent /> : <PlaceOrderComponent />}
    </InnerSection>
  );
}

export default Payment;
