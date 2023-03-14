import React, { useState } from "react";
import styled from "styled-components";

interface FormInputProps {
  fieldName: string,
  fieldType: string,
}

interface StyledInputProps {
  fieldValue: string | undefined,
}

const StyledInput = styled.div<StyledInputProps>`
  position: relative;

  input {
    width: 100%;
    padding: 1rem 1px 3px 1px;
    border: none;
    border-bottom: 1px solid ${props => (props.fieldValue === "") ? "#000" : "#3aa830"};
    outline: transparent;
    font-size: 16px;
    background: none;

    :focus {
        border-bottom: 2px solid #3aa830;
        margin-bottom: -1px;

        ~ label {
          font-size: 12px;
          color: #3aa830;
          transform: translateY(-22px);
        }
    }
  }

  label {
    position: absolute;
    bottom: 4px;
    left: 1px;
    font-size: ${props => (props.fieldValue === "") ? "unset" : "12px"};
    color: ${props => (props.fieldValue === "") ? "initial" : "#3aa830"};
    transition: transform .3s, font-size .3s, color .3s;
    transform: ${props => (props.fieldValue === "") ? "unset" : "translateY(-22px)"};
    cursor: text;
  }
`

const FormInput = ({ fieldName, fieldType }: FormInputProps) => {
  const [fieldValue, setFieldValue] = useState("");

  return (
    <StyledInput fieldValue={fieldValue}>
      <input id={fieldName} type={fieldType} onChange={(e) => setFieldValue(e.target.value)} />
      <label htmlFor={fieldName}>{fieldName}</label>
    </StyledInput>
  );
};

export default FormInput;