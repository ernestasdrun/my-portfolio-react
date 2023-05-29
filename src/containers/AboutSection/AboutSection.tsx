import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 5rem 1rem;
  background-color: #e1f1ff;
  box-shadow: 0 0 0 100vmax #e1f1ff;
  clip-path: inset(0 -100vmax);

  h2 {
    align-self: center;
    margin-bottom: 2rem;
    text-align: center;
    font-size: clamp(1.7rem, 1.5313rem + 0.4688vw, 2.1rem);
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 50%;
      height: 50%;
    }
  }

  @media screen and (min-width: 600px) {
    padding: 2rem 2rem 5rem 2rem;
    h2 {
      margin-bottom: 2.5rem;
    }
    div {
      flex-direction: row-reverse;
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 5rem 3rem 8rem 3rem;
    h2 {
      margin-bottom: 4rem;
    }
  }
`;

const AboutCard = styled.div`
  border: 1px solid red;
  display: flex;
  width: 100%;
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about" aria-labelledby="about-title">
      <header>
        <h2 id="about-title">Some info about me</h2>
      </header>
      <div>
        <AboutCard>
          <p>
            Hello, my name is Ernestas and I am a passionate web developer.
            I&apos;m focusing more on Front-End side, however, I also create
            Back-End for some of my personal projects.
          </p>
        </AboutCard>
        <div></div>
      </div>
    </AboutContainer>
  );
};

export default AboutSection;
