import { InnerSection, Typography } from "../../../Global.Styles";
import { Link } from "react-router-dom";

function NotFoundScreen(props) {
  return (
    <InnerSection>
      <Typography fontSize={40} fontWeight={700}>
        Page Not Found
      </Typography>

      <Link to={"/"} style={{ color: "#fcdd06", marginTop: 120 }}>
        Home Page
      </Link>
    </InnerSection>
  );
}

export default NotFoundScreen;
