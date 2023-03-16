import React from "react";
import styled from "styled-components";
import { IProject } from "../../data/projects";
import SocialsButton from "../Navbar/buttons/SocialsButton";
import githubIcon from "../../assets/icons/github.svg";
import webIcon from "../../assets/icons/website-click.svg";
import { RiArrowDropDownLine } from "react-icons/ri";

interface ProjectCardProps {
    isReverse: boolean,
    project: IProject,
}

interface StyledCardProps {
    isReverse: boolean,
}

const StyledCard = styled.div<StyledCardProps>`
    display: flex;
    flex-direction: column;
    background-color: #e1e78e;
    padding: 0.6rem;
    border-radius: 20px;
    z-index: 1;

    @media screen and (min-width: 600px) {
        padding: 2rem;
    }

    @media screen and (min-width: 1000px) {
        flex-direction: ${props => props.isReverse ? "row-reverse" : "row"};
        padding: 2rem 3rem;
        column-gap: 2rem;
    }
`

const ImageContainer = styled.div`
    align-self: center;
    width: 250px;
    height: 139px;
    border: 2px solid #555555;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 1rem;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }

    @media screen and (min-width: 600px) {
        width: 330px;
        height: 183px;
    }

    @media screen and (min-width: 1000px) {
        width: 400px;
        height: 222px;
        align-self: initial;
        flex-shrink: 0;
    }
`

const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    h3 {
        font-size: clamp(1.5rem, 1.4531rem + 0.2344vw, 1.7rem);
        margin-bottom: 10px;
    }

    p {
        font-size: 1rem;
        margin-bottom: 10px;
    }

    div {
        align-self: center;
        margin-top: 2rem;
    }

    @media screen and (min-width: 1000px) {
        text-align: initial;

        div {
            align-self: flex-end;
            margin-top: auto;
            margin-right: -1.5rem;
        }
    }
`

const StyledDetails = styled.details`
    align-self: center;

    summary {
        display: flex;
        align-items: center;
        list-style: none;

        h4 {
            font-weight: 700;
            font-size: 1.1rem;
        }

        .react-icons {
            color: #19740d;
            width: 32px;
            height: 32px;
            transition: transform .7s;
        }

        :hover {
            h4 { color: #49472a; }
            cursor: pointer;
        }
    }

    &[open] .react-icons { transform: rotateX(180deg); }

    ul {
        text-align: initial;
        margin-left: 1.3rem;
    }

    @media screen and (min-width: 1000px) {
        align-self: flex-start;
    }
`

const ProjectCard = ({ isReverse, project }: ProjectCardProps) => {
    const projectImagePath = "./src/assets/projectIcons/";

    return (
        <StyledCard isReverse={isReverse}>
            <ImageContainer tabIndex={0}>
                <img src={projectImagePath + project.image} alt={project.title} />
            </ImageContainer>
            <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <StyledDetails>
                    <summary>
                        <h4>Technologies used</h4>
                        <RiArrowDropDownLine />
                    </summary>
                    <ul>
                        {project.technologies.map((technology, index) => {
                            return (
                                <li key={index}>{technology}</li>
                            )
                        })}
                    </ul>
                </StyledDetails>
                <div>
                    <SocialsButton source={webIcon} alternative="live" link={project.liveLink} bgColor="#fdffda" />
                    <SocialsButton source={githubIcon} alternative="github" link={project.gitLink} bgColor="#fdffda" />
                </div>
            </ProjectContent>
        </StyledCard>
    );
};

export default ProjectCard;