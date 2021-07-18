import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../Global.Styles";
import { BorderedBox, Divider, YellowDivider } from "./HomeScreen.Styles";
import ProductCard from "../../../Components/ProductCard/ProductCard";

function TopRatedSection({ topRatedProducts }) {
  return (
    <FlexBox color={"#fff"}>
      <InnerSection>
        <FlexColumn style={{ marginTop: 32, alignItems: "start" }}>
          <Typography fontWeight={700} fontSize={32}>
            TOP RATE PRODUCTS
          </Typography>
          <YellowDivider />
          <Divider />
        </FlexColumn>
        <BorderedBox>
          {topRatedProducts.map((item) => (
            <ProductCard
              product={item}
              id={item._id}
              key={item._id}
              widthBorder={true}
              image={"https://proshop-ms.herokuapp.com/" + item.image}
              name={item.name}
              discount={0}
              price={item.price}
              rate={item.rating}
            />
          ))}
        </BorderedBox>
      </InnerSection>
    </FlexBox>
  );
}

export default TopRatedSection;
