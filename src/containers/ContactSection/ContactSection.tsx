import React, { useState } from "react";
import styled from "styled-components";
import { LINKEDIN_LINK } from "../../data/socials";
import ContactForm from "./form/ContactForm";
import FormSentPlaceholder from "./form/FormSentPlaceholder";

const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 5rem 1rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 0 100vmax rgb(255, 255, 255);
  clip-path: inset(0 -100vmax);

  header {
    margin: auto;
  }

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

const ContactSection = () => {
  const [isFormSent, setIsFormSent] = useState<boolean>(false);

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
        <FormSentPlaceholder />
      ) : (
        <ContactForm setIsFormSent={setIsFormSent} />
      )}
    </StyledContactSection>
  );
};

export default ContactSection;
