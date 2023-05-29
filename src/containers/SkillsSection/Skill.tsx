import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useObserver from "../../hooks/useObserver";
import { ISkill } from "../../data/skills";

interface SkillProps {
  skill: ISkill;
}

interface StyledSkillProps {
  iconColor?: string;
  isVisible: boolean;
}

const StyledSkill = styled.div<StyledSkillProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 230px;
  padding: 0.4rem 1rem;
  border-radius: 10px;
  background-color: #f8f8f8;

  :hover {
    box-shadow: 0 5px 0 0 #e2e2e2;
    transform: translateY(-5px);
  }

  .react-icons,
  img {
    height: 25px;
    width: 25px;
    color: ${(props) => props.iconColor || "none"};
    user-select: none;
  }

  h4 {
    margin-top: 5px;
  }

  @media screen and (min-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    width: 160px;
    padding: 1rem;

    .react-icons,
    img {
      height: 45px;
      width: 45px;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 190px;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    opacity: ${(props) => (props.isVisible ? "1" : "0")};
    transition: opacity 1.5s ease;
  }
`;

const Skill = ({ skill }: SkillProps) => {
  const skillImagePath = "./src/assets/icons/";

  const skillRef = useRef(null);
  const [skillRefState, setSkillRefState] = useState(null);

  const isVisible = useObserver(skillRefState, {
    threshold: 0.5,
  });

  useEffect(() => {
    setSkillRefState(skillRef.current);
  }, [skillRef]);

  return (
    <StyledSkill ref={skillRef} isVisible={isVisible}>
      <img draggable={false} src={skillImagePath + skill.image} alt={skill.name} />
      <h4>{skill.name}</h4>
    </StyledSkill>
  );
};

export default Skill;
