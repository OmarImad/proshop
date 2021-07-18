import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
  outline: none;
  height: 40px;
  border-radius: 6px;
  opacity: 1;
  font-size: 14px;
  padding: 11px;
  color: #707070;
  width: 100%;
  margin-bottom: 22px;
  border: 1px solid #242424;
  &::placeholder {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

export const ErrorMsg = styled("span")`
  color: red;
  margin: -14px 0 14px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 12px;
`;
