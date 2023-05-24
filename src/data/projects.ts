export interface IProject {
  image: string;
  title: string;
  text: string;
  technologies: string[];
  liveLink: string;
  gitLink: string;
}

const projectList: IProject[] = [
  {
    image: "page.jpg",
    title: "Notes App",
    text: "Main focus of this app is to let users create notes. It is possible to create private notes, however, there is ability for group of people to create and track same notes (users can join groups where they can see content which was made there). Created notes can be sorted by creation/edited date or a set tag. Users are authentication using JWT. There is also ability to change style to dark/light mode.",
    technologies: [
      "TypeScript",
      "React",
      "Styled-Components",
      "React-Router",
      "Redux",
      "Vite",
      "ESLint",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    liveLink: "",
    gitLink: "https://github.com/ernestasdrun/notes-proj",
  },
  {
    image: "page.jpg",
    title: "Notes",
    text: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
    technologies: ["JavaScript"],
    liveLink: "",
    gitLink: "",
  },
  {
    image: "page.jpg",
    title: "Notes",
    text: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
    technologies: ["JavaScript"],
    liveLink: "",
    gitLink: "",
  },
  {
    image: "page.jpg",
    title: "Notes",
    text: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
    technologies: ["JavaScript"],
    liveLink: "",
    gitLink: "",
  },
];

export default projectList;
