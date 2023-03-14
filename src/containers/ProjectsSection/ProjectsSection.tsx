import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 2rem 1rem 5rem 1rem;
    background-color: #eef3ab;
    box-shadow: 0 0 0 100vmax #eef3ab;
    clip-path: inset(0 -100vmax);

    h2 {
        margin-bottom: 1.5rem;
        text-align: center;
        font-size: clamp(1.7rem, 1.5313rem + 0.4688vw, 2.1rem);
    }

    @media screen and (min-width: 600px) {
        padding: 2rem 2rem 5rem 2rem;
        h2 { margin-bottom: 2.5rem; }
    }

    @media screen and (min-width: 1000px) {
        padding: 5rem 3rem 8rem 3rem;
        h2 { margin-bottom: 4rem; }
    }
`

const ProjectsSection = () => {
    return (
        <ProjectsContainer id="projects">
            <h2>Here are some of my most recent projects</h2>
            {projects.map((project, index) => {
                return (
                    <ProjectCard key={index} isReverse={Boolean(index % 2)} project={project} />
                )
            })}
        </ProjectsContainer>
    );
};

export default ProjectsSection;