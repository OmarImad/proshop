import {
  FlexBox,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../Global.Styles";
import SwipeableViews from "react-swipeable-views";
import {
  Arrow,
  Dot,
  HeroBox,
  HeroTitle,
  Image,
  SideBox,
} from "./HomeScreen.Styles";
import Button from "../../../Components/Button/Button";
import slideImage from "../../../Assets/img1.PNG";
import { useState } from "react";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: window.innerWidth > 1100 ? 678 : 800,
  },
};

function HeroSection({ sliderProducts }) {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleChangeIndex = () => {};

  return (
    <FlexBox color={"#F2F2F2"}>
      <InnerSection>
        <SwipeableViews
          style={Object.assign({}, styles.root, styles.root)}
          index={sliderIndex}
          onChangeIndex={handleChangeIndex}
        >
          {sliderProducts.map((item) => (
            <HeroBox key={item._id}>
              <SideBox>
                <Typography
                  fontSize={32}
                  color={"#242424"}
                  style={{ justifyContent: "start" }}
                >
                  ${item.price}
                </Typography>
                <HeroTitle>{item.name.substring(0, 15)}</HeroTitle>
                <Typography fontSize={32} color={"#242424"}>
                  {item.description.substring(0, 80)}
                </Typography>
                <Button
                  link={`/product/${item._id}/${item.name}`}
                  text="Shop now"
                  width={"220px"}
                  borderRadius={20}
                  style={{ marginTop: 42, height: 52 }}
                />
              </SideBox>
              <SideBox>
                <Image src={"https://proshop-ms.herokuapp.com/" + item.image} />
              </SideBox>
            </HeroBox>
          ))}
        </SwipeableViews>

        <FlexRow style={{ marginBottom: 30 }}>
          <Arrow
            isLeft={true}
            onClick={() => {
              if (sliderIndex === 0) setSliderIndex(2);
              else setSliderIndex(sliderIndex - 1);
            }}
          >
            &#10095;
          </Arrow>
          <Dot
            size={25}
            isGray={sliderIndex !== 0}
            onClick={() => {
              setSliderIndex(0);
            }}
          />
          <Dot
            size={25}
            isGray={sliderIndex !== 1}
            onClick={() => {
              setSliderIndex(1);
            }}
          />
          <Dot
            size={25}
            isGray={sliderIndex !== 2}
            onClick={() => {
              setSliderIndex(2);
            }}
          />
          <Arrow
            onClick={() => {
              if (sliderIndex === 2) setSliderIndex(0);
              else setSliderIndex(sliderIndex + 1);
            }}
          >
            &#10095;
          </Arrow>
        </FlexRow>
      </InnerSection>
    </FlexBox>
  );
}

export default HeroSection;
