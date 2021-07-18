import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../Redux/User/userActions";
import { Hr, InnerSection, Typography } from "../../../Global.Styles";
import { FormBox, StyledImage } from "../Login/Login.Styles";
import { Form, Formik } from "formik";
import { registerSchema } from "../../../Valedation";
import {
  ErrorMsg,
  Input,
} from "../../../Components/FormInput/FormInput.Styles";
import Button from "../../../Components/Button/Button";
import img from "../../../Assets/Group 240.png";
import { Link } from "react-router-dom";

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const userDetails = state.userDetails;

  const { error, isLoading } = userDetails;

  const handleSaveChanges = async (values) => {
    dispatch(registerAction(values, history));
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
          Register.
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
            passwordConfirmation: "",
            name: "",
          }}
          validationSchema={registerSchema()}
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
                <Input name={"name"} type={"name"} placeholder={"Name"} />
                {errors.name && touched.name ? (
                  <ErrorMsg>{errors.name}</ErrorMsg>
                ) : null}

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

                <Input
                  name={"passwordConfirmation"}
                  type={"password"}
                  placeholder={"Confirmation password"}
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <ErrorMsg>{errors.passwordConfirmation}</ErrorMsg>
                ) : null}

                {error ? <ErrorMsg>{error}</ErrorMsg> : null}

                <Button
                  isLoading={isLoading}
                  width={"100%"}
                  borderRadius={6}
                  text={"Sign up"}
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
        ></Typography>
        <Hr />
        <Typography
          fontSize={22}
          color={"#707070"}
          style={{
            margin: "40px 0 22px 0",
          }}
        >
          Have an account ? <Link to={"/login"}>Login</Link>
        </Typography>
      </FormBox>
      <StyledImage src={img} />
    </InnerSection>
  );
}

export default Register;
