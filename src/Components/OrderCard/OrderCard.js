import { FlexColumn, FlexRow, Typography } from "../../Global.Styles";
import { OrderDetailImg, OrderItem } from "./OrderCard.Styless";

export default function OrderCard(props) {
  return (
    <OrderItem>
      <FlexRow style={{ justifyContent: "flex-start" }}>
        <OrderDetailImg src={props.src} />
        <FlexColumn
          style={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            minHeight: "96px",
            width: "316px",
          }}
        >
          <Typography fontSize={"16px"} color={"#707070"}>
            {props.orderName}
          </Typography>
          <FlexRow
            style={{
              justifyContent: "flex-start",
            }}
          >
            <FlexRow style={{ justifyContent: "flex-start" }}>
              <Typography color="#707070" style={{ marginRight: "18px" }}>
                ${props.price}
              </Typography>
              <Typography fontSize={"15px"} color={"#707070"}>
                x{props.orderNumber}
              </Typography>
            </FlexRow>
            <Typography fontSize={"15px"} color={"#242424"}>
              ${props.subTotal}
            </Typography>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </OrderItem>
  );
}
