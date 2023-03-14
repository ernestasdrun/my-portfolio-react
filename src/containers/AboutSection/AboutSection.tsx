import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5rem;
  background-color: #b5e2b5;
  box-shadow: 0 0 0 100vmax #b5e2b5;
  clip-path: inset(0 -100vmax); 
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <ContentContainer>
        <h1>Lorem ipsum</h1>
        <h2>Lorem ipsum</h2>
      </ContentContainer>
      <div></div>
    </AboutContainer>
  );
};

export default AboutSection;