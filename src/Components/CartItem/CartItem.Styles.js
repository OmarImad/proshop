import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../Global.Styles";

export const CardBox = styled(FlexRow)`
  padding: 25px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  height: 242px;
  opacity: 1;
  margin-bottom: 30px;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

export const CardImage = styled.img`
  width: 25%;
  min-width: 200px;
  object-fit: cover;
  height: 100%;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 203px;
  }
`;

export const ContentBox = styled(FlexColumn)`
  width: 70%;
  height: 100%;
  justify-content: start;
  align-items: start;
  @media screen and (max-width: 600px) {
    height: auto;
  }
`;
