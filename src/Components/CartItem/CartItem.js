import propTypes from "prop-types";

import { CardBox, CardImage, ContentBox } from "./CartItem.Styles";
import { FlexRow, Typography } from "../../Global.Styles";
import { RIcon } from "../../Screens/Gust/ProductScreen/Product.Styles";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { CrossSpan } from "../../Screens/User/CartScreen/CartScreen.Styles";

function CartItem({
  counter,
  increaseCounter,
  decreaseCounter,
  price,
  image,
  name,
  handleDelete,
}) {
  return (
    <CardBox>
      <CardImage src={"https://proshop-ms.herokuapp.com/" + image} alt={name} />
      <ContentBox>
        <FlexRow style={{ justifyContent: "flex-end" }}>
          <CrossSpan onClick={handleDelete}>x</CrossSpan>
        </FlexRow>
        <Typography
          fontSize={24}
          fontWeight={700}
          style={{ justifyContent: "start", maxWidth: "50%" }}
        >
          {name}
        </Typography>
        <FlexRow style={{ justifyContent: "flex-end" }}>
          <FlexRow
            style={{
              height: 40,
              width: 204,
              border: "1px solid #F2F2F2",
              background: "#FFFFFF",
            }}
          >
            <RIcon onClick={decreaseCounter}>
              <RemoveIcon />
            </RIcon>
            <Typography
              width={"108px"}
              align="center"
              justify="center"
              fontWeight="700"
              fontSize="24px"
            >
              {counter}
            </Typography>
            <RIcon onClick={increaseCounter}>
              <AddIcon />
            </RIcon>
          </FlexRow>
          <Typography
            fontSize={30}
            fontWeight={700}
            style={{
              justifyContent: "flex-end",
              marginLeft: "10%",
              width: "auto",
            }}
          >
            ${price}
          </Typography>
        </FlexRow>
      </ContentBox>
    </CardBox>
  );
}

CartItem.defaultProps = {
  handleDelete: () => {},
  decreaseCounter: () => {},
  increaseCounter: () => {},
  counter: 1,
};

CartItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  counter: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  increaseCounter: propTypes.func.isRequired,
  decreaseCounter: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,
};

export default CartItem;
