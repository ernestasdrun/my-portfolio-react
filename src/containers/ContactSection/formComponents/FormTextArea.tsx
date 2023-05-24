import React from "react";
import styled from "styled-components";

interface FormTextAreaProps {
  fieldValue: string;
  tag: string;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  isError: boolean;
  handleChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    tag: string
  ) => void;
}

interface StyledTextAreaProps {
  fieldValue: string;
  isError: boolean;
}

const StyledTextArea = styled.div<StyledTextAreaProps>`
  padding: 1rem 1rem 0.5rem 1rem;
  margin-top: 1rem;
  border: 1px solid
    ${(props) => (props.fieldValue === "" ? "#a7a7a7" : "#3aa830")};
  border: 1px solid ${(props) => (props.isError ? "#e20000" : "unset")};
  border-radius: 5px;
  position: relative;

  :hover {
    border: 1px solid
      ${(props) =>
        props.isError || props.fieldValue !== "" ? "unset" : "#3b3b3b"};
  }

  :focus-within {
    border: 2px solid ${(props) => (props.isError ? "#e20000" : "#3aa830")};
  }

  textarea {
    display: block;
    width: 100%;
    border: none;
    font-size: 16px;
    font-family: "Roboto";
    background: none;
    resize: none;
    outline: transparent;
    outline-offset: 15px;

    :focus {
      ~ label {
        margin: 0;
        padding: 0 6px;
        font-size: 12px;
        color: ${(props) => !props.isError && "#3aa830"};
        background-color: #fff;
        transform: translate(-10px, -9px);
      }
    }
  }

  label {
    ${(props) =>
      props.fieldValue === ""
        ? "margin: 1rem 0 1rem 0;"
        : `
        margin: 0;
        padding: 0 6px;
        background-color: #fff;
        `}

    border-radius: 20px;
    position: absolute;
    top: 0px;
    font-size: ${(props) => (props.fieldValue === "" ? "unset" : "12px")};
    color: ${(props) => (props.fieldValue === "" ? "initial" : "#3aa830")};
    color: ${(props) => props.isError && "#e20000"};
    transition: color 0.3s, margin 0.3s, padding 0.3s, font-size 0.3s,
      transform 0.3s, background-color 0.3s, z-index 0.3s;
    transform: ${(props) =>
      props.fieldValue === "" ? "unset" : "translate(-10px, -9px)"};
    cursor: text;
    user-select: none;
  }

  > p {
    text-align: end;
    font-size: 12px;
    font-style: italic;
    color: ${(props) => (props.isError ? "#e20000" : "#535353")};
    padding-top: 0.5rem;
    user-select: none;
  }
`;

const FormTextArea = ({
  fieldValue,
  tag,
  inputRef,
  isError,
  handleChange,
}: FormTextAreaProps) => {
  return (
    <StyledTextArea fieldValue={fieldValue} isError={isError}>
      <textarea
        id="textarea__styled"
        name="message"
        ref={inputRef}
        rows={10}
        maxLength={500}
        spellCheck={false}
        onChange={(e) => handleChange(e, tag)}
      />
      <label htmlFor="textarea__styled">Message</label>
      {isError ? (
        <p>Message cannot be empty</p>
      ) : (
        <p>{inputRef.current?.textLength ?? 0}/500</p>
      )}
    </StyledTextArea>
  );
};

export default FormTextArea;
