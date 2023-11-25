import React from "react";
import styled from "styled-components";
import Skill from "./Skill";
import skills from "../../data/skills";
import { ITheme } from "../../assets/theme/theme";

const StyledSkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 5rem 1rem;
  background-color: ${props => props.theme};
  box-shadow: 0 0 0 100vmax rgb(255, 255, 255);
  clip-path: inset(0 -100vmax);

  h2 {
    align-self: center;
    margin-bottom: 2rem;
    text-align: center;
    font-size: clamp(1.7rem, 1.5313rem + 0.4688vw, 2.1rem);
  }

  h3 {
    margin: 4rem 0 2rem 0;
    font-size: 23px;

    &:first-of-type {
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 600px) {
    padding: 2rem 2rem 5rem 2rem;

    h2 {
      margin-bottom: 2.5rem;
    }

    h3 {
      margin: 5rem 0 2rem 0;
      font-size: 24px;
      &:first-of-type {
        margin-top: 2rem;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 5rem 3rem 8rem 3rem;
    h2 {
      margin-bottom: 4rem;
    }
    h3 {
      font-size: 25px;
    }
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 18px;
`;

const SkillsSection = () => {
  return (
    <StyledSkillsSection id="skills" aria-labelledby="skills-title">
      <header>
        <h2 id="skills-title">List of skills and technologies that I use</h2>
      </header>
      <h3>Tools</h3>
      <SkillsContainer>
        {skills.skillListTools.map((skill, index) => {
          return <Skill skill={skill} key={index} />;
        })}
      </SkillsContainer>
      <h3>Front-End technologies</h3>
      <SkillsContainer>
        {skills.skillListFrontend.map((skill, index) => {
          return <Skill skill={skill} key={index} />;
        })}
      </SkillsContainer>
      <h3>Back-End technologies</h3>
      <SkillsContainer>
        {skills.skillListBackend.map((skill, index) => {
          return <Skill skill={skill} key={index} />;
        })}
      </SkillsContainer>
    </StyledSkillsSection>
  );
};

export default SkillsSection;
