export interface IProject {
    image: string,
    title: string,
    text: string,
    technologies: string[],
    liveLink: string,
    gitLink: string,
}

const projectList: IProject[] = [
    {
        image: "page.jpg",
        title: "Notes",
        text: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
        technologies: ["TypeScript", "React", "Styled-Components", "Node", "Express", "MongoDB"],
        liveLink: "",
        gitLink: "",
    },
    {
        image: "page.jpg",
        title: "Notes",
        text: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
        technologies: ["Vue", "JavaScript"],
        liveLink: "",
        gitLink: "",
    },
    {
        image: "page.jpg",
        title: "Notes",
        text: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
        technologies: ["Vue", "JavaScript"],
        liveLink: "",
        gitLink: "",
    },
    {
        image: "page.jpg",
        title: "Notes",
        text: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
        technologies: ["Vue", "JavaScript"],
        liveLink: "",
        gitLink: "",
    },
]

export default projectList;