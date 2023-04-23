import React, { useRef, useState } from "react";
import styled from "styled-components";
import FormInput from "./contactComponents/FormInput";
import FormTextArea from "./contactComponents/FormTextArea";
import { TbSend } from "react-icons/tb";
import { LINKEDIN_LINK } from "../../data/socials";
import emailjs from "@emailjs/browser";
import mailData from "../../data/mailData";
import { GiCheckMark } from "react-icons/gi";

interface ButtonProps {
  isSending: boolean;
}

const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 5rem 1rem;

  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: clamp(1.6875rem, 1.4531rem + 1.1719vw, 2.625rem);

    a {
      color: #3259d8;
      :hover {
        opacity: 80%;
      }
    }
  }

  @media screen and (min-width: 600px) {
    padding: 2rem 5rem 5rem 5rem;
    h2 {
      margin-bottom: 2.5rem;
    }
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    padding: 5rem 6rem 8rem 6rem;

    h2 {
      align-self: center;
      padding: 0 5rem 0 2rem;
      margin-bottom: 0;
      text-align: left;
    }
  }
`;

const SumbittedInfo = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  width: min(600px, 100%);
  min-height: 470px;
  padding: 5rem 1rem 1rem 1rem;
  position: relative;

  h3 {
    font-size: 1.4rem;
  }

  .react-icons {
    height: 100px;
    width: 100px;
    align-self: center;
    margin-top: 4rem;
    color: #37a537;
  }

  @media screen and (min-width: 600px) {
    h3 {
      font-size: 1.6rem;
    }

    .react-icons {
      height: 120px;
      width: 120px;
    }
  }

  @media screen and (min-width: 1000px) {
    width: max(400px, 45%);
    min-height: calc(510px + 4rem);
    h3 {
      font-size: 1.8rem;
    }

    .react-icons {
      height: 140px;
      width: 140px;
    }
  }
`;

const StyledForm = styled.form`
  flex-grow: 1;
  flex-shrink: 0;
  align-self: center;
  width: min(600px, 100%);

  fieldset {
    display: flex;
    flex-direction: column;
    min-height: 470px;
    gap: 25px;
    padding: 1rem;
    border: 1px solid #c7c7c7;
    border-radius: 10px;
  }

  @media screen and (min-width: 1000px) {
    width: max(400px, 45%);

    fieldset {
      padding: 2rem;
      min-height: 510px;
    }
  }
`;

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

const ContactSection = () => {
  const [formParams, setFormParams] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isParamError, setIsParamError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isFormSent, setIsFormSent] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const form = useRef<HTMLFormElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    tag: string
  ) => {
    setFormParams((prevState) => ({ ...prevState, [tag]: event.target.value }));

    if (event.target.value === "") {
      setIsParamError((prevState) => ({ ...prevState, [tag]: true }));
    } else if (
      event.target.type === "email" &&
      emailRef.current?.validity.valid
    ) {
      setIsEmailError(false);
    } else {
      setIsParamError((prevState) => ({ ...prevState, [tag]: false }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let errorCount = 0;

    if (nameRef.current?.value === "") {
      setIsParamError((prevState) => ({ ...prevState, name: true }));
      errorCount++;
    }
    if (emailRef.current?.value === "") {
      setIsParamError((prevState) => ({ ...prevState, email: true }));
      errorCount++;
    } else if (!emailRef.current?.validity.valid) {
      setIsEmailError(true);
      errorCount++;
    }
    if (messageRef.current?.value === "") {
      setIsParamError((prevState) => ({ ...prevState, message: true }));
      errorCount++;
    }

    sendForm(errorCount);
  };

  async function sendForm(errorCount: number) {
    if (form.current && errorCount === 0 && isEmailError === false) {
      buttonRef.current?.setAttribute("disabled", "");

      await emailjs
        .sendForm(
          mailData.SERVICE_ID,
          mailData.TEMPLATE_ID,
          form.current,
          mailData.PUBLIC_KEY
        )
        .then(
          (result) => {
            setIsSending(true);
            setTimeout(() => {
              buttonRef.current?.removeAttribute("disabled");
              setIsSending(false);
              setIsFormSent(true);
            }, 1000);
          },
          (error) => {
            buttonRef.current?.removeAttribute("disabled");
            console.error(error.text);
          }
        );
    }
  }

  return (
    <StyledContactSection id="contact" aria-labelledby="contacts-title">
      <header id="contacts-title">
        <h2>
          You can contact me through{" "}
          <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          or write me a message
        </h2>
      </header>
      {isFormSent ? (
        <StyledForm ref={form} onSubmit={(e) => handleSubmit(e)} noValidate>
          <fieldset>
            <SumbittedInfo>
              <h3>Your message was sent successfully!</h3>
              <GiCheckMark />
            </SumbittedInfo>
          </fieldset>
        </StyledForm>
      ) : (
        <StyledForm ref={form} onSubmit={(e) => handleSubmit(e)} noValidate>
          <fieldset>
            <FormInput
              fieldName="Name"
              fieldValue={formParams.name}
              fieldType="text"
              tag="name"
              name="from_name"
              inputRef={nameRef}
              isError={isParamError.name}
              handleChange={handleChange}
            />
            <FormInput
              fieldName="Email"
              fieldValue={formParams.email}
              fieldType="email"
              tag="email"
              name="from_email"
              inputRef={emailRef}
              isError={isParamError.email}
              isEmailError={isEmailError}
              handleChange={handleChange}
            />
            <FormTextArea
              fieldValue={formParams.message}
              tag="message"
              inputRef={messageRef}
              isError={isParamError.message}
              handleChange={handleChange}
            />
            <StyledButton ref={buttonRef} isSending={isSending}>
              Send
              <TbSend />
            </StyledButton>
          </fieldset>
        </StyledForm>
      )}
    </StyledContactSection>
  );
};

export default ContactSection;
