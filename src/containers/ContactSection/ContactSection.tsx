import React from "react";
import styled from "styled-components";
import FormInput from "./contactComponents/FormInput";
import FormTextArea from "./contactComponents/FormTextArea";
import { TbSend } from "react-icons/tb";
import { LINKEDIN_LINK } from "../../data/socials";

const StyledContactSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 5rem 1rem;
  //background-color: #cfad91;
  //box-shadow: 0 0 0 100vmax #eef3ab;
  //clip-path: inset(0 -100vmax);

  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: clamp(1.6875rem, 1.4531rem + 1.1719vw, 2.625rem);

    a {
      color: #3259d8;
      :hover { opacity: 80%; }
    }
  }

  @media screen and (min-width: 600px) {
    padding: 2rem 5rem 5rem 5rem;
    h2 { margin-bottom: 2.5rem; }
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
`

const StyledForm = styled.form`
  flex-grow: 1;
  flex-shrink: 0;
  align-self: center;
  width: min(600px, 100%);

  fieldset {
    display: flex;
    flex-direction: column;
    height: 470px;
    gap: 25px;
    padding: 1rem;
    border: 1px solid #c7c7c7;
    border-radius: 10px;
  }

  @media screen and (min-width: 1000px) {
    width: max(400px, 45%);
    fieldset {
      padding: 2rem;
      height: 510px;
    }
  }
`

const StyledButton = styled.button`
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
  background-color: #51cc76;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  
  :hover {
    background-color: #51cc76e1;
    cursor: pointer;
  }

  .react-icons {
    height: 22px;
    width: 22px;
  }
`

const ContactSection = () => {

  return (
    <StyledContactSection>
      <h2>You can contact me through <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">LinkedIn</a> or write me a message</h2>
      <StyledForm onSubmit={(e) => e.preventDefault()} noValidate>
        <fieldset>
          <FormInput fieldName="Name" fieldType="text" />
          <FormInput fieldName="Email" fieldType="email" />
          <FormTextArea />
          <StyledButton>
            Send
            <TbSend />
          </StyledButton>
        </fieldset>
      </StyledForm>
    </StyledContactSection>
  );
};

export default ContactSection;