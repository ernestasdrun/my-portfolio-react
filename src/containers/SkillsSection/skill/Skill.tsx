import React, { ReactNode } from "react";
import styled from "styled-components";
import { SiTypescript } from "react-icons/si"

interface SkillProps {
    iconColor?: string,
    skillName: string,
    children: ReactNode,
}

interface StyledSkillProps {
    iconColor?: string,
}

const StyledSkill = styled.div<StyledSkillProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 1rem;
    width: 190px;
    background-color: #f8f8f8;

    .react-icons, img {
        height: 45px;
        width: 45px;
        color: ${props => props.iconColor || "none"};
        user-select: none;
    }

    h4 {
        margin-top: 5px;
    }

    :hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 0 0 #e2e2e2;
    }
`

const Skill = ({ iconColor, skillName, children }: SkillProps) => {
    return (
        <StyledSkill iconColor={iconColor}>
            {children}
            <h4>{skillName}</h4>
        </StyledSkill>
    );
};

export default Skill;