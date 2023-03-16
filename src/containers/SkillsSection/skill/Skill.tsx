import React, { ReactNode } from "react";
import styled from "styled-components";

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

    .react-icons, img {
        height: 25px;
        width: 25px;
        color: ${props => props.iconColor || "none"};
        user-select: none;
    }

    h4 { margin-top: 5px; }
    
    @media screen and (min-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0;
        width: 160px;
        padding: 1rem;

        .react-icons, img {
            height: 45px;
            width: 45px;
        }
    }

    @media screen and (min-width: 1000px) {
        width: 190px;
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