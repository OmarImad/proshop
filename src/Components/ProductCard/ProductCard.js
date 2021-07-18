import { CardContainer, CardImage, CardLink } from "./ProductCard.Styles";
import { FlexRow, Typography } from "../../Global.Styles";
import Rating from "@material-ui/lab/Rating";
import Button from "../Button/Button";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../Redux/Cart/cartActions";

function ProductCard(props) {
  const dispatch = useDispatch();

  return (
    <CardContainer widthBorder={props.widthBorder}>
      <CardLink to={`/product/${props.id}/${props.name}`}>
        <CardImage src={props.image} alt={props.name} />
        <Typography fontSize={24}>{props.name}</Typography>
        <Rating
          readOnly={true}
          defaultValue={props.rate}
          name="simple-controlled"
        />
        <FlexRow
          style={{
            marginBottom: 18,
            justifyContent: "space-between",
            maxWidth: "40%",
          }}
        >
          {props.discount > 0 && (
            <Typography color={"#FC4059"} fontSize={30}>
              $ {props.discount}
            </Typography>
          )}
          <Typography
            fontSize={30}
            fontWeight={700}
            style={{ textDecoration: props.discount && "line-through" }}
          >
            ${props.price}
          </Typography>
        </FlexRow>
      </CardLink>
      <FlexRow>
        <Button
          disabled={props.product.countInStock}
          text="Add to cart"
          width={"324px"}
          borderRadius={10}
          style={{ height: 62 }}
          isGray={true}
          link={"/cart"}
          onClick={() => {
            if (props.product.countInStock)
              dispatch(addCartItem(props.product, 1));
          }}
        />
      </FlexRow>
    </CardContainer>
  );
}

export default ProductCard;
