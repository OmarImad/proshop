import styled from "styled-components";
import { FlexColumn } from "../../Global.Styles";

export const OrderItem = styled(FlexColumn)`
  min-height: 96px;
  margin-bottom: 38px;
`;
export const OrderDetailImg = styled("img")`
  width: 135px;
  height: 90px;
  object-fit: contain;
`;

export const Divider = styled("div")`
  width: 100%;
  height: 2px;
  background-color: #ddd;
`;
