import {
  FlexColumn,
  InnerSection,
  SpinnerContainer,
  Typography,
} from "../../../Global.Styles";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage } from "../Payment/Payment.Styles";
import { useEffect } from "react";
import { getOrders } from "../../../Redux/Orders/ordersActions";
import { ListBox, RowCell, StyledRow } from "./Orders.Styles";

function Orders(props) {
  const {
    orders: {
      userOrders: { isLoading, error, orders },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return isLoading ? (
    <SpinnerContainer />
  ) : error ? (
    <ErrorMessage>{error}</ErrorMessage>
  ) : (
    <InnerSection style={{ margin: "44px 0 60px", alignItems: "flex-start" }}>
      <Typography
        style={{ justifyContent: "start" }}
        fontSize="32"
        color="#242424"
        fontWeight="700"
      >
        MY ORDERS
      </Typography>
      <FlexColumn>
        <ListBox>
          <StyledRow as={"div"}>
            <RowCell width={"30%"}>Id</RowCell>
            <RowCell>User Name</RowCell>
            <RowCell>Products</RowCell>
            <RowCell>Created At</RowCell>
            <RowCell>Payment</RowCell>
            <RowCell>Delivery</RowCell>
          </StyledRow>
          {orders.map((item) => (
            <StyledRow to={`/order/${item._id}`} key={item._id}>
              <RowCell width={"30%"}>{item._id}</RowCell>
              <RowCell>{item.user.name}</RowCell>
              <RowCell>{item.orderItems.length}</RowCell>
              <RowCell>{item.createdAt.substring(0, 10)}</RowCell>
              <RowCell isCompleted={item?.paymentResult?.status}>
                {item?.paymentResult?.status
                  ? item.paymentResult.status
                  : "Not Paid"}
              </RowCell>
              <RowCell isCompleted={item?.isDelivered}>
                {item?.isDelivered ? "Delivered" : "Not Delivered"}
              </RowCell>
            </StyledRow>
          ))}
        </ListBox>
      </FlexColumn>
    </InnerSection>
  );
}

export default Orders;
