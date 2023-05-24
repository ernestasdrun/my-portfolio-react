import React from "react";
import styled from "styled-components";
import { TbSend } from "react-icons/tb";

interface FormButtonProps {
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
  isSending: boolean;
}

interface ButtonProps {
  isSending: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 3px;
  width: 130px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  font-family: "Roboto";
  background-color: #51cc76;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);

  :hover {
    background-color: #51cc76e1;
    cursor: pointer;

    &[disabled] {
      cursor: progress;
    }
  }

  &[disabled] {
    .react-icons {
      color: ${(props) => props.isSending && "#000000"};
    }
  }

  .react-icons {
    height: 22px;
    width: 22px;
    transition: transform 1s, opacity 1s;
    ${(props) =>
      props.isSending &&
      `
    transform: translate(105px, -105px) scale(200%);
    opacity: 0;
    `}

    @media screen and (min-width: 600px) {
      ${(props) =>
        props.isSending && `transform: translate(220px, -220px) scale(250%);`}
    }
  }
`;

const FormButton = ({ buttonRef, isSending }: FormButtonProps) => {
  return (
    <StyledButton ref={buttonRef} isSending={isSending}>
      Send
      <TbSend />
    </StyledButton>
  );
};

export default FormButton;
