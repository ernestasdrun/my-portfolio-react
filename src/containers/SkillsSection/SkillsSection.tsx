import React from "react";
import styled from "styled-components";
import Skill from "./skill/Skill";
import {
  SiHtml5,
  SiCss3,
  SiStyledcomponents,
  SiTypescript,
  SiAxios,
  SiReacthookform,
  SiMui,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb
} from "react-icons/si"
import reactRouterIcon from "../../assets/icons/react-router.svg";
import githubIcon from "../../assets/icons/github.svg";
import vscodeIcon from "../../assets/icons/vscode.svg";
import gitIcon from "../../assets/icons/git.svg";
import reduxIcon from "../../assets/icons/redux.svg";
import eslintIcon from "../../assets/icons/eslint.svg";
import jsIcon from "../../assets/icons/javascript.svg";

const StyledSkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 5rem 1rem;

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

    h2 { margin-bottom: 2.5rem; }

    h3 {
      margin: 5rem 0 2rem 0;
      font-size: 24px;
      &:first-of-type { margin-top: 2rem; }
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 5rem 3rem 8rem 3rem;
    h2 { margin-bottom: 4rem; }
    h3 { font-size: 25px; }
  }
`

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 18px;
`

const SkillsSection = () => {
  return (
    <StyledSkillsSection id="skills">
      <h2>List of skills and technologies that I use</h2>
      <h3>Tools</h3>
      <SkillsContainer>
        <Skill skillName="VS Code">
          <img draggable={false} src={vscodeIcon} alt="vscode" />
        </Skill>
        <Skill skillName="Git">
          <img draggable={false} src={gitIcon} alt="git" />
        </Skill>
        <Skill skillName="GitHub">
          <img draggable={false} src={githubIcon} alt="github" />
        </Skill>
      </SkillsContainer>
      <h3>Front-End technologies</h3>
      <SkillsContainer>
        <Skill iconColor="#e44d26" skillName="HTML">
          <SiHtml5 />
        </Skill>
        <Skill iconColor="#3366cc" skillName="CSS">
          <SiCss3 />
        </Skill>
        <Skill iconColor="#000000" skillName="Styled-Components">
          <SiStyledcomponents />
        </Skill>
        <Skill skillName="JavaScript">
          <img draggable={false} src={jsIcon} alt="javascript" />
        </Skill>
        <Skill iconColor="#3178c6" skillName="TypeScript">
          <SiTypescript />
        </Skill>
        <Skill iconColor="#61dafb" skillName="React">
          <SiReact />
        </Skill>
        <Skill skillName="React Router">
          <img draggable={false} src={reactRouterIcon} alt="react router" />
        </Skill>
        <Skill skillName="Redux">
          <img draggable={false} src={reduxIcon} alt="redux" />
        </Skill>
        <Skill iconColor="#671ddf" skillName="Axios">
          <SiAxios />
        </Skill>
        <Skill iconColor="#0059b2" skillName="Material UI">
          <SiMui />
        </Skill>
        <Skill skillName="Eslint">
          <img draggable={false} src={eslintIcon} alt="eslint" />
        </Skill>
        <Skill iconColor="#ec5990" skillName="React Hook Form">
          <SiReacthookform />
        </Skill>
      </SkillsContainer>
      <h3>Back-End technologies</h3>
      <SkillsContainer>
        <Skill iconColor="#83cd29" skillName="Node.js">
          <SiNodedotjs />
        </Skill>
        <Skill iconColor="#000000" skillName="Express.js">
          <SiExpress />
        </Skill>
        <Skill iconColor="#00684a" skillName="MongoDB">
          <SiMongodb />
        </Skill>
      </SkillsContainer>
    </StyledSkillsSection>
  );
};

export default SkillsSection;