import { Input } from "./FormInput.Styles";

function FormInput({
  isRequired,
  type,
  placeholder,
  name,
  value,
  handleChange = () => {},
}) {
  return (
    <Input
      required={isRequired}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
}

export default FormInput;
