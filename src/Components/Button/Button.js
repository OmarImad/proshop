import { CustomeButton } from "./Button.Styles";

const Button = ({
  text,
  onClick = () => {},
  isGray,
  width,
  borderRadius,
  style = {},
  isLoading,
  link = "",
  disabled,
}) => {
  return (
    <CustomeButton
      to={link}
      as={link ? "" : "button"}
      disabled={isLoading}
      onClick={onClick}
      isGray={isGray}
      width={width}
      borderRadius={borderRadius}
      style={style}
    >
      {text}
    </CustomeButton>
  );
};

export default Button;
