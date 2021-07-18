import {
  FlexColumn,
  FlexRow,
  SpinnerContainer,
  Typography,
} from "../../../Global.Styles";
import {
  FlexColWhite,
  HeroSection,
  Image,
  RIcon,
  SpecificationContainer,
  StyledFlexColumn,
  StyledTextArea,
} from "./Product.Styles";
import RemoveIcon from "@material-ui/icons/Remove";
import FeaturedProductsSection from "../HomeScreen/FeaturedProductsSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getFeaturedProducts,
  getProduct,
} from "../../../Redux/Guest/guestActions";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Button from "../../../Components/Button/Button";
import AddIcon from "@material-ui/icons/Add";
import Review from "../../../Components/Review/Review";
import { useParams } from "react-router";
import Navigator from "../../../Components/Navigator/Navigator";
import { addCartItem } from "../../../Redux/Cart/cartActions";
import {
  ErrorMessage,
  SuccessMessage,
} from "../../User/Payment/Payment.Styles";
import Rating from "@material-ui/lab/Rating";
import { addReviewAction } from "../../../Redux/User/userActions";
import {
  ADD_REVIEW_RESET,
  ADD_REVIEW_TO_PRODUCT,
} from "../../../Redux/User/userTypesConstants";
import { useLocationWithQuery } from "react-router-query-hooks";
import Meta from "../../../Components/Meta/Meta";

function ProductScreen(props) {
  const locationQuery = useLocationWithQuery();
  const {
    query: { review: reviewFromQuery, rating: ratingFromQuery },
  } = locationQuery;

  const [count, setCount] = useState(1);
  const [rating, setRating] = useState(ratingFromQuery ? ratingFromQuery : 0);
  const [review, setReview] = useState(reviewFromQuery ? reviewFromQuery : "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const params = useParams();
  const product = state.guestState.product;

  useEffect(() => {
    dispatch({
      type: ADD_REVIEW_RESET,
    });
    dispatch(getFeaturedProducts());
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (state?.userDetails?.addingReview?.success) {
      dispatch({
        type: ADD_REVIEW_TO_PRODUCT,
        payload: {
          comment: review,
          rating,
          createdAt: new Date().toString(),
          name: state?.userDetails.user.name,
        },
      });
      setError("");
      setReview("");
      setRating(0);
    }
  }, [
    dispatch,
    rating,
    review,
    state?.userDetails?.addingReview?.success,
    state?.userDetails.user.name,
  ]);

  return state.guestState.isLoading || product.isLoading ? (
    <SpinnerContainer />
  ) : (
    <>
      <Meta
        title={product.product.name}
        description={product.product.description}
      />
      <FlexColumn style={{ marginBottom: 100 }}>
        <SpecificationContainer>
          <HeroSection>
            <Navigator name={product.product.name} />
            <FlexRow style={{ alignItems: "flex-start" }}>
              <FlexColumn
                style={{
                  width: 501,
                  justifyContent: "start",
                  marginTop: 30,
                }}
              >
                <Image
                  src={
                    "https://proshop-ms.herokuapp.com/" + product.product.image
                  }
                />
              </FlexColumn>
              <StyledFlexColumn>
                <FlexRow style={{ alignItems: "flex-start" }}>
                  <FlexColumn
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      fontSize="32"
                      fontWeight="700"
                      style={{
                        margin: "30px 0",
                        justifyContent: "start",
                      }}
                    >
                      {product.product.name}
                    </Typography>
                    <FlexRow
                      style={{
                        height: 40,
                        width: 204,
                        border: "1px solid #F2F2F2",
                      }}
                    >
                      <RIcon
                        onClick={() => {
                          if (count > 1) setCount(count - 1);
                        }}
                      >
                        <RemoveIcon />
                      </RIcon>
                      <Typography
                        width={"108px"}
                        align="center"
                        justify="center"
                        fontWeight="700"
                        fontSize="24px"
                      >
                        {count}
                      </Typography>
                      <RIcon
                        onClick={() => {
                          if (count < product.product.countInStock)
                            setCount(count + 1);
                        }}
                      >
                        <AddIcon />
                      </RIcon>
                    </FlexRow>
                  </FlexColumn>
                  <FlexColumn style={{ width: 200, margin: "40px 0" }}>
                    <Typography
                      fontWeight={"700"}
                      fontSize={30}
                      style={{
                        margin: "0 35px 0 120px",
                        width: 120,
                      }}
                    >
                      ${product.product.price}
                    </Typography>
                  </FlexColumn>
                </FlexRow>
                <FlexColumn style={{ alignItems: "flex-start" }}>
                  <FlexRow>
                    <FlexRow
                      style={{ justifyContent: "flex-end", marginTop: 60 }}
                    >
                      <Button
                        text={
                          <BookmarkBorderIcon
                            style={{ fontSize: "40px", color: "#B3B3B3" }}
                          />
                        }
                        width={"54px"}
                        borderRadius={10}
                        style={{
                          height: 62,
                          marginRight: 13,
                          background: "#fff",
                          border: "1px solid #FCDD06",
                        }}
                      />
                      <Button
                        text="Add to cart"
                        width={"324px"}
                        borderRadius={10}
                        style={{ height: 62 }}
                        disabled={product.product.countInStock}
                        link={"/cart"}
                        onClick={() => {
                          if (product.product.countInStock)
                            dispatch(addCartItem(product.product, count));
                        }}
                      />
                    </FlexRow>
                  </FlexRow>
                </FlexColumn>
                <Typography
                  fontSize="16px"
                  style={{ lineHeight: "1.8", margin: "16px 0" }}
                  fontWeight="500"
                  color="#707070"
                >
                  {product.product.description}
                </Typography>
              </StyledFlexColumn>
            </FlexRow>
            <FlexColumn
              style={{ margin: "63px 0 0 0", alignItems: "flex-start" }}
            >
              <FlexColumn style={{ alignItems: "flex-start" }}>
                <Typography
                  fontSize="32"
                  fontWeight="700"
                  style={{ margin: "60px 0 30px", justifyContent: "start" }}
                >
                  Reviews
                </Typography>

                <FlexColWhite>
                  <Typography
                    fontSize="22"
                    fontWeight="500"
                    style={{ margin: "30px 0 30px", justifyContent: "start" }}
                  >
                    Add Review
                  </Typography>
                  <StyledTextArea
                    type="text"
                    placeholder={"Comment..."}
                    required={true}
                    onChange={(e) => setReview(e.target.value)}
                    value={review}
                  />
                  <Rating
                    style={{ margin: "0 20px 20px" }}
                    onChange={(e, value) => {
                      setRating(value);
                    }}
                    value={rating}
                    defaultValue={props.rate}
                    name="simple-controlled"
                  />
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                  {state?.userDetails?.addingReview?.error && (
                    <ErrorMessage>
                      {state?.userDetails?.addingReview?.error}
                    </ErrorMessage>
                  )}
                  {state?.userDetails?.addingReview?.success && (
                    <SuccessMessage>
                      {state?.userDetails?.addingReview?.success}
                    </SuccessMessage>
                  )}
                  <FlexRow style={{ justifyContent: "start" }}>
                    <Button
                      text={"Submit"}
                      link={
                        state?.userDetails.user.name
                          ? ""
                          : `/login?pathname=${props.location.pathname}&rating=${rating}&review=${review}`
                      }
                      onClick={
                        state?.userDetails.user.name
                          ? () => {
                              dispatch(
                                addReviewAction(
                                  {
                                    comment: review,
                                    rating,
                                  },
                                  product.product._id
                                )
                              );

                              if (review && rating) {
                              } else
                                setError(
                                  "Please write a comment and add rating"
                                );
                            }
                          : () => {}
                      }
                      isLoading={state?.userDetails?.addingReview?.isLoading}
                      borderRadius={10}
                    />
                  </FlexRow>
                  {product.product?.reviews?.map((item) => (
                    <Review
                      title={item.name}
                      text={item.comment}
                      date={item.createdAt}
                      rate={item.rating}
                    />
                  ))}
                </FlexColWhite>
              </FlexColumn>
            </FlexColumn>
          </HeroSection>
        </SpecificationContainer>
        <FeaturedProductsSection products={state.guestState.products} />
      </FlexColumn>
    </>
  );
}

export default ProductScreen;
