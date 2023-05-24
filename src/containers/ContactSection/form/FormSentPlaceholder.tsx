import React from "react";
import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi";

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  flex-shrink: 0;
  width: min(600px, 100%);
  border: 1px solid #c7c7c7;
  border-radius: 10px;

  @media screen and (min-width: 1000px) {
    width: max(400px, 45%);
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

const FormSentPlaceholder = () => {
  return (
    <StyledFormContainer>
      <SumbittedInfo>
        <h3>Your message was sent successfully!</h3>
        <GiCheckMark />
      </SumbittedInfo>
    </StyledFormContainer>
  );
};

export default FormSentPlaceholder;
