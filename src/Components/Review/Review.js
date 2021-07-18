import { FlexColumn } from "../../Global.Styles";
import {
  RateBox,
  ReviewTitle,
  TextReviewDate,
  TextReviewDescription,
} from "./Review.Styles";
import Rating from "@material-ui/lab/Rating";

export default function Review({ title, text, rate, icon, date }) {
  return (
    <FlexColumn
      style={{
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <ReviewTitle>{title}</ReviewTitle>
      <RateBox>
        <Rating readOnly name="simple-controlled" value={rate} />
        <TextReviewDate>{date.substring(0, 10)}</TextReviewDate>
      </RateBox>
      <TextReviewDescription>{text}</TextReviewDescription>
    </FlexColumn>
  );
}
