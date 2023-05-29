import React, { useRef, useState } from "react";
import styled from "styled-components";
import FormInput from "../formComponents/FormInput";
import FormTextArea from "../formComponents/FormTextArea";
import FormButton from "../formComponents/FormButton";
import emailjs from "@emailjs/browser";
import mailData from "../../../data/mailData";

interface ContactFormProps {
  setIsFormSent: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const ContactForm = ({ setIsFormSent }: ContactFormProps) => {
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
          () => {
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
        <FormButton buttonRef={buttonRef} isSending={isSending} />
      </fieldset>
    </StyledForm>
  );
};

export default ContactForm;
