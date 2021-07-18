import { Hr, InnerSection, Typography } from "../../../Global.Styles";
import { FormBox, StyledImage } from "./Login.Styles";
import img from "../../../Assets/Group 240.png";
import Button from "../../../Components/Button/Button";
import {
  ErrorMsg,
  Input,
} from "../../../Components/FormInput/FormInput.Styles";
import { Form, Formik } from "formik";
import { loginSchema } from "../../../Valedation";
import { useHistory, useLocation } from "react-router";
import { loginAction } from "../../../Redux/User/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useLocationWithQuery } from "react-router-query-hooks";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const error = state.userDetails.error;
  const isLoading = state.userDetails.isLoading;
  const locationQuery = useLocationWithQuery();
  const {
    query: { pathname, review, rating },
  } = locationQuery;

  const handleSaveChanges = async (values) => {
    dispatch(
      loginAction(
        values,
        history,
        pathname ? `${pathname}?review=${review}&rating=${rating}` : ""
      )
    );
  };

  return (
    <InnerSection
      style={{
        marginTop: 44,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <FormBox>
        <Typography
          fontSize={60}
          color={"#242424"}
          fontWeight={700}
          style={{
            margin: "0 0 10px 0",
            justifyContent: "start",
          }}
        >
          Login.
        </Typography>
        <Typography
          fontSize={28}
          color={"#70707070"}
          fontWeight={700}
          style={{
            margin: "0 0 52px 0",
            justifyContent: "start",
          }}
        >
          Login with your data that you entered during registration
        </Typography>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => {
            return (
              <Form
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Input name={"email"} type={"email"} placeholder={"Email"} />
                {errors.email && touched.email ? (
                  <ErrorMsg>{errors.email}</ErrorMsg>
                ) : null}

                <Input
                  name={"password"}
                  type={"password"}
                  placeholder={"password"}
                />
                {errors.password && touched.password ? (
                  <ErrorMsg>{errors.password}</ErrorMsg>
                ) : null}

                {error ? <ErrorMsg>{error}</ErrorMsg> : null}

                <Button
                  isLoading={isLoading}
                  width={"100%"}
                  borderRadius={6}
                  text={"Login"}
                />
              </Form>
            );
          }}
        </Formik>
        <Typography
          fontSize={22}
          color={"#242424"}
          style={{
            margin: "16px 0 22px 0",
          }}
        >
          Forgot your password?
        </Typography>
        <Hr />
        <Button
          link={"/register"}
          width={"100%"}
          borderRadius={20}
          text={"Sign up now"}
          style={{
            border: "3px solid #FCDD06",
            marginTop: 40,
            background: "#fff",
          }}
        />
      </FormBox>
      <StyledImage src={img} />
    </InnerSection>
  );
}

export default Login;
