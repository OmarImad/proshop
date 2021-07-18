import styled from "styled-components";
import { FlexColumn } from "../../../Global.Styles";

export const CartList = styled(FlexColumn)`
  margin-right: 30px;
  width: 65%;
`;

export const ProceedBox = styled(FlexColumn)`
  width: 25%;
  padding: 26px 30px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
`;

export const CrossSpan = styled("span")((props) => ({
  fontSize: 18,
  padding: 5,
  fontWeight: 700,
  cursor: "pointer",
}));
