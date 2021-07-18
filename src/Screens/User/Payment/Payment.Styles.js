import styled from "styled-components";
import {
  InnerSection,
  Typography,
  FlexColumn,
  FlexRow,
} from "../../../Global.Styles";

// Payment Success
export const PaymentContainer = styled(InnerSection)`
  min-height: 372px;
  background-color: #f2f2f2;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 16px;
  margin-top: 40px;
  padding: 31px 50px;
`;

export const PaymentTitle = styled(Typography)`
  width: 40%;
  font-size: 24px;
  font-weight: bold;
  color: #242424;
`;

export const PaymentInfo = styled(Typography)`
  width: 60%;
  font-size: 16px;
  font-weight: bold;
  color: #707070;
`;

export const Note = styled(Typography)`
  font-size: 16px;
  font-weight: light;
  line-height: 2.4;
  color: #242424;
  max-width: 378px;
`;

// Place an order

export const Shipping = styled(FlexColumn)`
  width: 950px;
  min-height: 652px;
  justify-content: space-between;
  padding: 40px 70px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;

export const ShippingAddress = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: space-between;
  min-height: 154px;
`;

export const OrderDetail = styled(FlexColumn)`
  align-items: flex-start;
  min-height: 229px;
`;

export const PaymentDetail = styled(FlexColumn)`
  align-items: flex-start;
`;

export const ChangeBtn = styled(Typography)`
  font-size: 22px;
  color: #707070;
  text-decoration: underline;
`;
export const VisaIcon = styled("img")`
  width: 50px;
  height: 20px;
  object-fit: contain;
`;

// Right side - Order
export const Order = styled(FlexColumn)`
  width: 400px;
  margin-left: 30px;
`;
export const OrderDetails = styled(FlexColumn)`
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 280px;
  padding: 40px 25px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;

//Shipping and payment
export const ShippingForm = styled(FlexColumn)`
  width: 950px;
  min-height: 652px;
  justify-content: space-between;
  padding: 45px 88px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;

export const ShippingAddressForm = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: space-between;
  min-height: 253px;
`;

export const PaymentDetailForm = styled(FlexColumn)`
  align-items: flex-start;
  min-height: 253px;
`;

export const OrderReview = styled(FlexColumn)`
  width: 536px;
  margin-left: 30px;
`;
export const OrderReviewDetails = styled(FlexColumn)`
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 652px;
  padding: 35px 22px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;

export const Num = styled(FlexRow)`
  width: 40px;
  height: 40px;
  background: ${(props) => (props.isGray ? "#707070" : "#FCDD06")};
  color: ${(props) => (props.isGray ? "#FFFFFF" : "#00000")};
  opacity: 1;
`;

export const ErrorMessage = styled(FlexRow)`
  justify-content: start;
  min-height: 60px;
  color: red;
  background: #e8c4c4;
  padding: 10px 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 16px;
`;

export const SuccessMessage = styled(ErrorMessage)`
  color: green;
  background: lightgreen;
`;
