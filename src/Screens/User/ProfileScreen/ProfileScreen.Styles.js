import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../../Global.Styles";
import { Link } from "react-router-dom";

export const GrayContainer = styled(FlexColumn)`
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  width: ${(props) => (props.isBig ? "950px" : "398px")};
  height: 380px;
  padding: 1% 2%;
  margin-right: 32px;
  justify-content: start;
  align-items: start;
`;

export const ProfileText = styled(Link)`
  font-size: 24px;
  margin-bottom: 30px;
  color: ${(props) => (props.isGray ? "#707070" : "#242424")};
  display: flex;
  justify-content: start;
  align-items: start;
  width: auto;
`;

export const StyledRow = styled(FlexRow)`
  justify-content: start;
`;
