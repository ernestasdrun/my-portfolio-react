import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface FormInputProps {
  fieldName: string,
  fieldValue: string,
  fieldType: string,
  tag: string,
  name: string,
  inputRef: React.RefObject<HTMLInputElement>,
  isError: boolean,
  isEmailError?: boolean,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, tag: string) => void,
}

interface StyledInputProps {
  fieldValue: string | undefined,
  isError: boolean,
}

const StyledInput = styled.div<StyledInputProps>`
  position: relative;
  height: 58px;

  input {
    width: 100%;
    padding: 1rem 1px 3px 1px;
    border: none;
    border-bottom: 1px solid ${props => (props.fieldValue === "") ? "#a7a7a7" : "#3aa830"};
    border-bottom: 1px solid ${props => props.isError ? "#e20000" : "unset"};
    outline: transparent;
    font-size: 16px;
    background: none;

    :hover {
      border-bottom: 1px solid ${props => (props.isError || (props.fieldValue !== "")) ? "unset" : "#3b3b3b"};
    }

    :focus {
      border-bottom: 2px solid ${props => props.isError ? "#e20000" : "#3aa830"};
      margin-bottom: -1px;

        ~ label {
          font-size: 12px;
          color: ${props => !props.isError && "#3aa830"};
          transform: translateY(-22px);
        }
    }
  }

  label {
    position: absolute;
    bottom: 24px;
    left: 1px;
    font-size: ${props => (props.fieldValue === "") ? "unset" : "12px"};
    color: ${props => (props.fieldValue === "") ? "initial" : "#3aa830"};
    color: ${props => props.isError && "#e20000"};
    transition: transform .3s, font-size .3s, color .3s;
    transform: ${props => (props.fieldValue === "") ? "unset" : "translateY(-22px)"};
    cursor: ${props => (props.fieldValue === "") ? "text" : "auto"};
    user-select: none;
  }

  > p {
      text-align: end;
      font-size: 12px;
      font-style: italic;
      color: #cf0707;
      padding-top: 4px;
      user-select: none;
    }
`

const FormInput = ({ fieldName, fieldValue, fieldType, name, tag, inputRef, isError, isEmailError = false, handleChange }: FormInputProps) => {
  const [isFieldError, setIsFieldError] = useState<boolean>(false);

  useEffect(() => {
    if (isError || isEmailError) {
      setIsFieldError(true);
    } else {
      setIsFieldError(false);
    }
  }, [isError, isEmailError])

  return (
    <StyledInput fieldValue={fieldValue} isError={isFieldError}>
      <input id={fieldName} ref={inputRef} name={name} type={fieldType} onChange={(e) => handleChange(e, tag)} />
      <label htmlFor={fieldName}>{fieldName}</label>
      {isError && <p>{fieldName} cannot be empty</p>}
      {!isError && isEmailError && <p>Looks like this is not an email</p>}
    </StyledInput>
  );
};

export default FormInput;