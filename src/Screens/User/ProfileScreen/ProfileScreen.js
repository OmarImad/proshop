import { InnerSection, Typography } from "../../../Global.Styles";
import { GrayContainer, ProfileText, StyledRow } from "./ProfileScreen.Styles";
import Button from "../../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../Redux/User/userActions";

function ProfileScreen(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <InnerSection
      style={{
        marginTop: 129,
        flexDirection: "row",
        justifyContent: "start",
      }}
    >
      <GrayContainer>
        <Typography
          style={{ marginBottom: 60, justifyContent: "start" }}
          fontWeight={700}
          fontSize={32}
        >
          {state.userDetails.user.name}
        </Typography>
        <ProfileText to={"/orders"}>My Orders</ProfileText>
        <ProfileText to={""}>Settings</ProfileText>
        <ProfileText
          onClick={() => {
            dispatch(logoutAction());
            localStorage.removeItem("user");
          }}
          as={"span"}
          style={{ marginTop: "auto", cursor: "pointer" }}
        >
          Logout
        </ProfileText>
      </GrayContainer>
      <GrayContainer isBig>
        <Typography
          style={{ marginBottom: 60, justifyContent: "start" }}
          fontWeight={700}
          fontSize={32}
        >
          My Profile
        </Typography>

        <StyledRow>
          <ProfileText isGray as={"span"}>
            Name
          </ProfileText>
          <ProfileText as={"span"} style={{ marginLeft: 60 }}>
            {state.userDetails.user.name}
          </ProfileText>
        </StyledRow>
        <StyledRow>
          <ProfileText isGray as={"span"}>
            Email
          </ProfileText>
          <ProfileText style={{ marginLeft: 60 }} as={"span"}>
            {state.userDetails.user.email}
          </ProfileText>
        </StyledRow>

        <Button
          style={{ marginTop: 50 }}
          text={"Update Profile"}
          link={"/update-profile"}
          width={"220px"}
          borderRadius={6}
        />
      </GrayContainer>
    </InnerSection>
  );
}

export default ProfileScreen;
