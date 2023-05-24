import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IProject } from "../../data/projects";
import RoundedLinkButton from "../../components/buttons/RoundedLinkButton";
import githubIcon from "../../assets/icons/github.svg";
import webIcon from "../../assets/icons/website-click.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import useObserver from "../../hooks/useObserver";

interface ProjectCardProps {
  isReverse: boolean;
  project: IProject;
}

interface StyledCardProps {
  isReverse: boolean;
  isVisible: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  background-color: #c9e3fa;
  padding: 0.6rem;
  border-radius: 20px;
  z-index: 1;

  @media screen and (min-width: 600px) {
    padding: 2rem;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
    padding: 2rem 3rem;
    column-gap: 2rem;
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    opacity: ${(props) => (props.isVisible ? "1" : "0")};
    transition: opacity 1.5s ease;
  }

  @media screen and (min-width: 1000px) and (prefers-reduced-motion: no-preference) {
    opacity: ${(props) => (props.isVisible ? "1" : "0")};
    transform: ${(props) =>
      props.isVisible
        ? "translateX(0)"
        : props.isReverse
        ? "translateX(100%)"
        : "translateX(-100%)"};
    transition: transform 1.5s ease, opacity 2s ease;
  }
`;

const ImageContainer = styled.div`
  align-self: center;
  width: 250px;
  height: 139px;
  border: 3px solid #555555;
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
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h3 {
    font-size: clamp(1.5rem, 1.425rem + 0.375vw, 1.8rem);
    margin-bottom: 10px;
  }

  > p {
    font-size: clamp(1rem, 0.975rem + 0.125vw, 1.1rem);
    line-height: 1.4rem;
    margin-bottom: 10px;
    color: rgb(75, 75, 75);
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
`;

const StyledDetails = styled.details`
  align-self: center;

  summary {
    display: flex;
    align-items: center;
    list-style: none;

    h4 {
      font-weight: 700;
      font-size: clamp(1.1rem, 1.0625rem + 0.1875vw, 1.25rem);
    }

    .react-icons {
      color: #19740d;
      width: 32px;
      height: 32px;
      transition: transform 0.7s;
    }

    :hover {
      h4 {
        color: rgb(73, 71, 42);
      }
      cursor: pointer;
    }
  }

  &[open] .react-icons {
    transform: rotateX(180deg);
  }

  ul {
    list-style: none;
    text-align: initial;
    margin-left: 1.3rem;
    font-size: 1.05rem;
    line-height: 1.55rem;
    font-weight: 500;
    color: rgb(71, 71, 71);

    li {
      ::before {
        content: url("./src/assets/icons/tools.svg");
        display: inline-block;
        height: 11px;
        width: 11px;
        margin-inline: -15px 5px;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    align-self: flex-start;
  }
`;

const ProjectCard = ({ isReverse, project }: ProjectCardProps) => {
  const projectImagePath = "./src/assets/projectIcons/";

  const cardRef = useRef(null);
  const [cardRefState, setCardRefState] = useState(null);

  const isVisible = useObserver(cardRefState, {
    rootMargin: "10px",
  });

  useEffect(() => {
    setCardRefState(cardRef.current);
  }, [cardRef]);

  return (
    <StyledCard isReverse={isReverse} isVisible={isVisible} ref={cardRef}>
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
              return <li key={index}>{technology}</li>;
            })}
          </ul>
        </StyledDetails>
        <div>
          <RoundedLinkButton
            source={webIcon}
            alternative="live"
            link={project.liveLink}
            bgColor="#fdffda"
          />
          <RoundedLinkButton
            source={githubIcon}
            alternative="github"
            link={project.gitLink}
            bgColor="#fdffda"
          />
        </div>
      </ProjectContent>
    </StyledCard>
  );
};

export default ProjectCard;
